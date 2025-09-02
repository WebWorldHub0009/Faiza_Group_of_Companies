// // src/components/Footer.jsx
// import React from "react";
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Youtube,
// } from "lucide-react";
// import VisitorCounter from "./VisitorCounter"; // assuming you already created this
// import bgImage from "../assets/images/footerbg.jpg"; // background image

// export default function Footer() {
//   return (
//     <footer
//       className="relative text-center py-12 px-6 bg-cover bg-center"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/80"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Company Name */}
//         <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent mb-2">
//           Faiza Group Of Companies
//         </h2>
//         <p className="text-sm uppercase tracking-widest text-[#B0B0B0] mb-8">
//           Excellence • Trust • Innovation
//         </p>

//         {/* Responsive Info Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#E5E5E5] mb-10 text-sm md:text-base">
//           {/* Address */}
//           <div>
//             <h3 className="text-[#C9A44C] font-semibold mb-2">Address</h3>
//             <p className="leading-relaxed text-[#B0B0B0]">
//               House No. 2A Ground Floor, Faiza Manjil, Bypass Road, <br />
//               Behind Waqr Hospital, nearby Indian Oil Petrol Pump, <br />
//               Ali Nagar Colony, Aligarh, Uttar Pradesh
//             </p>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-[#C9A44C] font-semibold mb-2">Contact</h3>
//             <p className="text-[#B0B0B0]">📞 9412559380, 9897949433</p>
//           </div>

//           {/* Email */}
//           <div>
//             <h3 className="text-[#C9A44C] font-semibold mb-2">Email</h3>
//             <p className="text-[#B0B0B0]">
//               <a
//                 href="mailto:Info@faizagroupofcompanies.in"
//                 className="hover:text-[#C9A44C] transition"
//               >
//                 Info@faizagroupofcompanies.in
//               </a>
//               <br />
//               <a
//                 href="mailto:faizagroupofcompanies@gmail.com"
//                 className="hover:text-[#C9A44C] transition"
//               >
//                 faizagroupofcompanies@gmail.com
//               </a>
//             </p>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex flex-wrap justify-center gap-6 text-[#E5E5E5] font-medium mb-8">
//           <a href="/" className="hover:text-[#C9A44C] transition">
//             Home
//           </a>
//           <a href="/about" className="hover:text-[#C9A44C] transition">
//             About Us
//           </a>
//           <a href="/services" className="hover:text-[#C9A44C] transition">
//             Services
//           </a>
//           <a href="/showcase" className="hover:text-[#C9A44C] transition">
//             Showcase
//           </a>
//           <a href="/contact" className="hover:text-[#C9A44C] transition">
//             Contact Us
//           </a>
//           <a href="/certificates" className="hover:text-[#C9A44C] transition">
//             Certificates
//           </a>
//         </nav>

//         {/* About text */}
//         <p className="max-w-2xl mx-auto text-[#B0B0B0] mb-8 text-sm leading-relaxed">
//           At <span className="text-[#C9A44C]">Faiza Group Of Companies</span>,
//           we believe in creating timeless spaces and delivering unmatched
//           quality in interiors, construction, and contracting. Since 2010, our
//           commitment has been to excellence, precision, and client satisfaction.
//         </p>

//         {/* Social Links */}
//         <div className="flex justify-center gap-6 text-[#E5E5E5] mb-8">
//           <a
//             href="https://www.facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-[#C9A44C] transition"
//           >
//             <Facebook className="w-5 h-5" />
//           </a>
//           <a
//             href="https://www.twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-[#C9A44C] transition"
//           >
//             <Twitter className="w-5 h-5" />
//           </a>
//           <a
//             href="https://www.instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-[#C9A44C] transition"
//           >
//             <Instagram className="w-5 h-5" />
//           </a>
//           <a
//             href="https://www.linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-[#C9A44C] transition"
//           >
//             <Linkedin className="w-5 h-5" />
//           </a>
//           <a
//             href="https://www.youtube.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-[#C9A44C] transition"
//           >
//             <Youtube className="w-5 h-5" />
//           </a>
//         </div>

//         {/* Visitor Counter */}
//         <div className="mb-6 text-[#E5E5E5] text-sm">
//           <VisitorCounter />
//         </div>

//         {/* Copyright */}
//         <div className="text-[#B0B0B0] text-xs">
//           <p>
//             Copyright © {new Date().getFullYear()} Faiza Group Of Companies. All
//             Rights Reserved.
//           </p>
//           <p className="mt-1 text-[#777]">
//             Designed and Developed by{" "}
//             <span className="text-[#C9A44C]">Web World Hub</span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// src/components/Footer.jsx
import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
} from "lucide-react";
import VisitorCounter from "./VisitorCounter"; // assuming you already created this
import bgImage from "../assets/images/footerbg.jpg";

export default function Footer() {
  return (
    <footer
      className="relative text-center py-12 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0000001c]"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Company Name */}
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent mb-2">
          Faiza Group Of Companies
        </h2>
        <p className="text-sm uppercase tracking-widest text-[#B0B0B0] mb-6">
          Excellence • Trust • Innovation
        </p>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-[#E5E5E5] font-medium mb-6">
          <a href="/" className="hover:text-[#C9A44C] transition">
            Home
          </a>
          <a href="/about" className="hover:text-[#C9A44C] transition">
            About Us
          </a>
          <a href="/services" className="hover:text-[#C9A44C] transition">
            Services
          </a>
          <a href="/showcase" className="hover:text-[#C9A44C] transition">
            Showcase
          </a>
          <a href="/contact" className="hover:text-[#C9A44C] transition">
            Contact Us
          </a>
          <a href="/certificates" className="hover:text-[#C9A44C] transition">
            Certificates
          </a>
        </nav>

        {/* About text */}
        <p className="max-w-2xl mx-auto text-[#B0B0B0] mb-6 text-sm leading-relaxed">
          At <span className="text-[#C9A44C]">Faiza Group Of Companies</span>,
          we believe in creating timeless spaces and delivering unmatched
          quality in interiors, construction, and contracting. Since 2010, our
          commitment has been to excellence, precision, and client satisfaction.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-[#E5E5E5] mb-8">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A44C] transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A44C] transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A44C] transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A44C] transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A44C] transition"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        {/* Visitor Counter */}
        <div className="mb-6 text-[#E5E5E5] text-sm">
          <VisitorCounter />
        </div>

        {/* Webmail Button */}
        <div className="mb-8">
          <a
            href="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#C9A44C] to-[#E3C567] text-black font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300"
          >
            <Mail className="w-5 h-5" />
            Webmail
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[#B0B0B0] text-xs">
          <p>
            Copyright © {new Date().getFullYear()} Faiza Group Of Companies. All
            Rights Reserved.
          </p>
          <p className="mt-1 text-[#777]">
            Designed and Developed by{" "}
            <a href="https://webworldhub.co.in/" className="text-[#C9A44C]">
              Web World Hub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
