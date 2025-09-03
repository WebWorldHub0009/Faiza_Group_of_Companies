// src/pages/CertificatePage.jsx
import React, { useState } from "react";
import {
  FaEye,
  FaDownload,
  FaTimes,
  FaShieldAlt,
  FaCheckCircle,
  FaBuilding,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";

import udyam from "../assets/certificates/udyam.pdf";
import annexure from "../assets/certificates/udyam2.pdf";
import DocumentsHero from "../Components/DocumentsHero";

const certificates = [
  {
    id: 1,
    name: "Udyam Registration Certificate",
    description:
      "Official Udyam Registration Certificate issued by the Ministry of MSME, Government of India, verifying the registration of Faiza Group of Companies as a recognized enterprise.",
    file: udyam,
    tag: "Government Approved",
  },
  {
    id: 2,
    name: "Udyam Annexure",
    description:
      "Annexure attached to the Udyam Registration, containing detailed enterprise information of Faiza Group of Companies.",
    file: annexure,
    tag: "Official Document",
  },
];

const CertificatePage = () => {
  const [previewFile, setPreviewFile] = useState(null);

  return (
    <>
      <DocumentsHero />

      {/* Certificates Section */}
      <section className="relative w-full bg-[#1A1A1A] text-[#F9F9F9] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16" id="documents">
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase">
              Verified{" "}
              <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
                Certificates
              </span>
            </h1>
            <p className="mt-4 text-lg text-[#B0B0B0] max-w-3xl mx-auto">
              At{" "}
              <span className="font-bold text-[#C9A44C]">
                Faiza Group Of Companies
              </span>
              , we value transparency and credibility. Explore our government-approved
              documents that validate our authenticity, compliance, and recognition as a
              trusted enterprise.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {certificates.map(({ id, name, description, file, tag }) => (
              <div
                key={id}
                className="relative bg-[#222]/80 backdrop-blur-lg border border-[#333] rounded-3xl shadow-lg p-6 flex flex-col transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
              >
                {/* Ribbon */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#C9A44C] to-[#E3C567] text-black text-xs font-bold px-3 py-1 rounded-full shadow">
                  {tag}
                </div>

                {/* Title */}
                <div className="flex items-center gap-4 mb-4">
                  <HiDocumentText className="text-[#C9A44C] text-4xl" />
                  <h2 className="text-xl font-bold text-[#F9F9F9]">{name}</h2>
                </div>

                {/* Description */}
                <p className="text-[#B0B0B0] mb-6 text-base leading-relaxed flex-1">
                  {description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                  <button
                    onClick={() => setPreviewFile(file)}
                    className="w-full sm:w-auto flex-1 bg-gradient-to-r from-[#C9A44C] to-[#E3C567] text-black font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow-lg hover:scale-105 transition"
                  >
                    <FaEye />
                    View
                  </button>

                  <a
                    href={file}
                    download
                    className="w-full sm:w-auto flex-1 border border-[#C9A44C] text-[#C9A44C] hover:bg-gradient-to-r hover:from-[#C9A44C] hover:to-[#E3C567] hover:text-black font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow-lg transition"
                  >
                    <FaDownload />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Information Section */}
      <section className="bg-[#111] text-[#F9F9F9] py-20 px-6 shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-[#C9A44C] text-5xl mb-4" />
            <h3 className="text-xl font-bold">Government Approved</h3>
            <p className="mt-2 text-[#B0B0B0] text-sm">
              All our certificates are verified and approved by government authorities.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-[#E3C567] text-5xl mb-4" />
            <h3 className="text-xl font-bold">100% Authentic</h3>
            <p className="mt-2 text-[#B0B0B0] text-sm">
              Genuine legal documents that ensure transparency and trust.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaBuilding className="text-[#E3C567] text-5xl mb-4" />
            <h3 className="text-xl font-bold">Trusted Enterprise</h3>
            <p className="mt-2 text-[#B0B0B0] text-sm">
              Recognized under MSME with years of credibility and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* PDF Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-6">
          <div className="relative w-full max-w-4xl bg-[#1A1A1A] rounded-2xl shadow-2xl overflow-hidden border border-[#333]">
            <button
              onClick={() => setPreviewFile(null)}
              className="absolute top-3 right-3 bg-gradient-to-r from-[#C9A44C] to-[#E3C567] text-black rounded-full p-2 shadow hover:opacity-90 transition"
            >
              <FaTimes />
            </button>
            <iframe
              src={previewFile}
              title="Certificate Preview"
              className="w-full h-[80vh] border-0 rounded-b-2xl bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificatePage;
