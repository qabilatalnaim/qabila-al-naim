# دليل تعديل موقع قبيلة السادة النعيم

## 📁 هيكل المشروع

```
qabila-al-naim/
├── public/
│   ├── images/
│   │   ├── logo.png          ← شعار القبيلة
│   │   └── banner.jpg         ← بيرق القبيلة (الحملة)
│   ├── sitemap.xml            ← خريطة الموقع (للبحث)
│   └── robots.txt             ← تعليمات لمحركات البحث
├── src/
│   ├── App.tsx               ← الملف الرئيسي للموقع ⚠️
│   ├── index.css              ← تنسيقات CSS
│   └── main.tsx               ← نقطة البداية
├── index.html                ← الملف الرئيسي HTML
└── package.json               ← إعدادات المشروع
```

## 🔧 كيفية التعديل

### 1️⃣ تعديل النصوص والمحتوى

افتح ملف `src/App.tsx` وابحث عن المتغيرات التالية:

#### تعديل الروابط الاجتماعية
```typescript
const socialLinks = {
  facebook: 'https://www.facebook.com/share/19n8j2XqBu/',
  instagram: 'https://www.instagram.com/qabilatalnaim',
  tiktok: 'https://www.tiktok.com/@qabilaalnaim',
  youtube: 'https://www.youtube.com/@Qabilaalnaim',
  youtubeChannel: 'https://www.youtube.com/channel/UC6jLB6GvtE2AKMzUhaWJVTQ',
  email: 'izzedinabuhamra@gmail.com',
}
```

#### تعديل الإحصائيات
```typescript
const stats = [
  { number: 826, label: 'مشترك على يوتيوب', suffix: '+' },
  { number: 103, label: 'متابع على فيسبوك', suffix: 'K' },
  { number: 31, label: 'ألف مشاهدة', suffix: 'K+' },
  { number: 60, label: 'فيديو توثيقي', suffix: '+' },
]
```

#### تعديل أركان القبيلة
```typescript
const pillars = [
  { icon: ShieldIcon, title: 'الحماية والشرف', desc: '...' },
  { icon: CrownIcon, title: 'المجد والعز', desc: '...' },
  { icon: SwordIcon, title: 'القوة والوحدة', desc: '...' },
]
```

#### تعديل الفيديوهات
```typescript
const featuredVideo = {
  id: 'KiIEUqNFh4w',              // رقم الفيديو من يوتيوب
  title: 'شيلة قبيلة السادة النعيم - عزاوي',
  description: '...',
}

const popularVideos = [
  {
    id: 'KiIEUqNFh4w',            // رقم الفيديو من يوتيوب
    title: 'عنوان الفيديو',
    description: 'وصف الفيديو',
    views: '31K',                 // عدد المشاهدات
    duration: '12:30',             // مدة الفيديو
  },
]
```

#### تعديل نواحي التراث
```typescript
const contentTopics = [
  { icon: BookIcon, title: 'العنوان', desc: 'الوصف' },
  { icon: UsersIcon, title: 'العنوان', desc: 'الوصف' },
]
```

#### تعديل الهاشتاقات
```typescript
// في قسم التواصل، عدل المصفوفة:
['#قبيلة_النعيم', '#السادة_النعيم', ...]
```

---

### 2️⃣ إضافة فيديو جديد

1. احصل على رابط الفيديو من يوتيوب
2. استخرج معرف الفيديو (الجزء بعد `v=`)
   - مثال: `https://www.youtube.com/watch?v=KiIEUqNFh4w`
   - المعرف هو: `KiIEUqNFh4w`
3. أضف الفيديو في `featuredVideo` أو `popularVideos`

---

### 3️⃣ تغيير الشعار أو البيرق

استبدل الملفات في `public/images/`:
- `logo.png` - الشعار (مستطيل أو دائري)
- `banner.jpg` - البيرق (الحملة)

---

### 4️⃣ تعديل الألوان

افتح `src/index.css` وعدل الألوان:
```css
/* اللون الرئيسي الأزرق الداكن */
background: #0a1628;

/* اللون الذهبي */
color: #D4AF37;
```

---

## 🚀 كيفية البناء والنشر

### الخطوة 1: تثبيت التبعيات
```bash
npm install
```

### الخطوة 2: تشغيل الموقع محلياً (اختبار)
```bash
npm run dev
```
افتح المتصفح على: `http://localhost:5173`

### الخطوة 3: بناء الموقع
```bash
npm run build
```

### الخطوة 4: النشر
استخدم أداة النشر في المنصة التي تستخدمها

---

## 📝 ملاحظات مهمة

1. **النسخ الاحتياطي**: قبل أي تعديل، احفظ نسخة من الملف
2. **التجربة**: جرّب التعديلات محلياً قبل النشر
3. **الصور**: استخدم صيغة PNG للشعار و JPG للبيرق
4. **الفيديوهات**: تأكد من أن الفيديو عام (Public) على يوتيوب

---

## ❓ نصائح

- استخدم محرر نصوص متقدم مثل VS Code
- فعّل ESLint لاكتشاف الأخطاء مبكراً
- لا تحذف الأقواس أو الفواصل
- احفظ الملف بعد كل تعديل

---

**الموقع الحالي:** https://rfj8hqpagbiz.space.minimax.io
