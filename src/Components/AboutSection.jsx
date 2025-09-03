// src/components/AboutSection.jsx
import React from "react";
import { Award, Users, Star, Building2, Hammer } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-black via-[#0d0d0d] to-[#1a1a1a] min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 text-white font-['Lora']">
      <div className="max-w-7xl w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Left Side (Headline + About Text) */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6 font-['Playfair_Display']">
              About <br />
              <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
                Faiza Group Of Companies
              </span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Step into a world of inspired construction and interiors with{" "}
              <span className="font-semibold text-white">
                Faiza Group Of Companies
              </span>
              . While officially established in <b>2025</b>, our foundation in
              Aligarh’s construction and interior industry traces back to{" "}
              <b>2010</b>. Over the years, we have turned visions into realities
              by blending modern techniques with unmatched craftsmanship.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mt-4">
              We provide a complete spectrum of services — from supplying{" "}
              <b>all types of building materials</b> to handling{" "}
              <b>interior and exterior works, residential and commercial
              construction, and professional contracting</b>. Our expertise also
              extends to safe and efficient demolition of{" "}
              <b>houses, plots, industrial sites, and commercial buildings</b>.
              Whether it’s a new build, a renovation, or a demolition, we are
              trusted for delivering excellence at every stage.
            </p>
          </div>

          {/* Right Side (Logo + Description + Button + Stats) */}
          <div className="max-w-md space-y-6">
            <p className="text-gray-400 leading-relaxed">
              With more than a decade of dedication, we have built a reputation
              for reliability and quality. From industrial spaces to elegant
              homes, we shape environments that are functional, modern, and
              timeless — ensuring every project exceeds expectations.
            </p>
           <Link to='/about'>
            <button className="cursor-pointer px-8 py-4 bg-gradient-to-r from-[#C9A44C] to-[#E3C567] text-black text-base rounded-full shadow-lg hover:opacity-90 transition font-semibold">
              Learn More About Us
            </button>
           </Link>

            {/* Mini Stats Row */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center">
                <Award className="w-6 h-6 text-yellow-400 mb-2" />
                <h3 className="text-lg font-bold">10+</h3>
                <p className="text-xs text-gray-400">Years Legacy</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-6 h-6 text-blue-400 mb-2" />
                <h3 className="text-lg font-bold">200+</h3>
                <p className="text-xs text-gray-400">Clients</p>
              </div>
              <div className="flex flex-col items-center">
                <Star className="w-6 h-6 text-pink-400 mb-2" />
                <h3 className="text-lg font-bold">5★</h3>
                <p className="text-xs text-gray-400">Ratings</p>
              </div>
            </div>

            {/* Services Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-green-400" />
                <span className="text-sm text-gray-300">
                  Residential & Commercial
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Hammer className="w-6 h-6 text-orange-400" />
                <span className="text-sm text-gray-300">Interior & Exterior</span>
              </div>
              <div className="flex items-center gap-3">
                <Hammer className="w-6 h-6 text-purple-400" />
                <span className="text-sm text-gray-300">Contracting & Materials</span>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-red-400" />
                <span className="text-sm text-gray-300">
                  Demolition Services
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
