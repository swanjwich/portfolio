// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About({ sectionRef }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={sectionRef}
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center"
    >
      <div ref={ref} className="bg-transparent w-full min-h-screen p-24 gap-5 flex flex-col sm:flex-row justify-center items-center">

        <div className="w-full sm:w-2/3 flex justify-center sm:justify-end">
          <img
            className="rounded-full max-w-[300px] max-h-[300px]"
            src="/images/k.jpg"
            alt="Profile Picture"
          />
        </div>
        <motion.div
          className="w-full sm:w-3/3 text-white text-center sm:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.1, duration: 1 }}
        >
          <p className="text-xl font-semibold text-[var(--primary)] dark:text-[var(--tertiary)]">
            Hi, I am
          </p>
          <h1 className="text-6xl sm:text-7xl font-koulen tracking-widest font-bold text-[var(--secondary)]">
            Hannah Tano
          </h1>
          <p className="mt-3 text-xl sm:text-4xl text-[var(--primary)] dark:text-[var(--tertiary)]">
            Aspiring Full Stack Web Developer
          </p>

          <div className="h-1 w-full bg-gradient-to-r from-[var(--secondary)]/50 to-transparent rounded-full mt-2"></div>

          <p className="text-md text-[var(--primary)] dark:text-[var(--tertiary)] block mt-3">
            I am currently a 4th year student
          </p>
          <p className="text-md text-[var(--primary)] dark:text-[var(--tertiary)] block">
            taking a bachelor's degree in Information Technology
          </p>
          <p className="text-md text-[var(--primary)] dark:text-[var(--tertiary)] block">
            at the University of Mindanao.
          </p>
        </motion.div>

      </div>
      <motion.div
        className="max-w-5xl mb-8 p-8 rounded-xl bg-[var(--tertiary)] dark:bg-[var(--primary)]/30 backdrop-blur-sm flex flex-col lg:flex-row items-center justify-between gap-12 border border-gray-300 dark:border-gray-700 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1 }}
      >
        <div className="flex-1">
          <h2 className="text-3xl font-medium text-[var(--primary)] dark:text-[var(--tertiary)] mb-6 flex items-center">
            About Me
          </h2>
          <div className="space-y-4 text-[var(--primary)] dark:text-[var(--tertiary)]">
            <p>
              I'm a passionate 4th-year BSIT student with a strong focus on full stack web development.
              I originally started in BSIS, but I shifted to BSIT because I wanted to explore more technical and hands-on skills — and honestly, 
              there weren’t many of us in BSIS! The switch turned out to be one of my best decisions.
            </p>
            <p>
              My current tech stack includes <span className="font-semibold text-[var(--secondary)]">HTML, CSS, JavaScript, Vue.js, Laravel, and Tailwind CSS</span>.
              I'm also expanding my skills by learning React and modern UI/UX design principles.
            </p>
            <p>
              What drives me is the endless potential of technology to create meaningful solutions.
              I pay close attention to how small design details can significantly impact user experience.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2 text-[var(--secondary)]">When I'm not coding:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li className="flex items-center"><span className="mr-2">🎮</span> Playing FPS/MOBA games</li>
                <li className="flex items-center"><span className="mr-2">📺</span> Watching anime</li>
                <li className="flex items-center"><span className="mr-2">🧴</span> Experimenting with skincare</li>
                <li className="flex items-center"><span className="mr-2">☕</span> Brewing coffee</li>
              </ul>
            </div>
          </div>
        </div>

        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="flex-shrink-0 w-full sm:w-96">
            <h3 className="text-xl font-semibold mb-4 text-[var(--secondary)]">My Journey</h3>
            <div className="space-y-4 relative pl-6 border-l-2 border-[var(--secondary)]">
              {[
                { year: "2025", event: "Exploring React ecosystem" },
                { year: "2024", event: "Learned Vue.js and Laravel" },
                { year: "2023", event: "Discovered passion for web development" },
                { year: "2022", event: "Questioning my decisions in life" },
                { year: "2021", event: "Shift to BSIT" },
                { year: "2020", event: "Started BSIS at University of Mindanao" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 * i }}
                  className="relative"
                >
                  <div className="absolute w-3 h-3 rounded-full bg-[var(--secondary)] -left-8 top-1" />
                  <p className="font-bold text-[var(--secondary)]">{item.year}</p>
                  <p className="text-[var(--primary)] dark:text-[var(--tertiary)]">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>


    </section >
  );
}
