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
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-primary">Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map(event => (
          <Link key={event.id} href={`/events/${event.id}`} className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 overflow-hidden group border border-gray-100 hover:border-primary">
            {event.image_url && (
              <img src={event.image_url} alt={event.title} className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-200" />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">{event.title}</h2>
              <p className="text-gray-500 mb-1 text-sm">{new Date(event.date).toLocaleDateString()}</p>
              <p className="text-gray-500 mb-1 text-sm">{event.location}</p>
              <p className="text-primary font-bold text-lg mt-2">
                {typeof event.price === 'number' ? (event.price === 0 ? 'Free' : `£${event.price.toFixed(2)}`) : (event.price == null ? 'Free' : 'N/A')}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {events.length === 0 && (
        <div className="text-center text-gray-500 text-lg mt-16">No events found.</div>
      )}
    </div>
  );
};

export default EventsPage; 