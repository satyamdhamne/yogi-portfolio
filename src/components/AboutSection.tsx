'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,20,147,0.05),rgba(65,105,225,0.05))]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative group">
              <motion.div
                initial={{ scale: 0.8, rotate: 6 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl -z-10 transform rotate-6 group-hover:rotate-12 transition-transform duration-300"
              />
              <div className="relative overflow-hidden rounded-2xl w-full aspect-[4/5]">
                <Image
                  src="/images/profile.jpeg"
                  alt="Yogesh Ingle"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >              <p className="text-gray-300 italic text-xl mb-6">
                &quot;Picture abhi baaki hai mere dost...&quot;
              </p>
              
              <p className="text-gray-300 mb-4">
                Because every frame has a story, and I&apos;m here to bring it to life.
              </p>

              <p className="text-gray-300 mb-4">
                I&apos;m Yogesh Ingle, a freelance Production Designer driven by the art of visual storytelling. From the sweeping scale of cinema to the sharp precision of ads, web series, music videos, and branded content—I design with purpose, passion, and cinematic flair. My canvas is vast, and every detail tells a story.
              </p>

              <p className="text-gray-300 mb-4">
                With a strong foundation in design and aesthetics, I transform words on a page into immersive, unforgettable environments. From crafting mood boards to executing full-scale sets, every step is a blend of creativity and storytelling—brought to life with precision and heart.
              </p>

              <p className="text-gray-300 mb-4">
                Each project is a new journey. Each frame, a chance to create magic.
              </p>

              <p className="text-gray-300 mb-4">
                Big or small. Bold or subtle.
              </p>

              <p className="text-gray-300 mb-6">
                Let&apos;s craft something unforgettable. Let&apos;s make movie magic.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3 mt-6"
              >
                {['Film Production', 'Set Design', 'Art Direction', 'Visual Storytelling', 'Production Management'].map((skill) => (
                  <span
                    key={skill}
                    className="glass-effect px-4 py-2 rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}