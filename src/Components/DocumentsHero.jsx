// src/components/DocumentsHero.jsx
import React from "react";
import { FileText, Download, ShieldCheck, ChevronDown } from "lucide-react";
import img from "../assets/images/about.jpg"; // Replace with your documents hero background

const DocumentsHero = () => {
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
          Our Documents
        </p>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-snug">
          Official &{" "}
          <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
            Verified
          </span>{" "}
          Documents
        </h1>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-[#C9A44C] to-[#E3C567] mt-4 mb-6 rounded-full"></div>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#E5E5E5]/90 max-w-2xl mb-10">
          Access our company’s official and certified documents anytime.
          Transparency and trust are at the heart of{" "}
          <span className="text-[#C9A44C] font-semibold">Faiza Group</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-5 mb-6 justify-center">
          <a
            href="#documents"
            className="flex items-center gap-2 px-6 py-2 font-semibold rounded-lg bg-gradient-to-r from-[#C9A44C] to-[#E3C567] text-black shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <FileText size={20} /> View Documents
          </a>
          {/* <a
            href="/documents/faiza-documents.pdf"
            download
            className="flex items-center gap-2 px-6 py-2 font-semibold rounded-lg bg-[#222]/70 border border-[#C9A44C]/60 text-[#F9F9F9] shadow-lg transform transition-all duration-500 hover:bg-gradient-to-r hover:from-[#C9A44C] hover:to-[#E3C567] hover:text-black hover:scale-105 hover:shadow-2xl"
          >
            <Download size={20} /> Download PDF
          </a> */}
        </div>

        {/* Supporting Line */}
        <p className="text-sm text-[#B0B0B0] flex items-center gap-2">
          <ShieldCheck size={16} className="text-[#C9A44C]" />
          All documents are officially verified and up to date.
        </p>
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

export default DocumentsHero;
