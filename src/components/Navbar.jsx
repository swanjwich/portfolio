// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import DarkMode from './DarkMode';

export default function Navbar({ hideNavbar, isAboutInView, darkMode, setDarkMode }) {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const sections = ['about', 'projects', 'skills', 'contact'];

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

    const navLinks = (
        <>
            {['about', 'projects', 'skills', 'contact'].map((section) => (
                <a
                    key={section}
                    href={`#${section}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm transition-all duration-300 hover:scale-110 ${activeSection === section
                        ? 'text-[var(--secondary)] font-bold'
                        : 'text-[var(--primary)] dark:text-[var(--tertiary)]'
                        }`}
                >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
            ))}
            <button className="cursor-pointer mt-3 md:mt-0 px-4 py-2 rounded-md border-2 border-[var(--secondary)] text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-white transition-all duration-300 font-koulen text-sm tracking-wide hover:scale-105 active:scale-95">
                Resume
            </button>
        </>
    );

    return (
        <AnimatePresence>
            {showNavbar && (
                <motion.nav
                    className="fixed top-0 left-0 w-full z-50"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                >
                    <div className="backdrop-blur-sm px-6 md:px-16 py-3 flex items-center justify-between">
                        <h1 className="text-[var(--secondary)] font-bold font-koulen tracking-widest text-xl">
                            <a href="#">
                                <img src="./logo2.png" className="w-8 h-8" />
                            </a>
                        </h1>

                        <div className="hidden md:flex items-center gap-10">
                            {navLinks}
                            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
                        </div>

                        <div className="md:hidden flex items-center gap-4">
                            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
                            <button className="cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                                {isMobileMenuOpen ? (
                                    <i className="ri-close-line text-2xl text-[var(--primary)] dark:text-[var(--tertiary)]"></i>
                                ) : (
                                    <i className="ri-menu-line text-2xl text-[var(--primary)] dark:text-[var(--tertiary)]"></i>
                                )}
                            </button>

                        </div>
                    </div>

                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="md:hidden px-6 pt-4 pb-6 bg-transparent backdrop-blur-lg flex flex-col gap-4 text-right"
                            >
                                {navLinks}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
