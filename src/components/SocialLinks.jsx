// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export default function SocialLinks({ show = true }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-5 left-12 flex flex-col items-center gap-3 z-50"
          initial={{ opacity: 0, x: -50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Updated container with navbar-like styling */}
          <div className="backdrop-blur-sm p-3 flex flex-col items-center gap-3">
            <motion.a
              href="https://facebook.com/grasyahann"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-[var(--secondary)]/20 border border-white/10 hover:border-[var(--secondary)]/30 transition-all duration-300 group"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="ri-facebook-fill text-black/70 dark:text-white/70 group-hover:text-[var(--secondary)] text-xl transition-colors duration-300"></i>
            </motion.a>

            <motion.a
              href="mailto:hannahtano05@gmail.com"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-[var(--secondary)]/20 border border-white/10 hover:border-[var(--secondary)]/30 transition-all duration-300 group"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="ri-mail-fill text-black/70 dark:text-white/70 group-hover:text-[var(--secondary)] text-xl transition-colors duration-300"></i>
            </motion.a>

            <motion.a
              href="https://github.com/swanjwich"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-[var(--secondary)]/20 border border-white/10 hover:border-[var(--secondary)]/30 transition-all duration-300 group"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="ri-github-fill text-black/70 dark:text-white/70 group-hover:text-[var(--secondary)] text-xl transition-colors duration-300"></i>
            </motion.a>

            <div className="w-1 h-8 bg-gradient-to-b from-[var(--secondary)]/50 to-transparent rounded-full mt-2"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}