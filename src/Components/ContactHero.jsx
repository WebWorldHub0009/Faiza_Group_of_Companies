// src/components/ContactHero.jsx
import React from "react";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import img from "../assets/images/contactbg.jpg"; // Replace with your contact hero background

const ContactHero = () => {
  return (
    <section
      className="relative h-[90vh] w-full flex items-center justify-center text-[#F9F9F9] font-['Poppins']"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-0 bg-[#00000085]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 md:px-12 w-full max-w-5xl flex flex-col items-center text-center">
        {/* Tagline */}
        <p className="uppercase tracking-[0.25em] text-sm text-[#B0B0B0] mb-4">
          Get In Touch
        </p>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-snug">
          Let’s{" "}
          <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
            Connect
          </span>{" "}
          Today
        </h1>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-[#C9A44C] to-[#E3C567] mt-4 mb-6 rounded-full"></div>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#E5E5E5]/90 max-w-2xl mb-10">
          We’re here to listen, collaborate, and bring your vision to life.
          Reach out to{" "}
          <span className="text-[#C9A44C] font-semibold">
            Faiza Group
          </span>{" "}
          — your trusted partner in design, innovation, and excellence.
        </p>

        {/* Contact Info Buttons */}
        <div className="flex flex-wrap gap-5 mb-6 justify-center">
          <a
            href="tel:+919897949433"
            className="flex items-center gap-2 px-6 py-2 font-semibold rounded-lg bg-gradient-to-r from-[#C9A44C] to-[#E3C567] text-black shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <Phone size={20} /> Call Us
          </a>
          <a
            href="mailto:info@faizagroupofcompanies.in"
            className="flex items-center gap-2 px-6 py-2 font-semibold rounded-lg bg-[#222]/70 border border-[#C9A44C]/60 text-[#F9F9F9] shadow-lg transform transition-all duration-500 hover:bg-gradient-to-r hover:from-[#C9A44C] hover:to-[#E3C567] hover:text-black hover:scale-105 hover:shadow-2xl"
          >
            <Mail size={20} /> Email Us
          </a>
        </div>

        {/* Supporting Line */}
        <p className="text-sm text-[#B0B0B0]">
          Visit us at our office or reach out online — we’re always ready to assist.
        </p>

        {/* Address */}
        <div className="mt-6 flex items-center gap-2 text-[#E5E5E5]/80">
          <MapPin size={18} className="text-[#C9A44C]" />
          <span>House No. 2A Ground Floor, Faiza Manjil</span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6">
        <ChevronDown
          size={32}
          className="text-[#C9A44C] animate-bounce cursor-pointer"
        />
      </div>
    </section>
  );
};

export default ContactHero;
