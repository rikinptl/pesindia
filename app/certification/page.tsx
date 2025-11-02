import Link from "next/link";
import Image from "next/image";

export default function Certification() {
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
              <Link href="/certification" className="text-blue-600 font-medium transition border-b-2 border-blue-600 pb-1">Certification</Link>
              <Link href="/events-media" className="text-gray-700 hover:text-blue-600 font-medium transition">Events & Media</Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Certification</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-96">
                <Image
                  src="/images/certifications/ISO-CERTIFICATE.jpg"
                  alt="ISO Certificate"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-900">ISO Certificate</h3>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-96">
                <Image
                  src="/images/certifications/PED-CERTIFICATE.jpg"
                  alt="PED Certificate"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-900">PED Certificate</h3>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-96">
                <Image
                  src="/images/certifications/NORSOK-M650-Certificate.jpg"
                  alt="NORSOK Certificate"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-900">NORSOK M650 Certificate</h3>
              </div>
            </div>
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

