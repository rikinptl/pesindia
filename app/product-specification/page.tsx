import Link from "next/link";
import Image from "next/image";

// Exact table from XML
const productSpecs = [
  { sr: 1, range: "Abrasion Resistance Iron Casting", spec: "IS - 4771/1985 ASTM - 532", related: "Ni-hard Casting / Hi-Chrome casting" },
  { sr: 2, range: "Austenitic Iron Casting", spec: "IS - 2749/1974 ASTM - 436", related: "Ni-Resist casting" },
  { sr: 3, range: "Grey Iron Casting", spec: "IS - 210/1993 ASTM - 48", related: "Grey Iron Casting" },
  { sr: 4, range: "Carbon Steel Casting for General Eng. Purpose", spec: "IS - 1030/1989 ASTM - 27", related: "Cast Steel / WCB Casting" },
  { sr: 5, range: "Austenitic Manganese Steel Casting", spec: "IS - 276/1992 ASTM - 128", related: "Mn-Steel Casting" },
  { sr: 6, range: "Carbon Steel Casting for Surface Hardening", spec: "IS - 2707/1989", related: "-" },
  { sr: 7, range: "Carbon Steel Casting for General Eng. Purpose", spec: "IS - 1030/1989 ASTM - 27", related: "Cast Steel / WCB Casting" },
  { sr: 8, range: "Corrosion Resistant High Alloy Steel and Nickel Base Casting for General Application", spec: "IS - 3444/1987", related: "Stainless Steel Casting S.S.304 / 310 /316 410 / 316L" },
  { sr: 9, range: "Heat Resistant Alloy Steel And Nickel Base Casting", spec: "IS - 4522/1986 ASTM - 297", related: "Heat Resistance Cast Steel (HRCS)" },
  { sr: 10, range: "High Strength Steel Casting for General Engineering and Structural Purpose", spec: "IS - 2644/1994 ASTM - 27", related: "-" },
  { sr: 11, range: "One-Percent Chromium Steel Casting for Resistance to Abrasion", spec: "IS - 4896/1992", related: "-" },
  { sr: 12, range: "1.5 Percent Manganese Steel Casting", spec: "IS - 2708/1973", related: "Mn-Steel Casting" },
  { sr: 13, range: "Alloy Austenitic Manganese Steel Casting", spec: "IS - 503/1963", related: "-" },
  { sr: 14, range: "High Tensile Steel Castings", spec: "IS - 2644/1964", related: "-" },
  { sr: 15, range: "Low Alloy Types of Abrasion-Resistant Hardening Steel Castings", spec: "IS - 1570/1961", related: "-" },
  { sr: 16, range: "Case Hardening Steel Castings", spec: "IS - 15707/1961", related: "EN Steel Casting All Gr." },
];

export default function ProductSpecification() {
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
              <Link href="/contact-us" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content - EXACT table from XML */}
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Product Specification</h1>
          
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold">Sr No.</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Product Range</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">IS SPECI. NO.</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Related Name Of Products</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {productSpecs.map((item) => (
                  <tr key={item.sr} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-center font-semibold text-gray-900">{item.sr}</td>
                    <td className="px-6 py-4 text-gray-700">{item.range}</td>
                    <td className="px-6 py-4 text-gray-700">{item.spec}</td>
                    <td className="px-6 py-4 text-gray-700">{item.related}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

