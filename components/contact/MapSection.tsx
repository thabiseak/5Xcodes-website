'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPinIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/outline';

export function MapSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-deep-blue to-electric-blue bg-clip-text text-transparent">
              Find Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our office in Jaffna, Sri Lanka or connect with us remotely. 
            We're always here to help with your digital transformation needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl overflow-hidden h-96 shadow-glass border border-white/20">
              {/* Google Maps Embed for Jaffna, Sri Lanka */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63041.71776589574!2d80.0008!3d9.6615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe54aaaaaaec29%3A0x1f0e4c505fcdf77a!2sJaffna%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="5Xcodes Office Location - Jaffna, Sri Lanka"
              ></iframe>
            </div>
          </motion.div>

          {/* Office Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Main Office */}
            <div className="bg-white rounded-2xl p-8 shadow-glass border border-white/20">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-neon-purple rounded-xl flex items-center justify-center mr-4">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Office Location
                  </h3>
                  <p className="text-gray-600">
                    Jaffna, Sri Lanka
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Location</div>
                  <div className="text-gray-600">
                    Jaffna<br />
                    Northern Province<br />
                    Sri Lanka
                  </div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Phone</div>
                  <div className="text-gray-600">+94 76 895 4797</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <div className="text-gray-600">hello@5xcodes.com</div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-electric-blue/10 to-neon-purple/10 rounded-2xl p-8 border border-electric-blue/20">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <ClockIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Office Hours
                  </h3>
                  <p className="text-gray-600">
                    We're here to help
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Saturday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-semibold text-gray-900">Closed</span>
                </div>
                <div className="pt-3 border-t border-white/20">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-700 font-semibold">Remote Support Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="bg-white rounded-2xl p-8 shadow-glass border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center p-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white rounded-xl hover:shadow-neon transition-all duration-300"
                >
                  <PhoneIcon className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">Call Us Now</div>
                    <div className="text-sm opacity-90">+94 76 895 4797</div>
                  </div>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center p-4 bg-white border-2 border-electric-blue text-electric-blue rounded-xl hover:bg-electric-blue hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold">Send Email</div>
                    <div className="text-sm opacity-90">hello@5xcodes.com</div>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}