'use client';

import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-[#ffffff] text-[#202020]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Contact</h2>
          <div className="w-24 h-1 bg-cyan-500 mb-6" />
          <p className="max-w-4xl">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column – Info */}
          <div className="space-y-8 shadow-lg p-6 rounded-md">
            {/* Address */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-cyan-500 mt-1" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            {/* Call */}
            <div className="flex items-start gap-4">
              <FaPhone className="text-cyan-500 mt-1" />
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-cyan-500 mt-1" />
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p>info@example.com</p>
              </div>
            </div>

            {/* Map */}
            <div className="w-full">
              <iframe
                className="w-full h-64 rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8898500153427!2d-74.01218068459356!3d40.71305477933111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19e6c3cfe5%3A0xfdfc7e12c6102aa5!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1592730215732!5m2!1sen!2sus"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Column – Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-3 w-full rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-3 w-full rounded"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 p-3 w-full rounded"
            />

            <textarea
              placeholder="Message"
              className="border border-gray-300 p-3 w-full rounded h-40 resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-cyan-600 text-white px-6 py-3 rounded-full hover:bg-cyan-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
