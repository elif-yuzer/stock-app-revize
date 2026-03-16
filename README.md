# Stock App

A React-based inventory management application for tracking products, firms, sales, and purchases.

> 🇹🇷 Türkçe dokümantasyon için [README.tr.md](README.tr.md)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| UI | React 19, Tailwind CSS v4, Shadcn/UI |
| Forms | React Hook Form, Zod |
| State | Redux Toolkit |
| Routing | React Router DOM v7 |
| HTTP | Axios |
| Build | Vite |

---

## 📁 Project Structure

```
src/
├── assets/          # Static files
├── components/
│   ├── authForms/   # SignInForm, SignUpForm
│   └── ui/          # Shadcn components
├── layouts/         # RootLayout
├── pages/           # All pages
├── router/          # AppRouter, AuthGuard, PublicOnlyRoute
├── store/           # Redux store and slices
└── validations/     # Zod schemas
```

---

## 🧭 Route Structure

```
/                    → Home (public)
/sign-in             → Login (unauthenticated only)
/sign-up             → Register (unauthenticated only)
/stock               → Protected area (requires token)
  /stock/brands      → Brands
  /stock/firms       → Firms
  /stock/firms/:id   → Firm detail
  /stock/products    → Products
  /stock/purchases   → Purchases
  /stock/sales       → Sales
  /stock/sales/:id   → Sale detail
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/username/stock-app-revize.git
cd stock-app-revize
npm install
npm run dev
```

---

## 🌿 Branch Strategy

```
main                    → Production (served via Nginx)
feature/auth-and-layout → Auth system and layout structure
```

Each feature is developed in its own branch and merged into `main` when complete.

---

## 🖥️ Deployment

The application is served on Ubuntu Server with Nginx.

```bash
npm run build
# Copy dist/ to Nginx web root
```

---

## 📋 Progress

- [x] Project setup (Vite + React + Tailwind)
- [x] Shadcn/UI integration
- [x] React Router structure
- [x] AuthGuard & PublicOnlyRoute
- [x] SignInForm (react-hook-form + zod)
- [ ] SignUpForm
- [ ] Redux authSlice
- [ ] API integration
- [ ] Firm/Product CRUD operations

This project goes beyond just frontend development; it is designed with a complete system architecture mindset. The application is hosted and tested on a local bare-metal environment to simulate real-world production scenarios.

* **Server:** Ubuntu 22.04 LTS running on Hyper-V.
* **Networking:** Custom static IP configuration using `Netplan` to ensure stable SSH access and consistent internal routing.
* **CI/CD (Upcoming):** Automated bash scripts (`deploy.sh`) for seamless pulling, building, and serving the latest application state.

# Stock App

A React-based inventory management application for tracking products, firms, sales, and purchases.

> 🇹🇷 Türkçe dokümantasyon için [README.tr.md](README.tr.md)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| UI | React 19, Tailwind CSS v4, Shadcn/UI |
| Forms | React Hook Form, Zod |
| State | Redux Toolkit |
| Routing | React Router DOM v7 |
| HTTP | Axios |
| Build | Vite |

---

## 📁 Project Structure

```
src/
├── assets/          # Static files
├── components/
│   ├── authForms/   # SignInForm, SignUpForm
│   └── ui/          # Shadcn components
├── layouts/         # RootLayout
├── pages/           # All pages
├── router/          # AppRouter, AuthGuard, PublicOnlyRoute
├── store/           # Redux store and slices
└── validations/     # Zod schemas
```

---

## 🧭 Route Structure

```
/                    → Home (public)
/sign-in             → Login (unauthenticated only)
/sign-up             → Register (unauthenticated only)
/stock               → Protected area (requires token)
  /stock/brands      → Brands
  /stock/firms       → Firms
  /stock/firms/:id   → Firm detail
  /stock/products    → Products
  /stock/purchases   → Purchases
  /stock/sales       → Sales
  /stock/sales/:id   → Sale detail
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/username/stock-app-revize.git
cd stock-app-revize
npm install
npm run dev
```

---

## 🌿 Branch Strategy

```
main                    → Production (served via Nginx)
feature/auth-and-layout → Auth system and layout structure
```

Each feature is developed in its own branch and merged into `main` when complete.

---

## 🖥️ Deployment

The application is served on Ubuntu Server with Nginx.

```bash
npm run build
# Copy dist/ to Nginx web root
```

---

## 📋 Progress

- [x] Project setup (Vite + React + Tailwind)
- [x] Shadcn/UI integration
- [x] React Router structure
- [x] AuthGuard & PublicOnlyRoute
- [x] SignInForm (react-hook-form + zod)
- [ ] SignUpForm
- [ ] Redux authSlice
- [ ] API integration
- [ ] Firm/Product CRUD operation


