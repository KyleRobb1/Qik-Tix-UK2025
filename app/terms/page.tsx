import React from 'react';

const TermsPage = () => (
  <div className="max-w-2xl mx-auto py-12 px-4 bg-white rounded-xl shadow border border-gray-100 mt-10">
    <h1 className="text-4xl font-extrabold mb-6 text-primary text-center">Terms of Service</h1>
    <p className="mb-4 text-gray-700 text-center">Welcome to QikTix UK. By using our platform, you agree to the following terms and conditions. Please read them carefully before purchasing tickets or using our services.</p>
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">User Responsibilities</h2>
    <ul className="list-disc pl-6 mb-4 text-gray-700">
      <li>Provide accurate and up-to-date information during registration and ticket purchase</li>
      <li>Comply with all event rules and regulations</li>
      <li>Do not misuse the platform or engage in fraudulent activities</li>
    </ul>
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Ticket Purchases</h2>
    <ul className="list-disc pl-6 mb-4 text-gray-700">
      <li>All sales are final unless otherwise stated</li>
      <li>Tickets are non-transferable unless specified by the event organizer</li>
      <li>QikTix UK is not responsible for event cancellations or changes</li>
    </ul>
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Contact</h2>
    <p className="text-gray-700">If you have any questions about these terms, please contact us at <a href="mailto:support@qiktix.co.uk" className="text-primary underline">support@qiktix.co.uk</a>.</p>
  </div>
);

export default TermsPage; 