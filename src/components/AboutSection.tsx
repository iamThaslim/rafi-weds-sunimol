'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-herr-von-muellerhoff text-4xl md:text-5xl lg:text-6xl mb-8 text-white"
            >
              Our Love Story
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-marcellus text-lg md:text-xl text-white leading-relaxed space-y-6"
            >
              <p className="text-center italic mb-6">
                In the Name of Allah, the Most Gracious, the Most Merciful
              </p>
              
              <p>
                Two souls, brought together not by chance,
                but by the beautiful plan of Allah (SWT),
                are now united in Nikah.
              </p>
              
              <p>
                With hearts full of gratitude and joy,
                <span className="font-semibold"> Mohammed Rafi and Sunimol</span>
                <br />
                along with their families,
                <br />
                request the honor of your presence
                <br />
                as they begin their journey of love, faith, and companionship
                <br />
                through the sacred bond of marriage.
              </p>
              
              <p className="bg-white/10 p-4 rounded-lg border-l-4 border-white/30">
                🕋 &quot;And among His signs is that He created for you spouses from among yourselves,
                so that you may find tranquility in them, and He placed between you affection and mercy...&quot;
                <br />
                <span className="text-sm opacity-80">— Surah Ar-Rum (30:21)</span>
              </p>
              
              <p>
                Join us to witness and bless the Nikah ceremony
                <br />
                at
                <br />
                📍 <span className="font-semibold">Ponnurunni Juma Masjid Auditorium, Thammanam, Palarivattom, Ernakulam, Kerala</span>
              </p>
              
              <p className="text-center">
                May your presence make this day more meaningful and memorable.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/rafi_and_sunimol.JPG"
                alt="Mohammed Rafi and Sunimol"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
