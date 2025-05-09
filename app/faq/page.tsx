import React from 'react';

const FAQPage = () => (
  <div className="max-w-3xl mx-auto py-10 px-4">
    <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">How do I buy tickets?</h2>
      <p>Browse events, select the one you want, and follow the checkout process. You'll receive your tickets by email after purchase.</p>
    </div>
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Can I get a refund?</h2>
      <p>Refunds are subject to the event organizer's policy. Please check the event details or contact support for more information.</p>
    </div>
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">How do I contact support?</h2>
      <p>You can reach us at <a href="mailto:support@qiktix.co.uk" className="text-primary underline">support@qiktix.co.uk</a> or use the contact form on our Contact page.</p>
    </div>
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Are my payments secure?</h2>
      <p>Yes, all payments are processed securely through Stripe. We do not store your payment information.</p>
    </div>
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Can I transfer my ticket?</h2>
      <p>Ticket transferability depends on the event organizer. Please check the event details for more information.</p>
    </div>
  </div>
);

export default FAQPage; 