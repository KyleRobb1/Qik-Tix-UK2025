import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaTicketAlt } from 'react-icons/fa';
import { useSupabase } from '../context/SupabaseContext';
import AuthModal from './AuthModal';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { session, supabase } = useSupabase();
  const [authOpen, setAuthOpen] = useState(false);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <nav className="bg-primary text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2 text-2xl font-display font-bold">
            <FaTicketAlt className="text-accent" />
            QikTix UK
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium hover:text-accent transition-colors duration-200 ${pathname === link.href ? 'text-accent' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {session ? (
              <button
                onClick={handleSignOut}
                className="bg-accent text-primary font-semibold px-4 py-2 rounded hover:bg-accent/80 transition-colors duration-200"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => setAuthOpen(true)}
                className="bg-accent text-primary font-semibold px-4 py-2 rounded hover:bg-accent/80 transition-colors duration-200"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
