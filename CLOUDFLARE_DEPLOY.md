# ☁️ دليل نشر موقع قبيلة السادة النعيم على Cloudflare Pages

## 📋 نظرة عامة

هذا الدليل يشرح كيفية نشر الموقع على **Cloudflare Pages** (بديل مجاني وسريع لـ Vercel).

**المميزات:**
- ✅ مجاني للأبد (بدون حدود deploy)
- ✅ CDN عالمي سريع
- ✅ GitHub integration (auto-deploy)
- ✅ SSL تلقائي
- ✅ Custom domain مجاني
- ✅ يعمل بدون مشاكل Vercel القديمة

---

## 🚀 خطوات الإعداد (مرة واحدة فقط)

### الخطوة 1: إنشاء حساب Cloudflare
1. روح لـ https://dash.cloudflare.com/sign-up
2. أنشئ حساب مجاني (بريد + كلمة سر)

### الخطوة 2: ربط GitHub
1. في Cloudflare Dashboard، روح لـ **Workers & Pages**
2. اضغط **Create application** → **Pages** → **Connect to Git**
3. اختر **GitHub** → Authorize Cloudflare
4. اختر repository: **`qabilatalnaim/qabila-al-naim`**
5. اضغط **Begin setup**

### الخطوة 3: إعدادات البناء
في صفحة **Set up builds and deployments**:

| الحقل | القيمة |
|------|--------|
| **Project name** | `qabila-al-naim` |
| **Production branch** | `main` |
| **Framework preset** | `Vite` (أو None) |
| **Build command** | `npm run build:cf` |
| **Build output directory** | `dist` |
| **Root directory** | (فاضي) |
| **Environment variables** | لا تحتاج |

اضغط **Save and Deploy**.

### الخطوة 4: انتظر النشر
- أول deploy يأخذ 2-4 دقائق
- Cloudflare يبني المشروع وينشره تلقائياً
- راح تشوف logs البناء في الصفحة

### الخطوة 5: احصل على الرابط
بعد النشر الناجح:
- **Production:** `https://qabila-al-naim.pages.dev`
- أو custom domain لو أضفته

---

## 🔄 النشر التلقائي

بعد الإعداد الأولي، كل push على `main` ينشر تلقائياً:
1. أنت تعدل الكود محلياً
2. تعمل commit + push لـ GitHub
3. Cloudflare يبني وينشر تلقائياً خلال 2-3 دقائق
4. الموقع يتحدث بدون تدخل يدوي

---

## 🌐 إضافة دومين مخصص (اختياري)

### الخطوة 1: شراء دومين
اشتري من Namecheap, GoDaddy, أو أي مزود (مثلاً `qabilat-al-naim.com`)

### الخطوة 2: في Cloudflare
1. روح لمشروعك في Cloudflare Pages
2. **Custom domains** → **Set up a custom domain**
3. أدخل الدومين: `qabilat-al-naim.com`
4. Cloudflare يعطيك **DNS records** لتضيفها عند مزود الدومين

### الخطوة 3: في مزود الدومين
غيّر الـ nameservers لـ:
```
ns1.cloudflare.com
ns2.cloudflare.com
```

### الخطوة 4: SSL تلقائي
Cloudflare يضيف SSL تلقائياً خلال دقائق. ✅

---

## 🔍 كيف تراقب الموقع

### Logs المباشرة
في Cloudflare Dashboard:
- **Pages** → اختر المشروع → **Deployments**
- اضغط على أي deployment → **View logs**

### Analytics
- **Pages** → **Analytics** (مجاني)
- تشوف: الزوار، الأخطاء، الأداء

---

## 🔐 إضافة API Token (لو تبي النشر من CLI)

### للـ GitHub Actions (تلقائي):
GitHub repo يحوي workflow جاهز (`.github/workflows/deploy.yml`) يستخدم `CLOUDFLARE_API_TOKEN` و `CLOUDFLARE_ACCOUNT_ID` كـ secrets.

### لو تبي تنشر يدوياً من جهازك:
1. ثبت Wrangler: `npm install -g wrangler`
2. سجل دخول: `wrangler login`
3. انشر: `wrangler pages deploy dist --project-name=qabila-al-naim`

---

## 🛠️ حل المشاكل

### مشكلة: Build فشل
- **الحل:** تأكد إن `package.json` فيه `build:cf` script
- شوف logs في Cloudflare Dashboard

### مشكلة: 404 على الصفحات الداخلية
- **الحل:** تأكد إن `_redirects` موجود في `dist/` بعد البناء
- أو تأكد من `build output directory = dist`

### مشكلة: Service Worker ما يعمل
- **الحل:** تأكد من `_headers` يحتوي `Service-Worker-Allowed: /`

### مشكلة: صور WebP ما تظهر
- **الحل:** تأكد من `public/_headers` يحتوي `Cache-Control` صحيح للصور

---

## 📞 الدعم

- [Cloudflare Docs](https://developers.cloudflare.com/pages/)
- [Discord Cloudflare](https://discord.gg/cloudflaredev)
- للمشاكل المحددة: افتح issue على GitHub

---

## ✅ قائمة المراجعة بعد النشر

- [ ] افتح `https://qabila-al-naim.pages.dev`
- [ ] تأكد من الصفحة الرئيسية تحمّل
- [ ] افتح `/history` و `/town` و `/blog` (تأكد من SPA routing)
- [ ] افتح DevTools → Application → Service Workers (تأكد PWA)
- [ ] افتح DevTools → Application → Manifest (تأكد manifest.json)
- [ ] افتح `/sitemap.xml` و `/rss.xml` (تأكد SEO)
- [ ] جرّب البحث في `/search`
- [ ] اقرأ مقال من `/blog/tribe-history-overview`

---

**بالتوفيق! الموقع جاهز للنشر على Cloudflare Pages. 🚀**
