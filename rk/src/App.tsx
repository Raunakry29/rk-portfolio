import { useState, useEffect } from "react";
// file updated
import {
  Menu,
  X,
  ExternalLink,
  User,
  Briefcase,
  Github,
  Linkedin,
  Code,
  Server,
  Database,
  Terminal,
} from "lucide-react";
import "./App.css";
import logo from "../Code.png";
import {
  projects,
  skills,
} from "./data/AllWebsiteData";
import cursorHook from "./hooks/hideCursor";
import scrollHooks from "./hooks/scrollHooks";
import Home from "./pages/Home";
import {AnimatePresence, motion} from "framer-motion";

// Portfolio's
export default function Portfolio() {
  const [result, setResult] = useState("");
  const { hideCursor, setHideCursor } = cursorHook();
  console.log(hideCursor);

  const { activeSection, isMenuOpen, setIsMenuOpen, scrollToSection } =
    scrollHooks();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "581ba174-9e93-4c24-8f00-fbdcd49d944f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(
        "Thank you so much for your message! I'll get back to you soon."
      );

      event.currentTarget.reset(); // safer than event.target
    } else {
      console.log("Error", data);
      setResult(data.message || "Something went wrong.");
    }
  };

  // scroll

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHideCursor(true);
    }, 2500); // Same as typing duration

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-slate-950 text-gray-100 font-sans">
    
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.a
            href="#"
            className="text-2xl font-bold text-gradient flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={logo} alt="Logo" className="h-10 w-10 drop-shadow-lg" />
            <span className="hidden sm:inline">RK</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["home", "projects", "skills", "experience", "contact"].map(
              (item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-semibold relative ${
                    activeSection === item
                      ? "text-emerald-400"
                      : "text-gray-300 hover:text-emerald-300"
                  } transition-colors`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {activeSection === item && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500"
                      layoutId="activeSection"
                    />
                  )}
                </motion.button>
              )
            )}
          </nav>
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden glass-effect shadow-2xl border-b border-emerald-500/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
                {["home", "projects", "skills", "experience", "contact"].map(
                  (item) => (
                    <motion.button
                      key={item}
                      onClick={() => {
                        scrollToSection(item);
                        setIsMenuOpen(false);
                      }}
                      className={`text-sm font-semibold py-3 px-4 text-left rounded-lg ${
                        activeSection === item
                          ? "text-emerald-400 bg-emerald-500/10"
                          : "text-gray-300 hover:bg-slate-800/50"
                      } transition-all`}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </motion.button>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      {/* Hero Section */}
      <Home />
      {/* about section */}

      <section
        id="about"
        className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/30 border-t border-emerald-500/10"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          ></motion.div>

          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            {/* Image Section */}
            <motion.div
              className="w-full md:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative w-full h-64 sm:h-80 glass-effect rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-500/30 group-hover:border-emerald-500/50 transition-all">
                  <img
                    src="https://res.cloudinary.com/dc3mdr2ol/image/upload/v1762178692/Screenshot_2025-11-03_193415_ajoz6v.png"
                    alt="Sagar Chaurasia"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 glass-effect px-6 py-3 rounded-xl border-2 border-emerald-500/30 shadow-2xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.1, rotate: -3 }}
                >
                  <p className="text-emerald-400 font-bold">Raunak Kumar</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="w-full md:w-2/3 mt-8 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-6">
                About me :{" "}
                <code className="text-gradient">
                  Passionate Developer & Problem Solver
                </code>
              </h3>

              <div className="gap-12 space-y-4 sm:space-y-6 text-gray-400">
                <p className="text-base sm:text-lg">
                  Hello! Interestingly, I completed my diploma in 2023, and
                  shortly after, I embarked on my B.Tech journey. It was during
                  my diploma years that I discovered my passion for coding and
                  entered the world of programming. Since then, I've been
                  dedicated to learning various programming languages and
                  solving complex problems related to data structures and
                  algorithms. Above all, I consider myself a Problem Solver.
                </p>

                <p className="text-base sm:text-lg">
                  Currently, I'm pursuing my Bachelors in Computer Science and
                  Engineering (2023-2026)
                </p>

                <p className="text-base sm:text-lg">
                  During this journey, I've developed strong skills in Web
                  Development, having built a full-stack project and created two
                  Chrome extensions, each receiving a{" "}
                  <b className="text-white bg-red-400 rounded-b-xl p-1">4.5</b>{" "}
                  rating on the Chrome Web Store.
                </p>

                <p className="text-base sm:text-lg mt-4 text-emerald-400 font-semibold">
                  My project tech stack includes:
                </p>
                <div className="flex flex-wrap text-xs sm:text-sm mt-4 gap-2 sm:gap-3">
                  <span className="glass-effect border border-teal-500/30 text-teal-400 px-3 py-2 rounded-lg hover:bg-teal-500/10 transition-all">
                    HTML
                  </span>
                  <span className="glass-effect border border-blue-500/30 text-blue-400 px-3 py-2 rounded-lg hover:bg-blue-500/10 transition-all">
                    CSS
                  </span>
                  <span className="glass-effect border border-yellow-500/30 text-yellow-400 px-3 py-2 rounded-lg hover:bg-yellow-500/10 transition-all">
                    JavaScript
                  </span>
                  <span className="glass-effect border border-indigo-500/30 text-indigo-400 px-3 py-2 rounded-lg hover:bg-indigo-500/10 transition-all">
                    React.js
                  </span>
                  <span className="glass-effect border border-green-500/30 text-green-400 px-3 py-2 rounded-lg hover:bg-green-500/10 transition-all">
                    Node.js
                  </span>
                  <span className="glass-effect border border-orange-500/30 text-orange-400 px-3 py-2 rounded-lg hover:bg-orange-500/10 transition-all">
                    Express.js
                  </span>
                  <span className="glass-effect border border-red-500/30 text-red-400 px-3 py-2 rounded-lg hover:bg-red-500/10 transition-all">
                    Docker
                  </span>
                  <span className="glass-effect border border-purple-500/30 text-purple-400 px-3 py-2 rounded-lg hover:bg-purple-500/10 transition-all">
                    Cloudflare
                  </span>
                  <span className="glass-effect border border-pink-500/30 text-pink-400 px-3 py-2 rounded-lg hover:bg-pink-500/10 transition-all">
                    Animation Libraries
                  </span>
                </div>
              </div>
              {/* GitHub Button */}
              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start items-stretch"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="http://github.com/Raunakry29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <motion.button
                    className="group glass-effect w-full cursor-pointer hover:bg-slate-800/80 text-white border-2 border-emerald-500/30 hover:border-emerald-500 py-4 px-8 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github
                      size={20}
                      className="group-hover:rotate-12 transition-transform"
                    />
                    View My GitHub
                  </motion.button>
                </a>

                <a
                  href="https://drive.google.com/file/d/1rqab5WUix77_DBw_yQRtRFIsOFNTXkEF/view?usp=drive_link"
                  download="raunak.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <motion.button
                    className="group bg-gradient-to-r from-emerald-500 to-blue-600 w-full cursor-pointer hover:from-emerald-600 hover:to-blue-700 text-white py-4 px-8 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 shadow-xl glow-effect"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      📄
                    </span>
                    Download Resume
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 sm:py-20 bg-slate-950 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
              Crafted Solutions
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Each project represents a unique challenge solved with innovative
              thinking and technical excellence.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group glass-effect rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-emerald-500/20 hover:border-emerald-500/50 transform hover:-translate-y-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-100 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs glass-effect border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full hover:bg-emerald-500/10 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.LiveUrl}
                      target="_blank"
                      className="group/link text-emerald-400 hover:text-emerald-300 font-semibold flex items-center transition-all"
                    >
                      Live Demo
                      <ExternalLink
                        size={16}
                        className="ml-1 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                      />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="group/link text-gray-300 hover:text-white font-semibold flex items-center transition-all"
                      >
                        GitHub{" "}
                        <Github
                          size={16}
                          className="ml-1 group-hover/link:rotate-12 transition-transform"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* <div className="text-center mt-12">
            <p className=" text-indigo-400 text-3xl  py-3 px-8 rounded-lg   font-semibold transition-colors">
              Other Noteworthy All Projects <br />
            </p>
            <code>View Complete List of Projects/Codes</code>
          </div> */}
          <br />
          {/* nexet other project card */}
         
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/30 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
              Skills & Technologies
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              A blend of languages, frameworks, and tools that fuel my
              development journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="group glass-effect rounded-2xl shadow-xl p-6 sm:p-8 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  {categoryIndex === 0 && (
                    <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/30 mr-4">
                      <Code className="text-emerald-400" size={28} />
                    </div>
                  )}
                  {categoryIndex === 1 && (
                    <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/30 mr-4">
                      <Server className="text-blue-400" size={28} />
                    </div>
                  )}
                  {categoryIndex === 2 && (
                    <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/30 mr-4">
                      <Database className="text-purple-400" size={28} />
                    </div>
                  )}
                  {categoryIndex === 3 && (
                    <div className="p-3 bg-pink-500/10 rounded-xl border border-pink-500/30 mr-4">
                      <Terminal className="text-pink-400" size={28} />
                    </div>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-100 group-hover:text-emerald-400 transition-colors">
                    {skillCategory.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      className="text-gray-300 flex items-center hover:text-emerald-300 transition-colors text-base"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + skillIndex * 0.05 }}
                    >
                      <span className="h-2 w-2 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mr-3"></span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 glass-effect rounded-2xl shadow-2xl overflow-hidden border border-emerald-500/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gradient text-center">
                Development Philosophy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="inline-block p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/30 mb-4">
                    <span className="text-4xl">🏗️</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-emerald-400 mb-3">
                    Clean Architecture
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Building maintainable applications with clear separation of
                    concerns and testable components.
                  </p>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="inline-block p-4 bg-blue-500/10 rounded-2xl border border-blue-500/30 mb-4">
                    <span className="text-4xl">⚡</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-blue-400 mb-3">
                    Performance First
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Creating efficient applications with optimized loading
                    times, memory usage, and user interactions.
                  </p>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="inline-block p-4 bg-purple-500/10 rounded-2xl border border-purple-500/30 mb-4">
                    <span className="text-4xl">👥</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-purple-400 mb-3">
                    User-Centric
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Developing with a focus on usability, accessibility, and
                    delivering exceptional user experiences.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <br />
      <br />

      {/* certificate sections              */}

      {/* Experience Section */}

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
              Let's Build Something Great
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Have a project in mind? I'd love to hear about it and explore how
              we can work together.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto glass-effect rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-slate-900/50 p-8 border-b md:border-b-0 md:border-r border-emerald-500/20">
                <h3 className="text-xl sm:text-2xl font-bold mb-8 text-gradient">
                  Contact Info
                </h3>
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/30 mr-3">
                      <User size={20} className="text-emerald-400" />
                    </div>
                    <span className="font-medium">Raunak Kumar</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/30 mr-3">
                      <Briefcase size={20} className="text-blue-400" />
                    </div>
                    <span className="font-medium">Available for projects</span>
                  </motion.div>
                </div>
                <div className="mt-10">
                  <p className="mb-4 text-gray-300 font-semibold">
                    Connect with me
                  </p>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://www.linkedin.com/in/sagarchaurasia74/"
                      target="_blank"
                      className="p-3 glass-effect hover:bg-emerald-500/10 rounded-xl border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 transition-all shadow-lg"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin size={22} />
                    </motion.a>
                    <motion.a
                      href="https://github.com/sagarchaurasia176"
                      target="_blank"
                      className="p-3 glass-effect hover:bg-blue-500/10 rounded-xl border border-blue-500/30 text-blue-400 hover:text-blue-300 transition-all shadow-lg"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={22} />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-8 sm:p-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-8">
                  Send a Message
                </h3>

                <form className="space-y-6" onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-gray-300 mb-2 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 glass-effect border border-emerald-500/20 rounded-xl focus:outline-none focus:border-emerald-500 text-gray-200 placeholder-gray-500 transition-all"
                        placeholder="Your name"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-gray-300 mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 glass-effect border border-emerald-500/20 rounded-xl focus:outline-none focus:border-emerald-500 text-gray-200 placeholder-gray-500 transition-all"
                        placeholder="Your email"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-gray-300 mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-3 glass-effect border border-emerald-500/20 rounded-xl focus:outline-none focus:border-emerald-500 text-gray-200 placeholder-gray-500 transition-all"
                      placeholder="Subject"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-gray-300 mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 glass-effect border border-emerald-500/20 rounded-xl focus:outline-none focus:border-emerald-500 text-gray-200 placeholder-gray-500 transition-all resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.button
                      type="submit"
                      className="cursor-pointer w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white py-4 px-8 rounded-xl font-bold shadow-xl glow-effect transition-all text-lg"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message ✉️
                    </motion.button>

                    {result && (
                      <motion.p
                        className="text-emerald-400 text-center font-semibold mt-4 p-3 glass-effect rounded-lg border border-emerald-500/30"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {result}
                      </motion.p>
                    )}
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-950 text-gray-300 py-16 border-t border-emerald-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                    Raunak Kumar
              </h3>
              <p className="max-w-md text-gray-300 leading-relaxed">
                A passionate developer with a knack for creating innovative
                solutions. Let's connect and build something amazing together!
              </p>
            </motion.div>


          </div>

          <motion.div
            className="border-t border-emerald-500/20 mt-12 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-400">
              © {new Date().getFullYear()} Raunak Kumar. Crafted with 💚 and
              code.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
