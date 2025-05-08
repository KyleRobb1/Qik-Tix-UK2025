"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaTicketAlt } from 'react-icons/fa';
import { useSupabase } from '../context/SupabaseContext';

const Navbar = () => {
  const pathname = usePathname();
  const { session } = useSupabase();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2 font-bold text-lg">
        <FaTicketAlt />
        QikTix UK
      </Link>
      <div className="flex gap-4">
        <Link href="/events" className={pathname === "/events" ? "underline" : ""}>
          Events
        </Link>
        {session ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/admin">Admin</Link>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
