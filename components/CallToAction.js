import React from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import { motion } from "framer-motion";

export default function CallToAction() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col items-center justify-center h-[60vh] text-white"
    >
      <ParticlesBackground />

      <div
        className="absolute inset-0 blur-[118px] h-[400px] mx-auto"
        style={{
          background:
            "linear-gradient(45deg, rgba(192, 132, 252, 0.03) 0%, rgba(14, 165, 233, 0.08) 30%, rgba(232, 121, 249, 0.05) 70%, rgba(79, 70, 229, 0.03) 100%)",
        }}
      ></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to try Dupin?</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-gray-800 mt-16 md:mt-10 py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl"
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
