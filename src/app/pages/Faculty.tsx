import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Mail, Linkedin, BookOpen } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export default function Faculty() {
  const { language } = useLanguage();
  const [selectedDepartment, setSelectedDepartment] = useState(language === "TR" ? "Tümü" : "All");

  // Dil değiştiğinde filtre state'ini güncelle
  useEffect(() => {
    setSelectedDepartment(language === "TR" ? "Tümü" : "All");
  }, [language]);

  const content = {
    TR: {
      pageTitle: "Akademisyenlerimiz",
      pageDescription: "Öğrencilerimizi yazılım mühendisliği ve bilgisayar bilimleri alanında mükemmelliğe yönlendiren seçkin akademisyenler ve araştırmacılarımızla tanışın.",
      all: "Tümü",
      publications: "Yayın",
      joinTitle: "Akademik Topluluğumuza Katılın",
      joinDescription: "Seçkin fakültemize katılacak yetenekli araştırmacılar ve eğitimciler arıyoruz. Mevcut fırsatları keşfedin.",
      facultyPositions: "Akademik Pozisyonlar",
    },
    EN: {
      pageTitle: "Our Faculty",
      pageDescription: "Meet our distinguished academics and researchers who guide our students toward excellence in software engineering and computer science.",
      all: "All",
      publications: "Publications",
      joinTitle: "Join Our Academic Community",
      joinDescription: "We are seeking talented researchers and educators to join our distinguished faculty. Explore current opportunities.",
      facultyPositions: "Faculty Positions",
    },
  };

  const t = content[language];

  const departments = language === "TR"
    ? ["Tümü", "Yazılım Mimarisi", "Yapay Zeka", "Siber Güvenlik", "Veri Bilimi"]
    : ["All", "Software Architecture", "Artificial Intelligence", "Cybersecurity", "Data Science"];

  const facultyMembers = language === "TR" ? [
    {
      name: "Prof. Dr. Muammer Türkoğlu",
      title: "Bölüm Başkanı",
      department: "Yazılım Mimarisi",
      specialization: "Dağıtık Sistemler, Bulut Bilişim",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzJTIwbWFufGVufDF8fHx8MTc3NjQxNTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "muammer.turkoglu@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/muammer-t%C3%BCrko%C4%9Flu-a9a71746",
      publications: 85,
    },
    {
      name: "Doç. Dr. Emel Soylu",
      title: "Bölüm Başkan Yardımcısı",
      department: "Yapay Zeka",
      specialization: "Derin Öğrenme, Sinir Ağları",
      image: "https://images.unsplash.com/photo-1610387694365-19fafcc86d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzJTIwd29tYW58ZW58MXx8fHwxNzc2NDE1MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      email: "emel.soylu@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/emel-soylu-22814a311",
      publications: 72,
    },
    {
      name: "Dr. Öğr. Üyesi Özgür Tonkal",
      title: "Bölüm Başkan Yardımcısı",
      department: "Siber Güvenlik",
      specialization: "Ağ Güvenliği, Kriptografi",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzJTIwbWFufGVufDF8fHx8MTc3NjQxNTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "ozgur.tonkal@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/ozgrcglr",
      publications: 58,
    },
    {
      name: "Dr. Öğr. Üyesi Hüseyin Demir",
      title: "Öğretim Üyesi",
      department: "Yazılım Mimarisi",
      specialization: "Yazılım Mühendisliği, Tasarım Kalıpları",
      image: "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHByb2Zlc3NvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjQyMjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "huseyin.demir@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/huseyin-demir-phd-professor-at-samsun-university-aa7784371/tr",
      publications: 64,
    },
    {
      name: "Doç. Dr. Zafer Cömert",
      title: "Öğretim Üyesi",
      department: "Yapay Zeka",
      specialization: "Makine Öğrenmesi, Görüntü İşleme",
      image: "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHByb2Zlc3NvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjQyMjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "zafer.comert@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/zafer-c%C3%B6mert-51000367",
      publications: 94,
    },
    {
      name: "Dr. Öğr. Üyesi Abdulkadir Karacı",
      title: "Öğretim Üyesi",
      department: "Veri Bilimi",
      specialization: "Veri Madenciliği, Büyük Veri Analitiği",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzJTIwbWFufGVufDF8fHx8MTc3NjQxNTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "abdulkadir.karaci@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/abdulkadir-karaci-7a777195",
      publications: 71,
    },
    {
      name: "Dr. Öğr. Üyesi Selçuk Çakmak",
      title: "Öğretim Üyesi",
      department: "Siber Güvenlik",
      specialization: "Bilgi Güvenliği, Kriptografi",
      image: "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHByb2Zlc3NvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjQyMjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "selcuk.cakmak@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/secakmak",
      publications: 52,
    },
    {
      name: "Arş. Gör. Alper Talha Karadeniz",
      title: "Araştırma Görevlisi",
      department: "Yazılım Mimarisi",
      specialization: "Mobil Uygulama Geliştirme, Web Teknolojileri",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzJTIwbWFufGVufDF8fHx8MTc3NjQxNTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "alper.karadeniz@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/alper-talha-karadeniz-40440b280",
      publications: 28,
    },
    {
      name: "Arş. Gör. Nurettin Şenyer",
      title: "Araştırma Görevlisi",
      department: "Yapay Zeka",
      specialization: "Doğal Dil İşleme, Yapay Zeka Uygulamaları",
      image: "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHByb2Zlc3NvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjQyMjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "nurettin.senyer@samsun.edu.tr",
      linkedin: "https://www.linkedin.com/in/nurettin-senyer/tr",
      publications: 21,
    },
    {
      name: "Arş. Gör. Deniz Bora Küçük",
      title: "Araştırma Görevlisi",
      department: "Siber Güvenlik",
      specialization: "Ağ Güvenliği, Sızma Testleri",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzJTIwbWFufGVufDF8fHx8MTc3NjQxNTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "deniz.kucuk@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/denizborakucuk",
      publications: 19,
    },
    {
      name: "Arş. Gör. Ferhat Arat",
      title: "Araştırma Görevlisi",
      department: "Veri Bilimi",
      specialization: "Büyük Veri, Veri Görselleştirme",
      image: "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHByb2Zlc3NvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjQyMjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "ferhat.arat@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/ferhat-arat-922167327?trk=people-guest_people_search-card",
      publications: 16,
    },
    {
      name: "Arş. Gör. Furkancan Demircan",
      title: "Araştırma Görevlisi",
      department: "Yazılım Mimarisi",
      specialization: "Yazılım Testi, Kalite Güvencesi",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzJTIwbWFufGVufDF8fHx8MTc3NjQxNTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "furkancan.demircan@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/furkancan-demircan-321abb219?trk=public_profile_browsemap",
      publications: 14,
    },
    {
      name: "Arş. Gör. İlker Gür",
      title: "Araştırma Görevlisi",
      department: "Yapay Zeka",
      specialization: "Bilgisayarlı Görü, Görüntü İşleme",
      image: "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHByb2Zlc3NvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjQyMjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "ilker.gur@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/ilker-gur",
      publications: 12,
    },
    {
      name: "Arş. Gör. Ömer Durmuş",
      title: "Araştırma Görevlisi",
      department: "Siber Güvenlik",
      specialization: "Bulut Güvenliği, Kötü Amaçlı Yazılım Analizi",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzJTIwbWFufGVufDF8fHx8MTc3NjQxNTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "omer.durmus@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/%C3%B6mer-durmu%C5%9F-603b82a4",
      publications: 10,
    },
    {
      name: "Arş. Gör. Sarp Çoban",
      title: "Araştırma Görevlisi",
      department: "Veri Bilimi",
      specialization: "İstatistiksel Analiz, Veri Madenciliği",
      image: "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHByb2Zlc3NvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjQyMjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "sarp.coban@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/sarp-%C3%A7oban-b274b317b",
      publications: 9,
    },
  ] : [
    {
      name: "Prof. Dr. Muammer Türkoğlu",
      title: "Department Chair",
      department: "Software Architecture",
      specialization: "Distributed Systems, Cloud Computing",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzJTIwbWFufGVufDF8fHx8MTc3NjQxNTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "muammer.turkoglu@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/muammer-t%C3%BCrko%C4%9Flu-a9a71746",
      publications: 85,
    },
    {
      name: "Assoc. Prof. Dr. Emel Soylu",
      title: "Associate Department Chair",
      department: "Artificial Intelligence",
      specialization: "Deep Learning, Neural Networks",
      image: "https://images.unsplash.com/photo-1610387694365-19fafcc86d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzJTIwd29tYW58ZW58MXx8fHwxNzc2NDE1MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      email: "emel.soylu@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/emel-soylu-22814a311",
      publications: 72,
    },
    {
      name: "Asst. Prof. Dr. Özgür Tonkal",
      title: "Associate Department Chair",
      department: "Cybersecurity",
      specialization: "Network Security, Cryptography",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzJTIwbWFufGVufDF8fHx8MTc3NjQxNTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "ozgur.tonkal@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/ozgrcglr",
      publications: 58,
    },
    {
      name: "Asst. Prof. Dr. Hüseyin Demir",
      title: "Faculty Member",
      department: "Software Architecture",
      specialization: "Software Engineering, Design Patterns",
      image: "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHByb2Zlc3NvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjQyMjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "huseyin.demir@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/huseyin-demir-phd-professor-at-samsun-university-aa7784371/tr",
      publications: 64,
    },
    {
      name: "Assoc. Prof. Dr. Zafer Cömert",
      title: "Faculty Member",
      department: "Artificial Intelligence",
      specialization: "Machine Learning, Image Processing",
      image: "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHByb2Zlc3NvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjQyMjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "zafer.comert@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/zafer-c%C3%B6mert-51000367",
      publications: 94,
    },
    {
      name: "Asst. Prof. Dr. Abdulkadir Karacı",
      title: "Faculty Member",
      department: "Data Science",
      specialization: "Data Mining, Big Data Analytics",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzJTIwbWFufGVufDF8fHx8MTc3NjQxNTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "abdulkadir.karaci@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/abdulkadir-karaci-7a777195",
      publications: 71,
    },
    {
      name: "Asst. Prof. Dr. Selçuk Çakmak",
      title: "Faculty Member",
      department: "Cybersecurity",
      specialization: "Information Security, Cryptography",
      image: "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHByb2Zlc3NvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjQyMjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "selcuk.cakmak@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/secakmak",
      publications: 52,
    },
    {
      name: "Res. Asst. Alper Talha Karadeniz",
      title: "Research Assistant",
      department: "Software Architecture",
      specialization: "Mobile Application Development, Web Technologies",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzJTIwbWFufGVufDF8fHx8MTc3NjQxNTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "alper.karadeniz@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/alper-talha-karadeniz-40440b280",
      publications: 28,
    },
    {
      name: "Res. Asst. Nurettin Şenyer",
      title: "Research Assistant",
      department: "Artificial Intelligence",
      specialization: "Natural Language Processing, AI Applications",
      image: "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHByb2Zlc3NvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjQyMjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "nurettin.senyer@samsun.edu.tr",
      linkedin: "https://www.linkedin.com/in/nurettin-senyer/tr",
      publications: 21,
    },
    {
      name: "Res. Asst. Deniz Bora Küçük",
      title: "Research Assistant",
      department: "Cybersecurity",
      specialization: "Network Security, Penetration Testing",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzJTIwbWFufGVufDF8fHx8MTc3NjQxNTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "deniz.kucuk@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/denizborakucuk",
      publications: 19,
    },
    {
      name: "Res. Asst. Ferhat Arat",
      title: "Research Assistant",
      department: "Data Science",
      specialization: "Big Data, Data Visualization",
      image: "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHByb2Zlc3NvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjQyMjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "ferhat.arat@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/ferhat-arat-922167327?trk=people-guest_people_search-card",
      publications: 16,
    },
    {
      name: "Res. Asst. Furkancan Demircan",
      title: "Research Assistant",
      department: "Software Architecture",
      specialization: "Software Testing, Quality Assurance",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzJTIwbWFufGVufDF8fHx8MTc3NjQxNTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "furkancan.demircan@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/furkancan-demircan-321abb219?trk=public_profile_browsemap",
      publications: 14,
    },
    {
      name: "Res. Asst. İlker Gür",
      title: "Research Assistant",
      department: "Artificial Intelligence",
      specialization: "Computer Vision, Image Processing",
      image: "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHByb2Zlc3NvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjQyMjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "ilker.gur@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/ilker-gur",
      publications: 12,
    },
    {
      name: "Res. Asst. Ömer Durmuş",
      title: "Research Assistant",
      department: "Cybersecurity",
      specialization: "Cloud Security, Malware Analysis",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzJTIwbWFufGVufDF8fHx8MTc3NjQxNTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "omer.durmus@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/%C3%B6mer-durmu%C5%9F-603b82a4",
      publications: 10,
    },
    {
      name: "Res. Asst. Sarp Çoban",
      title: "Research Assistant",
      department: "Data Science",
      specialization: "Statistical Analysis, Data Mining",
      image: "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHByb2Zlc3NvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjQyMjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "sarp.coban@samsun.edu.tr",
      linkedin: "https://tr.linkedin.com/in/sarp-%C3%A7oban-b274b317b",
      publications: 9,
    },
  ];

  const departmentMapping = language === "TR"
    ? { "Tümü": "All", "Yazılım Mimarisi": "Software Architecture", "Yapay Zeka": "Artificial Intelligence", "Siber Güvenlik": "Cybersecurity", "Veri Bilimi": "Data Science" }
    : { "All": "All", "Software Architecture": "Software Architecture", "Artificial Intelligence": "Artificial Intelligence", "Cybersecurity": "Cybersecurity", "Data Science": "Data Science" };

  const filteredFaculty =
    selectedDepartment === (language === "TR" ? "Tümü" : "All")
      ? facultyMembers
      : facultyMembers.filter((member) => member.department === selectedDepartment);

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

        {/* Department Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-6 py-3 rounded-full border transition-all ${
                selectedDepartment === dept
                  ? "bg-[#B8956A] text-[#0A1628] border-[#B8956A]"
                  : "border-[#B8956A]/30 text-[#FFFEF2]/70 hover:border-[#B8956A] hover:text-[#B8956A]"
              }`}
              style={{ fontSize: "0.875rem" }}
            >
              {dept}
            </button>
          ))}
        </motion.div>

        {/* Faculty Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredFaculty.map((member, index) => (
            <motion.div
              key={member.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl border border-[#B8956A]/20 backdrop-blur-sm bg-[#1a2e47]/20 hover:border-[#B8956A]/50 transition-all duration-500">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#B8956A]/0 group-hover:bg-[#B8956A]/10 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-['Playfair_Display'] text-[#FFFEF2] mb-1" style={{ fontSize: "1.25rem" }}>
                    {member.name}
                  </h3>
                  <p className="text-[#B8956A] mb-2 font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                    {member.title}
                  </p>
                  <p className="text-[#FFFEF2]/60 mb-3" style={{ fontSize: "0.875rem" }}>
                    {member.department}
                  </p>
                  <p className="text-[#FFFEF2]/50 italic mb-4" style={{ fontSize: "0.8125rem" }}>
                    {member.specialization}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[#B8956A]/20">
                    <div className="flex items-center gap-2">
                      <BookOpen size={14} className="text-[#B8956A]" />
                      <span className="text-[#FFFEF2]/60 font-['IBM_Plex_Mono']" style={{ fontSize: "0.75rem" }}>
                        {member.publications} {t.publications}
                      </span>
                    </div>
                  </div>

                  {/* Contact Icons */}
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-9 h-9 rounded-full border border-[#B8956A]/30 flex items-center justify-center text-[#B8956A] hover:bg-[#B8956A]/10 hover:border-[#B8956A] transition-all"
                      aria-label="Email"
                    >
                      <Mail size={16} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-[#B8956A]/30 flex items-center justify-center text-[#B8956A] hover:bg-[#B8956A]/10 hover:border-[#B8956A] transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -top-1 -right-1 w-16 h-16 border-t-2 border-r-2 border-[#B8956A]/0 group-hover:border-[#B8956A]/50 rounded-tr-2xl transition-all duration-500" />
              <div className="absolute -bottom-1 -left-1 w-16 h-16 border-b-2 border-l-2 border-[#B8956A]/0 group-hover:border-[#B8956A]/50 rounded-bl-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="backdrop-blur-sm bg-[#1a2e47]/20 border border-[#B8956A]/20 rounded-2xl p-12">
            <h2 className="font-['Playfair_Display'] text-[#B8956A] mb-4" style={{ fontSize: "2rem" }}>
              {t.joinTitle}
            </h2>
            <p className="text-[#FFFEF2]/70 mb-8 max-w-2xl mx-auto" style={{ fontSize: "1rem" }}>
              {t.joinDescription}
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-[#B8956A] text-[#0A1628] rounded-full hover:bg-[#D4B78E] transition-all"
            >
              {t.facultyPositions}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}