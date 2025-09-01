// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import local images
import h1 from "../assets/images/h1.jpg";
import h2 from "../assets/images/h2.jpg";
import h3 from "../assets/images/h3.jpg";
import h4 from "../assets/images/h4.jpg";

const slides = [
  {
    id: 1,
    image: h1,
    title: "Luxury Villa",
    subtitle: "At The Skyline",
    desc: "It is through our combined efforts that the greatest solutions shine through. Explore your new home.",
  },
  {
    id: 2,
    image: h2,
    title: "Modern Interiors",
    subtitle: "For Inspired Living",
    desc: "Crafted designs that elevate your lifestyle with elegance and sophistication.",
  },
  {
    id: 3,
    image: h3,
    title: "Exclusive Spaces",
    subtitle: "Made For You",
    desc: "Every detail matters. We design spaces that reflect your unique vision.",
  },
  {
    id: 4,
    image: h4,
    title: "Architecture Redefined",
    subtitle: "Innovative & Timeless",
    desc: "Combining modern innovation with timeless elegance in every project.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#1A1A1A]">
      {/* Background Image */}
      <AnimatePresence>
        <motion.div
          key={slides[current].id}
          className="absolute inset-0"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${slides[current].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-[#F9F9F9]"
          >
            <p className="text-sm md:text-base mb-4 tracking-widest uppercase text-[#B0B0B0]">
              0{slides[current].id}/0{slides.length}
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              {slides[current].title} <br />
              <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
                {slides[current].subtitle}
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#E5E5E5] max-w-xl">
              {slides[current].desc}
            </p>
            <button className="mt-8 px-6 py-3 border border-[#E3C567] text-[#F9F9F9] rounded-full hover:bg-gradient-to-r hover:from-[#C9A44C] hover:to-[#E3C567] hover:text-[#1A1A1A] transition">
              View More →
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Vertical Dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current
                ? "bg-gradient-to-r from-[#C9A44C] to-[#E3C567] scale-125"
                : "bg-[#B0B0B0]"
            }`}
          />
        ))}
      </div>

      {/* Bottom Left: Customers */}
      <div className="absolute bottom-6 left-6 flex items-center gap-3 z-20">
        <div className="flex -space-x-3">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src="https://randomuser.me/api/portraits/men/52.jpg"
            alt="user"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
        <p className="text-[#E5E5E5] text-sm md:text-base">
          7k+ Satisfied Customers
        </p>
      </div>
    </div>
  );
};

export default Hero;
