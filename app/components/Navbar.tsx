"use client";
import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm py-2 px-4 flex items-center justify-between font-sans">
    <div className="flex items-center gap-6">
      <Link href="/" className="flex items-center gap-2 text-primary font-extrabold text-2xl tracking-tight">
        <span className="inline-block w-8 h-8 bg-primary rounded-full mr-2"></span>
        QikTix UK
      </Link>
      <Link href="/events" className="text-gray-700 hover:text-primary font-semibold transition-colors duration-200">Find Events</Link>
      <Link href="/create" className="text-gray-700 hover:text-primary font-semibold transition-colors duration-200">Create Event</Link>
    </div>
    <form className="hidden md:flex items-center bg-gray-100 rounded-lg px-2 py-1">
      <input
        type="text"
        placeholder="Search events"
        className="bg-transparent px-2 py-1 focus:outline-none text-sm"
      />
      <button type="submit" className="text-primary font-bold px-2">Search</button>
    </form>
    <div className="flex items-center gap-4">
      <Link href="/login" className="text-gray-700 hover:text-primary font-semibold transition-colors duration-200">Log In</Link>
      <Link href="/signup" className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">Sign Up</Link>
    </div>
  </nav>
);

export default Navbar;
