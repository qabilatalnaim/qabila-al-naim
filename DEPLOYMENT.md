# النشر على Vercel

يستخدم هذا المشروع **Vercel Git Integration** للنشر التلقائي.

## كيف يعمل؟

- عند كل `git push` على فرع `main`
- Vercel يلتقط التغيير تلقائياً
- يبني المشروع (Vite build)
- ينشر على `https://qabila-al-naim.vercel.app`

## لا حاجة لـ GitHub Actions

تم تعطيل GitHub Actions (`deploy.yml`) لأن Vercel يتعامل مع النشر مباشرة.

## ملف vercel.json

يحتوي على:
- SPA rewrites (يحل مشكلة 404 على الصفحات الداخلية)
- Cache headers للأداء الأفضل
- Security headers
