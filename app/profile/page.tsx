import Link from "next/link";
import Image from "next/image";

export default function Profile() {
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
              <Link href="/profile" className="text-blue-600 font-medium transition border-b-2 border-blue-600 pb-1">Profile</Link>
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

      {/* Content - EXACT from XML */}
      <main className="flex-grow py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Profile</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-semibold text-gray-800 mb-6">
              <strong>Single piece casting up to 2000kg. Alloy Steel & Iron Casting</strong>
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              <strong>Pioneer Engineering Services</strong> is one of the leading foundries in Gujarat - western part of India. Pioneer is promoted by Mr. Paresh Patel and Mr. Rajesh Patel and is situated at G.I.D.C. Odhav area of Ahmedabad, Gujarat (India) backed by latest plants and machineries. Ahmedabad is well connected with rest of India by rail, road and by air.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Besides providing comprehensive and cost-conscious production services to the cement plant, mining, crushing, power plant, pumps and Chemical Process Industries to global customers, we can also fulfill your casting requirements from concept, design, prototype to final product with your drawings, samples and materials.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Our fully integrated manufacturing, quality and delivery processes are designed to guarantee flexibility in our supply chain and our expert and committed workforce and design team is more than delighted to work in compliance with your Quality Standards and meet your Just-In-Time Inventory demands.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Contact us today and find out how as your value added outsourcing partner, we can provide world class service level on time deliveries and quality alloy castings.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Pioneer Engineering Services</strong> has a production capacity of normal <strong>1200 MTPA</strong> and Maximum (24 hrs Basis) <strong>2400 MTPA</strong> for catering regularly to the requirement of spares for most of the large public and private sectors in India. Like cement plant machinery spares for (kiln & cooler, raw mill, elevator, ball mill, conveyor, packing, etc.)
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  <strong>Earthmoving & Mining machinery spares</strong>
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  For (Ground engaging tool, undercarriage part, cutting edge, track pad, and pin bushes, etc.)
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  <strong>Grinding & Crusher Machinery</strong>
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  (Jaw crusher, ring crusher, hammer crusher, concave and mantle, bullring and roller for mill grinding, etc.)
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  <strong>Thermal Power Plant machinery spares</strong>
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  For (coal mill, grinding mill, ball mill, ash handling plant)
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  Fertilizer & Chemical Plant and General Engineering requirement.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <p className="text-gray-700 leading-relaxed">
                  Pioneer is a potential buyer of all types of ferrous castings as per <strong>ASTM & Indian standard</strong>. It will be our privilege to satisfactorily fulfill any of your requirements.
                </p>
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

