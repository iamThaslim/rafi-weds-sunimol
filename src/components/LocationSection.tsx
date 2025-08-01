'use client';

import { motion } from 'framer-motion';

export default function LocationSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Google Map - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl h-96 lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d842.0210353756349!2d76.30826111273802!3d9.991819544495637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d239d3640d9%3A0x7e607279a048a792!2sMPM%20Pallipadi%20Auditorium!5e0!3m2!1sen!2sin!4v1754063635407!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Celestial Gardens Location"
                className="filter brightness-90 contrast-110"
              ></iframe>
            </div>
          </motion.div>
          
          {/* Text Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-herr-von-muellerhoff text-4xl md:text-5xl lg:text-6xl mb-8 text-white"
            >
              The Venue
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-marcellus text-lg md:text-xl text-white leading-relaxed space-y-6"
            >
              <p>
                The Celestial Gardens is a breathtaking venue nestled in the heart of Lorienvale, 
                offering an enchanting backdrop for our special celebration. With its lush gardens, 
                elegant architecture, and magical ambiance, it provides the perfect setting for our wedding reception.
              </p>
              
              <p>
                The venue features beautifully manicured gardens, twinkling lights, and sophisticated 
                indoor spaces that seamlessly blend with nature. Every corner of this venue tells a story 
                of romance and elegance, making it the ideal place to begin our new journey together.
              </p>
              
              <p>
                Located conveniently in Lorienvale, the venue offers ample parking and easy accessibility 
                for all our guests. The serene environment and stunning views will create lasting memories 
                for everyone who joins us on this joyous occasion.
              </p>
              
              <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <h4 className="font-herr-von-muellerhoff text-2xl mb-4 text-white">Getting There</h4>
                <p className="text-white/90">
                  The venue is easily accessible by car and public transportation. 
                  Detailed directions and parking information will be provided closer to the date.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
