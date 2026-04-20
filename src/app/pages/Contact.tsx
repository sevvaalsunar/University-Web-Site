import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  const content = {
    TR: {
      pageTitle: "İletişim",
      pageDescription: "Sorularınızı yanıtlamak ve programlarımız hakkında bilgi vermek için buradayız. Bize aşağıdaki kanallardan ulaşabilirsiniz.",
      sendMessage: "Mesaj Gönder",
      fullName: "Ad Soyad",
      fullNamePlaceholder: "Adınız ve soyadınız",
      email: "E-posta",
      emailPlaceholder: "email@ornek.com",
      subject: "Konu",
      subjectPlaceholder: "Size nasıl yardımcı olabiliriz?",
      message: "Mesaj",
      messagePlaceholder: "Mesajınız...",
      sendBtn: "Mesaj Gönder",
      address: "Adres",
      addressText: "Samsun Üniversitesi\nMühendislik Fakültesi\nBallıca Kampüsü\n19 Mayıs, Samsun",
      phone: "Telefon",
      officeHours: "Çalışma Saatleri",
      officeHoursText: "Pazartesi - Cuma: 08:30 - 17:30\nCumartesi - Pazar: Kapalı",
      visitCampus: "Kampüsümüzü Ziyaret Edin",
      campusTourTitle: "Kampüs Turu",
      campusTourDescription: "Tesislerimizi görmek ve bölümümüz hakkında daha fazla bilgi edinmek için kampüs turuna katılın. Randevu almak için bizimle iletişime geçin.",
      scheduleTour: "Tur Planla",
    },
    EN: {
      pageTitle: "Contact",
      pageDescription: "We are here to answer your questions and provide information about our programs. You can reach us through the following channels.",
      sendMessage: "Send a Message",
      fullName: "Full Name",
      fullNamePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "email@example.com",
      subject: "Subject",
      subjectPlaceholder: "How can we help you?",
      message: "Message",
      messagePlaceholder: "Your message...",
      sendBtn: "Send Message",
      address: "Address",
      addressText: "Samsun University\nFaculty of Engineering\nBallica Campus\n19 Mayis, Samsun",
      phone: "Phone",
      officeHours: "Office Hours",
      officeHoursText: "Monday - Friday: 08:30 - 17:30\nSaturday - Sunday: Closed",
      visitCampus: "Visit Our Campus",
      campusTourTitle: "Campus Tour",
      campusTourDescription: "Join a campus tour to see our facilities and learn more about our department. Contact us to schedule an appointment.",
      scheduleTour: "Schedule a Tour",
    },
  };

  const t = content[language];

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

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-8"
          >
            <h2 className="font-['Playfair_Display'] text-[#B8956A] mb-6" style={{ fontSize: "2rem" }}>
              {t.sendMessage}
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-[#FFFEF2] mb-2" style={{ fontSize: "0.875rem" }}>
                  {t.fullName}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-[#0A1628]/50 border border-[#B8956A]/30 text-[#FFFEF2] focus:border-[#B8956A] focus:outline-none transition-all"
                  placeholder={t.fullNamePlaceholder}
                />
              </div>
              <div>
                <label className="block text-[#FFFEF2] mb-2" style={{ fontSize: "0.875rem" }}>
                  {t.email}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-[#0A1628]/50 border border-[#B8956A]/30 text-[#FFFEF2] focus:border-[#B8956A] focus:outline-none transition-all"
                  placeholder={t.emailPlaceholder}
                />
              </div>
              <div>
                <label className="block text-[#FFFEF2] mb-2" style={{ fontSize: "0.875rem" }}>
                  {t.subject}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-[#0A1628]/50 border border-[#B8956A]/30 text-[#FFFEF2] focus:border-[#B8956A] focus:outline-none transition-all"
                  placeholder={t.subjectPlaceholder}
                />
              </div>
              <div>
                <label className="block text-[#FFFEF2] mb-2" style={{ fontSize: "0.875rem" }}>
                  {t.message}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A1628]/50 border border-[#B8956A]/30 text-[#FFFEF2] focus:border-[#B8956A] focus:outline-none transition-all resize-none"
                  placeholder={t.messagePlaceholder}
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#B8956A] text-[#0A1628] rounded-full hover:bg-[#D4B78E] transition-all font-['Inter']"
              >
                {t.sendBtn}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#B8956A]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#B8956A]" />
                </div>
                <div>
                  <h3 className="font-['Playfair_Display'] text-[#FFFEF2] mb-2" style={{ fontSize: "1.25rem" }}>
                    {t.address}
                  </h3>
                  <p className="text-[#FFFEF2]/70" style={{ fontSize: "0.9375rem" }}>
                    {t.addressText.split('\n').map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#B8956A]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#B8956A]" />
                </div>
                <div>
                  <h3 className="font-['Playfair_Display'] text-[#FFFEF2] mb-2" style={{ fontSize: "1.25rem" }}>
                    {t.phone}
                  </h3>
                  <p className="text-[#FFFEF2]/70" style={{ fontSize: "0.9375rem" }}>
                    +90 (362) 313 0055
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#B8956A]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#B8956A]" />
                </div>
                <div>
                  <h3 className="font-['Playfair_Display'] text-[#FFFEF2] mb-2" style={{ fontSize: "1.25rem" }}>
                    {t.email}
                  </h3>
                  <p className="text-[#FFFEF2]/70" style={{ fontSize: "0.9375rem" }}>
                    muhendislik@samsun.edu.tr
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#B8956A]/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#B8956A]" />
                </div>
                <div>
                  <h3 className="font-['Playfair_Display'] text-[#FFFEF2] mb-2" style={{ fontSize: "1.25rem" }}>
                    {t.officeHours}
                  </h3>
                  <p className="text-[#FFFEF2]/70" style={{ fontSize: "0.9375rem" }}>
                    {t.officeHoursText.split('\n').map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="font-['Playfair_Display'] text-[#B8956A] text-center mb-12" style={{ fontSize: "3rem" }}>
            {t.visitCampus}
          </h2>
          <div className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl overflow-hidden">
            <div className="relative h-96 bg-[#0A1628]/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#B8956A] mx-auto mb-4" />
                <p className="text-[#FFFEF2]/70" style={{ fontSize: "1rem" }}>
                  {language === "TR" ? "Ballıca Kampüsü" : "Ballica Campus"}<br />
                  19 {language === "TR" ? "Mayıs" : "Mayis"}, Samsun
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="backdrop-blur-sm bg-[#1a2e47]/20 border border-[#B8956A]/20 rounded-2xl p-12">
            <h3 className="font-['Playfair_Display'] text-[#B8956A] mb-4" style={{ fontSize: "2rem" }}>
              {t.campusTourTitle}
            </h3>
            <p className="text-[#FFFEF2]/70 mb-8 max-w-2xl mx-auto" style={{ fontSize: "1rem" }}>
              {t.campusTourDescription}
            </p>
            <button className="px-8 py-4 bg-[#B8956A] text-[#0A1628] rounded-full hover:bg-[#D4B78E] transition-all font-['Inter']">
              {t.scheduleTour}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
