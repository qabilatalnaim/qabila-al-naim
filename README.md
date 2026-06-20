# قبيلة السادة النعيم - أهل الصفرا

موقع تعريفي وتوثيقي لقبيلة السادة النعيم العريقة، السادة الرفاعية الموسوية الحسينية - أهل الصفرا في بلاد الشام.

## 🌐 الموقع الرسمي

**Cloudflare Pages:** `https://qabila-al-naim.pages.dev`

## ✨ المميزات

- 📱 **PWA كامل** — يثبت كأب على الأجهزة، يعمل offline
- ⚡ **أداء عالي** — صور WebP، lazy loading، code splitting
- 🔍 **بحث ذكي** — بحث في كل صفحات التراث
- 📰 **مدونة** — مقالات تثقيفية عن التراث
- 📡 **RSS Feed** — اشترك في آخر المقالات
- 🗺️ **SEO محسّن** — Schema.org، breadcrumbs، sitemap
- 🌐 **13 صفحة** — الرئيسية + 10 صفحات تراث + مدونة + بحث

## 🛠️ التقنيات

- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **PWA:** Service Worker + Web App Manifest
- **Deployment:** Cloudflare Pages (auto-deploy من GitHub)
- **Code Quality:** ESLint + TypeScript strict mode

## 📦 التطوير المحلي

```bash
# تثبيت التبعيات
npm install
# أو
pnpm install

# تشغيل سيرفر التطوير
npm run dev
# الموقع على http://localhost:5173

# بناء النسخة النهائية
npm run build
# الملفات النهائية في dist/
```

## 🚀 النشر

الموقع يُنشر تلقائياً على Cloudflare Pages عند كل push على `main`:

1. **Setup مرة واحدة:** اتبع [CLOUDFLARE_DEPLOY.md](./CLOUDFLARE_DEPLOY.md)
2. **بعدها:** فقط ادفع التغييرات على GitHub
3. **خلال 2-3 دقائق:** الموقع يتحدث تلقائياً

## 📁 هيكل المشروع

```
qabila-al-naim/
├── public/              # ملفات static (تنخدم كما هي)
│   ├── images/         # صور WebP
│   ├── manifest.json   # PWA manifest
│   ├── sw.js           # Service Worker
│   ├── sitemap.xml     # خريطة الموقع
│   ├── rss.xml         # RSS feed
│   ├── _redirects      # Cloudflare SPA routing
│   └── _headers        # Security + caching
├── src/
│   ├── components/     # مكونات مشتركة (SEO, Breadcrumbs, etc.)
│   ├── pages/          # صفحات الموقع (13 صفحة)
│   ├── lib/            # أدوات مساعدة + SEO config + search/blog data
│   ├── App.tsx         # المكون الرئيسي
│   ├── main.tsx        # نقطة الدخول
│   └── index.css       # تنسيقات CSS
├── wrangler.toml       # إعدادات Cloudflare Pages
└── CLOUDFLARE_DEPLOY.md # دليل النشر
```

## 📝 الترخيص

© 2026 قبيلة السادة النعيم - جميع الحقوق محفوظة
