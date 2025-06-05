// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About({ sectionRef }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={sectionRef}
      id="me"
      className="w-full min-h-screen flex items-center justify-center"
    >
      <div ref={ref} className="bg-transparent w-full p-20 gap-5 flex flex-col sm:flex-row justify-center items-center">
       
        <div className="w-full sm:w-2/3 flex justify-end">
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
            Hi, <span className="text-[var(--secondary)]">I</span> am
          </p>
          <h1 className="text-6xl sm:text-7xl font-koulen tracking-widest font-bold text-[var(--secondary)]">
            Hannah Tano
          </h1>
          <p className="mt-3 text-4xl text-[var(--primary)] dark:text-[var(--tertiary)]">
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
    </section>
  );
}
