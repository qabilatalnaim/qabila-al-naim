import { Link } from 'react-router-dom'

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7"/><path d="M19 12"/>
  </svg>
)

export default function CamelsPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#162544] to-[#0a1628] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-amber-600/20 px-6 py-2 rounded-full mb-6">
              <span className="text-4xl">🐪</span>
              <span className="text-amber-400 font-bold">الإبل</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">قاعة الإبل</h1>
            <p className="text-gray-400 text-lg">تربية الإبل وسلالاتها وفن الرعي في البادية</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-amber-600/30 mb-12">
            <div className="text-center mb-8">
              <span className="text-6xl">🐪</span>
            </div>
            <p className="text-gray-200 text-lg leading-loose text-center mb-6">
              تُعدّ الإبل رمزاً أساسياً من رموز البادية العربية، وكانت على مر العصور عنواناً للكرم والفخر والعزّة.
              وفي قبيلة السادة النعيم، تحتل تربية الإبل مكانة خاصة، حيث عُرفت بأصالة سلالاتها وجمال منظرها.
            </p>
            <div className="bg-amber-600/10 rounded-2xl p-6 border border-amber-600/30 text-center">
              <p className="text-amber-400 font-bold text-xl">"روسٍ تعرف المجد"</p>
              <p className="text-gray-400 text-sm mt-2">من أمثال البادية العربية</p>
            </div>
          </div>

          {/* Section 1: Types of Camels */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
              <span>📋</span> أنواع الإبل العربية
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">🐪 الجِمال العادية</h3>
                <p className="text-gray-400 leading-relaxed">
                  وتُعرف أيضاً بالحُمر، وهي الأكثر انتشاراً في البادية. تتميز بتحمّل المشاق وصبرها على العطش والجوع.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">🦌 العراب</h3>
                <p className="text-gray-400 leading-relaxed">
                  وهي إبل تُركب للمهمات الرسمية والمسافات البعيدة، تتميز بسرعة الجري وجمال المنظر ورشاقة الحركة.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">🐫 المهاري</h3>
                <p className="text-gray-400 leading-relaxed">
                  تُستخدم في السباقات والمعارض، وتتميز بجسمها الرياضي وسرعتها الفائقة.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">🌴 النخيل (الصفراء)</h3>
                <p className="text-gray-400 leading-relaxed">
                  سُميت بالصفراء نسبة إلى لونها، وكانت مفضلة لدى قبيلة النعيم، واشتهرت بها منطقة الصفرا.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Camel Culture */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
              <span>🎓</span> ثقافة الإبل في القبيلة
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-amber-600/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🏇</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">المهرجانات والسباقات</h3>
                    <p className="text-gray-400 leading-relaxed">
                      تُقام سنوياً سباقات الهجن في العديد من المناسبات، وتُشكّل مصدر فخر لأصحاب الإبل الفائزة.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🥛</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">منتجات الإبل</h3>
                    <p className="text-gray-400 leading-relaxed">
                      الحليب واللحوم والوبر كلها تُعتبر من المنتجات القيّمة المستخدمة في حياتهم اليومية.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">الحماية والتنقل</h3>
                    <p className="text-gray-400 leading-relaxed">
                      كانت الإبل وسيلة النقل الأساسية في البادية، وكان اركوبها وسيلة للتنقل والترحال والبحث عن الماء والكلأ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Famous Camels */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
              <span>⭐</span> إبل مشهورة في التاريخ
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-amber-600/20">
              <div className="space-y-4">
                <div className="bg-amber-600/10 rounded-xl p-6 border border-amber-600/30">
                  <p className="text-amber-400 font-bold mb-2">قصة دخول الإبل إلى العرب</p>
                  <p className="text-gray-300">
                    تُروى قصص عديدة عن دخول الإبل إلى شبه الجزيرة العربية، وتعود في أصلها إلى رحلات التجارة من الهند والمناطق الشرقية.
                  </p>
                </div>
                <div className="bg-amber-600/10 rounded-xl p-6 border border-amber-600/30">
                  <p className="text-amber-400 font-bold mb-2">الإبل في الشعر النبطي</p>
                  <p className="text-gray-300">
                    تغنّى الشعراء بالإبل في قصائدهم، وجعلوها رمزاً للكرم والشجاعة والاصالة.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(245,158,76,0.5)] transition-all"
            >
              <ArrowRightIcon />
              <span>العودة للرئيسية</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}