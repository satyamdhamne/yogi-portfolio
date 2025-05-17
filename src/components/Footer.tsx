'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const socialLinks = [
  { href: 'https://www.instagram.com/', icon: '/assets/social_icons/insta.png', alt: 'Instagram' },
  { href: 'https://www.imdb.com/', icon: '/assets/social_icons/imdb.png', alt: 'IMDB' },
  { href: 'mailto:someone@example.com', icon: '/assets/social_icons/Gmail.png', alt: 'Gmail' },
  { href: 'https://wa.me/', icon: '/assets/social_icons/whatsapp.png', alt: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="relative z-10 py-4 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2"
          >
            <Image
              src="/images/logos/lionspire.jpeg"
              alt="Lionspire Logo"
              width={30}
              height={30}
              className="rounded-full object-cover"
            />
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent font-poppins">
              Lionspire
            </h3>
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