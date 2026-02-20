import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-brand-dark min-h-screen font-sans text-slate-200">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-orange origin-left z-50 shadow-[0_0_10px_rgba(0,240,255,0.5)]"
        style={{ scaleX }}
      />

      <main>
        <Hero />
        <About />
        <Research />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-brand-dark py-12 text-center relative z-10">
        <p className="text-slate-500 font-mono text-sm max-w-sm mx-auto">
          © {new Date().getFullYear()} Aayush Gupta.
          <br />
          Built with React & Framer Motion.
        </p>
      </footer>
    </div>
  );
}

export default App;
