import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center gap-2 px-3 py-2 rounded-full border border-[#B8956A]/30 backdrop-blur-sm bg-[#0A1628]/30">
      <Globe size={14} className="text-[#B8956A]/70" />
      <div className="flex items-center gap-1">
        <button
          onClick={() => setLanguage("TR")}
          className={`relative px-3 py-1.5 rounded-full font-['Inter'] transition-all duration-300 ${
            language === "TR"
              ? "text-[#0A1628]"
              : "text-[#FFFEF2]/50 hover:text-[#FFFEF2]/80"
          }`}
          style={{ fontSize: "0.8125rem" }}
        >
          {language === "TR" && (
            <motion.div
              layoutId="languageBackground"
              className="absolute inset-0 bg-[#B8956A] rounded-full"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-10">TR</span>
        </button>
        <div className="w-px h-4 bg-[#B8956A]/30" />
        <button
          onClick={() => setLanguage("EN")}
          className={`relative px-3 py-1.5 rounded-full font-['Inter'] transition-all duration-300 ${
            language === "EN"
              ? "text-[#0A1628]"
              : "text-[#FFFEF2]/50 hover:text-[#FFFEF2]/80"
          }`}
          style={{ fontSize: "0.8125rem" }}
        >
          {language === "EN" && (
            <motion.div
              layoutId="languageBackground"
              className="absolute inset-0 bg-[#B8956A] rounded-full"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-10">EN</span>
        </button>
      </div>
    </div>
  );
}
