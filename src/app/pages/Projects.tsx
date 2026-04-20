import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ExternalLink, Github, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export default function Projects() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(language === "TR" ? "Tümü" : "All");

  // Dil değiştiğinde filtre state'ini güncelle
  useEffect(() => {
    setSelectedCategory(language === "TR" ? "Tümü" : "All");
  }, [language]);

  const content = {
    TR: {
      pageTitle: "Projeler",
      pageDescription: "Öğrencilerimiz ve öğretim üyelerimiz tarafından geliştirilen yenilikçi projeler teknolojinin geleceğini şekillendiriyor.",
      all: "Tümü",
      team: "Ekip:",
      awardWinning: "Ödüllü",
      startProjectTitle: "Kendi Projenize Başlayın",
      startProjectDescription: "Bölümümüz, öğrencilere ve öğretim üyelerine yenilikçi projeleri desteklemek için kaynak ve mentorluk fırsatları sağlar.",
      learnMore: "Daha Fazla Bilgi",
    },
    EN: {
      pageTitle: "Projects",
      pageDescription: "Innovative projects developed by our students and faculty members are shaping the future of technology.",
      all: "All",
      team: "Team:",
      awardWinning: "Award-Winning",
      startProjectTitle: "Start Your Own Project",
      startProjectDescription: "Our department provides students and faculty with access to resources and mentorship opportunities to support innovative projects.",
      learnMore: "Learn More",
    },
  };

  const t = content[language];

  const categories = language === "TR"
    ? ["Tümü", "Yapay Zeka", "Siber Güvenlik", "IoT", "Sağlık", "Blockchain"]
    : ["All", "Artificial Intelligence", "Cybersecurity", "IoT", "Health", "Blockchain"];

  const projects = language === "TR" ? [
    {
      title: "Bilişsel Görü Yapay Zekası",
      category: "Yapay Zeka",
      description: "Gerçek zamanlı nesne tespiti ve sahne anlama için derin öğrenme kullanan gelişmiş bilgisayarlı görü sistemi.",
      image: "https://images.unsplash.com/photo-1773558057689-847e19466840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NjMwMjk4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Python", "TensorFlow", "OpenCV"],
      team: "Prof. Dr. Zafer Cömert Laboratuvarı",
      year: "2026",
      award: "En İyi İnovasyon Ödülü",
    },
    {
      title: "Güvenli Zincir Protokolü",
      category: "Blockchain",
      description: "Güvenli akademik kimlik doğrulama ve transkript yönetimi için dağıtık defter teknolojisi.",
      image: "https://images.unsplash.com/photo-1644343262170-e40d72e19a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwY3J5cHRvY3VycmVuY3klMjBuZXR3b3JrfGVufDF8fHx8MTc3NjQwODQyMnww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Solidity", "Ethereum", "Web3.js"],
      team: "Dr. Abdulkadir Karacı Laboratuvarı",
      year: "2025",
      award: null,
    },
    {
      title: "Otonom Navigasyon Sistemi",
      category: "Yapay Zeka",
      description: "Pekiştirmeli öğrenme ve sensör füzyonu teknikleri kullanan otonom araç navigasyonu.",
      image: "https://images.unsplash.com/photo-1650699060601-a5040b8716f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwdmVoaWNsZSUyMHNlbGYlMjBkcml2aW5nfGVufDF8fHx8MTc3NjQyMzA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["C++", "ROS", "PyTorch"],
      team: "Dr. Hüseyin Demir Laboratuvarı",
      year: "2026",
      award: "Araştırma Mükemmelliği",
    },
    {
      title: "MediCare Yapay Zeka Asistanı",
      category: "Sağlık",
      description: "Hasta tanı desteği ve tıbbi kayıt analizi için akıllı sağlık asistanı.",
      image: "https://images.unsplash.com/photo-1695048441307-d081dbd2b5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc2NDIzMDU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Python", "Flask", "scikit-learn"],
      team: "Doç. Dr. Emel Soylu Laboratuvarı",
      year: "2025",
      award: "Sosyal Etki Ödülü",
    },
    {
      title: "Akıllı Şehir IoT Platformu",
      category: "IoT",
      description: "Akıllı şehir altyapı yönetimi ve gerçek zamanlı izleme için entegre IoT platformu.",
      image: "https://images.unsplash.com/photo-1760553120324-d3d2bf53852b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBpb3QlMjBzZW5zb3JzfGVufDF8fHx8MTc3NjQyMzA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Node.js", "MQTT", "MongoDB"],
      team: "Arş. Gör. Alper Talha Karadeniz",
      year: "2026",
      award: null,
    },
    {
      title: "Kuantum Şifreleme Paketi",
      category: "Siber Güvenlik",
      description: "Yeni nesil güvenli iletişim için post-kuantum kriptografik algoritmalar.",
      image: "https://images.unsplash.com/photo-1752451399417-eb6e072269bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY29tcHV0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzY0MjMwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["C", "OpenSSL", "Rust"],
      team: "Dr. Özgür Tonkal Laboratuvarı",
      year: "2026",
      award: "En İyi Güvenlik Projesi",
    },
  ] : [
    {
      title: "Cognitive Vision Artificial Intelligence",
      category: "Artificial Intelligence",
      description: "Advanced computer vision system utilizing deep learning for real-time object detection and scene understanding.",
      image: "https://images.unsplash.com/photo-1773558057689-847e19466840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NjMwMjk4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Python", "TensorFlow", "OpenCV"],
      team: "Prof. Dr. Zafer Cömert Laboratory",
      year: "2026",
      award: "Best Innovation Award",
    },
    {
      title: "Secure Chain Protocol",
      category: "Blockchain",
      description: "Distributed ledger technology for secure academic credential verification and transcript management.",
      image: "https://images.unsplash.com/photo-1644343262170-e40d72e19a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwY3J5cHRvY3VycmVuY3klMjBuZXR3b3JrfGVufDF8fHx8MTc3NjQwODQyMnww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Solidity", "Ethereum", "Web3.js"],
      team: "Dr. Abdulkadir Karacı Laboratory",
      year: "2025",
      award: null,
    },
    {
      title: "Autonomous Navigation System",
      category: "Artificial Intelligence",
      description: "Autonomous vehicle navigation utilizing reinforcement learning and sensor fusion techniques.",
      image: "https://images.unsplash.com/photo-1650699060601-a5040b8716f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwdmVoaWNsZSUyMHNlbGYlMjBkcml2aW5nfGVufDF8fHx8MTc3NjQyMzA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["C++", "ROS", "PyTorch"],
      team: "Dr. Hüseyin Demir Laboratory",
      year: "2026",
      award: "Research Excellence",
    },
    {
      title: "MediCare Artificial Intelligence Assistant",
      category: "Health",
      description: "Intelligent healthcare assistant for patient diagnosis support and medical record analysis.",
      image: "https://images.unsplash.com/photo-1695048441307-d081dbd2b5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc2NDIzMDU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Python", "Flask", "scikit-learn"],
      team: "Assoc. Prof. Dr. Emel Soylu Laboratory",
      year: "2025",
      award: "Social Impact Award",
    },
    {
      title: "Smart City IoT Platform",
      category: "IoT",
      description: "Integrated IoT platform for smart city infrastructure management and real-time monitoring.",
      image: "https://images.unsplash.com/photo-1760553120324-d3d2bf53852b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBpb3QlMjBzZW5zb3JzfGVufDF8fHx8MTc3NjQyMzA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Node.js", "MQTT", "MongoDB"],
      team: "Research Asst. Alper Talha Karadeniz",
      year: "2026",
      award: null,
    },
    {
      title: "Quantum Encryption Suite",
      category: "Cybersecurity",
      description: "Post-quantum cryptographic algorithms for next-generation secure communications.",
      image: "https://images.unsplash.com/photo-1752451399417-eb6e072269bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY29tcHV0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzY0MjMwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["C", "OpenSSL", "Rust"],
      team: "Dr. Özgür Tonkal Laboratory",
      year: "2026",
      award: "Best Security Project",
    },
  ];

  const filteredProjects =
    selectedCategory === (language === "TR" ? "Tümü" : "All")
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 lg:pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-['Playfair_Display'] text-[#B8956A] mb-6" style={{ fontSize: "4rem" }}>
            {t.pageTitle}
          </h1>
          <p className="text-[#FFFEF2]/70 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: "1.125rem" }}>
            {t.pageDescription}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full border transition-all font-['Inter'] ${
                selectedCategory === category
                  ? "bg-[#B8956A] text-[#0A1628] border-[#B8956A]"
                  : "border-[#B8956A]/30 text-[#FFFEF2]/70 hover:border-[#B8956A] hover:text-[#B8956A]"
              }`}
              style={{ fontSize: "0.875rem" }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl overflow-hidden hover:border-[#B8956A]/50 transition-all group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent" />
                {project.award && (
                  <div className="absolute top-4 right-4 backdrop-blur-md bg-[#B8956A]/90 px-3 py-1 rounded-full flex items-center gap-2">
                    <Award size={14} className="text-[#0A1628]" />
                    <span className="text-[#0A1628] font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                      {t.awardWinning}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#B8956A]/20 text-[#B8956A] rounded-full font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                    {project.category}
                  </span>
                  <span className="text-[#FFFEF2]/40 font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                    {project.year}
                  </span>
                </div>

                <h3 className="font-['Playfair_Display'] text-[#FFFEF2] mb-3" style={{ fontSize: "1.5rem" }}>
                  {project.title}
                </h3>

                <p className="text-[#FFFEF2]/60 mb-4 line-clamp-3" style={{ fontSize: "0.875rem" }}>
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-[#FFFEF2]/50 mb-2 font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                    {t.team}
                  </p>
                  <p className="text-[#B8956A]" style={{ fontSize: "0.875rem" }}>
                    {project.team}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#0A1628]/50 text-[#FFFEF2]/70 rounded-lg font-['IBM_Plex_Mono']"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.award && (
                  <div className="border-t border-[#B8956A]/20 pt-4">
                    <div className="flex items-center gap-2 text-[#B8956A]">
                      <Award size={16} />
                      <span style={{ fontSize: "0.875rem" }}>{project.award}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="backdrop-blur-sm bg-[#1a2e47]/20 border border-[#B8956A]/20 rounded-2xl p-12">
            <h3 className="font-['Playfair_Display'] text-[#B8956A] mb-4" style={{ fontSize: "2rem" }}>
              {t.startProjectTitle}
            </h3>
            <p className="text-[#FFFEF2]/70 mb-8 max-w-2xl mx-auto" style={{ fontSize: "1rem" }}>
              {t.startProjectDescription}
            </p>
            <button className="px-8 py-4 bg-[#B8956A] text-[#0A1628] rounded-full hover:bg-[#D4B78E] transition-all font-['Inter']">
              {t.learnMore}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
