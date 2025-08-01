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
              <p>
                Mohammed Rafi and Sunimol&apos;s journey began as a beautiful friendship that blossomed into eternal love. 
                Their bond has been strengthened through shared dreams, laughter, and unwavering support for one another.
              </p>
              
              <p>
                As they embark on this new chapter of their lives together, they invite you to witness and celebrate 
                their union. Your presence would add joy and meaning to their special day, creating memories that will 
                be cherished forever.
              </p>
              
              <p>
                Join them as they exchange vows and begin their married life surrounded by the love and blessings 
                of family and friends at The Celestial Gardens in the picturesque town of Lorienvale.
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
