import { motion } from "motion/react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export default function News() {
  const { language } = useLanguage();

  const content = {
    TR: {
      pageTitle: "Haberler ve Etkinlikler",
      pageDescription: "Bölümümüzden en son başarılar, etkinlikler ve duyurular hakkında güncel kalın.",
      readMore: "Devamını Oku",
      learnMore: "Daha Fazla Bilgi",
    },
    EN: {
      pageTitle: "News and Events",
      pageDescription: "Stay updated with the latest achievements, events, and announcements from our department.",
      readMore: "Read More",
      learnMore: "Learn More",
    },
  };

  const t = content[language];

  const news = language === "TR" ? [
    {
      title: "Ulusal Teknoloji Uzmanlık Programı Başvuruları Açıldı",
      category: "Duyuru",
      date: "10 Nisan 2026",
      author: "Bölüm Sekreterliği",
      excerpt: "Sanayi ve Teknoloji Bakanlığı destekli Ulusal Teknoloji Uzmanlık Programı başvuruları başladı. Program, yazılım mühendisliği alanında uzmanlaşmak isteyen öğrencilere olağanüstü fırsatlar sunuyor.",
      image: "https://images.unsplash.com/photo-1695048441307-d081dbd2b5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc2NDIzMDU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true,
    },
    {
      title: "TEKNOFEST 2025 Başarıları",
      category: "Başarı",
      date: "28 Mart 2026",
      author: "Proje Koordinasyonu",
      excerpt: "Bölüm öğrencilerimiz TEKNOFEST 2025'te yapay zeka ve robotik kategorilerinde önemli başarılara imza attı. Ekiplerimiz yarışmalardan ödüllerle döndü.",
      image: "https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3NjM3MDY3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
    },
    {
      title: "2025 Mezuniyet Projesi Sergisi",
      category: "Etkinlik",
      date: "15 Mart 2026",
      author: "Akademik Koordinasyon",
      excerpt: "Dördüncü sınıf öğrencilerimizin hazırladığı mezuniyet projesi sergisi 20-22 Mayıs tarihleri arasında Ballıca Kampüsü'nde gerçekleştirilecek.",
      image: "https://images.unsplash.com/photo-1773558057689-847e19466840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NjMwMjk4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
    },
    {
      title: "MÜDEK Akreditasyon Yenileme Başarısı",
      category: "Akreditasyon",
      date: "1 Mart 2026",
      author: "Kalite Komisyonu",
      excerpt: "Bölümümüz MÜDEK (Mühendislik Eğitim Programları Değerlendirme ve Akreditasyon Derneği) akreditasyonunu 6 yıl süreyle başarıyla yeniledi.",
      image: "https://images.unsplash.com/photo-1771647287015-f30dbb239646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGxpYnJhcnklMjBib29rcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzc2NDIyOTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
    },
    {
      title: "Sektör İşbirliği Protokolleri İmzalandı",
      category: "İşbirliği",
      date: "20 Şubat 2026",
      author: "Sanayi İlişkileri",
      excerpt: "Bölümümüz, önde gelen yazılım şirketleriyle öğrencilerimize staj ve istihdam fırsatları sağlamak için protokoller imzaladı.",
      image: "https://images.unsplash.com/photo-1763568258330-039d2f3dfc76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwY29kaW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NjQyMjkxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
    },
    {
      title: "Erasmus+ Hareketlilik Programı 2026-2027",
      category: "Uluslararası",
      date: "5 Şubat 2026",
      author: "Uluslararası İlişkiler Ofisi",
      excerpt: "2026-2027 akademik yılı Erasmus+ öğrenci ve öğretim üyesi hareketlilik programı başvuruları açıldı. Avrupa üniversitelerinde eğitim fırsatları.",
      image: "https://images.unsplash.com/photo-1644343262170-e40d72e19a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwY3J5cHRvY3VycmVuY3klMjBuZXR3b3JrfGVufDF8fHx8MTc3NjQwODQyMnww&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
    },
  ] : [
    {
      title: "National Technology Expertise Program Applications Opened",
      category: "Announcement",
      date: "April 10, 2026",
      author: "Department Secretariat",
      excerpt: "Applications for the National Technology Expertise Program, supported by the Ministry of Industry and Technology, have commenced. The program offers exceptional opportunities for students seeking to specialize in software engineering.",
      image: "https://images.unsplash.com/photo-1695048441307-d081dbd2b5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc2NDIzMDU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true,
    },
    {
      title: "TEKNOFEST 2025 Achievements",
      category: "Achievement",
      date: "March 28, 2026",
      author: "Project Coordination",
      excerpt: "Our department students achieved significant success in Artificial Intelligence and robotics categories at TEKNOFEST 2025. Our teams returned with awards from the competitions.",
      image: "https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3NjM3MDY3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
    },
    {
      title: "2025 Senior Project Exhibition",
      category: "Event",
      date: "March 15, 2026",
      author: "Academic Coordination",
      excerpt: "The senior project exhibition prepared by our fourth-year students will be held at Ballica Campus between May 20-22.",
      image: "https://images.unsplash.com/photo-1773558057689-847e19466840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NjMwMjk4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
    },
    {
      title: "MUDEK Accreditation Renewal Success",
      category: "Accreditation",
      date: "March 1, 2026",
      author: "Quality Commission",
      excerpt: "Our department successfully renewed its MUDEK (Association for Evaluation and Accreditation of Engineering Programs) accreditation for a period of 6 years.",
      image: "https://images.unsplash.com/photo-1771647287015-f30dbb239646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGxpYnJhcnklMjBib29rcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzc2NDIyOTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
    },
    {
      title: "Industry Collaboration Protocols Signed",
      category: "Collaboration",
      date: "February 20, 2026",
      author: "Industry Relations",
      excerpt: "Our department signed protocols with leading software companies to provide internship and employment opportunities for our students.",
      image: "https://images.unsplash.com/photo-1763568258330-039d2f3dfc76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwY29kaW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NjQyMjkxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
    },
    {
      title: "Erasmus+ Mobility Program 2026-2027",
      category: "International",
      date: "February 5, 2026",
      author: "International Relations Office",
      excerpt: "Applications for the 2026-2027 academic year Erasmus+ student and faculty mobility program have opened. Educational opportunities at European universities.",
      image: "https://images.unsplash.com/photo-1644343262170-e40d72e19a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwY3J5cHRvY3VycmVuY3klMjBuZXR3b3JrfGVufDF8fHx8MTc3NjQwODQyMnww&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false,
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

        {/* Featured Article */}
        {news[0].featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#B8956A]/30 backdrop-blur-sm bg-[#1a2e47]/20 group">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-96 md:h-auto">
                  <ImageWithFallback
                    src={news[0].image}
                    alt={news[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block px-4 py-2 bg-[#B8956A]/20 border border-[#B8956A]/30 rounded-full text-[#B8956A] font-['IBM_Plex_Mono'] mb-4 w-fit" style={{ fontSize: "0.75rem" }}>
                    {news[0].category}
                  </div>
                  <h2 className="font-['Playfair_Display'] text-[#FFFEF2] mb-4" style={{ fontSize: "2.5rem" }}>
                    {news[0].title}
                  </h2>
                  <p className="text-[#FFFEF2]/70 mb-6" style={{ fontSize: "1.125rem" }}>
                    {news[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-[#FFFEF2]/50 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="font-['IBM_Plex_Mono']" style={{ fontSize: "0.875rem" }}>
                        {news[0].date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span className="font-['IBM_Plex_Mono']" style={{ fontSize: "0.875rem" }}>
                        {news[0].author}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#B8956A] hover:gap-4 transition-all"
                  >
                    {t.readMore}
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.slice(1).map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-sm bg-[#1a2e47]/20 border border-[#B8956A]/20 rounded-2xl overflow-hidden hover:border-[#B8956A]/50 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-[#B8956A]/90 rounded-full text-[#0A1628] font-['IBM_Plex_Mono']" style={{ fontSize: "0.625rem" }}>
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-['Playfair_Display'] text-[#FFFEF2] mb-3" style={{ fontSize: "1.25rem" }}>
                  {article.title}
                </h3>
                <p className="text-[#FFFEF2]/60 mb-4 line-clamp-2" style={{ fontSize: "0.875rem" }}>
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[#FFFEF2]/50 mb-4">
                  <Calendar size={14} />
                  <span className="font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                    {article.date}
                  </span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#B8956A] hover:gap-4 transition-all"
                  style={{ fontSize: "0.875rem" }}
                >
                  {t.learnMore}
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}