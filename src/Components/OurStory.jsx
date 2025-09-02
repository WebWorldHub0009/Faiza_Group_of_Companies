// src/components/OurStory.jsx
import React from "react";
import imgLeft from "../assets/images/h1.jpg";
import imgRight from "../assets/images/h2.jpg";

const OurStory = () => {
  return (
    <section className="bg-[#1A1A1A] text-[#E5E5E5] px-6 md:px-12 lg:px-20 py-14 font-['Poppins']">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div className="flex flex-col justify-start">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-light leading-snug">
            Transforming Visions into Reality with{" "}
            <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent font-semibold">
              Faiza Group of Companies
            </span>
          </h2>

          {/* Content */}
          <p className="mt-6 max-w-lg text-[#B0B0B0]">
            Since 2010, Faiza Group of Companies has been Aligarh’s trusted
            partner in **interior design, construction, and contracting**. From
            crafting stunning interiors to delivering complete building
            solutions, we combine expertise with dedication to create spaces
            that inspire.
          </p>
          <p className="mt-4 max-w-lg text-[#B0B0B0]">
            Officially established in 2025, our legacy spans over a decade,
            rooted in Aligarh’s construction landscape. More than just a
            contractor, we are a one-stop destination offering{" "}
            <span className="text-[#F9F9F9] font-medium">
              premium building materials, raw construction supplies, and
              complete interior solutions
            </span>
            .
          </p>
          <p className="mt-4 max-w-lg text-[#B0B0B0]">
            Every project we undertake is driven by passion, precision, and a
            commitment to excellence — ensuring your dream spaces become a
            lasting reality.
          </p>

          {/* Small Image */}
          {/* <div className="mt-8 w-[250px]">
            <img
              src={imgLeft}
              alt="Faiza Group Interior Small"
              className="w-full object-cover rounded-md shadow-md"
            />
          </div> */}
        </div>

        {/* Right Large Image with Caption Below */}
        <div className="flex flex-col">
          <img
            src={imgRight}
            alt="Faiza Group Interior Large"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
          <p className="mt-4 text-sm italic text-[#B0B0B0] max-w-md">
            Building trust and transforming interiors — with expertise in
            construction, design, and premium material supply across Aligarh.
          </p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-[#B0B0B0]/40 mt-8"></div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#B0B0B0]/40 text-center mt-10">
        <div className="py-6 px-6">
          <h3 className="text-3xl font-bold text-[#F9F9F9]">10+</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#B0B0B0]">
            Years of Expertise <br />
            Crafting interiors & delivering excellence since 2010.
          </p>
        </div>
        <div className="py-6 px-6">
          <h3 className="text-3xl font-bold text-[#F9F9F9]">500+</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#B0B0B0]">
            Clients Served <br />
            Trusted by families, architects & businesses across Aligarh.
          </p>
        </div>
        <div className="py-6 px-6">
          <h3 className="text-3xl font-bold text-[#F9F9F9]">1000+</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#B0B0B0]">
            Projects Delivered <br />
            Interiors, construction & material solutions — all under one roof.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
