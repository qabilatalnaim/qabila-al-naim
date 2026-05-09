import { Link } from 'react-router-dom'

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

export default function TraditionsPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#162544] to-[#0a1628] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-cyan-600/20 px-6 py-2 rounded-full mb-6">
              <span className="text-4xl">🏕️</span>
              <span className="text-cyan-400 font-bold">العادات والتقاليد</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">قاعة العادات والتقاليد</h1>
            <p className="text-gray-400 text-lg">الكرم والضيافة والمجالس والأمجاد</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-cyan-600/30 mb-12">
            <div className="text-center mb-8">
              <span className="text-6xl">🏕️</span>
            </div>
            <p className="text-gray-200 text-lg leading-loose text-center mb-6">
              العادات والتقاليد هي الروح التي تحيا بها القبائل العربية. وقد حافظت قبيلة النعيم
              على هذه العادات جيلاً بعد جيل، ونقلتها من جدة إلى الحفيد.
            </p>
          </div>

          {/* Section 1: Hospitality */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <span>🤝</span> الضيافة والكرم
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-cyan-600/20">
              <div className="space-y-6">
                <div className="bg-cyan-600/10 rounded-xl p-6 border border-cyan-600/30">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">بيوت الشعر</h3>
                  <p className="text-gray-300 leading-relaxed">
                    بيوت الشعر هي مجالس الضيافة حيث يجتمع أبناء القبيلة لاستقبال الضيوف
                    وتبادل الأحاديث والقهوة والطعام.
                  </p>
                </div>
                <div className="bg-cyan-600/10 rounded-xl p-6 border border-cyan-600/30">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">الحق في الطعام</h3>
                  <p className="text-gray-300 leading-relaxed">
                    من آداب الضيافة أن يُقدّم الطعام للضيف قبل أهل البيت،
                    ولا يُسمح للضيوف بالمغادرة إلا بعد أن يأكلوا ويشربوا.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Majlis (Council) */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <span>👥</span> المجالس
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl p-6 border border-white/10">
                <span className="text-3xl">📜</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">مجلس الشورى</h3>
                <p className="text-gray-400 leading-relaxed">
                  يجتمع فيه وجهاء القبيلة لمناقشة الشؤون المهمة واتخاذ القرارات.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl p-6 border border-white/10">
                <span className="text-3xl">🎉</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">مجلس الفرح</h3>
                <p className="text-gray-400 leading-relaxed">
                  يُقام في المناسبات السارة كالأعراس والمولدات والختان.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl p-6 border border-white/10">
                <span className="text-3xl">☕</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">مجلس القهوة</h3>
                <p className="text-gray-400 leading-relaxed">
                  يجتمع فيه الرجال يومياً لتبادل الأخبار والأحاديث.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl p-6 border border-white/10">
                <span className="text-3xl">⚔️</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">مجلس الأمجاد</h3>
                <p className="text-gray-400 leading-relaxed">
                  يُذكر فيه أمجاد الأجداد ويتغنى بالشعر والفخر.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Important Traditions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <span>⭐</span> تقاليد مهمة
            </h2>
            <div className="flex flex-wrap gap-3">
              {['النخوة', 'العرضة', 'البارود', 'الشlacht', 'المبارزة', 'السواي', 'النيران'].map((tradition, index) => (
                <span key={index} className="px-4 py-2 bg-cyan-600/10 rounded-full text-cyan-300 border border-cyan-600/30">
                  {tradition}
                </span>
              ))}
            </div>
          </div>

          {/* Section 4: Values */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <span>💎</span> القيم الأساسية
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-cyan-600/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: '🤝', name: 'الكرم' },
                  { icon: '🛡️', name: 'الشجاعة' },
                  { icon: '💪', name: 'العزّة' },
                  { icon: '🏠', name: 'العزوة' },
                  { icon: '👨‍👩‍👧‍👦', name: 'العصببية' },
                  { icon: '🎯', name: 'الوفاء' },
                  { icon: '🙏', name: 'الصلابة' },
                  { icon: '🌟', name: 'الشرف' },
                ].map((value, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                    <span className="text-2xl">{value.icon}</span>
                    <p className="text-cyan-400 font-bold mt-2">{value.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
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