# Samsun Üniversitesi - Vize Grafik Tasarım

Modern bir web uygulaması olarak Samsun Üniversitesi'nin resmi web sitesini sunan projelendirmedir. React, TypeScript ve Vite kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- ✨ Modern ve responsive tasarım
- 🌍 Çok dilli destek (Türkçe/İngilizce)
- 🎨 Shadcn/ui bileşen kütüphanesi
- ⚡ Vite ile hızlı geliştirme
- 📱 Mobil uyumlu arayüz
- 🔗 LinkedIn entegrasyonu
- ♿ Erişilebilir tasarım

## 📋 Sayfalar

- **Ana Sayfa** - Hoş geldiniz ve genel bilgiler
- **Hakkında** - Üniversite hakkında bilgiler
- **Akademisyenler** - Bölüm akademisyenleri ve LinkedIn profilleri
- **Bölüm** - Yazılım Mühendisliği Bölümü bilgileri
- **Müfredat** - Ders programı ve müfredat
- **Haberler** - Güncel haberler ve duyurular
- **Projeler** - Öğrenci ve akademisyen projeleri
- **Araştırmalar** - Araştırma çalışmaları
- **Başvurular** - Başvuru bilgileri
- **İletişim** - Bize ulaşın

## 🛠️ Teknoloji Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **Component Library**: Shadcn/ui
- **Package Manager**: pnpm
- **State Management**: React Context API
- **Routing**: React Router

## 📦 Kurulum

### Ön Gereksinimler
- Node.js 16+ veya pnpm

### Adımlar

1. **Depoyu klonla**
```bash
git clone <repository-url>
cd "Vize Grafik Tasarım"
```

2. **Bağımlılıkları yükle**
```bash
pnpm install
```

3. **Geliştirme sunucusunu başlat**
```bash
pnpm dev
```

Tarayıcında `http://localhost:5173` adresini açarak uygulamayı görüntüleyebilirsiniz.

## 🏗️ Proje Yapısı

```
.
├── src/
│   ├── app/
│   │   ├── components/       # Yeniden kullanılabilir bileşenler
│   │   │   ├── ui/          # Shadcn/ui bileşenleri
│   │   │   ├── figma/       # Figma entegrasyonu
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   ├── pages/           # Sayfa bileşenleri
│   │   ├── contexts/        # React Context
│   │   ├── App.tsx
│   │   └── routes.tsx
│   ├── styles/              # Global stiller
│   ├── imports/             # Veri ve metinler
│   └── main.tsx
├── public/                   # Statik dosyalar
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 📝 Komutlar

- `pnpm dev` - Geliştirme sunucusunu başlat
- `pnpm build` - Üretim için derle
- `pnpm preview` - Derlenen uygulamayı önizle

## 🌐 Çok Dilli Destek

Uygulama LanguageContext kullanarak Türkçe ve İngilizce dillerini desteklemektedir. Dil değişimi LanguageSwitcher bileşeni aracılığıyla yapılabilir.

```tsx
import { useLanguage } from '@/app/contexts/LanguageContext';

function MyComponent() {
  const { language } = useLanguage();
  // language === 'tr' veya 'en'
}
```

## 🎨 Tasarım Sistemi

Proje Shadcn/ui ve Tailwind CSS kullanarak tutarlı bir tasarım sistemi sunar:

- **Renkler**: Özel tema renkleri (#B8956A, #0A1628 vb.)
- **Tipografi**: Inter font ailesi
- **Bileşenler**: Hazır UI bileşenleri
- **Responsive**: Mobile-first yaklaşımı

## 🔐 Ortam Değişkenleri

`.env.local` dosyası oluşturup aşağıdaki değişkenleri tanımlayabilirsiniz:

```
VITE_API_URL=https://api.example.com
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişiklikleri commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'e push yapın (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📄 Lisans

Bu proje Samsun Üniversitesi tarafından geliştirilmiştir.

## 📧 İletişim

Sorular ve geri bildirimler için:
- 📧 E-posta: info@samsun.edu.tr
- 🌐 Web: www.samsun.edu.tr

## 🙏 Teşekkürler

- Shadcn/ui topluluğu
- React ve TypeScript takımları
- Vite ekibi
