'use client';

import { motion } from 'framer-motion';

export default function SaveTheDateSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-herr-von-muellerhoff text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-12 text-white"
        >
          SAVE THE DATE
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="font-marcellus text-2xl md:text-3xl lg:text-4xl text-white mb-8"
        >
          Thursday, August 07, 2025
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="font-marcellus text-xl md:text-2xl text-white mb-8"
        >
          7:00 PM – Evening
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '150px' }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="h-px bg-white mx-auto my-8"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          viewport={{ once: true }}
          className="font-marcellus text-lg md:text-xl text-white space-y-4 leading-relaxed"
        >
          <p className="text-2xl md:text-3xl mb-6">Ponnurunni Juma Masjid</p>
          <p>Auditorium, Thammanam</p>
          <p>Palarivattom</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 max-w-2xl mx-auto"
        >
          <p className="font-marcellus text-lg text-white/90 leading-relaxed">
            We cannot wait to celebrate this joyous occasion with you. 
            Your presence will make our special day even more meaningful and memorable.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="font-herr-von-muellerhoff text-3xl md:text-4xl text-white">
            With Love & Gratitude
          </p>
          <p className="font-herr-von-muellerhoff text-2xl md:text-3xl text-white mt-4">
            Rafi & Sunimol
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
