// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Welcome({ sectionRef }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section ref={sectionRef}
      id="welcome"
      className="w-full min-h-screen flex flex-col items-center justify-center relative bg-[url('/images/asd.png')] bg-cover bg-repeat"
    >
      <div ref={ref} className="flex flex-col items-center">
        <motion.h1
          className="text-8xl font-koulen tracking-normal text-[var(--primary)] dark:text-[var(--tertiary)]"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          HANNAH TANO
        </motion.h1>

        <motion.p
          className="text-4xl font-signika text-[var(--secondary)] mt-2"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          &lt;web developer /&gt;
        </motion.p>
      </div>

      <a
        href="#me"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-[var(--primary)] dark:text-[var(--tertiary)] text-2xl"
      >
        <i className="ri-arrow-down-line"></i>
      </a>
    </section>
  );
}
