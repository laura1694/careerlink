export default function About() {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-5">

      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-10">

        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About CareerLink
        </h1>

        <p className="text-gray-600 mb-6 text-lg text-center">
          CareerLink is a platform built to help professionals connect, grow, and unlock new opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-10 items-center">

          <img 
            src="/bg.jpg" 
            alt="about"
            className="rounded-lg shadow-md"
          />

          <div className="space-y-4 text-gray-600">
            <p>
              We believe that the right connection can change your life. Our platform helps you build your professional identity and connect with like-minded individuals.
            </p>

            <p>
              Whether you're searching for jobs, networking, or showcasing your skills, CareerLink gives you the tools to succeed.
            </p>

            <p>
              Join thousands of professionals and start building your future today.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}