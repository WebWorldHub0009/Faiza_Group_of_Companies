// src/components/Contact.jsx
import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import ContactHero from "../Components/ContactHero";
import MapSection from "../Components/MapSection";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <section className="min-h-screen bg-[#1A1A1A] text-[#F9F9F9] flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-7xl grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CONTACT</h2>
            <p className="text-[#B0B0B0] leading-relaxed mb-8 max-w-lg">
              Transform your vision into reality with{" "}
              <span className="font-semibold text-[#C9A44C]">
                Faiza Group Of Companies
              </span>
              , Aligarh's premier interior construction contractor. Since 2010,
              we've been crafting stunning and functional spaces for our clients.
              We specialize in interior design, construction, and contracting,
              bringing expertise and dedication to every project. Discover how we
              can help you create the perfect interior for your needs.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[#C9A44C]">
                  Address
                </h3>
                <p className="text-[#B0B0B0]">
                  House No. 2A Ground Floor, Faiza Manjil, Bypass Road, behind
                  Waqr Hospital, nearby Indian Oil Petrol Pump, Ali Nagar Colony,
                  Aligarh, Uttar Pradesh
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#C9A44C]">Phone</h3>
                <p className="text-[#B0B0B0]">9412559380, 9897949433</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#C9A44C]">E-mail</h3>
                <p className="text-[#B0B0B0]">
                  info@faizagroupofcompanies.in <br />
                  faizagroupofcompanies@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Side (Contact Form) */}
          <div className="bg-[#222] p-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">CONTACT FORM</h2>
            <form
              action="https://formsubmit.co/info@faizagroupofcompanies.in"
              method="POST"
              className="space-y-6"
            >
              {/* FormSubmit hidden config */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Form Submission" />

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-[#C9A44C]"
              />
              <input
                type="text"
                name="phone"
                placeholder="Your phone"
                required
                className="w-full px-4 py-3 bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-[#C9A44C]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your e-mail"
                required
                className="w-full px-4 py-3 bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-[#C9A44C]"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                required
                className="w-full px-4 py-3 bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-[#C9A44C]"
              ></textarea>

              <button
                type="submit"
                className="cursor-pointer px-6 py-3 bg-gradient-to-r from-[#C9A44C] to-[#E3C567] text-black font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
              >
                SEND MESSAGE →
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="flex gap-6 mt-12">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B0B0B0] hover:text-[#C9A44C] transition"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B0B0B0] hover:text-[#C9A44C] transition"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B0B0B0] hover:text-[#C9A44C] transition"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B0B0B0] hover:text-[#C9A44C] transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B0B0B0] hover:text-[#C9A44C] transition"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </section>
      <MapSection/>
    </>
  );
};

export default Contact;
