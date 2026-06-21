#!/bin/bash
# Vercel Manual Deploy Script
# الاستخدام: ./scripts/deploy-vercel.sh

set -e

echo "🚀 نشر موقع قبيلة السادة النعيم على Vercel"
echo "================================================"
echo ""

# الخطوة 1: تأكد من Node.js و npm
echo "📋 الخطوة 1: فحص البيئة..."
if ! command -v node &> /dev/null; then
  echo "❌ Node.js غير مثبت. ثبّته من https://nodejs.org"
  exit 1
fi
echo "✅ Node.js: $(node --version)"
echo "✅ npm: $(npm --version)"
echo ""

# الخطوة 2: تثبيت Vercel CLI
echo "📋 الخطوة 2: تثبيت Vercel CLI..."
if ! command -v vercel &> /dev/null; then
  echo "⏳ جاري التثبيت..."
  npm install -g vercel
fi
echo "✅ Vercel CLI: $(vercel --version)"
echo ""

# الخطوة 3: تسجيل الدخول
echo "📋 الخطوة 3: تسجيل الدخول إلى Vercel..."
echo "⏳ راح يفتح المتصفح تلقائياً..."
vercel login
echo "✅ تم تسجيل الدخول"
echo ""

# الخطوة 4: بناء المشروع
echo "📋 الخطوة 4: بناء المشروع..."
npm install --prefer-offline
npx vite build
echo "✅ تم البناء بنجاح"
echo ""

# الخطوة 5: تنظيف الصور (WebP فقط)
echo "📋 الخطوة 5: تحسين الصور..."
if [ -d "dist/images" ]; then
  cd dist/images
  rm -f *.jpg *.png 2>/dev/null || true
  cd ../..
  echo "✅ تم حذف JPG/PNG الأصلية"
fi
echo "📦 حجم dist: $(du -sh dist/ | cut -f1)"
echo ""

# الخطوة 6: النشر
echo "📋 الخطوة 6: النشر على Vercel..."
echo "⏳ جاري النشر (قد يأخذ 1-2 دقيقة)..."
vercel --prod --yes

echo ""
echo "================================================"
echo "🎉 تم النشر بنجاح!"
echo "🌐 افتح موقعك على Vercel Dashboard:"
echo "   https://vercel.com/dashboard"
echo ""
