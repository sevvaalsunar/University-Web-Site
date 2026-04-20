import { motion } from "motion/react";
import { Brain, Shield, Cloud, Database, Cpu, Network } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Research() {
  const { language } = useLanguage();

  const content = {
    TR: {
      pageTitle: "Araştırma Mükemmelliği",
      pageDescription: "Araştırma gruplarımız teknolojik inovasyonun ön saflarında yer alarak bilimsel ilerlemeye ve gerçek dünya çözümlerine katkıda bulunuyor.",
      projects: "Proje",
      publications: "Yayın",
      statsActive: "Aktif Proje",
      statsPublications: "Yayın",
      statsResearchers: "Araştırmacı",
      statsLaboratories: "Laboratuvar",
      labsTitle: "Araştırma Laboratuvarları",
      director: "Direktör:",
      joinTitle: "Araştırmamıza Katılın",
      joinDescription: "Lisansüstü öğrenciler ve araştırmacılar için fırsatları keşfedin. Çığır açan araştırmalara katkıda bulunun.",
      researchOpportunities: "Araştırma Fırsatları",
    },
    EN: {
      pageTitle: "Research Excellence",
      pageDescription: "Our research groups are at the forefront of technological innovation, contributing to scientific advancement and real-world solutions.",
      projects: "Projects",
      publications: "Publications",
      statsActive: "Active Projects",
      statsPublications: "Publications",
      statsResearchers: "Researchers",
      statsLaboratories: "Laboratories",
      labsTitle: "Research Laboratories",
      director: "Director:",
      joinTitle: "Join Our Research",
      joinDescription: "Explore opportunities for graduate students and researchers. Contribute to groundbreaking research.",
      researchOpportunities: "Research Opportunities",
    },
  };

  const t = content[language];

  const researchAreas = language === "TR" ? [
    {
      icon: Brain,
      title: "Yapay Zeka",
      description: "Derin öğrenme, doğal dil işleme ve bilgisayarlı görü alanlarında araştırmalar",
      projects: 25,
      publications: 120,
    },
    {
      icon: Shield,
      title: "Siber Güvenlik",
      description: "Ağ güvenliği, kriptografi ve güvenli yazılım geliştirme",
      projects: 18,
      publications: 85,
    },
    {
      icon: Cloud,
      title: "Bulut Bilişim",
      description: "Dağıtık sistemler, mikroservisler ve bulut tabanlı mimariler",
      projects: 22,
      publications: 95,
    },
    {
      icon: Database,
      title: "Veri Bilimi",
      description: "Büyük veri analitiği, makine öğrenmesi ve veri görselleştirme",
      projects: 20,
      publications: 110,
    },
    {
      icon: Cpu,
      title: "Yazılım Mühendisliği",
      description: "Yazılım mimarisi, tasarım kalıpları ve geliştirme metodolojileri",
      projects: 30,
      publications: 140,
    },
    {
      icon: Network,
      title: "IoT ve Kenar Bilişim",
      description: "Nesnelerin interneti, kenar bilişim ve gömülü sistemler",
      projects: 15,
      publications: 70,
    },
  ] : [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Research in deep learning, natural language processing, and computer vision",
      projects: 25,
      publications: 120,
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Network security, cryptography, and secure software development",
      projects: 18,
      publications: 85,
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Distributed systems, microservices, and cloud-based architectures",
      projects: 22,
      publications: 95,
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Big data analytics, machine learning, and data visualization",
      projects: 20,
      publications: 110,
    },
    {
      icon: Cpu,
      title: "Software Engineering",
      description: "Software Architecture, design patterns, and development methodologies",
      projects: 30,
      publications: 140,
    },
    {
      icon: Network,
      title: "IoT & Edge Computing",
      description: "Internet of Things, edge computing, and embedded systems",
      projects: 15,
      publications: 70,
    },
  ];

  const stats = language === "TR" ? [
    { number: "130", label: "Aktif Proje" },
    { number: "620", label: "Yayın" },
    { number: "45", label: "Araştırmacı" },
    { number: "12", label: "Laboratuvar" },
  ] : [
    { number: "130", label: "Active Projects" },
    { number: "620", label: "Publications" },
    { number: "45", label: "Researchers" },
    { number: "12", label: "Laboratories" },
  ];

  const labs = language === "TR" ? [
    {
      name: "Yapay Zeka Araştırma Merkezi",
      director: "Doç. Dr. Zafer Cömert",
      focus: "Derin öğrenme, görüntü işleme, makine öğrenmesi",
    },
    {
      name: "Siber Güvenlik Laboratuvarı",
      director: "Dr. Özgür Tonkal",
      focus: "Ağ güvenliği, kriptografi, sızma testleri",
    },
    {
      name: "Yazılım Mimarisi Araştırma Grubu",
      director: "Dr. Hüseyin Demir",
      focus: "Mikroservisler, bulut tabanlı sistemler, tasarım kalıpları",
    },
    {
      name: "Veri Bilimi ve Analitik Merkezi",
      director: "Dr. Abdulkadir Karacı",
      focus: "Büyük veri, veri madenciliği, iş zekası",
    },
  ] : [
    {
      name: "Artificial Intelligence Research Center",
      director: "Assoc. Prof. Dr. Zafer Cömert",
      focus: "Deep learning, image processing, machine learning",
    },
    {
      name: "Cybersecurity Laboratory",
      director: "Dr. Özgür Tonkal",
      focus: "Network security, cryptography, penetration testing",
    },
    {
      name: "Software Architecture Research Group",
      director: "Dr. Hüseyin Demir",
      focus: "Microservices, cloud-based systems, design patterns",
    },
    {
      name: "Data Science and Analytics Center",
      director: "Dr. Abdulkadir Karacı",
      focus: "Big data, data mining, business intelligence",
    },
  ];

  return (
    <div className="min-h-screen pt-32 lg:pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-['Playfair_Display'] text-[#B8956A] mb-6" style={{ fontSize: "4rem" }}>
            {t.pageTitle}
          </h1>
          <p className="text-[#FFFEF2]/70 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: "1.125rem" }}>
            {t.pageDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-8 hover:border-[#B8956A]/50 transition-all group"
            >
              <area.icon className="w-12 h-12 text-[#B8956A] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-['Playfair_Display'] text-[#FFFEF2] mb-3" style={{ fontSize: "1.75rem" }}>
                {area.title}
              </h3>
              <p className="text-[#FFFEF2]/60 mb-6" style={{ fontSize: "0.9375rem" }}>
                {area.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="backdrop-blur-sm bg-[#0A1628]/30 rounded-xl p-4 text-center">
                  <div className="font-['Playfair_Display'] text-[#B8956A] mb-1" style={{ fontSize: "2rem" }}>
                    {area.projects}
                  </div>
                  <div className="text-[#FFFEF2]/60 font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                    {t.projects}
                  </div>
                </div>
                <div className="backdrop-blur-sm bg-[#0A1628]/30 rounded-xl p-4 text-center">
                  <div className="font-['Playfair_Display'] text-[#B8956A] mb-1" style={{ fontSize: "2rem" }}>
                    {area.publications}
                  </div>
                  <div className="text-[#FFFEF2]/60 font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                    {t.publications}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-8 text-center"
            >
              <div className="font-['Playfair_Display'] text-[#B8956A] mb-2" style={{ fontSize: "3rem" }}>
                {stat.number}
              </div>
              <div className="text-[#FFFEF2]/70" style={{ fontSize: "1rem" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Research Labs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="font-['Playfair_Display'] text-[#B8956A] text-center mb-12" style={{ fontSize: "3rem" }}>
            {t.labsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {labs.map((lab, index) => (
              <motion.div
                key={lab.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-8 hover:border-[#B8956A]/50 transition-all"
              >
                <h3 className="font-['Playfair_Display'] text-[#FFFEF2] mb-3" style={{ fontSize: "1.5rem" }}>
                  {lab.name}
                </h3>
                <p className="text-[#B8956A] mb-4" style={{ fontSize: "1rem" }}>
                  {t.director} {lab.director}
                </p>
                <p className="text-[#FFFEF2]/60" style={{ fontSize: "0.9375rem" }}>
                  {lab.focus}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="backdrop-blur-sm bg-[#1a2e47]/20 border border-[#B8956A]/20 rounded-2xl p-12">
            <h3 className="font-['Playfair_Display'] text-[#B8956A] mb-4" style={{ fontSize: "2rem" }}>
              {t.joinTitle}
            </h3>
            <p className="text-[#FFFEF2]/70 mb-8 max-w-2xl mx-auto" style={{ fontSize: "1rem" }}>
              {t.joinDescription}
            </p>
            <button className="px-8 py-4 bg-[#B8956A] text-[#0A1628] rounded-full hover:bg-[#D4B78E] transition-all font-['Inter']">
              {t.researchOpportunities}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
