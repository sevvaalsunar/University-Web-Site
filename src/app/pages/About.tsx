import { motion } from "motion/react";
import { Trophy, Users, Globe, Lightbulb } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  const content = {
    TR: {
      title: "Bölüm Hakkında",
      subtitle: "Samsun Üniversitesi Yazılım Mühendisliği Bölümü, yazılım yaşam döngüsü metodolojileri, algoritma tasarımı, sistem mimarisi ve modern mühendislik uygulamalarında derinlemesine teknik eğitim sunarak geleceğin yazılım mimarlarını yetiştirmektedir.",
      editorialQuote: "Müfredatımız, titiz yazılım geliştirme yaşam döngüleri, gelişmiş algoritma analizi ve sağlam sistem mimarisi üzerine yapılandırılmıştır.",
      editorialP1: "Teorik bilgisayar bilimi temellerinin gerçek dünya çevik mühendislik uygulamalarıyla entegrasyonuna öncelik veriyor, öğrencilerimizi yüksek riskli teknolojik inovasyon için hazırlıyoruz. Akademik yaklaşımımız nesne yönelimli tasarım prensipleri, mikroservis mimari desenleri ve DevOps operasyonel mükemmelliğini vurgular.",
      editorialP2: "Bölüm, yazılım kalite güvencesi, sürekli entegrasyon ve dağıtım metodolojileri ve güvenli kod geliştirme uygulamalarına odaklanmış bir taahhüt sürdürmektedir. Öğrenciler akademik yolculukları boyunca endüstri standardı çerçeveler, versiyon kontrol sistemleri ve işbirlikçi geliştirme ortamlarıyla etkileşime girerler.",
      missionTitle: "Teknik Misyonumuz",
      missionP1: "Yazılım geliştirme yaşam döngüsü (SDLC) metodolojilerinde uzmanlaşmış, algoritma tasarımı ve karmaşıklık analizi konularında derinlemesine bilgi sahibi, ölçeklenebilir sistem mimarisi geliştirebilen ve modern DevOps, mikroservis ve bulut tabanlı teknolojilerde yetkin yazılım mühendisleri yetiştirmek.",
      missionP2: "Müfredatımız, nesne yönelimli programlama, veri yapıları, tasarım desenleri, yazılım test metodolojileri, sürekli entegrasyon/sürekli dağıtım (CI/CD) ve güvenli kod geliştirme prensiplerine odaklanır. Agile, Scrum ve Kanban gibi çevik metodolojileri uygulamalı projelerle pekiştirerek sektör standartlarında mühendislik kültürü aşılarız.",
      historyTitle: "Tarihçe",
      valuesTitle: "Değerlerimiz",
      ballicaTitle: "Ballıca Yerleşkesi",
      ballicaDesc: "19 Mayıs sınırları içerisindeki Ballıca semtinde yer alan yerleşkede havacılık ve uzay bilimleri fakültesi, gemi inşaatı ve deniz bilimleri fakültesi, mühendislik fakültesi, sivil havacılık yüksekokulu ve teknik bilimler meslek yüksekokulu bulunmaktadır.",
      ballicaNote: "Teknik alanların ağırlıklı olduğu ve üniversitenin prestij fakültelerinin yer aldığı bir alan.",
      canikTitle: "Canik Yerleşkesi",
      canikDesc: "İktisadi, idari ve sosyal bilimler fakültesi ile mimarlık ve tasarım fakültesinin bulunduğu Canik'teki yerleşke, sosyal alanların ağırlıkta olduğu bir alan olarak değerlendirilmektedir.",
      canikNote: "Üniversitenin merkez yerleşkesi Canik ilçesinde bulunmaktadır.",
    },
    EN: {
      title: "About the Department",
      subtitle: "The Samsun University Software Engineering Department provides comprehensive technical education in software development lifecycles, algorithm design, system architecture, and modern engineering methodologies, cultivating the next generation of software architects.",
      editorialQuote: "Our curriculum is structured upon rigorous software development lifecycles, advanced algorithm analysis, and robust system architecture.",
      editorialP1: "We prioritize the integration of theoretical computer science foundations with real-world agile engineering practices, preparing our students for high-stakes technological innovation. Our academic approach emphasizes object-oriented design principles, microservice architectural patterns, and DevOps operational excellence.",
      editorialP2: "The department maintains a focused commitment to software quality assurance, continuous integration and deployment methodologies, and secure code development practices. Students engage with industry-standard frameworks, version control systems, and collaborative development environments throughout their academic journey.",
      missionTitle: "Our Technical Mission",
      missionP1: "To educate software engineers specialized in Software Development Life Cycle (SDLC) methodologies, with comprehensive knowledge in algorithm design and complexity analysis, capable of developing scalable system architectures, and proficient in modern DevOps, microservices, and cloud-based technologies.",
      missionP2: "Our curriculum emphasizes object-oriented programming, data structures, design patterns, software testing methodologies, continuous integration/continuous deployment (CI/CD), and secure code development principles. We instill industry-standard engineering culture by reinforcing agile methodologies such as Agile, Scrum, and Kanban through hands-on projects.",
      historyTitle: "Our History",
      valuesTitle: "Our Values",
      ballicaTitle: "Ballıca Campus",
      ballicaDesc: "Located in the Ballıca district within 19 Mayıs boundaries, the campus houses the Faculty of Aviation and Space Sciences, Faculty of Naval Architecture and Maritime Sciences, Faculty of Engineering, School of Civil Aviation, and Technical Sciences Vocational School.",
      ballicaNote: "A technical-focused area featuring the university's flagship faculties.",
      canikTitle: "Canik Campus",
      canikDesc: "The Canik campus houses the Faculty of Economics, Administrative and Social Sciences and the Faculty of Architecture and Design, serving as a hub for social sciences disciplines.",
      canikNote: "The university's central campus is located in the Canik district.",
    },
  };

  const t = content[language];

  const milestones = language === "TR" ? [
    { year: "2018", event: "Üniversite Kuruldu", description: "18 Mayıs 2018'de Samsun Üniversitesi resmen kuruldu" },
    { year: "2018", event: "İlk Akademik Yıl", description: "24 Eylül 2018'de ilk eğitim-öğretim dönemine başlandı" },
    { year: "2019", event: "Teknik Bilimler MYO", description: "Teknik bilimler meslek yüksekokulu eklendi" },
    { year: "2020", event: "Tıp Fakültesi", description: "Tıp Fakültesi kurularak sağlık bilimleri alanı genişletildi" },
    { year: "2023", event: "MÜDEK Akreditasyonu", description: "Mühendislik programları MÜDEK akreditasyonu aldı" },
    { year: "2026", event: "Araştırma Mükemmelliği", description: "Yapay zeka ve siber güvenlik alanında öncü araştırmalar" },
  ] : [
    { year: "2018", event: "University Founded", description: "Samsun University officially established on May 18, 2018" },
    { year: "2018", event: "First Academic Year", description: "First academic term began on September 24, 2018" },
    { year: "2019", event: "Technical Sciences Expansion", description: "Technical Sciences Vocational School added" },
    { year: "2020", event: "Faculty of Medicine", description: "Faculty of Medicine established, expanding health sciences" },
    { year: "2023", event: "MÜDEK Accreditation", description: "Engineering programs received MÜDEK accreditation" },
    { year: "2026", event: "Research Excellence", description: "Pioneering research in artificial intelligence and cybersecurity" },
  ];

  const values = language === "TR" ? [
    {
      icon: Trophy,
      title: "Mükemmellik",
      description: "Eğitim, araştırma ve inovasyonda en yüksek standartları hedefliyoruz.",
    },
    {
      icon: Users,
      title: "İşbirliği",
      description: "Disiplinler ve kurumlar arası ekip çalışması ve ortaklıkları destekliyoruz.",
    },
    {
      icon: Globe,
      title: "Küresel Etki",
      description: "Öğrencileri teknoloji ile küresel zorlukları çözmeye hazırlıyoruz.",
    },
    {
      icon: Lightbulb,
      title: "İnovasyon",
      description: "Yaratıcı düşünce ve öncü çözümleri teşvik ediyoruz.",
    },
  ] : [
    {
      icon: Trophy,
      title: "Excellence",
      description: "We pursue the highest standards in education, research, and innovation.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We support interdisciplinary teamwork and cross-institutional partnerships.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We prepare students to address global challenges through technology.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We foster creative thinking and pioneering solutions.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 lg:pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-['Playfair_Display'] text-[#B8956A] mb-6" style={{ fontSize: "4rem" }}>
            {t.title}
          </h1>
          <p className="text-[#FFFEF2]/70 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: "1.125rem" }}>
            {t.subtitle}
          </p>
        </motion.div>

        {/* Editorial Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-32"
        >
          <div className="backdrop-blur-sm bg-[#1a2e47]/20 border border-[#B8956A]/20 rounded-2xl p-12 md:p-16">
            <div className="space-y-8">
              <div className="border-l-2 border-[#B8956A] pl-8">
                <p className="font-['Playfair_Display'] text-[#FFFEF2] leading-relaxed italic" style={{ fontSize: "1.375rem", lineHeight: "1.8" }}>
                  "{t.editorialQuote}"
                </p>
              </div>

              <div className="pl-8 space-y-6">
                <p className="text-[#FFFEF2]/80 leading-loose" style={{ fontSize: "1.0625rem", lineHeight: "1.9" }}>
                  {t.editorialP1}
                </p>

                <p className="text-[#FFFEF2]/70 leading-loose" style={{ fontSize: "1.0625rem", lineHeight: "1.9" }}>
                  {t.editorialP2}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-32"
        >
          <div className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-12">
            <h2 className="font-['Playfair_Display'] text-[#B8956A] text-center mb-6" style={{ fontSize: "2.5rem" }}>
              {t.missionTitle}
            </h2>
            <p className="text-[#FFFEF2]/70 text-center leading-relaxed mb-6" style={{ fontSize: "1.125rem" }}>
              {t.missionP1}
            </p>
            <p className="text-[#FFFEF2]/60 text-center leading-relaxed" style={{ fontSize: "1rem" }}>
              {t.missionP2}
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="font-['Playfair_Display'] text-[#B8956A] text-center mb-16" style={{ fontSize: "3rem" }}>
            {t.historyTitle}
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#B8956A]/50 via-[#D4B78E]/50 to-[#B8956A]/50 hidden md:block" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <div className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-6 hover:border-[#B8956A]/50 transition-all">
                      <div className="font-['Playfair_Display'] text-[#B8956A] mb-2" style={{ fontSize: "2rem" }}>
                        {milestone.year}
                      </div>
                      <h3 className="text-[#FFFEF2] mb-2" style={{ fontSize: "1.25rem" }}>
                        {milestone.event}
                      </h3>
                      <p className="text-[#FFFEF2]/60" style={{ fontSize: "0.9375rem" }}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 w-6 h-6 bg-[#B8956A] border-4 border-[#0A1628] rounded-full -ml-3 hidden md:block" />

                  {/* Spacer */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="font-['Playfair_Display'] text-[#B8956A] text-center mb-16" style={{ fontSize: "3rem" }}>
            {t.valuesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-8 hover:border-[#B8956A]/50 transition-all text-center group"
              >
                <value.icon className="w-12 h-12 text-[#B8956A] mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-['Playfair_Display'] text-[#FFFEF2] mb-4" style={{ fontSize: "1.5rem" }}>
                  {value.title}
                </h3>
                <p className="text-[#FFFEF2]/60" style={{ fontSize: "0.9375rem" }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Campus Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-8">
            <h3 className="font-['Playfair_Display'] text-[#B8956A] mb-4" style={{ fontSize: "2rem" }}>
              {t.ballicaTitle}
            </h3>
            <p className="text-[#FFFEF2]/70 mb-4" style={{ fontSize: "1rem" }}>
              {t.ballicaDesc}
            </p>
            <p className="text-[#FFFEF2]/60" style={{ fontSize: "0.9375rem" }}>
              {t.ballicaNote}
            </p>
          </div>

          <div className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-8">
            <h3 className="font-['Playfair_Display'] text-[#B8956A] mb-4" style={{ fontSize: "2rem" }}>
              {t.canikTitle}
            </h3>
            <p className="text-[#FFFEF2]/70 mb-4" style={{ fontSize: "1rem" }}>
              {t.canikDesc}
            </p>
            <p className="text-[#FFFEF2]/60" style={{ fontSize: "0.9375rem" }}>
              {t.canikNote}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
