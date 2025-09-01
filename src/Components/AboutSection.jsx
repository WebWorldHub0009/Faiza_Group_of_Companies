// src/components/AboutSection.jsx
import React from "react";
import { Award, Users, Star } from "lucide-react";
import img1 from "../assets/images/h1.jpg";
import img2 from "../assets/images/h1.jpg";
import img3 from "../assets/images/h1.jpg";
import img4 from "../assets/images/h1.jpg";
import logo from "../assets/images/faizalogo.png"; // ✅ Import Logo

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
              Step into a world of inspired interiors with{" "}
              <span className="font-semibold text-white">
                Faiza Group Of Companies
              </span>
              . While officially established in <b>2025</b>, our roots in
              Aligarh’s interior construction landscape extend back to{" "}
              <b>2010</b>. We are dedicated to transforming your aspirations into
              breathtaking realities.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mt-4">
              As a leading interior construction contractor, we specialize in{" "}
              <b>design, construction, and contracting</b>, bringing expertise
              and passion to every project. Discover the art of perfect spaces
              and let us help you build the interior of your dreams.
            </p>
          </div>

          {/* Right Side (Logo + Description + Button + Stats) */}
          <div className="max-w-md space-y-6">
            {/* ✅ Logo Above Paragraph */}
            {/* <div className="flex justify-center">
              <img
                src={logo}
                alt="Faiza Group Logo"
                className="w-32 h-auto object-contain mb-4 md:mb-6 drop-shadow-lg"
              />
            </div> */}

            <p className="text-gray-400 leading-relaxed">
              Imagine spaces that reflect your unique vision. With over a decade
              of experience, we go beyond construction — we create interiors
              that inspire and delight, blending functionality with timeless
              elegance.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#C9A44C] to-[#E3C567] text-black text-base rounded-full shadow-lg hover:opacity-90 transition font-semibold">
              Learn More About Us
            </button>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
