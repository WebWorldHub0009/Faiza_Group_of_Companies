// src/components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Rahul Khanna",
    title: "Homeowner, Aligarh",
    text: "Faiza Group of Companies turned my house into a dream home. Their design ideas, premium quality, and perfect execution exceeded expectations.",
  },
  {
    name: "Shivani Gupta",
    title: "Boutique Owner, Aligarh",
    text: "They created a boutique space that is both stunning and functional. The blend of creativity, fine quality, and precision is truly unmatched.",
  },
  {
    name: "Adnan Farooq",
    title: "Real Estate Developer",
    text: "For our projects, Faiza Group always delivers on time with modern designs. Their reliability, strong materials, and detail make them our first choice.",
  },
  {
    name: "Priya Malhotra",
    title: "Restaurant Owner, Aligarh",
    text: "From layout to finishing, every aspect was handled with care. The interiors look breathtaking, and my customers constantly praise the warm ambiance.",
  },
  {
    name: "Vikram Singh",
    title: "Corporate Office Manager",
    text: "Our office interiors now reflect elegance and class. Faiza Group’s expertise, professionalism, and flawless design have elevated our workspace fully.",
  },
];


export default function TestimonialSlider() {
  return (
    <section className="w-full bg-[#1A1A1A] py-20 px-4 md:px-10 font-[poppins] relative overflow-hidden">
      {/* Decorative background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#222] to-[#1A1A1A]"></div>
      <div className="absolute top-0 right-0 w-60 h-60 bg-[#C9A44C]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-52 h-52 bg-[#E3C567]/10 rounded-full blur-2xl"></div>

      {/* Section Header */}
      <div className="relative max-w-7xl mx-auto text-center mb-12 z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#F9F9F9]">
          What Our Clients{" "}
          <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
            Say About Us
          </span>
        </h2>
        <p className="italic text-[#B0B0B0] mt-3 text-sm md:text-lg max-w-xl mx-auto">
          “Trusted across Aligarh for interior design, construction, and premium
          building materials since 2010.”
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="rounded-2xl p-8 h-full bg-[#222] shadow-lg border border-[#ccc184] 
              text-[#F9F9F9] transition-transform hover:scale-105 hover:shadow-xl hover:border-[#eed08a]"
            >
              <FaQuoteLeft className="text-3xl mb-4 bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent" />
              <p className="mb-6 italic text-[#B0B0B0]">"{item.text}"</p>
              <div>
                <p className="font-semibold text-lg text-[#F9F9F9]">
                  {item.name}
                </p>
                <p className="text-sm text-[#B0B0B0]">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
