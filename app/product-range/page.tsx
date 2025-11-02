import Link from "next/link";
import Image from "next/image";

// Products from XML
const products = [
  {
    title: "Slurry Pump Casing",
    slug: "slurry-pump-casing",
    spec: "IS - 4771/1985 ASTM - 532",
    related: "Ni-hard Casting / Hi-Chrome casting",
    description: "Slurry Pumps are innovative in hydraulic designs, structural designs and materials of castings after integrating congeneric products throughout the world. Many features: high efficiency, reasonable design, reliable operation, long in service time, easy maintenance, and low running costs and so on.",
    image: "/images/products/product3.jpg"
  },
  {
    title: "Grinding Mill Roller",
    slug: "cooler-great-plate",
    description: "Used in cement grinding production grinding parts of its various forms, there is a cylinder, cone type, ball type, etc., and roller surface is also flat, curved, convex round noodles. Applied to the grinding roller to roller grinding along the track bed in close contact with the material strength of a spring pressure, hydraulic, etc.",
    image: "/images/products/product2.jpg"
  },
  {
    title: "Grey Iron Casting",
    slug: "grey-iron-casting",
    description: "Gray iron sand casting is an easy and economical process to create basic part shape. Sand casting is the oldest, most common, and simplest of the casting processes. The sand casting process is also the least costly of the casting processes. Normally the sand casting process is used for low temperature alloys, such as aluminum, copper, grey iron, magnesium, and nickel alloys. However, the sand casting process can be used for higher temperature metal, such as steel and stainless steel alloys, when other production processes would not be practical. Gray Iron sand castings are often used to produce prototypes, due to the speed and relative low cost of production when compared to other manufacturing techniques",
    image: "/images/products/product1.jpg"
  },
  {
    title: "Austenitic Iron Casting",
    slug: "austentic-iron-casting",
    description: "Austenitic ductile iron was developed to meet the demands of conditions that are too severe for conventional or austempered ductile irons. The high nickel content in austenitic ductile iron in conjunction with chromium in certain grades provides superior resistance to heat, corrosion and wear. It also is characterized by good strength, ductility and resistance to oxidation at high temperatures, low temperature stability, controlled thermal expansion and good castability and machinability. Applications include: valve and pump bodies in petroleum, salt water and caustic service, manifolds, turbocharger housings and air compressor parts.",
    image: "/images/products/prod1.jpg"
  }
];

export default function ProductRange() {
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
              <Link href="/product-range" className="text-blue-600 font-medium transition border-b-2 border-blue-600 pb-1">Product Gallery</Link>
              <Link href="/facilities" className="text-gray-700 hover:text-blue-600 font-medium transition">Facilities</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Product Gallery</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={product.image || "/images/products/product1.jpg"}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h2>
                  {product.spec && (
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>IS SPECI. NO.:</strong> {product.spec}
                    </p>
                  )}
                  {product.related && (
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Related Name Of Products:</strong> {product.related}
                    </p>
                  )}
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/product-specification" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View Complete Product Specification Table
            </Link>
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

