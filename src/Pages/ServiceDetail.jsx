// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 🔑 Import background image for Key Highlights
import highlightsBg from "../assets/images/statsbg.avif"; // Replace with your actual bg image path

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(
    (item) => item.path.split("/").pop() === id
  );

  const [openFAQ, setOpenFAQ] = React.useState(null);

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400 text-xl bg-black">
        Service not found
      </div>
    );
  }

  return (
    <div className=" bg-gradient-to-b from-black via-[#0d0d0d] to-[#1a1a1a] text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex items-end">
          <div className="px-10 md:px-20 pb-16 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg relative inline-block font-['Playfair_Display']">
              {service.title}
              <span className="absolute left-0 -bottom-2 h-1 w-2/3 bg-gradient-to-r from-[#C9A44C] to-[#E3C567] rounded-full"></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Long Description */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent mb-6">
          About This Service
        </h2>
        <p className="text-lg leading-relaxed text-gray-300 border-l-4 border-[#C9A44C] pl-6">
          {service.longDescription}
        </p>
      </section>

      {/* Key Highlights */}
      <section
        className="relative py-20 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${highlightsBg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-center bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent mb-12">
            Why Choose Us? – Key Highlights That Make the Difference
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.quickPoints.map((point, index) => (
              <div
                key={index}
                className="relative bg-[#1a1a1a]/90 backdrop-blur-sm rounded-2xl shadow-md p-8 text-center border border-gray-700 hover:shadow-xl hover:-translate-y-2 transition"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C9A44C] to-[#E3C567] rounded-t-2xl"></div>
                <CheckCircle className="w-12 h-12 text-[#C9A44C] mx-auto mb-6" />
                <p className="text-lg text-gray-200 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
  <h2 className="text-3xl font-semibold text-center bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent mb-12">
    Frequently Asked Questions
  </h2>
  <div className="space-y-6">
    {service.faqs.map((faq, index) => (
      <motion.div
        key={index}
        layout
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`border rounded-2xl overflow-hidden shadow-sm ${
          openFAQ === index
            ? "border-[#C9A44C] bg-[#1a1a1a]"
            : "border-gray-700 bg-[#0d0d0d]"
        }`}
      >
        <button
          onClick={() =>
            setOpenFAQ(openFAQ === index ? null : index)
          }
          className="cursor-pointer w-full flex justify-between items-center px-6 py-5 text-left font-medium text-white hover:bg-[#1a1a1a] transition"
        >
          {faq.q}
          {openFAQ === index ? (
            <ChevronUp className="w-5 h-5 text-[#C9A44C]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>
        <AnimatePresence>
          {openFAQ === index && (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="px-6 pb-6 text-gray-300 text-base leading-relaxed"
            >
              {faq.a}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    ))}
  </div>
</section>


      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#C9A44C] to-[#E3C567]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-black mb-6 drop-shadow font-['Playfair_Display']">
            Ready to start your project with {service.title}?
          </h2>
          <p className="text-lg text-black/80 mb-10">
            Let our experts bring your vision to life with elegance and
            precision. Get in touch today and let’s create something
            extraordinary together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-black text-white font-medium text-lg hover:bg-[#0d0d0d] transition shadow-lg"
          >
            Contact Us <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
