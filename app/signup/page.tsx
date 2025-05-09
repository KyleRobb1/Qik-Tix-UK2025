"use client";
import React, { useState } from 'react';
import { useSupabase } from '../context/SupabaseContext';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const { supabase } = useSupabase();
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: { name: form.name },
      },
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess('Check your email to confirm your account!');
      setForm({ name: '', email: '', password: '' });
      setTimeout(() => router.push('/login'), 2000);
    }
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4">
      <h1 className="text-3xl font-extrabold mb-6 text-primary text-center">Sign Up</h1>
      <form className="space-y-5 bg-white rounded-xl shadow p-8 border border-gray-100" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Name</label>
          <input name="name" type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Email</label>
          <input name="email" type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="you@email.com" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Password</label>
          <input name="password" type="password" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Password" value={form.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors duration-200" disabled={loading}>
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
        {error && <p className="text-red-600 text-center mt-2">{error}</p>}
        {success && <p className="text-green-600 text-center mt-2">{success}</p>}
      </form>
      <p className="mt-6 text-center text-sm text-gray-600">Already have an account? <a href="/login" className="text-primary underline font-semibold">Log In</a></p>
    </div>
  );
};

export default SignupPage; 