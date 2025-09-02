// src/components/AboutHero.jsx
import React from "react";
import img from "../assets/images/h1.jpg";

const AboutHero = () => {
  return (
    <section
      className="relative h-screen w-full flex items-center text-[#F9F9F9] font-['Poppins']"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1A1A1A]/70"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left: Main Heading */}
          <div className="text-center md:text-left flex flex-col justify-center">
            <p className="uppercase tracking-widest text-sm text-[#B0B0B0] mb-4">
              About Faiza Group
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl ">
              Driving Innovation,{" "}
              <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
                Building Trust
              </span>
            </h1>
          </div>

          {/* Right: Supporting Text (hidden on small screens) */}
          <div className="hidden md:flex text-[#E5E5E5] text-sm md:text-sm justify-end">
            <p className="max-w-sm md:text-center mt-10">
              Faiza Group of Companies is a diversified conglomerate committed
              to delivering excellence across industries. From modern
              infrastructure and real estate to cutting-edge services, we
              combine innovation with integrity to shape a sustainable and
              prosperous future.
            </p>
          </div>
        </div>

        {/* Bottom Section: 3 index-style items */}
        <div className="mt-20 md:mt-24 relative -bottom-24 md:-bottom-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#B0B0B0] uppercase tracking-wide">
          <div className="hover:text-[#F9F9F9] cursor-pointer transition border-b border-[#B0B0B0]/40 pb-2">
            <span className="text-[#C9A44C] mr-2">01.</span> Legacy of Trust &
            Excellence
          </div>
          <div className="hover:text-[#F9F9F9] cursor-pointer transition border-b border-[#B0B0B0]/40 pb-2">
            <span className="text-[#C9A44C] mr-2">02.</span> Diverse Ventures
            Across Industries
          </div>
          <div className="hover:text-[#F9F9F9] cursor-pointer transition border-b border-[#B0B0B0]/40 pb-2">
            <span className="text-[#C9A44C] mr-2">03.</span> Innovation Driving
            Growth
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
