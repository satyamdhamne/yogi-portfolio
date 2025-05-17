'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface Project {
  title: string;
  role: string;
  image: string;
  description?: string;  // Made optional with ?
  gradient: string;
  link?: string;
  status?: string;
}

interface Projects {
  [key: string]: Project[];
}

const projects: Projects = {
  "ads": [
    {
      title: "Mohini by Sonigra",
      role: "Production Designer",
      image: "/images/ads/ad1.png",
      description: "Led visual direction for major brand campaign",
      gradient: "from-primary-purple to-primary-pink",
      link: "https://youtu.be/-q4SbIVGp_4?si=5Qe90neXbGyt6Lgk"
    },
    {
      title: "Rajyog Paints",
      role: "Production Designer",
      image: "/images/ads/ad2.jpg",
      description: "Innovative commercial set design and production",
      gradient: "from-primary-teal to-primary-blue",
      link: "https://youtu.be/TWGLqLyJh7c?si=n7CZZeSuenldhjQt"
    }
  ],
  "films": [

    {
      title: "The AI Drama Story",
      role: "Production Designer",
      image: "/images/films/the ai drama story.jpeg",
      description: "Futuristic sci-fi production design",
      gradient: "from-primary-purple to-primary-blue",
      link:"https://www.youtube.com/watch?v=_9ugbNoNW10"
    },
        {
      title: "Chicki Chicki Boom Boom",
      role: "Production Designer",
      image: "/images/films/chciki chicki boom boom.jpeg",
      description: "High-energy music video production",
      gradient: "from-primary-pink to-primary-orange",
      link:"https://www.youtube.com/watch?v=jH7gEkvKfjQ"
    },
      {
      title: "iLU ILU",
      role: "Production Designer",
      image: "/images/films/iLU ILU.jpeg",
      description: "Romantic music video concept and design",
      gradient: "from-primary-teal to-primary-yellow",
      link:"https://www.youtube.com/results?search_query=ilu+ilu+trailer"
    },
    {
      title: "Main Mulayam Singh Yadav",
      role: "Production Designer",
      image: "/images/films/main mulayam singh yadav.jpeg",
      description: "Political drama with intricate set design",
      gradient: "from-primary-purple to-primary-pink",
      link:"https://www.youtube.com/watch?v=3DJWniVfsGw"
    },
    {
      title: "Susaat",
      role: "Production Designer",
      image: "/images/films/sussat.jpeg",
      description: "Innovative production design for a gripping story",
      gradient: "from-primary-orange to-primary-yellow",
      link:"https://www.youtube.com/watch?v=E1IYkQFYOwU"
    },
     {
      title: "Fatwa",
      role: "Production Designer",
      image: "/images/films/fatwa.jpeg",
      gradient: "from-primary-orange to-primary-yellow",
      link:"https://www.youtube.com/watch?v=NkPbwyCt7pQ"
    },
    {
      title: "Mom Tane Nhi Samjhay",
      role: "Production Designer",
      image: "/images/films/mom",
      gradient: "from-primary-orange to-primary-yellow",
      link:"https://www.youtube.com/watch?v=pGz51rTqNKU"
    }
  ],
  "songs": [

    {
      title: "iLU ILU",
      role: "Production Designer",
      image: "/images/films/coming-soon.png",
      description: "Romantic music video concept and design",
      gradient: "from-primary-teal to-primary-yellow",
      link:"https://www.youtube.com/results?search_query=ilu+ilu+trailer"
    }
  ],
  "upcoming films": [    {
      title: "Dwidha",
      role: "Production Designer",
      image: "/images/films/Dwidha.jpeg",
      gradient: "from-primary-purple to-primary-pink",
      status: "Coming Soon",
      link:"https://www.youtube.com/watch?v=E1IYkQFYOwU"
    },
    {
      title: "Susaat",
      role: "Production Designer",
      image: "/images/films/sussat.jpeg",
      gradient: "from-primary-orange to-primary-yellow",
      status: "Coming Soon",
      // link:"https://www.youtube.com/watch?v=E1IYkQFYOwU"

    },
    {
      title: "Asa Me Ashee Mee",
      role: "Production Designer",
      image: "/images/films/Asa Me Ashee Mee.jpeg",
      gradient: "from-primary-teal to-primary-blue",
      status: "Coming Soon",
      // link:"https://www.youtube.com/watch?v=E1IYkQFYOwU"

    }
  ]
};

const categories = Object.keys(projects);

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (window.location.hash) {
      const category = window.location.hash.slice(1);
      const categoryIndex = categories.indexOf(category);
      if (categoryIndex !== -1) {
        setSelectedIndex(categoryIndex);
        if (sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, []);

  return (    <section ref={sectionRef} id="work" className="py-20 relative overflow-hidden">      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(127,83,172,0.08),rgba(94,96,206,0.05))]" />
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
        </motion.div>        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex p-1 space-x-4 rounded-xl mb-12 max-w-2xl mx-auto bg-[#292e49]/10 backdrop-blur-sm">
            {categories.map((category) => (
              <Tab
                key={category}
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.history.pushState({}, '', `#${category}`);
                  }
                }}                className={({ selected }) =>
                  `w-full rounded-lg py-3 text-sm font-medium leading-5 transition-all duration-300 cursor-pointer
                   ${selected 
                    ? 'bg-[#7f53ac] text-white shadow-lg'
                    : 'text-white/70 hover:bg-[#5e60ce] hover:text-white'
                   }`
                }
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Tab>
            ))}
          </Tab.List>          <Tab.Panels>
            <AnimatePresence mode="wait">
              {categories.map((category, idx) => (
                <Tab.Panel
                  key={category}
                  static
                >
                  {selectedIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                      {projects[category].map((project, index) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative rounded-2xl overflow-hidden bg-white/5"
                      >
                        <div className="relative h-64">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: 'cover' }}
                            className="w-full h-full object-cover"
                          />
                          {project.status && (
                            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-white text-xs font-medium">
                              {project.status}
                            </div>
                          )}
                        </div>                        <div className="relative p-6 min-h-[200px] bg-black/40">
                          <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                          <p className="text-sm text-white/80 mb-4">{project.role}</p>
                          {project.description && (
                            <p className="text-white/70">{project.description}</p>
                          )}
                        </div>                        <div className="absolute bottom-6 left-6 right-6">
                          {(project.link || (category !== "upcoming films" && category !== "films" && category !== "songs")) && (
                            <>
                              {project.link ? (
                                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                  <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full px-4 py-2 rounded-full text-sm font-medium text-white bg-black/60 hover:bg-red-500 transition-colors"
                                  >
                                    View
                                  </motion.button>
                                </Link>
                              ) : (
                                <motion.button 
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="w-full px-4 py-2 rounded-full text-sm font-medium text-white bg-black/60 hover:bg-red-500 transition-colors"
                                >
                                  View 
                                </motion.button>
                              )}
                            </>
                          )}
                        </div></motion.div>
                    ))}
                    </motion.div>
                  )}
                </Tab.Panel>
              ))}
            </AnimatePresence>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}