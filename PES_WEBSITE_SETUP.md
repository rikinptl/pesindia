# Pioneer Engineering Services - Enterprise Website

## 🎯 Project Overview

This is a modern, enterprise-level website for **Pioneer Engineering Services (PES India)**, built using Next.js 16, TypeScript, and Tailwind CSS. The website showcases PES India's capabilities as a leading manufacturer of high-quality alloy steel and iron castings for various industrial applications.

## 🏢 Company Information

**Pioneer Engineering Services** is a certified ISO 9001 company specializing in:
- Single piece casting up to 2000kg
- Alloy Steel & Iron Casting
- High chromium wear, corrosion and abrasion resistant castings

**Key Industries Served:**
- Cement Plants
- Mining & Earthmoving
- Power Generation (Thermal)
- Pump Industries
- Chemical Processing
- Crusher & Grinding Equipment

## 📋 Production Capacity

- **Normal Capacity:** 1200 MTPA
- **Maximum Capacity (24hrs):** 2400 MTPA

## 🌟 Key Features

### Website Sections
1. **Home** - Hero section with company overview
2. **About/Profile** - Company history, location, and capabilities
3. **Products** - Six main product categories:
   - Cement Plant Machinery
   - Mining & Earthmoving Equipment
   - Grinding & Crusher Machinery
   - Thermal Power Plant Components
   - Slurry Pumps & Valves
   - Chemical & Industrial Components
4. **Facilities** - Manufacturing capabilities showcase
5. **Testimonials** - Client feedback from industry leaders
6. **Contact** - Contact form and company information

### Design Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern gradient-based UI
- ✅ Smooth scrolling navigation
- ✅ Sticky header for easy navigation
- ✅ Professional color scheme (blue/gray)
- ✅ Accessible form inputs
- ✅ SEO-friendly structure

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd pes-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

### Build for Production

1. Create an optimized production build:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 🛠️ Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Font:** Geist Sans & Geist Mono
- **Deployment Ready:** Vercel Platform

## 📁 Project Structure

```
pes-website/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main homepage
│   └── globals.css      # Global styles
├── public/              # Static assets
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── tailwind.config.ts   # Tailwind configuration
└── next.config.ts       # Next.js configuration
```

## 🎨 Customization

### Update Company Information
Edit the content in `app/page.tsx` to update:
- Company name and tagline
- Production capacity numbers
- Product descriptions
- Facility details
- Testimonials
- Contact information

### Color Scheme
Modify Tailwind classes in `app/page.tsx`:
- Primary: `bg-blue-900`, `text-blue-600`
- Secondary: Various gradient colors
- Background: `bg-gray-50`, `bg-white`

### Adding Images
1. Place images in `public/` directory
2. Reference them using Next.js Image component:
```tsx
import Image from "next/image"
<Image src="/your-image.jpg" alt="Description" width={500} height={300} />
```

## 📝 Key Content Sections

### Hero Section
- Company name and tagline
- Primary value proposition
- Call-to-action buttons

### About Section
- Company profile
- Location (G.I.D.C. Odhav, Ahmedabad)
- Production capacity display
- Key capabilities

### Products Section
- Six product categories with icons
- Brief descriptions for each category
- Hover effects for interactivity

### Why Choose PES
- ISO 9001 certification
- Modern facilities
- Global reach

### Facilities
- Eight manufacturing capabilities
- Pattern making, Melting, Heat treatment, etc.

### Testimonials
- Client feedback from:
  - Ultratech Cement
  - Tata Chemicals
  - Metso

### Contact Section
- Full contact form
- Company address
- Email and website
- Gradient background

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy automatically

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Deploy to Other Platforms

Build and deploy the `out` folder (static export) or use a Node.js server for the production build.

## 📧 Contact Information

- **Location:** G.I.D.C. Odhav, Ahmedabad, Gujarat, India
- **Email:** info@pesindia.com
- **Website:** www.pesindia.com

## 🔒 Certifications

- ISO 9001:2015
- PED Certified
- NORSOK M650 Certified

## 📄 License

This project is proprietary and belongs to Pioneer Engineering Services.

## 🤝 Contributing

For internal updates and maintenance, contact the development team.

## 📞 Support

For technical issues or questions about the website, please contact info@pesindia.com

---

**Built with ❤️ for Pioneer Engineering Services**

