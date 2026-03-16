# Stock App

React tabanlı stok takip uygulaması. Ürün, firma, satış ve satın alma işlemlerini yönetmek için geliştirilmiştir.

> 🇬🇧 For English documentation see [README.md](README.md)

---

## 🛠️ Teknoloji Stack

| Katman | Teknoloji |
|--------|-----------|
| UI | React 19, Tailwind CSS v4, Shadcn/UI |
| Form | React Hook Form, Zod |
| State | Redux Toolkit |
| Routing | React Router DOM v7 |
| HTTP | Axios |
| Build | Vite |

---

## 📁 Proje Yapısı

```
src/
├── assets/          # Görseller
├── components/
│   ├── authForms/   # SignInForm, SignUpForm
│   └── ui/          # Shadcn bileşenleri
├── layouts/         # RootLayout
├── pages/           # Tüm sayfalar
├── router/          # AppRouter, AuthGuard, PublicOnlyRoute
├── store/           # Redux store ve slice'lar
└── validations/     # Zod şemaları
```

---

## 🧭 Route Yapısı

```
/                    → Home (public)
/sign-in             → Giriş (sadece giriş yapmamış kullanıcılar)
/sign-up             → Kayıt (sadece giriş yapmamış kullanıcılar)
/stock               → Korumalı alan (token gerekli)
  /stock/brands      → Markalar
  /stock/firms       → Firmalar
  /stock/firms/:id   → Firma detay
  /stock/products    → Ürünler
  /stock/purchases   → Satın almalar
  /stock/sales       → Satışlar
  /stock/sales/:id   → Satış detay
```

---

## 🚀 Kurulum

```bash
git clone https://github.com/kullanici/stock-app-revize.git
cd stock-app-revize
npm install
npm run dev
```

---

## 🌿 Branch Stratejisi

```
main                    → Production (Nginx ile serve edilir)
feature/auth-and-layout → Auth sistemi ve layout yapısı
```

Her özellik ayrı branch'ta geliştirilir, tamamlanınca `main`'e merge edilir.

---

## 🖥️ Deployment

Uygulama Ubuntu Server üzerinde Nginx ile serve edilmektedir.

```bash
npm run build
# dist/ klasörü Nginx web root'una kopyalanır
```

---

## 📋 Geliştirme Durumu

- [x] Proje kurulumu (Vite + React + Tailwind)
- [x] Shadcn/UI entegrasyonu
- [x] React Router yapısı
- [x] AuthGuard & PublicOnlyRoute
- [x] SignInForm (react-hook-form + zod)
- [ ] SignUpForm
- [ ] Redux authSlice
- [ ] API entegrasyonu
- [ ] Firma/Ürün CRUD işlemleri



