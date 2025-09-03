// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1A1A1A] text-center px-6 font-['Poppins']">
      {/* Large 404 Text */}
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#C9A44C] to-[#E3C567]">
        404
      </h1>

      {/* Message */}
      <p className="text-[#F9F9F9] text-lg mt-4 max-w-xl">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-8 flex items-center gap-2 px-6 py-3 rounded-full border border-[#C9A44C] text-[#F9F9F9] hover:bg-gradient-to-r hover:from-[#C9A44C] hover:to-[#E3C567] hover:text-[#1A1A1A] shadow-lg transition"
      >
        <Home size={20} />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
