-- Create extension for UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum for user roles
CREATE TYPE user_role AS ENUM ('admin', 'organizer', 'attendee');

-- Create enum for event status
CREATE TYPE event_status AS ENUM ('draft', 'published', 'cancelled');

-- Create enum for ticket types
CREATE TYPE ticket_type AS ENUM ('free', 'paid');

-- Create enum for transaction status
CREATE TYPE transaction_status AS ENUM ('pending', 'completed', 'failed', 'refunded');

-- User profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  role user_role DEFAULT 'attendee'::user_role,
  stripe_customer_id TEXT,
  stripe_account_id TEXT,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  CONSTRAINT username_length CHECK (char_length(full_name) >= 3)
);

-- Event categories
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Events table
CREATE TABLE IF NOT EXISTS public.events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  image_url TEXT,
  location TEXT NOT NULL,
  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE NOT NULL,
  status event_status DEFAULT 'draft'::event_status,
  organizer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  category_id UUID REFERENCES public.categories(id),
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Tickets table
CREATE TABLE IF NOT EXISTS public.tickets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
  ticket_type ticket_type DEFAULT 'free'::ticket_type,
  quantity INTEGER NOT NULL,
  available_from TIMESTAMP WITH TIME ZONE DEFAULT now(),
  available_until TIMESTAMP WITH TIME ZONE,
  stripe_price_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Orders table
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  total_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
  status transaction_status DEFAULT 'pending'::transaction_status,
  checkout_session_id TEXT UNIQUE,
  payment_intent_id TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Order Items table
CREATE TABLE IF NOT EXISTS public.order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  ticket_id UUID NOT NULL REFERENCES public.tickets(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL,
  price_per_ticket DECIMAL(10, 2) NOT NULL,
  ticket_code TEXT UNIQUE DEFAULT uuid_generate_v4(),
  is_used BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Event tags
CREATE TABLE IF NOT EXISTS public.tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Event tag relationships
CREATE TABLE IF NOT EXISTS public.event_tags (
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES public.tags(id) ON DELETE CASCADE,
  PRIMARY KEY (event_id, tag_id)
);

-- RLS Policies

-- Profiles table policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone" 
ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Events table policies
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published events are viewable by everyone" 
ON public.events FOR SELECT USING (status = 'published');

CREATE POLICY "Organizers can view their own events regardless of status" 
ON public.events FOR SELECT USING (auth.uid() = organizer_id);

CREATE POLICY "Organizers can insert their own events" 
ON public.events FOR INSERT WITH CHECK (auth.uid() = organizer_id);

CREATE POLICY "Organizers can update their own events" 
ON public.events FOR UPDATE USING (auth.uid() = organizer_id);

CREATE POLICY "Organizers can delete their own events" 
ON public.events FOR DELETE USING (auth.uid() = organizer_id);

-- Tickets table policies
ALTER TABLE public.tickets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tickets of published events are viewable by everyone" 
ON public.tickets FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.events 
    WHERE events.id = tickets.event_id 
    AND (events.status = 'published' OR events.organizer_id = auth.uid())
  )
);

CREATE POLICY "Organizers can insert tickets for their events" 
ON public.tickets FOR INSERT WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.events 
    WHERE events.id = tickets.event_id 
    AND events.organizer_id = auth.uid()
  )
);

CREATE POLICY "Organizers can update tickets for their events" 
ON public.tickets FOR UPDATE USING (
  EXISTS (
    SELECT 1 FROM public.events 
    WHERE events.id = tickets.event_id 
    AND events.organizer_id = auth.uid()
  )
);

CREATE POLICY "Organizers can delete tickets for their events" 
ON public.tickets FOR DELETE USING (
  EXISTS (
    SELECT 1 FROM public.events 
    WHERE events.id = tickets.event_id 
    AND events.organizer_id = auth.uid()
  )
);

-- Orders table policies
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own orders" 
ON public.orders FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Organizers can view orders for their events" 
ON public.orders FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.events 
    WHERE events.id = orders.event_id 
    AND events.organizer_id = auth.uid()
  )
);

CREATE POLICY "Users can create orders" 
ON public.orders FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Order Items table policies
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own order items" 
ON public.order_items FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.orders 
    WHERE orders.id = order_items.order_id 
    AND orders.user_id = auth.uid()
  )
);

CREATE POLICY "Organizers can view order items for their events" 
ON public.order_items FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.orders 
    JOIN public.events ON orders.event_id = events.id
    WHERE orders.id = order_items.order_id 
    AND events.organizer_id = auth.uid()
  )
);

-- Seed some initial categories
INSERT INTO public.categories (name, slug) VALUES
('Music', 'music'),
('Arts & Theatre', 'arts-theatre'),
('Sports', 'sports'),
('Food & Drink', 'food-drink'),
('Business', 'business'),
('Community', 'community'),
('Charity & Causes', 'charity-causes'),
('Other', 'other');

-- Seed some initial tags
INSERT INTO public.tags (name) VALUES
('Free'),
('Family-friendly'),
('Outdoor'),
('Indoor'),
('Weekend'),
('Evening'),
('Live Music'),
('Workshop'),
('Exhibition'),
('Festival'),
('Scottish Culture');

-- Create function for handling user signups
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url, email, role)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url', new.email, 'attendee');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger the function on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user(); 