"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSupabase } from '../context/SupabaseContext';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  price: number;
  image_url?: string;
}

const EventsPage: React.FC = () => {
  const { supabase } = useSupabase();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from('events').select('*');
      if (!error && data) setEvents(data);
      setLoading(false);
    };
    fetchEvents();
  }, [supabase]);

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading events...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map(event => (
          <Link key={event.id} href={`/events/${event.id}`} className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 overflow-hidden group border border-gray-100">
            {event.image_url && (
              <img src={event.image_url} alt={event.title} className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-200" />
            )}
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200">{event.title}</h2>
              <p className="text-gray-500 mb-1 text-sm">{new Date(event.date).toLocaleDateString()}</p>
              <p className="text-gray-500 mb-1 text-sm">{event.location}</p>
              <p className="text-primary font-bold text-lg">{event.price === 0 ? 'Free' : `£${event.price.toFixed(2)}`}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage; 