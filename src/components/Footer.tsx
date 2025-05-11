'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const socialLinks = [
  { href: 'https://www.instagram.com/', icon: '/assets/social_icons/insta.png', alt: 'Instagram' },
  { href: 'https://www.imdb.com/', icon: '/assets/social_icons/imdb.png', alt: 'IMDB' },
  { href: 'mailto:someone@example.com', icon: '/assets/social_icons/Gmail.png', alt: 'Gmail' },
  { href: 'https://wa.me/', icon: '/assets/social_icons/whatsapp.png', alt: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="relative z-10 py-10 bg-background border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm"
        >
          &copy; {new Date().getFullYear()} Yogesh Ingle. All rights reserved.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          {socialLinks.map((link) => (
            <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              <motion.img
                whileHover={{ scale: 1.15, rotate: 6 }}
                whileTap={{ scale: 0.95 }}
                src={link.icon}
                alt={link.alt}
                className="w-7 h-7 object-contain filter grayscale hover:grayscale-0 transition duration-300"
              />
            </Link>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}