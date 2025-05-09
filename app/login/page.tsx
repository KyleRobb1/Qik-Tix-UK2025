import React from 'react';

const LoginPage = () => (
  <div className="max-w-md mx-auto py-10 px-4">
    <h1 className="text-3xl font-bold mb-6">Login</h1>
    <form className="space-y-4">
      <div>
        <label className="block mb-1 font-semibold">Email</label>
        <input type="email" className="w-full border rounded px-3 py-2" placeholder="you@email.com" required />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Password</label>
        <input type="password" className="w-full border rounded px-3 py-2" placeholder="Password" required />
      </div>
      <button type="submit" className="bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-primary-700 transition-colors duration-200">Login</button>
    </form>
    <p className="mt-4 text-sm">Don't have an account? <a href="/register" className="text-primary underline">Register here</a>.</p>
  </div>
);

export default LoginPage; 