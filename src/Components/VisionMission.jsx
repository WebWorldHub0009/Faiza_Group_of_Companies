// src/components/VisionMission.jsx
import React from "react";
import visionBg from "../assets/images/vision.jpg";
import mobileVisionBg from "../assets/images/mobilevision.jpg";

const VisionMission = () => {
  return (
    <>
      {/* Desktop / Tablet View */}
      <section
        className="relative hidden md:flex h-screen w-full bg-cover bg-center items-center"
        style={{
          backgroundImage: `url(${visionBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative container mx-auto px-6 lg:px-12 flex justify-end">
          <div className="w-full lg:w-1/2 text-white space-y-10 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl">
            {/* Vision */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="mt-4 text-md md:text-lg text-gray-200 leading-relaxed tracking-wide">
                To redefine Aligarh’s construction and interior landscape with
                innovation, quality, and elegance — building trust while shaping
                spaces that inspire and endure.
              </p>
            </div>

            {/* Divider */}
            <div className="h-[2px] w-20 bg-gradient-to-r from-[#C9A44C] to-[#E3C567] rounded-full"></div>

            {/* Mission */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="mt-4 text-md md:text-lg text-gray-200 leading-relaxed tracking-wide">
                To deliver excellence through premium building materials,
                construction solutions, and interior contracting — turning every
                vision into a timeless reality with creativity and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section
        className="relative flex md:hidden h-screen w-full bg-cover bg-center items-center"
        style={{
          backgroundImage: `url(${mobileVisionBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative container mx-auto px-6 flex justify-center">
          <div className="w-full text-white space-y-8 p-6 rounded-2xl shadow-xl text-center">
            {/* Vision */}
            <div>
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                To redefine Aligarh’s construction and interior landscape with
                innovation, quality, and elegance — building trust while shaping
                spaces that inspire and endure.
              </p>
            </div>

            {/* Divider */}
            <div className="h-[2px] w-16 mx-auto bg-gradient-to-r from-[#C9A44C] to-[#E3C567] rounded-full"></div>

            {/* Mission */}
            <div>
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                To deliver excellence through premium building materials,
                construction solutions, and interior contracting — turning every
                vision into a timeless reality with creativity and precision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;
