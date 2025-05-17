'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';



export default function Footer() {
  return (
    <footer className="relative z-50 py-6 md:py-4 bg-black/20 backdrop-blur-sm mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2"
          >            <Image
              src="/images/logos/lionspire.jpeg"
              alt="Lionspire Logo"
              width={45}
              height={45}
              className="rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-125"
            /><h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ff1cf7] to-[#b249f8] font-poppins tracking-wide">
              Lionspire
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-6 w-full"
          >

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-white/70 text-sm">
              &copy; {new Date().getFullYear()} Lionspire Innovations.
            </p>
            <p className="text-white/50 text-xs">
              All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}