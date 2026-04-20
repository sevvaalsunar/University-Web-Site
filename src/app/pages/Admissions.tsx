import { motion } from "motion/react";
import { Calendar, FileText, Users, CheckCircle, GraduationCap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Admissions() {
  const { language } = useLanguage();

  const content = {
    TR: {
      pageTitle: "Başvuru",
      pageDescription: "Yazılım mühendisliği alanında dönüştürücü bir eğitime doğru yolculuğunuza başlayın. Akademisyenler ve yenilikçilerden oluşan bir topluluğa katılın.",
      admissionRequirements: "Başvuru Koşulları",
      applicationTimeline: "Başvuru Takvimi",
      programInformation: "Program Bilgileri",
      whyTitle: "Neden Samsun Üniversitesi?",
      readyToApply: "Başvuruya Hazır mısınız?",
      readyDescription: "Yükseköğretim Kurumları Sınavı (YKS) sonuçlarınızla ÖSYM tercih sistemi üzerinden başvurunuzu yapabilirsiniz.",
      detailedInfo: "Detaylı Bilgi",
      campusTour: "Kampüs Turu",
    },
    EN: {
      pageTitle: "Admissions",
      pageDescription: "Begin your journey toward a transformative education in software engineering. Join a community of scholars and innovators.",
      admissionRequirements: "Admission Requirements",
      applicationTimeline: "Application Timeline",
      programInformation: "Program Information",
      whyTitle: "Why Samsun University?",
      readyToApply: "Ready to Apply?",
      readyDescription: "You can submit your application through the ÖSYM preference system with your Higher Education Institutions Exam (YKS) results.",
      detailedInfo: "Detailed Information",
      campusTour: "Campus Tour",
    },
  };

  const t = content[language];

  const requirements = language === "TR" ? [
    "Lise diploması veya dengi",
    "Matematik ve fen bilimlerinde güçlü temel",
    "YKS (Yükseköğretim Kurumları Sınavı) - Sayısal puan türü",
    "Minimum 180 YKS puanı (AYT)",
    "En az 150 TYT taban puanı",
    "Geçerli kimlik belgesi",
  ] : [
    "High school diploma or equivalent",
    "Strong foundation in mathematics and sciences",
    "YKS (Higher Education Institutions Exam) - Quantitative score type",
    "Minimum 180 YKS score (AYT)",
    "At least 150 TYT threshold score",
    "Valid identification document",
  ];

  const timeline = language === "TR" ? [
    { date: "Haziran - Temmuz", event: "YKS Sınav Dönemi", icon: FileText },
    { date: "Temmuz - Ağustos", event: "Tercih Dönemi", icon: Users },
    { date: "Ağustos", event: "Yerleştirme Sonuçları", icon: CheckCircle },
    { date: "Eylül", event: "Kayıt ve Oryantasyon", icon: GraduationCap },
  ] : [
    { date: "June - July", event: "YKS Examination Period", icon: FileText },
    { date: "July - August", event: "Preference Period", icon: Users },
    { date: "August", event: "Placement Results", icon: CheckCircle },
    { date: "September", event: "Registration and Orientation", icon: GraduationCap },
  ];

  const programInfo = language === "TR" ? [
    { label: "Program Süresi", value: "4 Yıl", description: "Tam zamanlı lisans" },
    { label: "Toplam AKTS", value: "240", description: "Avrupa kredileri" },
    { label: "Öğretim Dili", value: "Türkçe", description: "Bazı dersler İngilizce" },
  ] : [
    { label: "Program Duration", value: "4 Years", description: "Full-time undergraduate" },
    { label: "Total ECTS", value: "240", description: "European credits" },
    { label: "Language of Instruction", value: "Turkish", description: "Some courses in English" },
  ];

  const whyReasons = language === "TR" ? [
    {
      title: "MÜDEK Akreditasyonu",
      description: "Programımız 6 yıl süreyle MÜDEK akreditasyonuna sahiptir ve uluslararası standartları karşılamaktadır.",
    },
    {
      title: "Deneyimli Öğretim Kadrosu",
      description: "Uzman profesör ve doçentler tarafından sunulan kaliteli eğitim.",
    },
    {
      title: "Modern Tesisler",
      description: "Ballıca Kampüsü'nde son teknoloji laboratuvarlar ve araştırma merkezleri.",
    },
    {
      title: "Kariyer Fırsatları",
      description: "Önde gelen yazılım şirketleriyle güçlü sektör bağlantıları ve staj programları.",
    },
    {
      title: "Erasmus+ Programı",
      description: "Avrupa üniversitelerinde değişim ve eğitim fırsatları.",
    },
    {
      title: "Araştırma Fırsatları",
      description: "Yapay zeka, siber güvenlik ve yazılım mimarisinde araştırma projeleri.",
    },
  ] : [
    {
      title: "MÜDEK Accreditation",
      description: "Our program holds MÜDEK accreditation for 6 years and meets international standards.",
    },
    {
      title: "Experienced Faculty",
      description: "Quality education delivered by expert professors and associate professors.",
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art laboratories and research centers at Ballıca Campus.",
    },
    {
      title: "Career Opportunities",
      description: "Strong industry connections and internship programs with leading software companies.",
    },
    {
      title: "Erasmus+ Program",
      description: "Exchange and educational opportunities at European universities.",
    },
    {
      title: "Research Opportunities",
      description: "Research projects in artificial intelligence, cybersecurity, and software architecture.",
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

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-8"
          >
            <h2 className="font-['Playfair_Display'] text-[#B8956A] mb-6" style={{ fontSize: "2rem" }}>
              {t.admissionRequirements}
            </h2>
            <div className="space-y-4">
              {requirements.map((req, index) => (
                <motion.div
                  key={req}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#B8956A] mt-1 flex-shrink-0" />
                  <span className="text-[#FFFEF2]/70" style={{ fontSize: "0.9375rem" }}>
                    {req}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-8"
          >
            <h2 className="font-['Playfair_Display'] text-[#B8956A] mb-6" style={{ fontSize: "2rem" }}>
              {t.applicationTimeline}
            </h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.event}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#B8956A]/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#B8956A]" />
                  </div>
                  <div>
                    <div className="text-[#B8956A] font-['IBM_Plex_Mono'] mb-1" style={{ fontSize: "0.875rem" }}>
                      {item.date}
                    </div>
                    <div className="text-[#FFFEF2]/70" style={{ fontSize: "1rem" }}>
                      {item.event}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Program Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-['Playfair_Display'] text-[#B8956A] text-center mb-12" style={{ fontSize: "3rem" }}>
            {t.programInformation}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-8 text-center"
              >
                <div className="font-['Playfair_Display'] text-[#B8956A] mb-2" style={{ fontSize: "2.5rem" }}>
                  {info.value}
                </div>
                <div className="text-[#FFFEF2] mb-2" style={{ fontSize: "1.125rem" }}>
                  {info.label}
                </div>
                <div className="text-[#FFFEF2]/60" style={{ fontSize: "0.875rem" }}>
                  {info.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-['Playfair_Display'] text-[#B8956A] text-center mb-12" style={{ fontSize: "3rem" }}>
            {t.whyTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyReasons.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-8 hover:border-[#B8956A]/50 transition-all"
              >
                <h3 className="font-['Playfair_Display'] text-[#FFFEF2] mb-3" style={{ fontSize: "1.5rem" }}>
                  {item.title}
                </h3>
                <p className="text-[#FFFEF2]/60" style={{ fontSize: "0.9375rem" }}>
                  {item.description}
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
          className="text-center"
        >
          <div className="backdrop-blur-sm bg-[#1a2e47]/20 border border-[#B8956A]/20 rounded-2xl p-12">
            <h3 className="font-['Playfair_Display'] text-[#B8956A] mb-4" style={{ fontSize: "2rem" }}>
              {t.readyToApply}
            </h3>
            <p className="text-[#FFFEF2]/70 mb-8 max-w-2xl mx-auto" style={{ fontSize: "1rem" }}>
              {t.readyDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#B8956A] text-[#0A1628] rounded-full hover:bg-[#D4B78E] transition-all font-['Inter']">
                {t.detailedInfo}
              </button>
              <button className="px-8 py-4 border border-[#B8956A] text-[#B8956A] rounded-full hover:bg-[#B8956A]/10 transition-all font-['Inter']">
                {t.campusTour}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
