// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { Github } from 'lucide-react';
import { useRef } from 'react';

export default function Projects({ sectionRef }) {
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, {
    once: true,
    margin: "-100px 0px"
  });

  const projects = [
    {
      title: "PALIT: E-Commerce Platform",
      description: "Palit is a web-based e-commerce platform designed to provide a simple yet functional online shopping experience. Built with modern web technologies, it allows users to browse products, manage a shopping cart, and securely place orders.",
      technologies: ["ASP.NET Core MVC", "Tailwind CSS", "JavaScript", "SQL Server", "SSMS", "PayMongo", "Google OAuth"],
      github: "https://github.com/swanjwich/palit-ecommerce-platform-v2",
    },
    {
      title: "BookHaven: Library Management System",
      description: "A web-based library management system designed to help academic institutions efficiently manage their physical book lending systems. It streamlines the process of borrowing books, tracking return dates, and managing library inventories, all within a user-friendly interface.",
      technologies: ["ASP.NET Core MVC", "Bootstrap", "JavaScript", "SQL Server", "SSMS"],
      github: "https://github.com/swanjwich/bookhaven",
    },
    {
      title: "CodeBox: Snippets Manager",
      description: "CodeBox is a web-based application designed to help developers store, organize, and manage their code snippets efficiently.",
      technologies: ["Laravel", "Vue.js", "PHP", "SQLite"],
      github: "https://github.com/swanjwich/codebox-snippets-manager",
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "",
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-16 px-5 max-width mx-auto"
    >
      {/* Header */}
      <motion.div
        ref={projectsRef}
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-medium text-[var(--primary)] dark:text-[var(--tertiary)] mb-3">
          Projects
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
          Featured work that demonstrates my skills and experience.
        </p>
        <div className="w-32 h-px bg-gray-400 dark:bg-gray-600 mx-auto"></div>
      </motion.div>

      <div className="flex flex-col items-center space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={isInView ? {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
              }
            } : {
              opacity: 0,
              y: 60,
              scale: 0.9
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <div className="relative max-w-2xl py-6 px-6 rounded-lg bg-[var(--tertiary)] dark:bg-[var(--primary)] border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 overflow-visible hover:shadow-lg">
              <motion.div
                className="mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2 + 0.3
                  }
                } : {
                  opacity: 0,
                  x: -20
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-mono text-gray-600 dark:text-gray-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 z-10 relative"
                    >
                      <Github size={24} />
                    </a>
                  )}
                </div>
                <motion.h3
                  className="text-xl font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.2 + 0.4
                    }
                  } : {
                    opacity: 0,
                    y: 20
                  }}
                >
                  {project.title}
                </motion.h3>
              </motion.div>

              <motion.p
                className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2 + 0.5
                  }
                } : {
                  opacity: 0,
                  y: 20
                }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-1 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2 + 0.6
                  }
                } : {
                  opacity: 0,
                  y: 20
                }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.3,
                        delay: index * 0.2 + 0.7 + techIndex * 0.1
                      }
                    } : {
                      opacity: 0,
                      scale: 0.8
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}

              </motion.div>


            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Count */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: projects.length * 0.2 + 0.5
          }
        } : {
          opacity: 0,
          y: 30
        }}
      >
        <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
          {projects.length} projects
        </span>
      </motion.div>
    </section>
  );
}