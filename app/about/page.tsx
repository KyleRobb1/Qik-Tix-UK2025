import React from 'react';

const AboutPage = () => (
  <div className="max-w-2xl mx-auto py-12 px-4 bg-white rounded-xl shadow border border-gray-100 mt-10">
    <h1 className="text-4xl font-extrabold mb-6 text-primary text-center">About QikTix UK</h1>
    <p className="mb-4 text-lg text-gray-700 text-center">QikTix UK is your go-to platform for discovering and booking tickets to the best events across the United Kingdom. From concerts and festivals to workshops and community gatherings, we make event discovery and ticketing seamless and secure.</p>
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Our Mission</h2>
    <p className="mb-4 text-gray-700">Our mission is to connect people with unforgettable experiences by making event ticketing easy, transparent, and accessible for everyone.</p>
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Meet the Team</h2>
    <ul className="list-disc pl-6 text-gray-700">
      <li>Kyle Robb – Founder & CEO</li>
      <li>Jane Doe – Head of Operations</li>
      <li>John Smith – Lead Developer</li>
      <li>Sarah Lee – Customer Success</li>
    </ul>
  </div>
);

export default AboutPage; 