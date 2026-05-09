import { Link } from 'react-router-dom'

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

export default function CoffeePage() {
  return (
    <div className="min-h-screen bg-[#0a1628] pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#162544] to-[#0a1628] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-orange-600/20 px-6 py-2 rounded-full mb-6">
              <span className="text-4xl">☕</span>
              <span className="text-orange-400 font-bold">القهوة العربية</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">الفناجين الخمسة عند العرب</h1>
            <p className="text-gray-400 text-lg">من رموز الكرم والأصالة في البادية</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-orange-600/30 mb-12">
            <div className="text-center mb-8">
              <span className="text-6xl">☕</span>
            </div>
            <p className="text-gray-200 text-lg leading-loose text-center mb-6">
              تُعد القهوة العربية من أهم العادات والتقاليد الأصيلة عند العرب، خصوصًا في مجالس البادية والقبائل،
              حيث تحمل كل فنجان دلالة ومعنى يعكس الكرم والشهامة والأمان.
            </p>
            <p className="text-gray-300 text-lg leading-loose text-center mb-6">
              📜 تُقدَّم القهوة بخمسة فناجين، ولكل فنجان دلالة خاصة:
            </p>
            <div className="bg-orange-600/10 rounded-2xl p-6 border border-orange-600/30 text-center">
              <p className="text-orange-400 font-bold text-xl">"فنجالها يشرّف"</p>
              <p className="text-gray-400 text-sm mt-2">من أمثال العرب عن القهوة</p>
            </div>
          </div>

          {/* Section 1: فنجان الهيف */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
              <span>☕</span> فنجان الهيف
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-orange-600/20">
              <p className="text-gray-300 leading-relaxed mb-4">
                يشربه المعزّب أولًا لإثبات سلامة القهوة، ويرمز إلى الأمان والثقة.
              </p>
              <div className="bg-orange-600/10 rounded-xl p-6 border border-orange-600/30">
                <p className="text-orange-400 font-semibold text-center text-lg">
                  رمز الأمان والثقة
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: فنجان الضيف */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
              <span>☕</span> فنجان الضيف
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-orange-600/20">
              <p className="text-gray-300 leading-relaxed mb-4">
                فنجان الكرامة والترحيب، أول فنجان يُقدَّم للضيف، وهو رمز الكرم وحسن الضيافة.
              </p>
              <div className="bg-orange-600/10 rounded-xl p-6 border border-orange-600/30">
                <p className="text-orange-400 font-semibold text-center text-lg">
                  رمز الكرم وحسن الضيافة
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: فنجان الكيف */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
              <span>☕</span> فنجان الكيف
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-orange-600/20">
              <p className="text-gray-300 leading-relaxed mb-4">
                فنجان الأنس والمودة، يُشرب للاستمتاع بمذاق القهوة والأنس بالمجلس.
              </p>
              <div className="bg-orange-600/10 rounded-xl p-6 border border-orange-600/30">
                <p className="text-orange-400 font-semibold text-center text-lg">
                  رمز الأنس والمودة
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: فنجان السيف */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
              <span>☕</span> فنجان السيف
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-orange-600/20">
              <p className="text-gray-300 leading-relaxed mb-4">
                فنجان النخوة والعهد، يرمز إلى الفزعة والنخوة والوقوف مع صاحب البيت عند الشدائد.
              </p>
              <div className="bg-orange-600/10 rounded-xl p-6 border border-orange-600/30">
                <p className="text-orange-400 font-semibold text-center text-lg">
                  رمز النخوة والشجاعة والوفاء
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: فنجان الهجال (الفارس) */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
              <span>☕</span> فنجان الهجال (الفارس)
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-orange-600/20">
              <p className="text-gray-300 leading-relaxed mb-4">
                فنجان الموقف والخصومة والثأر، يرمز إلى الفروسية والشجاعة وتحمل المسؤولية والدفاع عن الديار.
              </p>
              <div className="bg-orange-600/10 rounded-xl p-6 border border-orange-600/30">
                <p className="text-orange-400 font-semibold text-center text-lg">
                  رمز الفروسية والدفاع عن الديار
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-[#162544] to-[#0a1628] rounded-3xl p-10 border border-[#D4AF37]/30 text-center">
            <span className="text-4xl">🏜️</span>
            <p className="text-gray-300 text-lg leading-loose mt-4">
              هذه العادات ما زالت حاضرة في الشعر البدوي والمجالس التراثية حتى اليوم،
              وتُعد من أبرز رموز الكرم العربي الأصيل.
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all"
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