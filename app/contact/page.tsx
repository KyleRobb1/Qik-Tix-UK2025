import React from 'react';

const ContactPage = () => (
  <div className="max-w-2xl mx-auto py-10 px-4">
    <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
    <p className="mb-6">Have a question or need support? Fill out the form below or reach us directly at <a href="mailto:support@qiktix.co.uk" className="text-primary underline">support@qiktix.co.uk</a>.</p>
    <form className="space-y-4">
      <div>
        <label className="block mb-1 font-semibold">Name</label>
        <input type="text" className="w-full border rounded px-3 py-2" placeholder="Your Name" required />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Email</label>
        <input type="email" className="w-full border rounded px-3 py-2" placeholder="you@email.com" required />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Message</label>
        <textarea className="w-full border rounded px-3 py-2" rows={5} placeholder="How can we help?" required></textarea>
      </div>
      <button type="submit" className="bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-primary-700 transition-colors duration-200">Send Message</button>
    </form>
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Company Details</h2>
      <p>QikTix UK Ltd.<br />123 Event Lane<br />Edinburgh, EH1 2AB<br />United Kingdom</p>
      <p className="mt-2">Email: <a href="mailto:support@qiktix.co.uk" className="text-primary underline">support@qiktix.co.uk</a></p>
    </div>
  </div>
);

export default ContactPage; 