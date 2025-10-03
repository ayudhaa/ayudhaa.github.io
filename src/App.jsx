import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Mail, Menu, X, Sun, Moon
} from "lucide-react";

function Navbar({ darkMode, setDarkMode, setWaveTrigger }) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-md z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* 😊 trigger 👋 */}
        <a
          href="#"
          className="text-xl font-bold text-primary cursor-pointer"
          onClick={() => setWaveTrigger(prev => prev + 1)}
        >
          😊
        </a>

        {/* menu desktop */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition"
            >
              {link.label}
            </a>
          ))}
          {/* tombol darkmode (desktop) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition ${
              darkMode ? "bg-darkbg text-darktext" : "bg-white text-black"
            }`}
          >
            {darkMode ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </div>

        {/* hamburger mobile */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* menu mobile */}
      {open && (
        <div className="md:hidden bg-background border-t">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-2 border-b hover:bg-muted"
            >
              {link.label}
            </a>
          ))}

          {/* tombol darkmode (mobile) */}
          <div className="flex justify-center py-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition ${
                darkMode ? "bg-darkbg text-darktext" : "bg-white text-black"
              }`}
            >
              {darkMode ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero({ waveTrigger }) {
  const waveAnimation = waveTrigger === 0
    ? [0, 20, -20, 10, -10, 0] // sekali goyang
    : [0, 20, -20, 20, -20, 20, -20, 0]; // goyang 3x

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center gap-6 bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark">
      <motion.h1
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        className="text-4xl md:text-6xl font-bold"
      >
        <span className="text-primary">
          Hi
          <motion.span
            key={waveTrigger}
            initial={{ rotate: 0 }}
            animate={{ rotate: waveAnimation }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="inline-block cursor-pointer"
          >
            👋
          </motion.span>
        </span>
      </motion.h1>
      <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.2}}
        className="max-w-2xl text-muted-foreground"
      >
        I'm Ridho Ayudha Rachman, a software engineer who builds user-friendly and developer-efficient systems and architectures.
      </motion.p>
    </section>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [waveTrigger, setWaveTrigger] = useState(0);

  useEffect(() => {
    if(darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="font-sans #F6F6F6 text-black dark:bg-darkbg dark:text-darktext transition-colors">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setWaveTrigger={setWaveTrigger}
      />
      <Hero waveTrigger={waveTrigger}/>
      
      <Section id="about" title="About Me">
        <p className="text-center max-w-2xl mx-auto">
          I'm a developer who enjoys crafting web applications that are fast, responsive, and user-friendly.
        </p>
      </Section>

      <Section id="experience" title="Experience">
        <ul className="max-w-2xl mx-auto space-y-4">
          <li className="p-4 rounded-xl shadow bg-card border border-primary">
            <h3 className="font-semibold">Software Engineer</h3>
            <p className="text-sm text-muted-foreground">PT Satria Antaran Prima · Nov 2021 - Present</p>
          </li>
          <li className="p-4 rounded-xl shadow bg-card border border-primary">
            <h3 className="font-semibold">Software Engineer</h3>
            <p className="text-sm text-muted-foreground">PT Catur Sentosa Adiprana · 2020 - 2021</p>
          </li>
          <li className="p-4 rounded-xl shadow bg-card border border-primary">
            <h3 className="font-semibold">Software Engineer</h3>
            <p className="text-sm text-muted-foreground">PT Reventon Mitra Pratama · 2018 - 2020</p>
          </li>
        </ul>
      </Section>

      <Section id="contact" title="Get in touch">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#" className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/20 transition">
              <Mail size={20} /> <span>ayudharachman@gmail.com</span>
            </a>
            <a
              href="https://github.com/ayudhaa"
              target="_blank"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/20 transition"
            >
              <Github size={20} /> <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ridho-ayudha-rachman-269637151/"
              target="_blank"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/20 transition"
            >
              <Linkedin size={20} /> <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </Section>

      <footer className="py-6 text-center text-sm text-muted-foreground border-t">
        Always happy to chat. Drop a message anytime!
      </footer>
    </div>
  );
}