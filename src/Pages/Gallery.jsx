// src/pages/FaizaGallery.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Replace these with Faiza Group relevant images
import img1 from "../assets/images/gallery/g1.jpg"; 
import img2 from "../assets/images/gallery/g2.jpg"; 
import img3 from "../assets/images/gallery/g3.avif"; 
import img4 from "../assets/images/gallery/g5.avif"; 
import img5 from "../assets/images/gallery/g4.jpg"; 
import img6 from "../assets/images/gallery/g5.avif"; 
import img7 from "../assets/images/gallery/g6.jpg"; 
import img8 from "../assets/images/gallery/g7.jpg"; 
// import img9 from "../assets/images/gallery/g9.jpg"; 
// import img10 from "../assets/images/gallery/g10.jpg"; 
// import img11 from "../assets/images/gallery/g11.jpg"; 
// import img12 from "../assets/images/gallery/g12.jpg"; 

export default function FaizaGallery() {
  const images = [
    { src: img1, title: "Luxury Living Room Interiors" },
    { src: img2, title: "Premium Modular Kitchen" },
    { src: img3, title: "Corporate Office Design" },
    { src: img4, title: "Modern Bedroom Spaces" },
    { src: img5, title: "Restaurant & Café Ambience" },
    { src: img6, title: "High-Quality Building Materials" },
    { src: img7, title: "Elegant Commercial Showrooms" },
    { src: img8, title: "Durable Construction Raw Materials" },
    // { src: img9, title: "Functional Workspace Interiors" },
    // { src: img10, title: "Custom Interior Finishes" },
    // { src: img11, title: "Residential Architecture Excellence" },
    // { src: img12, title: "Complete Construction Solutions" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClose = () => setSelectedIndex(null);
  const handlePrev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const handleNext = () =>
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-[#1A1A1A] text-[#F9F9F9] py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-snug mb-6">
            Step Into a World of{" "}
            <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
              Inspired Interiors
            </span>
          </h1>
          <p className="text-[#E5E5E5] text-lg leading-relaxed">
            Transform your vision into reality with{" "}
            <span className="font-semibold">Faiza Group Of Companies</span>, 
            Aligarh's premier interior construction contractor. Since 2010, we’ve been 
            crafting stunning spaces with expertise in{" "}
            <span className="text-[#C9A44C]">interior design, construction, contracting, and premium building materials</span>. 
            From raw material supply to turnkey interiors, we’re your trusted partner 
            in creating breathtaking homes, offices, restaurants, and showrooms.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-16 px-6 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug text-[#1A1A1A]">
            Discover Our Work & Materials
          </h2>
          <p className="text-[#B0B0B0] max-w-2xl mx-auto mb-10">
            From interiors to raw materials, Faiza Group brings{" "}
            <span className="font-semibold text-[#1A1A1A]">
              innovation, quality, and precision
            </span>{" "}
            to every project. Explore how we blend functionality with elegance 
            for residential, commercial, and industrial spaces.
          </p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {images.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`relative rounded-xl overflow-hidden shadow-md cursor-pointer ${
                  index % 6 === 0 || index % 6 === 1 ? "lg:col-span-2" : ""
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal with Slider */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-white text-3xl p-2 bg-black/40 rounded-full hover:bg-black/70 transition"
            >
              <X size={28} />
            </button>

            {/* Image Slider */}
            <div className="relative max-w-4xl w-full">
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex].src}
                alt={images[selectedIndex].title}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
              <p className="text-center text-[#F9F9F9] mt-4 text-lg font-medium">
                {images[selectedIndex].title}
              </p>

              {/* Prev/Next Controls */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 -left-10 transform -translate-y-1/2 text-white bg-black/40 p-2 rounded-full hover:bg-black/70 transition"
              >
                <ChevronLeft size={30} />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 -right-10 transform -translate-y-1/2 text-white bg-black/40 p-2 rounded-full hover:bg-black/70 transition"
              >
                <ChevronRight size={30} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
