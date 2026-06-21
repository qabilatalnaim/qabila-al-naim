# قبيلة السادة النعيم - أهل الصفرا

موقع تعريفي وتوثيقي لقبيلة السادة النعيم العريقة، السادة الرفاعية الموسوية الحسينية - أهل الصفرا في بلاد الشام.

## 🌐 الموقع الرسمي

**Vercel:** `https://qabila-al-naim.vercel.app`

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
- **Deployment:** Vercel (auto-deploy من GitHub)
- **CI/CD:** GitHub Actions
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

## 🚀 النشر على Vercel

الموقع يُنشر تلقائياً على Vercel عند كل push على `main` عبر GitHub Actions:

1. **Setup مرة واحدة:**
   - أنشئ مشروع على [Vercel Dashboard](https://vercel.com/dashboard)
   - من إعدادات المشروع في GitHub، أضف الـ secrets التالية:
     - `VERCEL_TOKEN` — من [Vercel Account Settings → Tokens](https://vercel.com/account/tokens)
     - `VERCEL_ORG_ID` — من إعدادات الفريق في Vercel
     - `VERCEL_PROJECT_ID` — من إعدادات المشروع في Vercel
2. **بعدها:** فقط ادفع التغييرات على `main`
3. **خلال 2-3 دقائق:** الموقع يتحدث تلقائياً
4. **للنشر اليدوي:** شغّل `./scripts/deploy-vercel.sh`

> ملاحظة: Vercel يكتشف تلقائياً أنه مشروع Vite (لا يحتاج `vercel.json`).

## 📁 هيكل المشروع

```
qabila-al-naim/
├── public/              # ملفات static (تنخدم كما هي)
│   ├── images/         # صور WebP
│   ├── manifest.json   # PWA manifest
│   ├── sw.js           # Service Worker
│   ├── sitemap.xml     # خريطة الموقع
│   └── rss.xml         # RSS feed
├── src/
│   ├── components/     # مكونات مشتركة (SEO, Breadcrumbs, etc.)
│   ├── pages/          # صفحات الموقع (13 صفحة)
│   ├── lib/            # أدوات مساعدة + SEO config + search/blog data
│   ├── App.tsx         # المكون الرئيسي
│   ├── main.tsx        # نقطة الدخول
│   └── index.css       # تنسيقات CSS
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions → Vercel
└── scripts/            # أدوات مساعدة (نشر، تنظيف، SEO)
```

## 📝 الترخيص

© 2026 قبيلة السادة النعيم - جميع الحقوق محفوظة
