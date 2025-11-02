import Link from "next/link";
import Image from "next/image";

// Facilities from XML - EXACT content
const facilities = [
  {
    title: "Melting",
    slug: "melting-moulding",
    description: "Medium Frequency Induction Furnace with power input of 450 KW with 3 crucibles, one having capacity of 1.5 Ton and others having crucibles of 1 ton and 500 kgs, and another having power input of 175 KW with 2 crucibles of 200 Kgs and 350 kgs.",
    image: "/images/facilities/melting-and-moulding.jpg"
  },
  {
    title: "Moulding",
    slug: "moulding",
    description: "Our Mold and Core Shop sand laboratory conducts a variety of tests for resin bonded sand such as tensile test, LOI and grain size (AFS no.) to ensure quality with Sand Plant Automatic Sand Reclamation unit 10MT/Hr.-1 No Alkaline Phenolic (2 Part) sand systems.",
    image: "/images/facilities/pattern-shop.jpg"
  },
  {
    title: "Pattern Shop",
    slug: "slury-pump-casing",
    description: "Well equipped mini semi-auto shop for repair & small making for wooden/metallic patterns with sufficient space of storage for more than 15,000 patterns.",
    image: "/images/facilities/pattern-shop.jpg"
  },
  {
    title: "Felting",
    slug: "felting-shot-blasting",
    description: "In-house castings finishing facility having flexible Shaft Grinder M/C & swing frame grinder machine.",
    image: "/images/facilities/felting-shot-blasting.jpg"
  },
  {
    title: "Shot Blasting",
    slug: "shot-blasting",
    description: "All the castings shall be shot blasted. Shot blasting facilities well in-house available equipped with 1200mm complete turntable shot blasting.",
    image: "/images/facilities/felting-shot-blasting.jpg"
  },
  {
    title: "Heat Treatment",
    slug: "heat-treatment-2",
    description: "The castings shall be heat treated as per customer's requirements of relevant IS & ASTM specifications. Well arranged own facilities, equipped with 2.5 Mtr X 1.25 Mtr X 1.25 Mtr Electric Heat Treatment Furnace with bogie with air, water and oil quenching arrangement operating digital temperature indicator and recorder.",
  },
  {
    title: "Knockout",
    slug: "heat-treatment",
    description: "Well equipped vibratory knockout with eccentric shaft mechanism. The high amplitude vibration makes the sand separate from casting effectively.",
  },
  {
    title: "Press",
    slug: "press-2",
    description: "We have facilities well in-house available with capacity of 150 Ton pressure to flatten, shape, or smooth it.",
  }
];

export default function Facilities() {
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
              <Link href="/facilities" className="text-blue-600 font-medium transition border-b-2 border-blue-600 pb-1">Facilities</Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition">Testimonials</Link>
              <Link href="/certification" className="text-gray-700 hover:text-blue-600 font-medium transition">Certification</Link>
              <Link href="/events-media" className="text-gray-700 hover:text-blue-600 font-medium transition">Events & Media</Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Facilities</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
                {facility.image && (
                  <div className="relative h-56">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h2>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
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

