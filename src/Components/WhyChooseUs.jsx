import React from "react";
import why1 from "../assets/images/v6.jpg";
import why2 from "../assets/images/v7.jpg";
import bgImage from "../assets/images/whychoosebg.jpg"; // <-- add your background image here

export default function WhyChooseUs() {
  return (
    <section
      className="relative w-full text-[#F9F9F9] py-12 px-6 md:px-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <h2 className="text-center text-5xl md:text-7xl font-['Playfair_Display'] tracking-widest mb-12">
          WHY{" "}
          <span className="inline-block bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
            FAIZA GROUP?
          </span>
        </h2>

        {/* Top Row */}
        <div className="grid md:grid-cols-2 gap-10 items-center border-t border-b border-[#E5E5E5]/20 py-10">
          {/* Image Left */}
          <div>
            <img
              src={why1}
              alt="Luxury Interiors"
              className="w-full h-[280px] md:h-[350px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Right */}
          <div className="text-[#B0B0B0] leading-relaxed">
            <p className="font-['Poppins'] text-base md:text-lg">
              At{" "}
              <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent font-semibold">
                Faiza Group of Companies
              </span>
              , we redefine excellence across multiple industries — from
              construction and interiors to lifestyle and innovation. Our
              expertise lies in blending timeless luxury with modern solutions,
              ensuring every project stands as a masterpiece. We emphasize
              precision, premium finishes, and bespoke designs tailored for
              contemporary living. With a personalized approach, we transform
              ideas into realities that inspire, uplift, and endure.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid md:grid-cols-2 gap-10 items-center border-b border-[#E5E5E5]/20 py-10 mt-10">
          {/* Text Left */}
          <div className="text-[#B0B0B0] leading-relaxed">
            <p className="font-['Poppins'] text-base md:text-lg">
              With decades of combined expertise,{" "}
              <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent font-semibold">
                Faiza Group
              </span>{" "}
              ensures precision, innovation, and artistry in every detail. Our
              vision extends beyond aesthetics — we create experiences that
              embody trust, sophistication, and a legacy of quality. Every
              design reflects a balance of tradition and modernity, aging
              gracefully while staying relevant. Partnering with us means
              choosing a commitment to value, creativity, and a lifestyle that
              resonates with true luxury.
            </p>
          </div>

          {/* Image Right */}
          <div>
            <img
              src={why2}
              alt="Premium Design"
              className="w-full h-[280px] md:h-[350px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
