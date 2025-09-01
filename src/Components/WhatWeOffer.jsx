// src/components/WhatWeOffer.jsx
import React, { useState } from "react";
import Slider from "react-slick";
import {
  Shield,
  Brush,
  Hammer,
  Building,
  Sparkles,
  Home,
} from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const offers = [
  {
    icon: <Brush className="w-7 h-7 text-[#C9A44C]" />,
    title: "Interior Design",
    desc: "Tailored designs that bring your vision to life with luxurious, functional interiors.",
  },
  {
    icon: <Hammer className="w-7 h-7 text-[#C9A44C]" />,
    title: "Construction Excellence",
    desc: "From concept to reality, we deliver premium spaces built with precision and care.",
  },
  {
    icon: <Shield className="w-7 h-7 text-[#C9A44C]" />,
    title: "Trusted Contracting",
    desc: "Over a decade of expertise ensures seamless execution and project reliability.",
  },
  {
    icon: <Building className="w-7 h-7 text-[#C9A44C]" />,
    title: "Commercial Interiors",
    desc: "Modern, inspiring workspaces designed for productivity, success, and growth.",
  },
  {
    icon: <Sparkles className="w-7 h-7 text-[#C9A44C]" />,
    title: "Premium Finishes",
    desc: "Attention to detail with high-end finishes that bring timeless elegance to life.",
  },
  {
    icon: <Home className="w-7 h-7 text-[#C9A44C]" />,
    title: "Residential Spaces",
    desc: "Crafting homes that reflect individuality, comfort, and modern sophistication.",
  },
];

export default function WhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: false,
    beforeChange: (_, next) => setActiveIndex(next + 1),
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false,
          centerMode: true,
          centerPadding: "15px",
        },
      },
    ],
  };

  return (
    <section className="bg-[#1A1A1A] text-[#F9F9F9] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold leading-tight mb-6">
            What We{" "}
            <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-[#B0B0B0] mb-6 max-w-md">
            Transform your vision into reality with Faiza Group of Companies —
            Aligarh’s premier interior construction contractor since 2010. We
            specialize in interiors, construction, and contracting, blending
            expertise with elegance.
          </p>
          <button className="px-6 py-2.5 bg-gradient-to-r from-[#C9A44C] to-[#E3C567] text-black font-semibold rounded-lg shadow-md hover:opacity-90 transition">
            Get Started
          </button>
        </div>

        {/* Right Section - Vertical Slider */}
        <Slider {...settings} className="space-y-4">
          {offers.map((offer, i) => {
            const isActive = i === activeIndex % offers.length;
            return (
              <div key={i} className="px-2">
                <div
                  className={`flex items-start gap-4 rounded-xl p-5 min-h-[120px] transition-all duration-500 relative ${
                    isActive
                      ? "bg-gradient-to-r from-[#C9A44C]/10 to-[#E3C567]/10 border-l-4 border-[#C9A44C]"
                      : "bg-[#222]"
                  }`}
                >
                  <div className="flex-shrink-0">{offer.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#F9F9F9]">
                      {offer.title}
                    </h3>
                    <p className="text-sm text-[#B0B0B0]">{offer.desc}</p>
                  </div>
                  {isActive && (
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#C9A44C] to-[#E3C567] rounded-l-xl"></div>
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
