import React from "react";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="relative py-28 bg-gray-900 min-h-screen">
      
      <Navbar />


      
      
      <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8 flex items-center">
      <ParticlesBackground />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-lg space-y-3 px-4 sm:text-left sm:px-0"
        >
          <motion.p className="text-white text-3xl font-semibold sm:text-4xl">
            Get in touch
          </motion.p>
          <motion.p className="text-gray-100 pt-4">
            We'd love to hear from you! If you have any questions or feedback,
            please don't hesitate to reach out using the form below. Our team
            will get back to you as soon as possible.
          </motion.p>
          <motion.div className="flex pt-4 space-x-4">
            <motion.a
              href="https://wa.me/1234567890"
              className="hover:text-gray-200"
            >
              <FaWhatsapp className="inline-block mr-2 text-3xl" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/your_instagram"
              className="hover:text-gray-200"
            >
              <FaInstagram className="inline-block mr-2 text-3xl" />
            </motion.a>
            <motion.a href="mailto:contact@example.com" className="hover:text-gray-200">
              <FaEnvelope className="inline-block mr-2 text-3xl" />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-2xl sm:px-8 sm:rounded-xl"
        >
          <div className="mb-2">
            <label className="font-medium">Full name</label>
            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              placeholder="example@example.com"
              className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label className="font-medium">Phone number</label>
            <div className="relative">
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                required
                className="w-full pl-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
          </div>
          <div className="mb-2">
            <label className="font-medium">Message</label>
            <textarea
              required
              className="w-full h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              placeholder="Enter your message here..."
            ></textarea>
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
            Submit
          </button>
        </motion.form>
        <div
  className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
  style={{
    background:
      "linear-gradient(45deg, rgba(192, 132, 252, 0.03) 0%, rgba(14, 165, 233, 0.08) 30%, rgba(232, 121, 249, 0.05) 70%, rgba(79, 70, 229, 0.03) 100%)",
  }}
></div>

      </div>
    
    </div>
    
  );
}
