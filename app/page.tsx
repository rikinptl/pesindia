import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation - Exact menu from original site */}
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
              <Link href="/contact-us" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - EXACT content from XML */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/banners/banner3.jpg"
            alt="PES Manufacturing"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to Pioneer Engineering Services
            </h1>
            <div className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              <p className="mb-4">
                <strong>Single piece casting up to 2000kg. Alloy Steel & Iron Casting.</strong>
              </p>
              <p className="mb-6">
                <strong>Pioneer Engineering Services</strong>, a certified ISO 9001 company, specializes in the design, development, manufacture, installation and servicing of high chromium wear, corrosion and abrasion resistant castings used in the cement, mining, pump industries and thermal power generation industries.
              </p>
              <p className="mb-4">
                Our philosophy is to provide customers with optimized solutions through technical evaluation of their requirements, thereby providing specifically designed solutions in ideal metallurgy for the application, plus offering process optimization services worldwide.
              </p>
              <p className="text-lg font-semibold">
                As a result of this approach, the Group is today the leading company for Quality, Services and Innovation in its field with an enviable reputation providing Global Solutions.
              </p>
              <p className="text-xl font-bold mt-6">
                A truly global solution to your local requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <Link href="/profile" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Company Profile</h3>
              <p className="text-gray-600">Learn about our capabilities</p>
            </Link>
            <Link href="/product-range" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Product Gallery</h3>
              <p className="text-gray-600">Browse our product range</p>
            </Link>
            <Link href="/facilities" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Facilities</h3>
              <p className="text-gray-600">Our manufacturing facilities</p>
            </Link>
            <Link href="/contact-us" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600">Get in touch with us</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Exact footer from original */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Pioneer Engineering Services</h3>
              <p className="text-gray-400 text-sm">
                Single piece casting up to 2000kg. Alloy Steel & Iron Casting
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/profile" className="hover:text-white transition">Profile</Link></li>
                <li><Link href="/product-range" className="hover:text-white transition">Product Gallery</Link></li>
                <li><Link href="/facilities" className="hover:text-white transition">Facilities</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">More Info</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/testimonials" className="hover:text-white transition">Testimonials</Link></li>
                <li><Link href="/certification" className="hover:text-white transition">Certification</Link></li>
                <li><Link href="/events-media" className="hover:text-white transition">Events & Media</Link></li>
                <li><Link href="/contact-us" className="hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>G.I.D.C. Odhav, Ahmedabad</li>
                <li>Gujarat, India</li>
                <li>Email: info@pesindia.com</li>
                <li>Website: www.pesindia.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Pioneer Engineering Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
