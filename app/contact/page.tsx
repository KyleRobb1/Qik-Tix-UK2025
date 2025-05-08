export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-primary">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Have questions, feedback, or need support? Reach out to the QikTix UK team!
      </p>
      <ul className="text-gray-600 mb-4">
        <li>Email: <a href="mailto:support@qiktix.uk" className="text-primary underline">support@qiktix.uk</a></li>
        <li>Twitter: <a href="https://twitter.com/qiktixuk" className="text-primary underline">@qiktixuk</a></li>
      </ul>
      <p className="text-gray-500">We aim to respond to all inquiries within 24 hours.</p>
    </main>
  );
} 