// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A] md:bg-transparent  font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Links (desktop only) */}
        <ul className="hidden md:flex items-center gap-8 text-[#F9F9F9] text-sm">
          <li className="hover:text-[#E5E5E5] cursor-pointer transition">Home</li>
          <li className="hover:text-[#E5E5E5] cursor-pointer transition">About Us</li>
          <li className="hover:text-[#E5E5E5] cursor-pointer transition">Services</li>
          <li className="hover:text-[#E5E5E5] cursor-pointer transition">Showcase</li>
          <li className="hover:text-[#E5E5E5] cursor-pointer transition">Contact Us</li>
        </ul>

        {/* Center: Text Logo */}
        <div className="flex-1 flex justify-center">
          <span className="text-[#F9F9F9] text-lg md:text-xl font-thin tracking-widest uppercase">
            Faiza{" "}
            <span className="tracking-widest bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent font-thin">
              Group
            </span>{" "}
            of Industries
          </span>
        </div>

        {/* Right: Contact + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Contact button (desktop only) */}
          <button className="hidden md:block px-5 py-2 rounded-full border border-[#C9A44C] text-[#F9F9F9] hover:bg-gradient-to-r hover:from-[#C9A44C] hover:to-[#E3C567] hover:text-[#1A1A1A] transition">
            Contact Us
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#F9F9F9]"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black text-[#F9F9F9] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close button */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#333333]">
          <span className="text-lg font-extrabold tracking-wide uppercase">
            Faiza{" "}
            <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
              Group
            </span>
          </span>
          <button onClick={() => setIsOpen(false)} className="text-[#F9F9F9]">
            <X size={28} />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-6 mt-6 px-6 text-lg font-medium">
          <li onClick={() => setIsOpen(false)} className="hover:text-[#E5E5E5] cursor-pointer transition">Home</li>
          <li onClick={() => setIsOpen(false)} className="hover:text-[#E5E5E5] cursor-pointer transition">About Us</li>
          <li onClick={() => setIsOpen(false)} className="hover:text-[#E5E5E5] cursor-pointer transition">Services</li>
          <li onClick={() => setIsOpen(false)} className="hover:text-[#E5E5E5] cursor-pointer transition">Showcase</li>
          <li onClick={() => setIsOpen(false)} className="hover:text-[#E5E5E5] cursor-pointer transition">Contact Us</li>
        </ul>

        {/* Divider */}
        <div className="border-t border-[#333333] my-6"></div>

        {/* Contact Info */}
        <div className=" px-6 text-sm text-[#B0B0B0] space-y-2">
          <p><span className="text-[#C9A44C]">Contact:</span> 9412559380, 9897949433</p>
          <p><span className="text-[#C9A44C]">Email:</span> Info@faizagroupofcompanies.in</p>
          <p><span className="text-[#C9A44C]">UDYAM:</span> UP-02-0091695</p>
          <p><span className="text-[#C9A44C]">NCS ID:</span> E20H75-1550062726267</p>
        </div>
 <div className="border-t border-[#333333] my-6"></div>
        {/* Social Icons */}
        <div className="flex gap-5 px-6 mt-6 absolute bottom-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A44C] transition">
            <Facebook size={22} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A44C] transition">
            <Twitter size={22} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A44C] transition">
            <Instagram size={22} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A44C] transition">
            <Linkedin size={22} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A44C] transition">
            <Youtube size={22} />
          </a>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
       {/* <div className="border-t border-[#cebb93] px-4"></div> */}
    </nav>
    
  );
};

export default Navbar;
