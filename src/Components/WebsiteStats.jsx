import React from "react";
import { motion } from "framer-motion";
import statsImage1 from "../assets/images/h1.jpg";
import statsImage2 from "../assets/images/h1.jpg";
import bgDiamond from "../assets/images/statsbg.avif"; // Background image

import { FaIndustry, FaUsers, FaProjectDiagram, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";

const stats = [
  {
    label: "Years of Excellence",
    value: "30+",
    icon: <FaAward className="text-2xl sm:text-3xl md:text-4xl text-[#E5E5E5]" />,
  },
  {
    label: "Trusted Clients",
    value: "100K+",
    icon: <FaUsers className="text-2xl sm:text-3xl md:text-4xl text-[#E5E5E5]" />,
  },
  {
    label: "Projects Delivered",
    value: "500+",
    icon: <FaProjectDiagram className="text-2xl sm:text-3xl md:text-4xl text-[#E5E5E5]" />,
  },
  {
    label: "Global Presence",
    value: "15+ Countries",
    icon: <FaIndustry className="text-2xl sm:text-3xl md:text-4xl text-[#E5E5E5]" />,
  },
];

const WebsiteStats = () => {
  return (
    <section
      className="w-full relative bg-cover bg-center bg-no-repeat py-12 md:py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${bgDiamond})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00000060]"></div>

      {/* Watermark */}
      <h1 className="absolute text-[5rem] sm:text-[9rem] font-bold text-[#F9F9F910] top-10 left-5 pointer-events-none uppercase tracking-widest italic hidden sm:block">
        FAIZA
      </h1>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl tracking-wide text-[#F9F9F9] font-['Playfair_Display'] italic">
            "Building Legacies, Shaping the Future"
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Desktop Layout */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="hidden md:flex relative w-full justify-center items-center min-h-[480px]"
          >
            {/* Image 1 */}
            <motion.div
              whileHover={{ scale: 1.05, zIndex: 30, y: -10 }}
              className="absolute -top-2 left-2 w-[300px] h-[250px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={statsImage1}
                alt="Faiza Industries"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              whileHover={{ scale: 1.05, zIndex: 30, y: 10 }}
              className="absolute bottom-4 right-2 w-[300px] h-[250px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={statsImage2}
                alt="Faiza Projects"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Card */}
            <div className="relative bg-[#1A1A1A]/90 backdrop-blur-xl border border-[#E5E5E5]/20 py-6 px-8 rounded-2xl shadow-xl text-center w-[280px] md:w-[320px]">
              <p className="text-2xl font-semibold mb-2 tracking-wider bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
                Innovation & Trust
              </p>
              <h3 className="text-base font-semibold text-[#F9F9F9] leading-snug tracking-wide font-['Poppins']">
                Delivering excellence across industries with integrity and
                vision.
              </h3>
              <Link to="/about">
                <button className="mt-4 px-5 py-2 border border-[#F9F9F9] hover:bg-gradient-to-r hover:from-[#C9A44C] hover:to-[#E3C567] hover:text-[#1A1A1A] transition-all duration-300 text-sm font-semibold rounded-full text-[#F9F9F9]">
                  Explore More
                </button>
              </Link>
            </div>
          </motion.div>

          {/* LEFT: Mobile (Stacked) */}
          <div className="block md:hidden space-y-6">
            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <img
                src={statsImage1}
                alt="Faiza Industries"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="relative bg-[#1A1A1A]/90 backdrop-blur-xl border border-[#E5E5E5]/20 py-6 px-6 rounded-2xl shadow-xl text-center">
              <p className="text-2xl font-semibold mb-2 tracking-wider bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
                Innovation & Trust
              </p>
              <h3 className="text-base font-semibold text-[#F9F9F9] leading-snug tracking-wide font-['Poppins']">
                Delivering excellence across industries with integrity and
                vision.
              </h3>
              <Link to="/about">
                <button className="mt-4 px-5 py-2 border border-[#F9F9F9] hover:bg-gradient-to-r hover:from-[#C9A44C] hover:to-[#E3C567] hover:text-[#1A1A1A] transition-all duration-300 text-sm font-semibold rounded-full text-[#F9F9F9]">
                  Explore More
                </button>
              </Link>
            </div>
            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <img
                src={statsImage2}
                alt="Faiza Projects"
                className="w-full h-60 object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-5xl font-['Playfair_Display'] text-[#F9F9F9] mb-6 leading-snug">
              Our{" "}
              <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
                Journey of Excellence
              </span>
            </h2>
            <p className="text-[#B0B0B0] text-base sm:text-lg mb-10 max-w-xl leading-relaxed tracking-wide font-['Poppins']">
              Faiza Group of Industries is built on trust, innovation, and a
              legacy of excellence. We aim to deliver world-class solutions that
              inspire growth and set new benchmarks across industries.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:gap-10">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    whileHover={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.6 }}
                    className="p-3 sm:p-4 bg-[#2A2A2A] rounded-full shadow-md"
                  >
                    {stat.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl sm:text-xl md:text-3xl font-bold text-[#F9F9F9]">
                      {stat.value}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#B0B0B0] tracking-wide uppercase">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteStats;
