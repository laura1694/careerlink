export default function Contact() {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-5">

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-10">

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Have questions? We'd love to hear from you.
        </p>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-500 transition">
            Send Message
          </button>

        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center text-gray-600">
          <p>Email: support@careerlink.com</p>
          <p>Location: Abuja, Nigeria</p>
        </div>

      </div>

    </main>
  );
}