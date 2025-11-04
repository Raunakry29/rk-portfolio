import {motion } from "framer-motion";
import cursorHook from "../hooks/hideCursor";
// import ChevronRight from "lucide-react";
import {ChevronRight} from 'lucide-react'
import logos from '../logos.jpg';

import scrollHooks from "../hooks/scrollHooks";
export const Home = () => {
  const { hideCursor, setHideCursor } = cursorHook();
  console.log(setHideCursor);
  
  const{scrollToSection} = scrollHooks()
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="w-full md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-base md:text-lg font-semibold text-gradient gradient-animate inline-block mb-2">
                👋 Hello World! My name is
              </span>
              <br />
              <span className="text-gray-100 drop-shadow-2xl font-sans bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Raunak Kumar
              </span>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-8 leading-snug tracking-wide text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span
                className={`typing-effect block w-fit text-emerald-400 ${
                  hideCursor ? "cursor-hidden" : ""
                }`}
              >
                I love to explore & code!
              </span>
            </motion.p>

            <motion.div
              className="text-gray-300 mb-8 max-w-lg text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="text-emerald-400 font-semibold">Passionate software engineer</span> with a drive to innovate and learn. 
              I thrive in collaborative environments and love tackling complex challenges. 
              Let's connect! &nbsp;
            
                @LinkedIn →
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white py-4 px-8 rounded-xl font-semibold flex items-center justify-center shadow-xl hover:shadow-emerald-500/30 transition-all glow-effect"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work 
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="glass-effect hover:bg-slate-800/80 text-emerald-400 border-2 border-emerald-500/30 hover:border-emerald-500 py-4 px-8 rounded-xl font-semibold transition-all shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Collaborate
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative float-animation">
              {/* Glow ring effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              <motion.div
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600 rounded-full overflow-hidden shadow-2xl border-4 border-emerald-400/30"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={logos}
                  alt="Sagar Chaurasia"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -right-6 glass-effect shadow-2xl rounded-2xl p-4 sm:p-5 w-32 sm:w-36 text-center border-2 border-emerald-500/30"
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <p className="font-bold text-emerald-400 text-lg">Software</p>
                <p className="text-sm text-gray-300">Developer</p>
              </motion.div>

              {/* Floating tech icons */}
              <motion.div
                className="absolute -top-4 -left-4 bg-slate-800/80 backdrop-blur-sm p-3 rounded-xl border border-emerald-500/30 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-slate-800/80 backdrop-blur-sm p-3 rounded-xl border border-blue-500/30 shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
