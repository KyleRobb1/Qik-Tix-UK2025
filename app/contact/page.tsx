import React from 'react';

const ContactPage = () => (
  <div className="max-w-2xl mx-auto py-12 px-4 bg-white rounded-xl shadow border border-gray-100 mt-10">
    <h1 className="text-4xl font-extrabold mb-6 text-primary text-center">Contact Us</h1>
    <p className="mb-6 text-gray-700 text-center">Have a question or need support? Fill out the form below or reach us directly at <a href="mailto:support@qiktix.co.uk" className="text-primary underline">support@qiktix.co.uk</a>.</p>
    <form className="space-y-4">
      <div>
        <label className="block mb-1 font-semibold text-gray-700">Name</label>
        <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Your Name" required />
      </div>
      <div>
        <label className="block mb-1 font-semibold text-gray-700">Email</label>
        <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="you@email.com" required />
      </div>
      <div>
        <label className="block mb-1 font-semibold text-gray-700">Message</label>
        <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none" rows={5} placeholder="How can we help?" required></textarea>
      </div>
      <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors duration-200">Send Message</button>
    </form>
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-2 text-gray-800">Company Details</h2>
      <p className="text-gray-700">QikTix UK Ltd.<br />123 Event Lane<br />Edinburgh, EH1 2AB<br />United Kingdom</p>
      <p className="mt-2 text-gray-700">Email: <a href="mailto:support@qiktix.co.uk" className="text-primary underline">support@qiktix.co.uk</a></p>
    </div>
  </div>
);

export default ContactPage; 