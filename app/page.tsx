import React from 'react';
import Link from 'next/link';

const featuredEvents = [
  {
    id: '1',
    title: 'Edinburgh Music Festival',
    date: '2025-07-15',
    location: 'Edinburgh, Scotland',
    image_url: 'https://images.unsplash.com/photo-1528219089976-98405f05d861?auto=format&fit=crop&w=600&q=80',
    price: 0,
  },
  {
    id: '2',
    title: 'Tech Innovators Conference',
    date: '2025-08-10',
    location: 'Glasgow, Scotland',
    image_url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    price: 49.99,
  },
  {
    id: '3',
    title: 'Art & Culture Expo',
    date: '2025-09-05',
    location: 'Aberdeen, Scotland',
    image_url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    price: 15.0,
  },
];

const categories = [
  { name: 'Music', icon: '🎵' },
  { name: 'Business', icon: '💼' },
  { name: 'Arts', icon: '🎨' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Food & Drink', icon: '🍔' },
  { name: 'Community', icon: '🤝' },
];

const HomePage = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-primary to-accent text-white py-20 px-4 text-center">
      <h1 className="text-5xl font-extrabold mb-4">Discover Events Across the UK</h1>
      <p className="text-xl mb-8">Find concerts, festivals, workshops, and more. Book your next experience with QikTix UK.</p>
      <form className="max-w-xl mx-auto flex bg-white rounded-lg overflow-hidden shadow-lg">
        <input
          type="text"
          placeholder="Search for events, locations, or categories..."
          className="flex-grow px-4 py-3 text-gray-700 focus:outline-none"
        />
        <button type="submit" className="bg-primary text-white px-6 py-3 font-semibold hover:bg-primary-700 transition-colors duration-200">
          Search
        </button>
      </form>
    </section>

    {/* Categories */}
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
        {categories.map((cat) => (
          <div key={cat.name} className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:bg-accent hover:text-white transition-colors duration-200 cursor-pointer">
            <span className="text-3xl mb-2">{cat.icon}</span>
            <span className="font-semibold">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Featured Events */}
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredEvents.map(event => (
          <Link key={event.id} href={`/events/${event.id}`} className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 overflow-hidden group border border-gray-100">
            <img src={event.image_url} alt={event.title} className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-200" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200">{event.title}</h3>
              <p className="text-gray-500 mb-1 text-sm">{new Date(event.date).toLocaleDateString()}</p>
              <p className="text-gray-500 mb-1 text-sm">{event.location}</p>
              <p className="text-primary font-bold text-lg">{event.price === 0 ? 'Free' : `£${event.price.toFixed(2)}`}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/events" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200">View All Events</Link>
      </div>
    </section>
  </div>
);

export default HomePage; 