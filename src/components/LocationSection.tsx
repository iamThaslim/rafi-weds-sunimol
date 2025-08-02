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
                title="MPM Pallipadi Auditorium Location"
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
                MPM Pallipadi Auditorium in Kaloor, Ernakulam has been serving the community for many years 
                as a leading auditorium venue. Conveniently located near Pallipadi Juma Masjid, Palarivattom, 
                this banquet hall blends sophistication and comfort, making it an ideal choice for our special Nikah ceremony.
              </p>
              
              <p>
                Established in 2019 and rated 4.1 stars based on 233 reviews, MPM Pallipadi Auditorium has 
                earned a reputation for making every occasion memorable. The venue specializes in hosting 
                a variety of events, offering ample space for large gatherings as well as intimate celebrations.
              </p>
              
              <p>
                The auditorium provides excellent amenities to ensure comfort for all our guests, including 
                wheelchair accessible entrance and exit, as well as wheelchair accessible car parking facilities, 
                ensuring that everyone can join us in celebrating this blessed occasion.
              </p>
              
              <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <h4 className="font-herr-von-muellerhoff text-2xl mb-4 text-white">Venue Details</h4>
                <div className="text-white/90 space-y-2">
                  <p><strong>📍 Location:</strong> Near Pallipadi Juma Masjid, Palarivattom, Kaloor, Ernakulam</p>
                  <p><strong>⭐ Rating:</strong> 4.1/5 stars (233 reviews)</p>
                  <p><strong>🚗 Accessibility:</strong> Wheelchair accessible entrance, exit, and parking</p>
                  <p><strong>📅 Established:</strong> 2019</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
