// @ts-nocheck
import { Link } from "react-router";
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { language } = useLanguage();

  const content = {
    TR: {
      universityName: "Samsun Üniversitesi",
      departmentName: "Yazılım Mühendisliği Bölümü",
      excellence: "2018'den Beri Eğitimde Mükemmellik",
      quickLinks: "Hızlı Bağlantılar",
      aboutDepartment: "Bölüm Hakkında",
      faculty: "Akademisyenler",
      admissions: "Başvuru",
      research: "Araştırma",
      curriculum: "Müfredat",
      contact: "İletişim",
      followUs: "Bizi Takip Edin",
      addressText: "Samsun Üniversitesi Mühendislik Fakültesi Ballıca Kampüsü, 19 Mayıs, Samsun",
      copyright: "© 2026 Samsun Üniversitesi Yazılım Mühendisliği Bölümü. Tüm hakları saklıdır.",
    },
    EN: {
      universityName: "Samsun University",
      departmentName: "Software Engineering Department",
      excellence: "Excellence in Education Since 2018",
      quickLinks: "Quick Links",
      aboutDepartment: "About the Department",
      faculty: "Faculty",
      admissions: "Admissions",
      research: "Research",
      curriculum: "Curriculum",
      contact: "Contact",
      followUs: "Follow Us",
      addressText: "Samsun University Faculty of Engineering Ballıca Campus, 19 Mayıs, Samsun",
      copyright: "© 2026 Samsun University Software Engineering Department. All rights reserved.",
    },
  };

  const t = content[language as "TR" | "EN"];

  return (
    <footer className="bg-[#050B14] border-t border-[#B8956A]/30 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* University Info */}
          <div>
            <h3 className="font-['Playfair_Display'] text-[#B8956A] mb-4" style={{ fontSize: "1.25rem" }}>
              {t.universityName}
            </h3>
            <p className="text-[#FFFEF2]/60 mb-4" style={{ fontSize: "0.875rem" }}>
              {t.departmentName}
            </p>
            <p className="text-[#FFFEF2]/60 font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
              {t.excellence}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#B8956A] mb-4" style={{ fontSize: "1.125rem" }}>
              {t.quickLinks}
            </h4>
            <div className="space-y-2">
              {[
                { label: t.aboutDepartment, path: "/about" },
                { label: t.faculty, path: "/faculty" },
                { label: t.admissions, path: "/admissions" },
                { label: t.research, path: "/research" },
                { label: t.curriculum, path: "/curriculum" }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-[#FFFEF2]/60 hover:text-[#B8956A] transition-colors"
                  style={{ fontSize: "0.875rem" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#B8956A] mb-4" style={{ fontSize: "1.125rem" }}>
              {t.contact}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-[#FFFEF2]/60" style={{ fontSize: "0.875rem" }}>
                <MapPin size={16} className="mt-1 text-[#B8956A]" />
                <span>{t.addressText}</span>
              </div>
              <div className="flex items-center gap-3 text-[#FFFEF2]/60" style={{ fontSize: "0.875rem" }}>
                <Phone size={16} className="text-[#B8956A]" />
                <span>+90 (362) 313 0055</span>
              </div>
              <div className="flex items-center gap-3 text-[#FFFEF2]/60" style={{ fontSize: "0.875rem" }}>
                <Mail size={16} className="text-[#B8956A]" />
                <span>muhendislik@samsun.edu.tr</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#B8956A] mb-4" style={{ fontSize: "1.125rem" }}>
              {t.followUs}
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook", link: "https://www.facebook.com/samsun.univ" },
                { icon: Twitter, label: "Twitter", link: "https://x.com/samsun_univ" },
                { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/school/samsununiversitesi/" },
                { icon: Instagram, label: "Instagram", link: "https://www.instagram.com/samsun.univ/" },
                { icon: Youtube, label: "YouTube", link: "https://www.youtube.com/c/Samsun%C3%9Cniversitesii" },
              ].map(({ icon: Icon, label, link }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#B8956A]/30 flex items-center justify-center text-[#B8956A] hover:bg-[#B8956A]/10 hover:border-[#B8956A] transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#B8956A]/20 mt-12 pt-8 text-center">
          <p className="text-[#FFFEF2]/40 font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}