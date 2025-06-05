// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Skills({ sectionRef }) {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = {
    Frontend: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
      { name: "jQuery", logo: "https://static-00.iconduck.com/assets.00/jquery-original-wordmark-icon-485x512-7kn0h2yt.png", color: "#3178C6" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
      { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", color: "#4FC08D" },
      { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png", color: "#06B6D4" },
      { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/964px-Bootstrap_logo.svg.png", color: "#7952B3" },
      { name: "Framer Motion", logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg", color: "#0055FF" },
    ],
    Backend: [
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "#777BB4" },
      { name: "Laravel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png", color: "#FF2D20" },
      { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", color: "#239120" },
      { name: "ASP.NET Core", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png", color: "#512BD4" },
    ],
    Database: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
      { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", color: "#47A248" },
      { name: "SQLite", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/1024px-Sqlite-square-icon.svg.png", color: "#CC2927" },
      { name: "Firebase", logo: "https://www.gstatic.com/devrel-devsite/prod/vd9663438c989ac592eff7c92ff013bc8fa2578bc40babda19f4e44265d95782f/firebase/images/touchicon-180.png", color: "#336791" },
    ],
    Tools: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#181717" },
      { name: "Vite", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png", color: "#181717" },
      { name: "VS Code", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png", color: "#181717" },
      { name: "Microsoft Visual Studio", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/1200px-Visual_Studio_Icon_2022.svg.png", color: "#2496ED" },
    ],
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={sectionRef} id="skills"
      className="relative py-16 px-5 max-width mx-auto overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[var(--primary)] dark:text-[var(--tertiary)] mb-2"
          >
            Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base text-gray-600 dark:text-gray-400 mb-3"
          >
            My technical toolkit — from coding languages to frameworks.
          </motion.p>
          <div className="w-32 h-px bg-gray-400 dark:bg-gray-600 mx-auto"></div>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all backdrop-blur-md border border-gray-200/30 dark:border-gray-700/30 ${activeCategory === category
                ? 'dark:bg-[var(--tertiary)]/90 dark:text-[var(--primary)] bg-[var(--primary)]/90 text-[var(--tertiary)] shadow-lg border-blue-300/50 dark:border-blue-400/50'
                : 'dark:bg-[var(--primary)]/70 dark:text-[var(--tertiary)] dark:hover:bg-[var(--tertiary)]/80 dark:hover:text-[var(--primary)] bg-[var(--tertiary)]/70 text-[var(--primary)] hover:bg-[var(--primary)]/80 hover:text-[var(--tertiary)] hover:shadow-md'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="min-h-[300px]">
          <motion.div
            key={activeCategory}
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {categories[activeCategory].map((skill, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                variants={item}
                whileHover={{ scale: 1.03 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="bg-[var(--tertiary)]/80 dark:bg-[var(--primary)]/80 backdrop-blur-md rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden hover:border-blue-300/50 dark:hover:border-blue-400/50"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  {skill.logo && skill.logo !== "..." ? (
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-full h-full object-contain"
                      style={{ filter: skill.name === 'GitHub' ? 'invert(1)' : 'none' }}
                    />
                  ) : (
                    <div
                      className="w-full h-full rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${skill.color}20` }}
                    >
                      <span
                        className="text-2xl font-bold"
                        style={{ color: skill.color }}
                      >
                        {skill.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                <span className="text-gray-900 dark:text-white font-medium text-sm">
                  {skill.name}
                </span>

                {hoveredSkill === skill.name && (
                  <motion.div
                    className="absolute inset-0 bg-black/5 dark:bg-white/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}