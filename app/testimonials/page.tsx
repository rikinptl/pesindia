import Link from "next/link";
import Image from "next/image";

// EXACT testimonials from XML
const testimonials = [
  {
    company: "Tata Chemicals Limited",
    content: "In our journey towards excellence we treat you as a key supplier and partner. Based on your performance on price, quality, and delivery and services/support your overall performance evaluation score is: Price: 99, Quality: 100, Delivery: 88, Service: 90.",
    image: "/images/testimonials/testimonial1.jpg"
  },
  {
    company: "JK White Cement Works",
    content: "In our process of performance appraisal of our valued approved vendors, we have conducted the performance appraisal of our vendors based on their performance for last two years(from 1.4.2009 to 30.09.2011). The appraisal is based on various factors like timely supplies, rejections, quality of response, quality of material, after sales service, packing, documentation, users feedback, QMS & EHSMS etc. We are pleased to inform you that you have achieved grade \"A\" with 89% rating in our appraisal process. Being our valued vendor, we expect your co-operation in future to improve it further to strengthen our business relations.",
    image: "/images/testimonials/jk-white-cement.jpg"
  },
  {
    company: "HOLCIM (Lanka) Limited",
    content: "This is to kindly inform you that your company has been evaluated by Holcim Lanka Ltd. for the year 2009 on your performance. The evaluation is done by our end user along with the personnel involved in upstream sourcing. We are pleased to inform you that you have scored 100% marks. We are very much happy with your performances and would like your company to maintain the same standards in future too.",
    image: "/images/testimonials/holcim-limited.jpg"
  },
  {
    company: "Metso",
    content: "We must state that your contribution is very significant in maintaining high standard of Quality of Metso products. In order to monitor your performance and to give you timely feedback we are indicating your performance rating to Rating of Quality : 100% and Rating on Deliveries : 100%. Over All Rating : 100%",
    image: "/images/testimonials/metso.jpg"
  },
  {
    company: "Ultratech Cement Limited",
    content: "This is to kindly inform you that M/s Pioneer Engineering Works has been rated during Suppliers Evaluation 2011 by our organization, based on your performance of the year 2011-2012. The evaluation was done by the end user. We are pleased to inform you that you are rated as a Grade 'A' supplier.",
    image: "/images/testimonials/testimonial1.jpg"
  }
];

export default function Testimonials() {
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
              <Link href="/testimonials" className="text-blue-600 font-medium transition border-b-2 border-blue-600 pb-1">Testimonials</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Testimonials</h1>
          
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-8 shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.company}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{testimonial.company}</h2>
                    <p className="text-gray-700 leading-relaxed italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>
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

