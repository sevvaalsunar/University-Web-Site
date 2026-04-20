import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Award, Users, BookOpen, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  const content = {
    TR: {
      established: "KURULDU 2018",
      title: "Yazılım Mühendisliği",
      titleHighlight: "Bölümü",
      subtitle: "Samsun Üniversitesi Yazılım Mühendisliği Bölümü, zamansız akademik geleneği son teknoloji ile birleştirerek yeni nesil yenilikçileri yetiştirmektedir.",
      applyBtn: "Başvur",
      discoverBtn: "Mirasımızı Keşfedin",
      stats: [
        { number: "8.519", label: "Öğrenci" },
        { number: "71", label: "Program" },
        { number: "518", label: "Akademisyen" },
        { number: "336", label: "İdari Personel" },
      ],
      academicExcellence: "Teknik Mükemmellik",
      academicDesc: "Yazılım yaşam döngüsü, algoritma tasarımı ve sistem mimarisi odaklı derinlemesine eğitim",
      viewCurriculum: "Müfredatı İncele",
      innovation: "Son Teknoloji İnovasyon",
      innovationDesc: "Yapay zeka, siber güvenlik ve yazılım mimarisinde öncü araştırmalar",
      viewProjects: "Projeleri Görüntüle",
      heritageTitle: "Mükemmelliğin Mirası",
      heritageDesc: "2018'de kurulan Samsun Üniversitesi Yazılım Mühendisliği Bölümü, yazılım mühendisliği metodolojilerinde derinlemesine teknik eğitimi modern teknoloji yığınlarıyla birleştirerek sektör standartlarında yazılım mimarları yetiştirmektedir. SDLC, nesne yönelimli tasarım, mikroservis mimarisi ve DevOps uygulamalarına odaklanan müfredatımız, öğrencileri karmaşık yazılım sistemleri geliştirmeye hazırlar.",
      learnStory: "Hikayemizi Öğrenin",
    },
    EN: {
      established: "ESTABLISHED 2018",
      title: "Software Engineering",
      titleHighlight: "Department",
      subtitle: "Samsun University Software Engineering Department cultivates the next generation of innovators by combining timeless academic tradition with cutting-edge technology.",
      applyBtn: "Apply Now",
      discoverBtn: "Discover Our Heritage",
      stats: [
        { number: "8,519", label: "Students" },
        { number: "71", label: "Programs" },
        { number: "518", label: "Faculty" },
        { number: "336", label: "Staff" },
      ],
      academicExcellence: "Technical Excellence",
      academicDesc: "In-depth education focused on software lifecycle, algorithm design, and system architecture",
      viewCurriculum: "Explore Curriculum",
      innovation: "Cutting-Edge Innovation",
      innovationDesc: "Pioneering research in AI, cybersecurity, and software architecture",
      viewProjects: "View Projects",
      heritageTitle: "A Legacy of Excellence",
      heritageDesc: "Founded in 2018, Samsun University Software Engineering Department combines in-depth technical education in software engineering methodologies with modern technology stacks, producing industry-standard software architects. Our curriculum, focused on SDLC, object-oriented design, microservice architecture, and DevOps practices, prepares students to develop complex software systems.",
      learnStory: "Learn Our Story",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      {/* Grand Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1762793215104-f93c3a098c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMGFyY2hpdGVjdHVyZSUyMGNsYXNzaWNhbHxlbnwxfHx8fDE3NzY0OTY0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Akademik Kütüphane"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A1628]/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/50 via-transparent to-[#0A1628]/90" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B8956A]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#B8956A]/5 rounded-full blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <span className="inline-block px-6 py-2 border border-[#B8956A]/30 rounded-full text-[#B8956A] font-['IBM_Plex_Mono'] tracking-widest backdrop-blur-sm bg-[#0A1628]/30" style={{ fontSize: "0.75rem" }}>
                {t.established}
              </span>
            </div>

            <h1 className="font-['Playfair_Display'] text-[#FFFEF2] mb-6 leading-tight" style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}>
              {t.title}
              <br />
              <span className="text-[#B8956A]">{t.titleHighlight}</span>
            </h1>

            <p className="text-[#FFFEF2]/70 max-w-2xl mx-auto mb-12 leading-relaxed" style={{ fontSize: "1.125rem" }}>
              {t.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/admissions"
                className="group px-8 py-4 bg-[#B8956A] text-[#0A1628] rounded-full font-['Inter'] flex items-center gap-2 hover:bg-[#D4B78E] transition-all shadow-lg hover:shadow-[#B8956A]/30"
                style={{ fontSize: "1rem" }}
              >
                {t.applyBtn}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border border-[#B8956A] text-[#B8956A] rounded-full font-['Inter'] hover:bg-[#B8956A]/10 transition-all"
                style={{ fontSize: "1rem" }}
              >
                {t.discoverBtn}
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-32"
          >
            {t.stats.map((stat, index) => {
              const icons = [Users, BookOpen, Award, Sparkles];
              const Icon = icons[index];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="backdrop-blur-md bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-6 hover:border-[#B8956A]/50 transition-all"
                >
                  <Icon className="w-8 h-8 text-[#B8956A] mx-auto mb-4" />
                  <div className="font-['Playfair_Display'] text-[#B8956A] mb-2" style={{ fontSize: "2.5rem" }}>
                    {stat.number}
                  </div>
                  <div className="text-[#FFFEF2]/60 font-['Inter']" style={{ fontSize: "0.875rem" }}>
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#B8956A]/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-[#B8956A] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* History and Foundation Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#0A1628] to-[#050B14] border-y border-[#B8956A]/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-['Playfair_Display'] text-[#B8956A] mb-6" style={{ fontSize: "2.5rem" }}>
              {language === "TR" ? "Tarihçe ve Kuruluş" : "History and Foundation"}
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-[#FFFEF2]/80 leading-relaxed mb-6" style={{ fontSize: "1.125rem" }}>
                {language === "TR"
                  ? "Samsun Üniversitesi, 18 Mayıs 2018 tarihinde Samsun'da kurulan devlet üniversitesidir. Ondokuz Mayıs Üniversitesinin bazı fakülte ile yüksekokullarının devriyle kurulan ve Samsun'daki ikinci devlet üniversitesi olan Samsun Üniversitesinin merkez yerleşkesi Canik ilçesinde bulunmaktadır."
                  : "Samsun University is a state university founded in Samsun on May 18, 2018. Established through the transfer of certain faculties and schools from Ondokuz Mayıs University, it is the second state university in Samsun with its main campus located in the Canik district."
                }
              </p>
              <p className="text-[#FFFEF2]/70 leading-relaxed" style={{ fontSize: "1rem" }}>
                {language === "TR"
                  ? "24 Eylül 2018'de ilk eğitim-öğretim dönemine başlayan üniversite, 19 Mayıs ilçesindeki Ballıca yerleşkesinde teknik fakülteleri ve Canik yerleşkesinde sosyal bilimler fakültelerini barındırmaktadır. Yazılım Mühendisliği Bölümü, üniversitenin prestij bölümlerinden biri olarak teknoloji eğitiminde öncü rol üstlenmektedir."
                  : "The university began its first academic year on September 24, 2018, housing technical faculties at the Ballıca campus in 19 Mayıs district and social sciences faculties at the Canik campus. The Software Engineering Department serves as one of the university's flagship programs, playing a pioneering role in technology education."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Sections Preview */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#050B14] to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Academic Excellence */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <div className="relative h-96">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1771647287015-f30dbb239646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGxpYnJhcnklMjBib29rcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzc2NDIyOTExfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Academic Excellence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="font-['Playfair_Display'] text-[#FFFEF2] mb-3" style={{ fontSize: "2rem" }}>
                  {t.academicExcellence}
                </h2>
                <p className="text-[#FFFEF2]/70 mb-6" style={{ fontSize: "1rem" }}>
                  {t.academicDesc}
                </p>
                <Link
                  to="/curriculum"
                  className="inline-flex items-center gap-2 text-[#B8956A] hover:gap-4 transition-all"
                >
                  {t.viewCurriculum}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Innovation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <div className="relative h-96">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1771189957040-3a4f9b78812c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21wdXRlciUyMHNjaWVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NjQyMjkxMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Innovation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="font-['Playfair_Display'] text-[#FFFEF2] mb-3" style={{ fontSize: "2rem" }}>
                  {t.innovation}
                </h2>
                <p className="text-[#FFFEF2]/70 mb-6" style={{ fontSize: "1rem" }}>
                  {t.innovationDesc}
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-[#B8956A] hover:gap-4 transition-all"
                >
                  {t.viewProjects}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-[#050B14]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Playfair_Display'] text-[#B8956A] mb-6" style={{ fontSize: "3rem" }}>
              {t.heritageTitle}
            </h2>
            <p className="text-[#FFFEF2]/70 leading-relaxed mb-8" style={{ fontSize: "1.125rem" }}>
              {t.heritageDesc}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#B8956A] text-[#B8956A] rounded-full hover:bg-[#B8956A]/10 transition-all"
            >
              {t.learnStory}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}