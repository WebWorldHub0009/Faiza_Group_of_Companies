import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaIndustry,
  FaTags,
  FaInfoCircle,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";
import bgImage from "../assets/images/statsbg.avif"; // Ensure path is correct

// Updated FAQ Content for Faiza Group of Companies
const faqCategories = {
  "About Faiza Group": {
    icon: <FaInfoCircle className="text-[#C9A44C] text-xl" />,
    faqs: [
      {
        question: "Who is Faiza Group of Companies?",
        answer:
          "Faiza Group of Companies is Aligarh’s premier interior construction contractor, officially established in 2025 with roots dating back to 2010. We specialize in creating stunning, functional interiors that combine elegance and precision.",
      },
      {
        question: "What is your legacy and experience?",
        answer:
          "Although formally founded in 2025, we bring over a decade of expertise in interior design and construction, building trust through quality and innovation since 2010.",
      },
      {
        question: "What makes Faiza Group unique?",
        answer:
          "Our approach blends timeless tradition with modern innovation. Every project is personalized, ensuring a balance of luxury, functionality, and long-lasting impact.",
      },
      {
        question: "Where is Faiza Group headquartered?",
        answer:
          "We are proudly headquartered in Aligarh, Uttar Pradesh, serving clients locally and globally.",
      },
    ],
  },
  "Industries & Services": {
    icon: <FaIndustry className="text-[#C9A44C] text-xl" />,
    faqs: [
      {
        question: "What services do you offer?",
        answer:
          "We specialize in interior construction, design, and contracting, along with real estate, manufacturing, and trading solutions to meet diverse client needs.",
      },
      {
        question: "Do you provide customized interior solutions?",
        answer:
          "Yes. From residential to commercial projects, we create bespoke designs tailored to reflect each client’s unique aspirations.",
      },
      {
        question: "Do you focus on sustainability?",
        answer:
          "Absolutely. We integrate eco-friendly practices, sustainable materials, and energy-efficient solutions into every project.",
      },
      {
        question: "Do you also manage turnkey projects?",
        answer:
          "Yes, we provide end-to-end turnkey solutions, handling everything from concept and design to execution and delivery.",
      },
    ],
  },
  "Investments & Partnerships": {
    icon: <FaTags className="text-[#C9A44C] text-xl" />,
    faqs: [
      {
        question: "Can I collaborate with Faiza Group?",
        answer:
          "Yes, we welcome partnerships with investors, entrepreneurs, and businesses that align with our vision of excellence and sustainability.",
      },
      {
        question: "Why should I invest with Faiza Group?",
        answer:
          "Our projects deliver high ROI, premium quality, and long-term value backed by over a decade of expertise and a global outlook.",
      },
      {
        question: "Do you work with international partners?",
        answer:
          "Yes, we collaborate globally, ensuring our services and projects meet international quality benchmarks.",
      },
      {
        question: "How do you select your partnerships?",
        answer:
          "We partner with those who share our values of integrity, innovation, and commitment to excellence.",
      },
    ],
  },
  "Clients & Support": {
    icon: <FaUsers className="text-[#C9A44C] text-xl" />,
    faqs: [
      {
        question: "Who are your clients?",
        answer:
          "Our clients range from homeowners and entrepreneurs to corporate organizations and government institutions seeking premium services.",
      },
      {
        question: "How do you ensure customer satisfaction?",
        answer:
          "Through transparency, attention to detail, and personalized service. Every project is delivered with passion and precision to exceed expectations.",
      },
      {
        question: "How can I contact you?",
        answer:
          "You can reach us via our official website, email, or dedicated client support line. We also provide personalized consultation sessions.",
      },
      {
        question: "Do you provide post-project support?",
        answer:
          "Yes, we offer after-service support and maintenance to ensure long-term satisfaction and value.",
      },
    ],
  },
  "Global Presence": {
    icon: <FaGlobe className="text-[#C9A44C] text-xl" />,
    faqs: [
      {
        question: "Do you operate internationally?",
        answer:
          "Yes. Faiza Group has expanding networks in the Middle East, South Asia, Africa, and plans for Europe and North America.",
      },
      {
        question: "Can you handle international interior projects?",
        answer:
          "Absolutely. We deliver turnkey interior and construction projects, ensuring premium quality and global standards.",
      },
      {
        question: "How do you maintain international standards?",
        answer:
          "By adhering to global certifications, using premium materials, and collaborating with world-class experts.",
      },
      {
        question: "Do you collaborate with global architects and designers?",
        answer:
          "Yes, we partner with internationally renowned experts to deliver cutting-edge designs and solutions.",
      },
    ],
  },
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("About Faiza Group");
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabChange = (tab) => {
    setOpenIndex(null);
    setActiveTab(tab);
  };

  return (
    <section
      className="relative w-full py-24 px-4 md:px-10 bg-cover bg-center text-[#F9F9F9] overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0D0D0D]/90 z-0" />

      <div className="relative max-w-7xl mx-auto rounded-3xl shadow-2xl bg-gradient-to-br from-[#111]/95 to-[#1A1A1A]/85 z-10 backdrop-blur-md">
        {/* Heading */}
        <div className="text-center py-14 px-6 border-b border-[#333]/50">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-[#B0B0B0] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Learn more about Faiza Group of Companies, our services,
            partnerships, and global presence.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left Tabs with Icons */}
          <div className="md:w-1/3 bg-[#111] p-6 border-r border-[#333]/50 flex flex-col gap-4">
            {Object.entries(faqCategories).map(([category, data], idx) => (
              <motion.button
                key={idx}
                onClick={() => handleTabChange(category)}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                className={`cursor-pointer relative text-left w-full px-5 py-4 rounded-lg flex items-center gap-3 font-medium text-sm md:text-base transition-all duration-300 ${
                  activeTab === category
                    ? "bg-gradient-to-r from-[#C9A44C] to-[#E3C567] text-[#1A1A1A] shadow-lg"
                    : "bg-transparent text-[#B0B0B0] hover:text-[#F9F9F9] hover:bg-[#222]/40"
                }`}
              >
                {activeTab === category && (
                  <motion.div
                    layoutId="activeBorder"
                    className="absolute inset-0 rounded-lg border-2 border-[#C9A44C]/80"
                  />
                )}
                <span className="z-10 flex items-center gap-2">
                  {data.icon}
                  {category}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Right Questions */}
          <div className="md:w-2/3 p-6 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {faqCategories[activeTab].faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-[#333]/50 py-4 hover:bg-[#222]/40 transition-colors duration-300 rounded-md px-2"
                  >
                    <button
                      className="cursor-pointer w-full flex justify-between items-center text-left font-semibold text-base sm:text-lg"
                      onClick={() =>
                        setOpenIndex(index === openIndex ? null : index)
                      }
                    >
                      {faq.question}
                      <motion.span
                        animate={{
                          rotate: openIndex === index ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent text-2xl font-bold"
                      >
                        {openIndex === index ? "−" : "+"}
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="text-[#E5E5E5] mt-3 text-sm leading-relaxed overflow-hidden"
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
