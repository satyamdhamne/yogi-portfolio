'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_90%,rgba(255,20,147,0.05),rgba(65,105,225,0.05))]" />
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Contact</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ready to collaborate or have a project in mind? Let’s connect and create something extraordinary together.
          </p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto glass-effect p-8 rounded-2xl shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <textarea
            placeholder="Your message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white focus:outline-none focus:ring-2 focus:ring-primary mb-6"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium shadow-lg"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}