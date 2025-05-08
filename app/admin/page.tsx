"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabase } from '../context/SupabaseContext';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  price: number;
  description: string;
  image_url?: string;
}

const AdminPage = () => {
  const { supabase } = useSupabase();
  const [events, setEvents] = useState<Event[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Example: fetch events for admin
    const fetchEvents = async () => {
      const { data, error } = await supabase.from("events").select("*");
      if (!error) setEvents(data);
    };
    fetchEvents();
  }, [supabase]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <ul>
        {events.map((event: any) => (
          <li key={event.id} className="mb-2">
            <span className="font-semibold">{event.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage; 