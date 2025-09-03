// src/components/MapSection.jsx
import React from "react";
import { MapPin } from "lucide-react";

export default function MapSection() {
  return (
    <section className="relative py-16 px-6 bg-[#1d1d1d] text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            <MapPin className="w-8 h-8 text-[#C9A44C]" />
            Find Us on the Map
          </h2>
          <p className="mt-3 text-[#C9A44C] max-w-2xl mx-auto">
            Visit our office at the given location. You can use the map below to
            navigate easily.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112816.0698737248!2d78.01844556554369!3d27.917246186090342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3974a546e702d4d5%3A0x8f317e6bada01283!2sHouse%20No.%202A%20Ground%20Floor%2C%20Faiza%20Manjil%2C%20Bypass%20Road%2C%20behind%20Waqr%20Hospital%2C%20nearby%20Indian%20Oil%20Petrol%20Pump%2C%20Ali%20Nagar%20Colony%2C%20Aligarh%2C%20Uttar%20Pradesh%20202001!3m2!1d27.9172707!2d78.100847!5e0!3m2!1sen!2sin!4v1756878898194!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

        {/* Info Box */}
    
      </div>
    </section>
  );
}
