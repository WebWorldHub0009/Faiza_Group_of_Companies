// src/components/PremiumHero.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from "../assets/images/v1.jpg";
import img2 from "../assets/images/v5.jpg";
import img3 from "../assets/images/v3.jpg";
import logo from "../assets/images/faizalogo.png";

const PremiumHero = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen w-full text-[#F9F9F9] font-['Poppins'] relative overflow-hidden">
      {/* Left Panel */}
      <div className="bg-[#1A1A1A] w-full md:w-[30%] flex flex-col justify-between p-8 md:p-10 relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Faiza Group Logo" className="w-12 h-12" />
          <span className="text-xl font-bold tracking-wide">
            Faiza{" "}
            <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
              Group
            </span>
          </span>
        </div>

        {/* Centered Content */}
        <div className="flex flex-col justify-center h-full relative">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display'] leading-tight mb-6 relative z-20">
            Modern <br />
            <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
              Living Spaces
            </span>
          </h1>
          <p className="text-[#B0B0B0] max-w-xs mb-8 text-sm sm:text-base">
            Crafting timeless interiors, furniture collections, and premium
            construction with a touch of luxury.
          </p>
          <Link to='/showcase'>
          <button className="cursor-pointer group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C9A44C] to-[#E3C567] text-black rounded-md shadow hover:opacity-90 transition font-semibold text-sm sm:text-base w-fit">
            <span className="tracking-wide">Explore more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>
          </Link>
        </div>
      </div>

      {/* Right Panels */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Panel 1 */}
        <div className="relative flex-1 group overflow-hidden">
          <img
            src={img1}
            alt="Faiza Kitchens"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition duration-700"></div>

          {/* Text Overlay */}
          <div className="absolute bottom-10 left-6 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-[1px] h-10 bg-[#E5E5E5]/60 mb-3"></div>
            <span className="text-sm text-[#B0B0B0]">01</span>
            <h3 className="text-2xl font-['Playfair_Display'] mt-1">
              Premium <br /> Kitchens
            </h3>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="relative flex-1 group overflow-hidden">
          <img
            src={img2}
            alt="Faiza Doors"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition duration-700"></div>

          <div className="absolute bottom-10 left-6 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-[1px] h-10 bg-[#E5E5E5]/60 mb-3"></div>
            <span className="text-sm text-[#B0B0B0]">02</span>
            <h3 className="text-2xl font-['Playfair_Display'] mt-1">
              Luxury <br /> Doors
            </h3>
          </div>
        </div>

        {/* Panel 3 */}
        <div className="relative flex-1 group overflow-hidden">
          <img
            src={img3}
            alt="Faiza Windows"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition duration-700"></div>

          <div className="absolute bottom-10 left-6 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-[1px] h-10 bg-[#E5E5E5]/60 mb-3"></div>
            <span className="text-sm text-[#B0B0B0]">03</span>
            <h3 className="text-2xl font-['Playfair_Display'] mt-1">
              Elegant <br /> Windows
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
