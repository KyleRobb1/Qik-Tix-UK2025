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

const AdminPage: React.FC = () => {
  const { supabase, session, loading } = useSupabase();
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);
  const [form, setForm] = useState({
    title: '',
    date: '',
    location: '',
    price: '',
    description: '',
    image_url: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !session) {
      router.push('/');
    }
    if (session) {
      fetchEvents();
    }
    // eslint-disable-next-line
  }, [loading, session]);

  const fetchEvents = async () => {
    const { data, error } = await supabase.from('events').select('*').order('date', { ascending: true });
    if (!error && data) setEvents(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const { title, date, location, price, description, image_url } = form;
    if (!title || !date || !location || !price || !description) {
      setError('All fields except image are required.');
      setSubmitting(false);
      return;
    }
    const { error } = await supabase.from('events').insert({
      title,
      date,
      location,
      price: parseFloat(price),
      description,
      image_url: image_url || null,
    });
    if (error) {
      setError('Could not create event.');
    } else {
      setForm({ title: '', date: '', location: '', price: '', description: '', image_url: '' });
      fetchEvents();
    }
    setSubmitting(false);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Create New Event</h2>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="p-2 border rounded" />
          <input name="date" value={form.date} onChange={handleChange} placeholder="Date (YYYY-MM-DD)" className="p-2 border rounded" />
          <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="p-2 border rounded" />
          <input name="price" value={form.price} onChange={handleChange} placeholder="Price (0 for free)" className="p-2 border rounded" type="number" min="0" step="0.01" />
          <input name="image_url" value={form.image_url} onChange={handleChange} placeholder="Image URL (optional)" className="p-2 border rounded md:col-span-2" />
        </div>
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="p-2 border rounded w-full mb-4" rows={3} />
        <button type="submit" className="bg-primary text-white font-semibold px-6 py-2 rounded hover:bg-primary-700 transition-colors duration-200" disabled={submitting}>
          {submitting ? 'Creating...' : 'Create Event'}
        </button>
      </form>
      <h2 className="text-xl font-semibold mb-4">Existing Events</h2>
      <div className="grid grid-cols-1 gap-4">
        {events.map(event => (
          <div key={event.id} className="bg-gray-100 p-4 rounded shadow flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-bold text-lg">{event.title}</div>
              <div className="text-gray-600">{event.date} &bull; {event.location}</div>
              <div className="text-primary font-bold">{event.price === 0 ? 'Free' : `£${event.price.toFixed(2)}`}</div>
            </div>
            <div className="mt-2 md:mt-0">
              <a href={`/events/${event.id}`} className="text-secondary hover:underline">View</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage; 