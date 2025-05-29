// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Skills({ sectionRef }) {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skills = [
        {
            name: "HTML",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            color: "#E34F26"
        },
        {
            name: "CSS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            color: "#1572B6"
        },
        {
            name: "JavaScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            color: "#F7DF1E"
        },
        {
            name: "C#",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
            color: "#239120"
        },
        {
            name: "PHP",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            color: "#777BB4"
        },
        {
            name: "jQuery",
            logo: "https://static-00.iconduck.com/assets.00/jquery-original-wordmark-icon-485x512-7kn0h2yt.png",
            color: "#3178C6"
        },
        {
            name: "Bootstrap",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/964px-Bootstrap_logo.svg.png",
            color: "#7952B3"
        },
        {
            name: "Tailwind CSS",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
            color: "#06B6D4"
        },
        {
            name: "Vue.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
            color: "#4FC08D"
        },
        {
            name: "React",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            color: "#61DAFB"
        },
        {
            name: "Laravel",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
            color: "#FF2D20"
        },
        {
            name: "ASP.NET Core",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
            color: "#512BD4"
        },
        {
            name: "MySQL",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            color: "#4479A1"
        },
        {
            name: "SQL Server",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
            color: "#CC2927"
        },
        {
            name: "SSMS",
            logo: "https://cdn.prod.website-files.com/627fe3133bae75e7bfbb9b2a/66922a2f5485bcd665857545_32a03aee0c76419ec5bde950a62883bc.png",
            color: "#0078D7"
        },
        {
            name: "Git",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            color: "#F05032"
        },
        {
            name: "GitHub",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            color: "#181717"
        },
        {
            name: "REST API",
            logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzYxREFGQiI+PHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIi8+PC9zdmc+",
            color: "#61DAFB"
        },
        {
            name: "Framer Motion",
            logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
            color: "#0055FF"
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section ref={sectionRef} className="relative py-20 px-5 sm:px-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg text-[var(--primary)] dark:text-[var(--tertiary)] max-w-2xl text-left"
                >
                    Technologies and tools I've been using so far...
                </motion.p>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.05 }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-[var(--secondary)]/10 transition-all cursor-pointer relative overflow-hidden group"
                    >
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: hoveredSkill === skill.name ? 1 : 0,
                                scale: hoveredSkill === skill.name ? 1 : 0.5
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <img
                                src={skill.logo}
                                alt={`${skill.name} logo`}
                                className="w-12 h-12 object-contain"
                                style={{
                                    filter: skill.name === 'GitHub'
                                        ? 'invert(1)'
                                        : 'none'
                                }}
                            />
                        </motion.div>

                        {/* Text */}
                        <motion.span
                            animate={{
                                opacity: hoveredSkill === skill.name ? 0 : 1,
                                y: hoveredSkill === skill.name ? 10 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-[var(--primary)] dark:text-[var(--tertiary)] font-medium"
                        >
                            {skill.name}
                        </motion.span>

                        {/* Hover background effect */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: hoveredSkill === skill.name ? 0.1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 rounded-xl"
                            style={{ backgroundColor: skill.color }}
                        />

                        {/* Glow effect */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: hoveredSkill === skill.name ? 0.3 : 0,
                                scale: hoveredSkill === skill.name ? 1.2 : 0.8
                            }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 rounded-xl blur-lg -z-10"
                            style={{ backgroundColor: skill.color }}
                        />
                    </motion.div>
                ))}
            </motion.div>

            <div className="absolute -top-20 -left-20 w-40 h-40 bg-[var(--secondary)] rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-20 w-60 h-60 bg-[var(--primary)]/20 dark:bg-[var(--tertiary)]/20 rounded-full blur-3xl -z-10"></div>

            <motion.div
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-32 right-10 w-6 h-6 bg-[var(--secondary)] rounded-full blur-sm"
            />

            <motion.div
                animate={{
                    y: [0, 20, 0],
                    opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-32 left-10 w-4 h-4 bg-[var(--tertiary)] rounded-full blur-sm"
            />
        </section>
    );
}