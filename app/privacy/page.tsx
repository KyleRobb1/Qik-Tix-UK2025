import React from 'react';

const PrivacyPage = () => (
  <div className="max-w-2xl mx-auto py-12 px-4 bg-white rounded-xl shadow border border-gray-100 mt-10">
    <h1 className="text-4xl font-extrabold mb-6 text-primary text-center">Privacy Policy</h1>
    <p className="mb-4 text-gray-700 text-center">Your privacy is important to us. This Privacy Policy explains how QikTix UK collects, uses, and protects your information when you use our platform. We are committed to safeguarding your data and ensuring transparency in our practices.</p>
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Information We Collect</h2>
    <ul className="list-disc pl-6 mb-4 text-gray-700">
      <li>Personal information (name, email, etc.) provided during registration or ticket purchase</li>
      <li>Event preferences and purchase history</li>
      <li>Usage data and cookies</li>
    </ul>
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">How We Use Your Information</h2>
    <ul className="list-disc pl-6 mb-4 text-gray-700">
      <li>To process ticket purchases and manage your account</li>
      <li>To communicate important updates and event information</li>
      <li>To improve our services and personalize your experience</li>
    </ul>
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Contact</h2>
    <p className="text-gray-700">If you have any questions about our privacy practices, please contact us at <a href="mailto:support@qiktix.co.uk" className="text-primary underline">support@qiktix.co.uk</a>.</p>
  </div>
);

export default PrivacyPage; 