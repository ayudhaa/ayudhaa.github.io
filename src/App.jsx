import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useLang } from "./LanguageContext";

function Navbar({ darkMode, setDarkMode, setWaveTrigger }) {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: t("navbar.about") },
    { href: "#experience", label: t("navbar.experience") },
    { href: "#contact", label: t("navbar.contact") },
  ];

  const toggleLang = () => setLang(lang === "en" ? "id" : "en");
  return (
    <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-md z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-bold text-primary cursor-pointer"
          onClick={() => setWaveTrigger((p) => p + 1)}
        >
          😊
        </a>

        <div className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition">
              {l.label}
            </a>
          ))}

          <button
            onClick={toggleLang}
            className="px-3 py-1 hover:bg-primary/10 transition"
            aria-label="Toggle language"
          >
            {t("navbar.toggle")}
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition ${darkMode ? "bg-darkbg text-darktext" : "bg-white text-black"}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block px-4 py-2 border-b hover:bg-muted">
              {l.label}
            </a>
          ))}

          <div className="flex justify-center py-3 gap-4">
            <button onClick={toggleLang} className="px-3 py-1 border rounded-md">
              {t("navbar.toggle")}
            </button>

            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero({ waveTrigger }) {
  const { t } = useLang();
  const waveAnimation =
    waveTrigger === 0 ? [0, 20, -20, 10, -10, 0] : [0, 20, -20, 20, -20, 20, -20, 0];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center gap-6 bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold">
        <span className="text-primary">
          {t("hero.title")}{" "}
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed px-4 sm:px-6"
      >
        {t("hero.subtitle")}
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

function ExperienceItem({ tpath, isOpen, onToggle, onCloseGallery }) {
  const [showGallery, setShowGallery] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const { t } = useLang();
  const data = t(tpath);

  const items = Array.isArray(data.items) ? data.items : [];
  const images = Array.isArray(data.images) ? data.images : [];

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleOpenGallery = () => {
    setShowGallery(true);
    onCloseGallery?.();
  };

  const handleCloseGallery = () => {
    setShowGallery(false);
  };

  return (
    <>
      <li className="p-6 rounded-xl shadow bg-card border border-primary">
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={onToggle}
        >
          <div>
            <h3 className="text-xl font-semibold">{data.role}</h3>
            <p className="text-sm text-muted-foreground">
              {data.company} · {data.period}
            </p>
          </div>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>

        <div className={`smooth-collapse ${isOpen ? "open mt-4" : ""}`}>
          <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/90">
            {items.map((it, idx) => (
              <li key={idx}>{it}</li>
            ))}
          </ul>

          {data.link && (
            <div className="mt-4">
              <a
                href={`https://${data.link}`}
                target="_blank"
                rel="noreferrer"
                className="text-primary font-medium hover:underline"
              >
                🔗 {data.link}
              </a>
            </div>
          )}

          {images.length > 0 && (
            <button
              onClick={handleOpenGallery}
              className="mt-4 px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-md text-sm font-medium"
            >
              {t("experience.projects")}
            </button>
          )}

          <div className="mt-2 text-sm text-muted-foreground italic">
            ({data.internal})
          </div>
        </div>
      </li>

      {showGallery && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur flex justify-center items-center z-50 p-4">
          <div className="bg-white dark:bg-darkbg p-4 rounded-xl shadow-xl w-full max-w-4xl mx-auto relative">
            <button
              onClick={handleCloseGallery}
              className="absolute -top-3 -right-3 md:top-2 md:right-2 bg-white dark:bg-darkbg rounded-full p-2 shadow-lg hover:scale-110 transition-transform z-10"
            >
              <X size={18} className="text-black dark:text-white" />
            </button>

            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={images[activeIndex]}
                alt={`Project image ${activeIndex + 1}`}
                className="w-full h-full object-contain"
                loading="lazy"
              />

              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hidden md:block"
              >
                ←
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hidden md:block"
              >
                →
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-1 rounded-full text-sm">
                {activeIndex + 1} / {images.length}
              </div>
            </div>

            <div className="hidden md:block mt-4">
              <div className="flex justify-center gap-2 overflow-x-auto py-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                      activeIndex === idx ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden mt-4 flex items-center justify-between">
              <button
                onClick={prevImage}
                className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg"
              >
                ← {t("gallery.prev", "Prev")}
              </button>

              <div className="flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full ${
                      activeIndex === idx ? "bg-primary" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextImage}
                className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg"
              >
                {t("gallery.next", "Next")} →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [waveTrigger, setWaveTrigger] = useState(0);
  const { t } = useLang();
  const [openExperience, setOpenExperience] = useState(null);
  const [openGallery, setOpenGallery] = useState(null);

  const handleToggleExperience = (experience) => {
    setOpenExperience(openExperience === experience ? null : experience);
  };

  const handleCloseGallery = () => {
    setOpenGallery(null);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="font-sans text-black dark:bg-darkbg dark:text-darktext transition-colors">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} setWaveTrigger={setWaveTrigger} />
      <Hero waveTrigger={waveTrigger} />

      <Section id="about" title={t("about.title")}>
        <p className="text-center max-w-2xl mx-auto">{t("about.text")}</p>
      </Section>

      <Section id="experience" title={t("experience.title")}>
        <ul className="max-w-3xl mx-auto space-y-6">
          <ExperienceItem 
            tpath="experience.sap" 
            isOpen={openExperience === "sap"}
            onToggle={() => handleToggleExperience("sap")}
            onCloseGallery={handleCloseGallery}
          />
          <ExperienceItem 
            tpath="experience.csa" 
            isOpen={openExperience === "csa"}
            onToggle={() => handleToggleExperience("csa")}
            onCloseGallery={handleCloseGallery}
          />
          <ExperienceItem 
            tpath="experience.reventon" 
            isOpen={openExperience === "reventon"}
            onToggle={() => handleToggleExperience("reventon")}
            onCloseGallery={handleCloseGallery}
          />
        </ul>
      </Section>

      <Section id="contact" title={t("contact.title")}>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <a href="mailto:ayudharachman@gmail.com" className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/20 transition">
              <Mail size={20} /> <span>ayudharachman@gmail.com</span>
            </a>

            <a href="https://github.com/ayudhaa" target="_blank" rel="noreferrer" className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/20 transition">
              <Github size={20} /> <span>{t("contact.github")}</span>
            </a>

            <a href="https://www.linkedin.com/in/ridho-ayudha-rachman-269637151/" target="_blank" rel="noreferrer" className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/20 transition">
              <Linkedin size={20} /> <span>{t("contact.linkedin")}</span>
            </a>
          </div>
        </div>
      </Section>

      <footer className="py-6 text-center text-sm text-muted-foreground border-t">{t("footer")}</footer>
    </div>
  );
}