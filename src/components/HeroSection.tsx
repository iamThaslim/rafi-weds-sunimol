'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-marcellus text-2xl md:text-3xl lg:text-4xl mb-8 text-white leading-relaxed"
        >
          You are cordially invited to the wedding of
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-12 text-white leading-tight"
        >
          <div>Mohammed Rafi</div>
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-4">and</div>
          <div>Sunimol</div>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-marcellus text-xl md:text-2xl lg:text-3xl text-white space-y-4"
        >
          <p>Thursday the 7th of August, 2025</p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="h-px bg-white mx-auto my-6"
          />
          <p>Thammanam, palarivattom</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
