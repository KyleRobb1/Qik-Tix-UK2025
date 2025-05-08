"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSupabase } from '../../context/SupabaseContext';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  price: number;
  description: string;
  image_url?: string;
}

const EventDetailPage: React.FC = () => {
  const { supabase, session } = useSupabase();
  const params = useParams();
  const router = useRouter();
  const eventId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState<'idle' | 'loading' | 'success' | 'error' | 'redirecting'>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!eventId) return;
    const fetchEvent = async () => {
      const { data, error } = await supabase.from('events').select('*').eq('id', eventId).single();
      if (!error && data) setEvent(data);
      setLoading(false);
    };
    fetchEvent();
  }, [supabase, eventId]);

  const handleBook = async () => {
    setError(null);
    if (!session) {
      setError('You must be signed in to book a ticket.');
      return;
    }
    if (!event) return;
    setBooking('loading');
    if (event.price === 0) {
      // Free event: book directly in Supabase
      const { error } = await supabase.from('tickets').insert({
        event_id: event.id,
        user_id: session.user.id,
      });
      if (error) {
        setBooking('error');
        setError('Could not book ticket. Please try again.');
      } else {
        setBooking('success');
      }
    } else {
      // Paid event: create Stripe Checkout session
      setBooking('redirecting');
      try {
        const res = await fetch('/api/stripe/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ eventId: event.id, userId: session.user.id }),
        });
        const data = await res.json();
        if (data.url) {
          window.location.href = data.url;
        } else {
          setBooking('error');
          setError('Could not start payment. Please try again.');
        }
      } catch (err) {
        setBooking('error');
        setError('Could not start payment. Please try again.');
      }
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading event...</div>;
  }

  if (!event) {
    return <div className="flex justify-center items-center h-64">Event not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 mb-6 border border-gray-100">
        {event.image_url && (
          <img src={event.image_url} alt={event.title} className="w-full h-64 object-cover rounded-xl mb-6" />
        )}
        <h1 className="text-3xl font-bold mb-2 text-primary">{event.title}</h1>
        <p className="text-gray-500 mb-1 text-sm">{new Date(event.date).toLocaleDateString()} &bull; {event.location}</p>
        <p className="text-primary font-bold mb-4 text-lg">{event.price === 0 ? 'Free' : `£${event.price.toFixed(2)}`}</p>
        <p className="mb-6 text-gray-700">{event.description}</p>
        {error && <div className="text-red-600 mb-4 font-semibold">{error}</div>}
        {booking === 'success' ? (
          <div className="text-green-600 font-semibold mb-4">Ticket booked! Check your dashboard.</div>
        ) : (
          <button
            className="bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 text-lg shadow-md disabled:opacity-60"
            onClick={handleBook}
            disabled={booking === 'loading' || booking === 'redirecting'}
          >
            {booking === 'loading' ? 'Booking...' : booking === 'redirecting' ? 'Redirecting...' : 'Book Ticket'}
          </button>
        )}
      </div>
    </div>
  );
};

export default EventDetailPage; 