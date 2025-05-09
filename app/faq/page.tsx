import React from 'react';

const FAQPage = () => (
  <div className="max-w-2xl mx-auto py-12 px-4 bg-white rounded-xl shadow border border-gray-100 mt-10">
    <h1 className="text-4xl font-extrabold mb-6 text-primary text-center">Frequently Asked Questions</h1>
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2 text-gray-800">How do I buy tickets?</h2>
      <p className="text-gray-700">Browse events, select the one you want, and follow the checkout process. You'll receive your tickets by email after purchase.</p>
    </div>
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2 text-gray-800">Can I get a refund?</h2>
      <p className="text-gray-700">Refunds are subject to the event organizer's policy. Please check the event details or contact support for more information.</p>
    </div>
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2 text-gray-800">How do I contact support?</h2>
      <p className="text-gray-700">You can reach us at <a href="mailto:support@qiktix.co.uk" className="text-primary underline">support@qiktix.co.uk</a> or use the contact form on our Contact page.</p>
    </div>
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2 text-gray-800">Are my payments secure?</h2>
      <p className="text-gray-700">Yes, all payments are processed securely through Stripe. We do not store your payment information.</p>
    </div>
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2 text-gray-800">Can I transfer my ticket?</h2>
      <p className="text-gray-700">Ticket transferability depends on the event organizer. Please check the event details for more information.</p>
    </div>
  </div>
);

export default FAQPage; 