import Link from "next/link";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/other/Asset-1@2x.png"
                  alt="Pioneer Engineering Services"
                  width={200}
                  height={42}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
              <Link href="/profile" className="text-gray-700 hover:text-blue-600 font-medium transition">Profile</Link>
              <Link href="/product-range" className="text-gray-700 hover:text-blue-600 font-medium transition">Product Gallery</Link>
              <Link href="/facilities" className="text-gray-700 hover:text-blue-600 font-medium transition">Facilities</Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition">Testimonials</Link>
              <Link href="/certification" className="text-gray-700 hover:text-blue-600 font-medium transition">Certification</Link>
              <Link href="/events-media" className="text-gray-700 hover:text-blue-600 font-medium transition">Events & Media</Link>
              <Link href="/contact-us" className="text-blue-600 font-medium transition border-b-2 border-blue-600 pb-1">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Contact Us</h1>
          
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <strong className="text-gray-900">Address:</strong>
                <p className="mt-1">G.I.D.C. Odhav area of Ahmedabad, Gujarat (India)</p>
              </div>
              <div>
                <strong className="text-gray-900">Email:</strong>
                <p className="mt-1">info@pesindia.com</p>
              </div>
              <div>
                <strong className="text-gray-900">Website:</strong>
                <p className="mt-1">www.pesindia.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">Mobile No.</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Mobile No."
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Organization"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Pioneer Engineering Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

