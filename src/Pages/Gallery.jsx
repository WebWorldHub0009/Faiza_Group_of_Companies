// src/pages/FaizaGallery.jsx
import React, { useState, useEffect } from "react";
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
import img9 from "../assets/images/gallery/func.avif";
import img10 from "../assets/images/gallery/custom.jpg";
import img11 from "../assets/images/gallery/res.jpg";
import img12 from "../assets/images/gallery/construction.jpg";
import GalleryHero from "../Components/GalleryHero";

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
    { src: img9, title: "Functional Workspace Interiors" },
    { src: img10, title: "Custom Interior Finishes" },
    { src: img11, title: "Residential Architecture Excellence" },
    { src: img12, title: "Complete Construction Solutions" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClose = () => setSelectedIndex(null);
  const handlePrev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const handleNext = () =>
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "Escape") handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
    <GalleryHero/>
      {/* Gallery Section */}
      <section className="w-full py-16 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto text-center" id="gallery">
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4 leading-snug text-[#F9F9F9]">
            Our{" "}
            <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-[#B0B0B0] max-w-2xl mx-auto mb-12">
            From interiors to raw materials, Faiza Group brings{" "}
            <span className="font-semibold text-[#F9F9F9]">
              innovation, quality, and precision
            </span>{" "}
            to every project. Explore our premium portfolio for residential,
            commercial, and industrial spaces.
          </p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {images.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`relative rounded-xl overflow-hidden shadow-md cursor-pointer group ${
                  index % 6 === 0 || index % 6 === 1 ? "lg:col-span-2" : ""
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
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
            <div className="relative max-w-5xl w-full">
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex].src}
                alt={images[selectedIndex].title}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg border-2 border-[#C9A44C]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
              <p className="text-center text-[#E3C567] mt-4 text-lg font-semibold">
                {images[selectedIndex].title}
              </p>

              {/* Prev/Next Controls */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 -left-12 transform -translate-y-1/2 text-white bg-gradient-to-r from-[#C9A44C] to-[#E3C567] p-2 rounded-full hover:opacity-80 transition"
              >
                <ChevronLeft size={30} />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 -right-12 transform -translate-y-1/2 text-white bg-gradient-to-r from-[#C9A44C] to-[#E3C567] p-2 rounded-full hover:opacity-80 transition"
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
