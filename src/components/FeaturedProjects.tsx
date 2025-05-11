'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@headlessui/react';

const projects = {
  ads: [
    {
      title: "Brand Campaign",
      role: "Production Designer",
      image: "/assets/yogi_ads/ad1.png",
      description: "Led visual direction for major brand campaign",
      gradient: "from-primary-purple to-primary-pink"
    },
    {
      title: "Commercial Production",
      role: "Art Director",
      image: "/assets/yogi_ads/ad2.jpg",
      description: "Innovative commercial set design and production",
      gradient: "from-primary-teal to-primary-blue"
    }
  ],
  films: [
    {
      title: "Asa Me Ashee Mee",
      role: "Production Designer",
      image: "/assets/Yogesh films/Asa Me Ashee Mee.jpeg",
      description: "Feature film production design and art direction",
      gradient: "from-primary-orange to-primary-yellow"
    },
    {
      title: "Dwidha",
      role: "Creative Director",
      image: "/assets/Yogesh films/Dwidha.jpeg",
      description: "Psychological thriller set design",
      gradient: "from-primary-lime to-primary-cyan"
    },
    {
      title: "The AI Drama Story",
      role: "Production Designer",
      image: "/assets/Yogesh films/the ai drama story.jpeg",
      description: "Futuristic sci-fi production design",
      gradient: "from-primary-purple to-primary-blue"
    }
  ],
  songs: [
    {
      title: "Chicki Chicki Boom Boom",
      role: "Art Director",
      image: "/assets/Yogesh films/chciki chicki boom boom.jpeg",
      description: "High-energy music video production",
      gradient: "from-primary-pink to-primary-orange"
    },
    {
      title: "iLU ILU",
      role: "Creative Director",
      image: "/assets/Yogesh films/iLU ILU.jpeg",
      description: "Romantic music video concept and design",
      gradient: "from-primary-teal to-primary-yellow"
    }
  ]
};

const categories = Object.keys(projects);

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,20,147,0.05),rgba(65,105,225,0.05))]" />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={tabVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated selection of production design work across various mediums
          </p>
        </motion.div>

        <Tab.Group>
          <Tab.List className="flex p-1 space-x-2 bg-white/5 backdrop-blur-sm rounded-xl mb-12 max-w-2xl mx-auto">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `w-full rounded-lg py-3 text-sm font-medium leading-5 transition-all duration-300
                   ${selected 
                    ? 'glass-effect text-primary shadow-lg scale-105'
                    : 'text-gray-400 hover:text-primary hover:bg-white/5'
                   }`
                }
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            <AnimatePresence mode="wait">
              {Object.entries(projects).map(([category, items]) => (
                <Tab.Panel
                  key={category}
                  static
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                    {items.map((project, index) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative rounded-2xl overflow-hidden"
                      >
                        <div className="relative h-64">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {project.image && (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          )}
                        </div>
                        <div className="relative glass-effect p-6 min-h-[200px]">
                          <h3 className="text-xl font-semibold mb-2 gradient-text">{project.title}</h3>
                          <p className="text-sm text-gray-400 mb-4">{project.role}</p>
                          <p className="text-gray-300">{project.description}</p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <motion.button 
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-full glass-effect px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-colors"
                            >
                              View Project
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </Tab.Panel>
              ))}
            </AnimatePresence>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}