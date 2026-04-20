import { motion } from "motion/react";
import { useState } from "react";
import { BookOpen } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface Course {
  code: string;
  name: string;
  theory: number;
  practice: number;
  credit: number;
  ects: number;
}

interface Semester {
  id: number;
  name: string;
  season: "Güz" | "Bahar" | "Fall" | "Spring";
  courses: Course[];
}

export default function Curriculum() {
  const { language } = useLanguage();
  const [selectedYear, setSelectedYear] = useState(1);

  const content = {
    TR: {
      pageTitle: "Ders Planı",
      pageDescription: "4 yıllık kapsamlı programımız, teorik temelleri pratik deneyimle birleştirerek öğrencileri yazılım mühendisliğinde liderlik için hazırlar.",
      totalECTS: "Toplam AKTS",
      programDuration: "Program Süresi",
      totalCourses: "Toplam Ders",
      ectsUnit: "AKTS",
      yearUnit: "Yıl",
      coursesUnit: "Ders",
      yearButton: (year: number) => `${year}. Sınıf`,
      semesterName: (num: number) => `${num}. Yarıyıl`,
      fall: "Güz",
      spring: "Bahar",
      fallSemester: "Güz Dönemi",
      springSemester: "Bahar Dönemi",
      courseCode: "Ders Kodu",
      courseName: "Ders Adı",
      theoryPractice: "T+U",
      credit: "Kredi",
      ects: "AKTS",
      total: "Toplam",
      notesTitle: "Notlar",
      note1: "T+U: Teorik ve Uygulama ders saatlerini gösterir.",
      note2: "Her dönem toplam AKTS kredisi 30'dur.",
      note3: "dersleri öğrencilerin ilgi alanlarına göre seçebilecekleri uzmanlık dersleridir.",
      note4: "dersleri üniversite genelinde sunulan sosyal bilimler derslerinden seçilir.",
      technicalElective: "Teknik Seçmeli",
      socialElective: "Sosyal Seçmeli",
      downloadTitle: "Detaylı Müfredat Rehberi",
      downloadDescription: "Detaylı ders açıklamaları, öğrenme çıktıları ve kariyer yolları için kapsamlı müfredat broşürümüzü indirin.",
      downloadButton: "Broşürü İndir (PDF)",
    },
    EN: {
      pageTitle: "Curriculum",
      pageDescription: "Our comprehensive 4-year program combines theoretical foundations with practical experience, preparing students for leadership in software engineering.",
      totalECTS: "Total ECTS",
      programDuration: "Program Duration",
      totalCourses: "Total Courses",
      ectsUnit: "ECTS",
      yearUnit: "Years",
      coursesUnit: "Courses",
      yearButton: (year: number) => {
        const suffix = year === 1 ? "st" : year === 2 ? "nd" : year === 3 ? "rd" : "th";
        return `${year}${suffix} Year`;
      },
      semesterName: (num: number) => {
        const suffix = num === 1 ? "st" : num === 2 ? "nd" : num === 3 ? "rd" : "th";
        return `${num}${suffix} Semester`;
      },
      fall: "Fall",
      spring: "Spring",
      fallSemester: "Fall Semester",
      springSemester: "Spring Semester",
      courseCode: "Course Code",
      courseName: "Course Name",
      theoryPractice: "T+P",
      credit: "Credit",
      ects: "ECTS",
      total: "Total",
      notesTitle: "Notes",
      note1: "T+P: Indicates Theory and Practice course hours.",
      note2: "Each semester has a total of 30 ECTS credits.",
      note3: "courses are specialized courses that students can choose according to their interests.",
      note4: "courses are selected from social sciences courses offered university-wide.",
      technicalElective: "Technical Elective",
      socialElective: "Social Elective",
      downloadTitle: "Detailed Curriculum Guide",
      downloadDescription: "Download our comprehensive curriculum brochure for detailed course descriptions, learning outcomes, and career pathways.",
      downloadButton: "Download Brochure (PDF)",
    },
  };

  const t = content[language];

  const semestersTR: Semester[] = [
    {
      id: 1,
      name: "1. Yarıyıl",
      season: "Güz",
      courses: [
        { code: "YZM101", name: "Temel Bilgi Teknolojileri", theory: 2, practice: 2, credit: 3, ects: 5 },
        { code: "MAT101", name: "Matematik I", theory: 4, practice: 0, credit: 4, ects: 6 },
        { code: "FIZ101", name: "Fizik I", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "YZM103", name: "Algoritma ve Programlama I", theory: 3, practice: 2, credit: 4, ects: 6 },
        { code: "TDL101", name: "Türk Dili I", theory: 2, practice: 0, credit: 2, ects: 2 },
        { code: "ATA101", name: "Atatürk İlkeleri ve İnkılap Tarihi I", theory: 2, practice: 0, credit: 2, ects: 2 },
        { code: "YDL101", name: "Yabancı Dil I", theory: 2, practice: 0, credit: 2, ects: 4 },
      ],
    },
    {
      id: 2,
      name: "2. Yarıyıl",
      season: "Bahar",
      courses: [
        { code: "MAT102", name: "Matematik II", theory: 4, practice: 0, credit: 4, ects: 6 },
        { code: "FIZ102", name: "Fizik II", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "YZM104", name: "Algoritma ve Programlama II", theory: 3, practice: 2, credit: 4, ects: 6 },
        { code: "YZM106", name: "Yazılım Mühendisliğine Giriş", theory: 3, practice: 0, credit: 3, ects: 4 },
        { code: "TDL102", name: "Türk Dili II", theory: 2, practice: 0, credit: 2, ects: 2 },
        { code: "ATA102", name: "Atatürk İlkeleri ve İnkılap Tarihi II", theory: 2, practice: 0, credit: 2, ects: 2 },
        { code: "YDL102", name: "Yabancı Dil II", theory: 2, practice: 0, credit: 2, ects: 5 },
      ],
    },
    {
      id: 3,
      name: "3. Yarıyıl",
      season: "Güz",
      courses: [
        { code: "YZM201", name: "Veri Yapıları", theory: 3, practice: 2, credit: 4, ects: 6 },
        { code: "YZM203", name: "Nesne Yönelimli Programlama", theory: 3, practice: 2, credit: 4, ects: 6 },
        { code: "MAT201", name: "Ayrık Matematik", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "YZM205", name: "Sayısal Analiz", theory: 3, practice: 0, credit: 3, ects: 4 },
        { code: "YZM207", name: "Donanım Organizasyonu", theory: 3, practice: 0, credit: 3, ects: 4 },
        { code: "YZM209", name: "Mesleki İngilizce I", theory: 2, practice: 0, credit: 2, ects: 5 },
      ],
    },
    {
      id: 4,
      name: "4. Yarıyıl",
      season: "Bahar",
      courses: [
        { code: "YZM202", name: "Veritabanı Yönetim Sistemleri", theory: 3, practice: 2, credit: 4, ects: 6 },
        { code: "YZM204", name: "Yazılım Tasarımı ve Mimarisi", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "YZM206", name: "İşletim Sistemleri", theory: 3, practice: 2, credit: 4, ects: 6 },
        { code: "YZM208", name: "Olasılık ve İstatistik", theory: 3, practice: 0, credit: 3, ects: 4 },
        { code: "YZM210", name: "Bilgisayar Ağları", theory: 3, practice: 0, credit: 3, ects: 4 },
        { code: "YZM212", name: "Mesleki İngilizce II", theory: 2, practice: 0, credit: 2, ects: 5 },
      ],
    },
    {
      id: 5,
      name: "5. Yarıyıl",
      season: "Güz",
      courses: [
        { code: "YZM301", name: "Yazılım Mühendisliği", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "YZM303", name: "Web Programlama", theory: 2, practice: 2, credit: 3, ects: 5 },
        { code: "YZM305", name: "Yapay Zeka", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "YZM307", name: "Algoritma Analizi", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC301", name: "Teknik Seçmeli I", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC302", name: "Sosyal Seçmeli I", theory: 2, practice: 0, credit: 2, ects: 5 },
      ],
    },
    {
      id: 6,
      name: "6. Yarıyıl",
      season: "Bahar",
      courses: [
        { code: "YZM302", name: "Yazılım Gereksinim Analizi", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "YZM304", name: "Mobil Programlama", theory: 2, practice: 2, credit: 3, ects: 5 },
        { code: "YZM306", name: "Derleyici Tasarımı", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "YZM308", name: "Yazılım Test ve Kalite Güvencesi", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC303", name: "Teknik Seçmeli II", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC304", name: "Sosyal Seçmeli II", theory: 2, practice: 0, credit: 2, ects: 5 },
      ],
    },
    {
      id: 7,
      name: "7. Yarıyıl",
      season: "Güz",
      courses: [
        { code: "YZM401", name: "Bitirme Projesi I", theory: 1, practice: 4, credit: 3, ects: 8 },
        { code: "YZM403", name: "Bilgi ve Ağ Güvenliği", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC401", name: "Teknik Seçmeli III", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC402", name: "Teknik Seçmeli IV", theory: 3, practice: 0, credit: 3, ects: 6 },
        { code: "SEC403", name: "Teknik Seçmeli V", theory: 3, practice: 0, credit: 3, ects: 6 },
      ],
    },
    {
      id: 8,
      name: "8. Yarıyıl",
      season: "Bahar",
      courses: [
        { code: "YZM402", name: "Bitirme Projesi II", theory: 1, practice: 4, credit: 3, ects: 10 },
        { code: "YZM404", name: "Yazılım Proje Yönetimi", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC404", name: "Teknik Seçmeli VI", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC405", name: "Teknik Seçmeli VII", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC406", name: "Teknik Seçmeli VIII", theory: 3, practice: 0, credit: 3, ects: 5 },
      ],
    },
  ];

  const semestersEN: Semester[] = [
    {
      id: 1,
      name: "1st Semester",
      season: "Fall",
      courses: [
        { code: "YZM101", name: "Fundamentals of Information Technologies", theory: 2, practice: 2, credit: 3, ects: 5 },
        { code: "MAT101", name: "Mathematics I", theory: 4, practice: 0, credit: 4, ects: 6 },
        { code: "FIZ101", name: "Physics I", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "YZM103", name: "Algorithms and Programming I", theory: 3, practice: 2, credit: 4, ects: 6 },
        { code: "TDL101", name: "Turkish Language I", theory: 2, practice: 0, credit: 2, ects: 2 },
        { code: "ATA101", name: "Atatürk's Principles and History of Revolution I", theory: 2, practice: 0, credit: 2, ects: 2 },
        { code: "YDL101", name: "Foreign Language I", theory: 2, practice: 0, credit: 2, ects: 4 },
      ],
    },
    {
      id: 2,
      name: "2nd Semester",
      season: "Spring",
      courses: [
        { code: "MAT102", name: "Mathematics II", theory: 4, practice: 0, credit: 4, ects: 6 },
        { code: "FIZ102", name: "Physics II", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "YZM104", name: "Algorithms and Programming II", theory: 3, practice: 2, credit: 4, ects: 6 },
        { code: "YZM106", name: "Introduction to Software Engineering", theory: 3, practice: 0, credit: 3, ects: 4 },
        { code: "TDL102", name: "Turkish Language II", theory: 2, practice: 0, credit: 2, ects: 2 },
        { code: "ATA102", name: "Atatürk's Principles and History of Revolution II", theory: 2, practice: 0, credit: 2, ects: 2 },
        { code: "YDL102", name: "Foreign Language II", theory: 2, practice: 0, credit: 2, ects: 5 },
      ],
    },
    {
      id: 3,
      name: "3rd Semester",
      season: "Fall",
      courses: [
        { code: "YZM201", name: "Data Structures", theory: 3, practice: 2, credit: 4, ects: 6 },
        { code: "YZM203", name: "Object-Oriented Programming", theory: 3, practice: 2, credit: 4, ects: 6 },
        { code: "MAT201", name: "Discrete Mathematics", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "YZM205", name: "Numerical Analysis", theory: 3, practice: 0, credit: 3, ects: 4 },
        { code: "YZM207", name: "Hardware Organization", theory: 3, practice: 0, credit: 3, ects: 4 },
        { code: "YZM209", name: "Technical English I", theory: 2, practice: 0, credit: 2, ects: 5 },
      ],
    },
    {
      id: 4,
      name: "4th Semester",
      season: "Spring",
      courses: [
        { code: "YZM202", name: "Database Management Systems", theory: 3, practice: 2, credit: 4, ects: 6 },
        { code: "YZM204", name: "Software Design and Architecture", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "YZM206", name: "Operating Systems", theory: 3, practice: 2, credit: 4, ects: 6 },
        { code: "YZM208", name: "Probability and Statistics", theory: 3, practice: 0, credit: 3, ects: 4 },
        { code: "YZM210", name: "Computer Networks", theory: 3, practice: 0, credit: 3, ects: 4 },
        { code: "YZM212", name: "Technical English II", theory: 2, practice: 0, credit: 2, ects: 5 },
      ],
    },
    {
      id: 5,
      name: "5th Semester",
      season: "Fall",
      courses: [
        { code: "YZM301", name: "Software Engineering", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "YZM303", name: "Web Programming", theory: 2, practice: 2, credit: 3, ects: 5 },
        { code: "YZM305", name: "Artificial Intelligence", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "YZM307", name: "Algorithm Analysis", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC301", name: "Technical Elective I", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC302", name: "Social Elective I", theory: 2, practice: 0, credit: 2, ects: 5 },
      ],
    },
    {
      id: 6,
      name: "6th Semester",
      season: "Spring",
      courses: [
        { code: "YZM302", name: "Software Requirements Analysis", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "YZM304", name: "Mobile Programming", theory: 2, practice: 2, credit: 3, ects: 5 },
        { code: "YZM306", name: "Compiler Design", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "YZM308", name: "Software Testing and Quality Assurance", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC303", name: "Technical Elective II", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC304", name: "Social Elective II", theory: 2, practice: 0, credit: 2, ects: 5 },
      ],
    },
    {
      id: 7,
      name: "7th Semester",
      season: "Fall",
      courses: [
        { code: "YZM401", name: "Graduation Project I", theory: 1, practice: 4, credit: 3, ects: 8 },
        { code: "YZM403", name: "Information and Network Security", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC401", name: "Technical Elective III", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC402", name: "Technical Elective IV", theory: 3, practice: 0, credit: 3, ects: 6 },
        { code: "SEC403", name: "Technical Elective V", theory: 3, practice: 0, credit: 3, ects: 6 },
      ],
    },
    {
      id: 8,
      name: "8th Semester",
      season: "Spring",
      courses: [
        { code: "YZM402", name: "Graduation Project II", theory: 1, practice: 4, credit: 3, ects: 10 },
        { code: "YZM404", name: "Software Project Management", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC404", name: "Technical Elective VI", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC405", name: "Technical Elective VII", theory: 3, practice: 0, credit: 3, ects: 5 },
        { code: "SEC406", name: "Technical Elective VIII", theory: 3, practice: 0, credit: 3, ects: 5 },
      ],
    },
  ];

  const semesters = language === "TR" ? semestersTR : semestersEN;

  const getSemestersByYear = (year: number) => {
    const fallSemester = semesters.find((s) => s.id === year * 2 - 1);
    const springSemester = semesters.find((s) => s.id === year * 2);
    return { fall: fallSemester, spring: springSemester };
  };

  const calculateTotals = (courses: Course[]) => {
    const totalCredit = courses.reduce((sum, c) => sum + c.credit, 0);
    const totalECTS = courses.reduce((sum, c) => sum + c.ects, 0);
    return { totalCredit, totalECTS };
  };

  const currentSemesters = getSemestersByYear(selectedYear);

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

        {/* Program Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { label: t.totalECTS, value: "240", unit: t.ectsUnit },
            { label: t.programDuration, value: "4", unit: t.yearUnit },
            { label: t.totalCourses, value: "60+", unit: t.coursesUnit },
          ].map((item) => (
            <div
              key={item.label}
              className="backdrop-blur-sm bg-[#1a2e47]/30 border border-[#B8956A]/20 rounded-2xl p-8 text-center"
            >
              <div className="font-['Playfair_Display'] text-[#B8956A] mb-2" style={{ fontSize: "3rem" }}>
                {item.value}
              </div>
              <div className="text-[#FFFEF2]/60 font-['IBM_Plex_Mono']" style={{ fontSize: "0.875rem" }}>
                {item.unit}
              </div>
              <div className="text-[#FFFEF2]/70 mt-2" style={{ fontSize: "1rem" }}>
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Year Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {[1, 2, 3, 4].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-8 py-4 rounded-full border transition-all font-['Playfair_Display'] ${
                selectedYear === year
                  ? "bg-[#B8956A] text-[#0A1628] border-[#B8956A]"
                  : "border-[#B8956A]/30 text-[#FFFEF2]/70 hover:border-[#B8956A] hover:text-[#B8956A]"
              }`}
              style={{ fontSize: "1.125rem" }}
            >
              {t.yearButton(year)}
            </button>
          ))}
        </motion.div>

        {/* Semester Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fall Semester */}
          {currentSemesters.fall && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-sm bg-[#1a2e47]/20 border border-[#B8956A]/20 rounded-2xl overflow-hidden"
            >
              <div className="bg-[#B8956A]/10 border-b border-[#B8956A]/20 px-6 py-4">
                <h2 className="font-['Playfair_Display'] text-[#B8956A]" style={{ fontSize: "1.75rem" }}>
                  {currentSemesters.fall.name} / {currentSemesters.fall.season} {language === "TR" ? "Dönemi" : "Semester"}
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#B8956A]/20">
                      <th className="text-left px-6 py-4 text-[#B8956A] font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                        {t.courseCode}
                      </th>
                      <th className="text-left px-6 py-4 text-[#B8956A] font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                        {t.courseName}
                      </th>
                      <th className="text-center px-6 py-4 text-[#B8956A] font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                        {t.theoryPractice}
                      </th>
                      <th className="text-center px-6 py-4 text-[#B8956A] font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                        {t.credit}
                      </th>
                      <th className="text-center px-6 py-4 text-[#B8956A] font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                        {t.ects}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentSemesters.fall.courses.map((course, index) => (
                      <tr
                        key={course.code}
                        className={`border-b border-[#B8956A]/10 hover:bg-[#B8956A]/5 transition-colors ${
                          index % 2 === 0 ? "bg-[#0A1628]/20" : ""
                        }`}
                      >
                        <td className="px-6 py-4 text-[#B8956A] font-['IBM_Plex_Mono']" style={{ fontSize: "0.8125rem" }}>
                          {course.code}
                        </td>
                        <td className="px-6 py-4 text-[#FFFEF2]/80" style={{ fontSize: "0.9375rem" }}>
                          {course.name}
                        </td>
                        <td className="px-6 py-4 text-center text-[#FFFEF2]/70 font-['IBM_Plex_Mono']" style={{ fontSize: "0.875rem" }}>
                          {course.theory}+{course.practice}
                        </td>
                        <td className="px-6 py-4 text-center text-[#FFFEF2]/70 font-['IBM_Plex_Mono']" style={{ fontSize: "0.875rem" }}>
                          {course.credit}
                        </td>
                        <td className="px-6 py-4 text-center text-[#FFFEF2]/70 font-['IBM_Plex_Mono']" style={{ fontSize: "0.875rem" }}>
                          {course.ects}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-[#B8956A]/10 border-t-2 border-[#B8956A]/30">
                      <td colSpan={3} className="px-6 py-4 text-right text-[#B8956A] font-['Playfair_Display']" style={{ fontSize: "1rem" }}>
                        {t.total}:
                      </td>
                      <td className="px-6 py-4 text-center text-[#B8956A] font-['IBM_Plex_Mono']" style={{ fontSize: "1rem" }}>
                        {calculateTotals(currentSemesters.fall.courses).totalCredit}
                      </td>
                      <td className="px-6 py-4 text-center text-[#B8956A] font-['IBM_Plex_Mono']" style={{ fontSize: "1rem" }}>
                        {calculateTotals(currentSemesters.fall.courses).totalECTS}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Spring Semester */}
          {currentSemesters.spring && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-sm bg-[#1a2e47]/20 border border-[#B8956A]/20 rounded-2xl overflow-hidden"
            >
              <div className="bg-[#B8956A]/10 border-b border-[#B8956A]/20 px-6 py-4">
                <h2 className="font-['Playfair_Display'] text-[#B8956A]" style={{ fontSize: "1.75rem" }}>
                  {currentSemesters.spring.name} / {currentSemesters.spring.season} {language === "TR" ? "Dönemi" : "Semester"}
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#B8956A]/20">
                      <th className="text-left px-6 py-4 text-[#B8956A] font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                        {t.courseCode}
                      </th>
                      <th className="text-left px-6 py-4 text-[#B8956A] font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                        {t.courseName}
                      </th>
                      <th className="text-center px-6 py-4 text-[#B8956A] font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                        {t.theoryPractice}
                      </th>
                      <th className="text-center px-6 py-4 text-[#B8956A] font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                        {t.credit}
                      </th>
                      <th className="text-center px-6 py-4 text-[#B8956A] font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                        {t.ects}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentSemesters.spring.courses.map((course, index) => (
                      <tr
                        key={course.code}
                        className={`border-b border-[#B8956A]/10 hover:bg-[#B8956A]/5 transition-colors ${
                          index % 2 === 0 ? "bg-[#0A1628]/20" : ""
                        }`}
                      >
                        <td className="px-6 py-4 text-[#B8956A] font-['IBM_Plex_Mono']" style={{ fontSize: "0.8125rem" }}>
                          {course.code}
                        </td>
                        <td className="px-6 py-4 text-[#FFFEF2]/80" style={{ fontSize: "0.9375rem" }}>
                          {course.name}
                        </td>
                        <td className="px-6 py-4 text-center text-[#FFFEF2]/70 font-['IBM_Plex_Mono']" style={{ fontSize: "0.875rem" }}>
                          {course.theory}+{course.practice}
                        </td>
                        <td className="px-6 py-4 text-center text-[#FFFEF2]/70 font-['IBM_Plex_Mono']" style={{ fontSize: "0.875rem" }}>
                          {course.credit}
                        </td>
                        <td className="px-6 py-4 text-center text-[#FFFEF2]/70 font-['IBM_Plex_Mono']" style={{ fontSize: "0.875rem" }}>
                          {course.ects}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-[#B8956A]/10 border-t-2 border-[#B8956A]/30">
                      <td colSpan={3} className="px-6 py-4 text-right text-[#B8956A] font-['Playfair_Display']" style={{ fontSize: "1rem" }}>
                        {t.total}:
                      </td>
                      <td className="px-6 py-4 text-center text-[#B8956A] font-['IBM_Plex_Mono']" style={{ fontSize: "1rem" }}>
                        {calculateTotals(currentSemesters.spring.courses).totalCredit}
                      </td>
                      <td className="px-6 py-4 text-center text-[#B8956A] font-['IBM_Plex_Mono']" style={{ fontSize: "1rem" }}>
                        {calculateTotals(currentSemesters.spring.courses).totalECTS}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>

        {/* Notes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 backdrop-blur-sm bg-[#1a2e47]/20 border border-[#B8956A]/20 rounded-2xl p-8"
        >
          <div className="flex items-start gap-4">
            <BookOpen className="w-6 h-6 text-[#B8956A] mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-['Playfair_Display'] text-[#B8956A] mb-3" style={{ fontSize: "1.25rem" }}>
                {t.notesTitle}
              </h3>
              <ul className="space-y-2 text-[#FFFEF2]/70" style={{ fontSize: "0.9375rem" }}>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] mt-1">•</span>
                  <span>{t.note1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] mt-1">•</span>
                  <span>{t.note2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] mt-1">•</span>
                  <span>
                    <span className="text-[#B8956A] font-['IBM_Plex_Mono']">{t.technicalElective}</span> {t.note3}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] mt-1">•</span>
                  <span>
                    <span className="text-[#B8956A] font-['IBM_Plex_Mono']">{t.socialElective}</span> {t.note4}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="backdrop-blur-sm bg-[#1a2e47]/20 border border-[#B8956A]/20 rounded-2xl p-12">
            <h3 className="font-['Playfair_Display'] text-[#B8956A] mb-4" style={{ fontSize: "2rem" }}>
              {t.downloadTitle}
            </h3>
            <p className="text-[#FFFEF2]/70 mb-8 max-w-2xl mx-auto" style={{ fontSize: "1rem" }}>
              {t.downloadDescription}
            </p>
            <button className="px-8 py-4 bg-[#B8956A] text-[#0A1628] rounded-full hover:bg-[#D4B78E] transition-all font-['Inter']">
              {t.downloadButton}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}