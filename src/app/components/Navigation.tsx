import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const navItems = language === "TR" ? [
    { path: "/", label: "Ana Sayfa" },
    { path: "/about", label: "Bölüm Hakkında" },
    { path: "/faculty", label: "Personel" },
    { path: "/curriculum", label: "Eğitim" },
    { path: "/projects", label: "Projeler" },
    { path: "/research", label: "Araştırma" },
    { path: "/news", label: "Haberler" },
    { path: "/contact", label: "İletişim" },
  ] : [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/faculty", label: "Faculty" },
    { path: "/curriculum", label: "Curriculum" },
    { path: "/projects", label: "Projects" },
    { path: "/research", label: "Research" },
    { path: "/news", label: "News" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Navigation - Glassmorphism */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block"
      >
        <div
          className="backdrop-blur-md bg-[#0A1628]/40 border border-[#B8956A]/30 rounded-full px-8 py-4 shadow-2xl"
          style={{
            boxShadow: "0 8px 32px 0 rgba(184, 149, 106, 0.15)",
          }}
        >
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-3 mr-4"
            >
              <img
                src="/src/imports/Ekran_görüntüsü_2026-04-17_152101.png"
                alt="Samsun University Logo"
                className="h-8 w-auto object-contain"
                style={{ filter: "brightness(1.1) saturate(0.9) hue-rotate(-5deg)", opacity: 0.95 }}
              />
              <span className="font-['Playfair_Display'] text-[#B8956A] tracking-wide whitespace-nowrap" style={{ fontSize: "0.9rem" }}>
                Samsun Üniversitesi Yazılım Mühendisliği Bölümü
              </span>
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 transition-all duration-300 font-['Inter'] tracking-wide ${
                  location.pathname === item.path
                    ? "text-[#B8956A]"
                    : "text-[#FFFEF2]/70 hover:text-[#B8956A]"
                }`}
                style={{ fontSize: "0.875rem" }}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8956A]"
                  />
                )}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 lg:hidden"
      >
        <div
          className="backdrop-blur-md bg-[#0A1628]/60 border-b border-[#B8956A]/30 px-6 py-4"
          style={{
            boxShadow: "0 4px 16px 0 rgba(184, 149, 106, 0.15)",
          }}
        >
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2"
            >
              <img
                src="/src/imports/Ekran_görüntüsü_2026-04-17_152101.png"
                alt="Samsun University Logo"
                className="h-7 w-auto object-contain"
                style={{ filter: "brightness(1.1) saturate(0.9) hue-rotate(-5deg)", opacity: 0.95 }}
              />
              <span className="font-['Playfair_Display'] text-[#B8956A] tracking-wide" style={{ fontSize: "0.875rem" }}>
                SAMÜ YM
              </span>
            </Link>
            <div className="flex items-center gap-3">
              {/* Language Switcher - Mobile */}
              <LanguageSwitcher />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#FFFEF2] p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="backdrop-blur-md bg-[#0A1628]/95 border-b border-[#B8956A]/30 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 font-['Inter'] ${
                      location.pathname === item.path
                        ? "bg-[#B8956A]/20 text-[#B8956A]"
                        : "text-[#FFFEF2]/70 hover:bg-[#B8956A]/10 hover:text-[#B8956A]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}