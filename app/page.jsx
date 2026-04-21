import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-50">

      {/* 🔥 HERO SECTION */}
      <section className="min-h-screen bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="min-h-screen bg-black/60 flex items-center justify-center">
          <div className="lg:w-1/2 text-white flex flex-col gap-10 items-center p-3 text-center">

            <h1 className="md:text-6xl text-4xl font-black">
              Grow Your Career, Build Connections,{" "}
              <span className="text-blue-600 italic">Unlock Opportunities</span>.
            </h1>

            <p className="text-lg font-light">
              <span className="text-blue-500 font-semibold">CareerLink</span> is where ambitious professionals come together to network, showcase their skills, and discover opportunities that accelerate their careers.
            </p>

            <div className="flex gap-5 max-md:flex-col w-full justify-center">
              <Link href="#" className="bg-blue-600 px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition w-full text-center">
                Build Your Profile
              </Link>

              <Link href="#" className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-blue-600 hover:text-white transition w-full text-center">
                Connect with Professionals
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 🚀 FEATURES SECTION */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose CareerLink?</h2>
          <p className="text-gray-600 mb-12">Everything you need to grow your professional life in one place.</p>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Build Your Brand</h3>
              <p className="text-gray-600">Create a powerful professional identity that attracts opportunities.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Connect Easily</h3>
              <p className="text-gray-600">Network with professionals across industries worldwide.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Discover Jobs</h3>
              <p className="text-gray-600">Find opportunities tailored to your skills and interests.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 📊 HOW IT WORKS */}
      <section className="bg-gray-100 py-20 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <div className="text-3xl font-bold text-blue-600 mb-3">1</div>
              <h3 className="text-xl font-semibold">Create Profile</h3>
              <p className="text-gray-600">Sign up and build your professional profile.</p>
            </div>

            <div>
              <div className="text-3xl font-bold text-blue-600 mb-3">2</div>
              <h3 className="text-xl font-semibold">Connect</h3>
              <p className="text-gray-600">Follow and connect with professionals.</p>
            </div>

            <div>
              <div className="text-3xl font-bold text-blue-600 mb-3">3</div>
              <h3 className="text-xl font-semibold">Grow</h3>
              <p className="text-gray-600">Unlock opportunities and grow your career.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 💬 TESTIMONIALS */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">What People Say</h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">
                "CareerLink helped me land my dream job in just 2 months!"
              </p>
              <h4 className="font-semibold">— Sarah K.</h4>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">
                "Amazing platform to connect with professionals globally."
              </p>
              <h4 className="font-semibold">— David M.</h4>
            </div>

          </div>
        </div>
      </section>

      {/* 🧑‍💼 ABOUT US */}
<section className="py-20 px-5 bg-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* Image */}
    <div>
      <img 
        src="/bg.jpg" 
        alt="About CareerLink"
        className="rounded-lg shadow-md"
      />
    </div>

    {/* Text */}
    <div>
      <h2 className="text-4xl font-bold mb-5 text-gray-800">
        About CareerLink
      </h2>

      <p className="text-gray-600 mb-4">
        CareerLink is a modern platform designed to connect professionals, 
        empower talent, and unlock new opportunities. We believe that the 
        right connection can change your career path forever.
      </p>

      <p className="text-gray-600 mb-6">
        Whether you're looking to build your personal brand, discover job 
        opportunities, or expand your network, CareerLink provides the tools 
        and community to help you succeed.
      </p>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500 transition">
        Learn More
      </button>
    </div>

  </div>
</section>

      {/* 🎯 CALL TO ACTION */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Career?</h2>
        <p className="mb-6">Join thousands of professionals today.</p>

        <Link href="#" className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-200 transition">
          Get Started
        </Link>
      </section>

    </main>
  );
}