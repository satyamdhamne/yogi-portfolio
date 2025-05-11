'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: "Film Production Design",
    description: "Creating immersive visual worlds that bring stories to life through detailed set design and artistic direction.",
    icon: "🎬",
  },
  {
    title: "Commercial Set Design",
    description: "Crafting compelling visual environments that enhance brand storytelling and audience engagement.",
    icon: "🎨",
  },
  {
    title: "Music Video Production",
    description: "Delivering creative concepts and artistic direction for visually striking music videos.",
    icon: "🎵",
  },
  {
    title: "Digital Content Design",
    description: "Developing cohesive visual aesthetics for digital platforms and branded content.",
    icon: "📱",
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,20,147,0.05),rgba(65,105,225,0.05))]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive production design services tailored to bring your creative vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative h-full glass-effect p-6 rounded-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-xl font-semibold mb-3 gradient-text">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full glass-effect text-white font-medium border border-white/10 hover:bg-white/5"
            >
              Discuss Your Project
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}