"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabase } from '../context/SupabaseContext';

interface Ticket {
  id: string;
  event_id: string;
  user_id: string;
  event: {
    title: string;
    date: string;
    location: string;
    price: number;
    image_url?: string;
  };
}

const DashboardPage: React.FC = () => {
  const { session, supabase } = useSupabase();
  const router = useRouter();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!session) {
      router.push('/');
    } else {
      fetchTickets();
    }
    // eslint-disable-next-line
  }, [session]);

  const fetchTickets = async () => {
    if (!session) return;
    setFetching(true);
    const { data, error } = await supabase
      .from('tickets')
      .select('id, event_id, user_id, event:events(id, title, date, location, price, image_url)')
      .eq('user_id', session.user.id)
      .order('id', { ascending: false });
    if (!error && data) {
      setTickets(
        data.map((ticket: any) => ({
          ...ticket,
          event: Array.isArray(ticket.event) ? ticket.event[0] : ticket.event,
        }))
      );
    }
    setFetching(false);
  };

  if (fetching) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to your Dashboard</h1>
      <div className="mb-6">
        <p><span className="font-semibold">Email:</span> {session.user.email}</p>
        {/* Add more user info here if needed */}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Your Tickets</h2>
        {tickets.length === 0 ? (
          <div className="bg-gray-100 p-4 rounded shadow">
            <p>No tickets booked yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {tickets.map(ticket => (
              <div key={ticket.id} className="bg-white rounded shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="font-bold text-lg">{ticket.event.title}</div>
                  <div className="text-gray-600">{new Date(ticket.event.date).toLocaleDateString()} &bull; {ticket.event.location}</div>
                  <div className="text-primary font-bold">{ticket.event.price === 0 ? 'Free' : `£${ticket.event.price.toFixed(2)}`}</div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-500 mt-2">Ticket ID: {ticket.id}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage; 