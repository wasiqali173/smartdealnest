export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <p className="text-gray-700 mb-4">
          Have questions or suggestions? Reach out to us at:
        </p>

        
        <a 
          href="mailto:smartdealnest@gmail.com"
          className="text-blue-600 font-semibold mb-6 block text-lg hover:underline"
        >
          smartdealnest@gmail.com
        </a>

        <p className="text-gray-700 mt-4 border-t pt-6">
          We usually respond within 24 hours. Your feedback is very important to us.
        </p>
      </div>
    </main>
  );
}