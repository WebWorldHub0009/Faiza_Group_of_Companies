// src/components/GalleryHero.jsx
import React from "react";
import { ChevronDown } from "lucide-react";
import img from "../assets/images/gallery/gallerybg.jpg"; // Replace with your gallery hero image

const GalleryHero = () => {
  return (
    <section
      className="relative h-[90vh] w-full flex items-center justify-center text-[#F9F9F9] font-['Poppins']"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay (top gradient + dark overlay) */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-0 bg-[#0000007e]"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 px-5 md:px-12 w-full max-w-5xl flex flex-col items-center text-center">
        {/* Small Tagline */}
        <p className="uppercase tracking-[0.25em] text-sm text-[#B0B0B0] mb-4">
          Our Premium Collection
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-snug">
          Discover the{" "}
          <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
            Art of Spaces
          </span>
        </h1>

        {/* Decorative Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-[#C9A44C] to-[#E3C567] mt-4 mb-6 rounded-full"></div>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#E5E5E5]/90 max-w-2xl mb-10">
          Where innovation meets luxury — a journey through interiors,
          construction, and timeless designs that reflect{" "}
          <span className="text-[#C9A44C] font-semibold">
            Faiza Group’s excellence.
          </span>
        </p>

        {/* Premium Buttons */}
        <div className="flex flex-wrap gap-5 mb-6 justify-center">
          <button className="px-8 py-3 font-semibold rounded-lg bg-gradient-to-r from-[#C9A44C] to-[#E3C567] text-black shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            View Gallery
          </button>
          <button className="px-8 py-3 font-semibold rounded-lg bg-[#222]/70 border border-[#C9A44C]/60 text-[#F9F9F9] shadow-lg transform transition-all duration-500 hover:bg-gradient-to-r hover:from-[#C9A44C] hover:to-[#E3C567] hover:text-black hover:scale-105 hover:shadow-2xl">
            Learn More
          </button>
        </div>

        {/* Supporting Line */}
        <p className="text-sm text-[#B0B0B0]">
          Crafted with precision, inspired by elegance — every project tells a story.
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

export default GalleryHero;


