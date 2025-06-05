// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navbar({ hideNavbar, isAboutInView }) {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const sections = ['me', 'projects', 'skills', 'contact'];

            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop - 100;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    if (scrollY >= offsetTop && scrollY < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }

            const currentScrollY = window.scrollY;
            if (isAboutInView) {
                setShowNavbar(true);
            } else if (hideNavbar) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setShowNavbar(false);
                } else {
                    setShowNavbar(true);
                }
            } else {
                setShowNavbar(true);
            }


            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hideNavbar, isAboutInView, lastScrollY]);

    return (
        <AnimatePresence>
            {showNavbar && (
                <motion.nav
                    className="fixed top-0 left-0 w-full z-50"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    {/* bg-black/10 border-white/10 */}
                    <div className="backdrop-blur-sm px-16 py-3 flex items-center justify-between">

                        <h1 className="text-[var(--secondary)] font-bold font-koulen tracking-widest text-xl">
                            <a href="#">HANNAH T.</a>
                        </h1>
                        <div className="flex items-center gap-14">

                            <div className="group relative">
                                <a
                                    href="#me"
                                    className={`text-sm flex items-center gap-2 justify-center transition-all duration-300 hover:scale-110 
                                        ${activeSection === 'me' ? 'text-[var(--secondary)] font-bold' : 'text-[var(--primary)] dark:text-[var(--tertiary)]'
                                        }`}                                >
                                    <span>About</span>

                                </a>

                                {/* <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-2 bg-black/80 backdrop-blur-sm rounded-lg text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            About Me
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-black/80 rotate-45"></div>
                        </div> */}
                            </div>

                            <div className="group relative">
                                <a
                                    href="#projects"
                                    className={`text-sm flex items-center gap-2 justify-center transition-all duration-300 hover:scale-110 
                                        ${activeSection === 'projects' ? 'text-[var(--secondary)] font-bold' : 'text-[var(--primary)] dark:text-[var(--tertiary)]'
                                        }`}                                >
                                    <span>Projects</span>

                                </a>
                                {/* <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-2 bg-black/80 backdrop-blur-sm rounded-lg text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            Projects
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-black/80 rotate-45"></div>
                        </div> */}
                            </div>
                            <div className="group relative">
                                <a
                                    href="#skills"
                                    className={`text-sm flex items-center gap-2 justify-center transition-all duration-300 hover:scale-110 
                                        ${activeSection === 'skills' ? 'text-[var(--secondary)] font-bold' : 'text-[var(--primary)] dark:text-[var(--tertiary)]'
                                        }`}                                >
                                    <span>Skills</span>
                                </a>
                                {/* <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-2 bg-black/80 backdrop-blur-sm rounded-lg text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            Skills
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-black/80 rotate-45"></div>
                        </div> */}
                            </div>

                            <div className="group relative">
                                <a
                                    href="#contact"
                                    className={`text-sm flex items-center gap-2 justify-center transition-all duration-300 hover:scale-110 
                                        ${activeSection === 'contact' ? 'text-[var(--secondary)] font-bold' : 'text-[var(--primary)] dark:text-[var(--tertiary)]'
                                        }`}                                >
                                    <span>Contact</span>
                                </a>
                                {/* <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-2 bg-black/80 backdrop-blur-sm rounded-lg text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            Contact
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-black/80 rotate-45"></div>
                        </div> */}
                            </div>
                            <div>
                                <button className="cursor-pointer px-4 py-2 rounded-md border-2 border-[var(--secondary)] text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-white transition-all duration-300 font-koulen text-sm tracking-wide hover:scale-105 active:scale-95">
                                    Resume
                                </button>
                            </div>
                        </div>

                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}