import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 mt-8 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="font-display font-bold text-lg">QikTix UK</span> &copy; {new Date().getFullYear()} All rights reserved.
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="/privacy" className="hover:text-accent transition-colors duration-200">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-accent transition-colors duration-200">Terms of Service</Link>
          <Link href="/contact" className="hover:text-accent transition-colors duration-200">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
