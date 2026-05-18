import { Link } from 'react-router-dom'

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
)

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
  </svg>
)

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const CoffeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
    <line x1="6" y1="2" x2="6" y2="4"/>
    <line x1="10" y1="2" x2="10" y2="4"/>
    <line x1="14" y1="2" x2="14" y2="4"/>
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
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">عادات وتقاليد قبيلة النعيم</h1>
            <p className="text-gray-400 text-lg">إرث ثقافي عريق يمتد عبر الأجيال</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header Banner */}
          <div className="bg-gradient-to-l from-cyan-700 to-cyan-600 rounded-3xl p-8 mb-12 shadow-2xl">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                <span className="text-5xl">🏕️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">التراث البدوي الأصيل</h3>
                <p className="text-cyan-200">من أعرق Traditions في الجزيرة العربية وبلاد الشام</p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-cyan-600/30 mb-12">
            <p className="text-gray-200 text-lg leading-loose mb-6">
              تُعرف قبيلة النعيم بتاريخها العريق وتراثها البدوي الأصيل الممتد عبر الجزيرة العربية وبلاد الشام، حيث حافظ أبناء القبيلة على منظومةٍ متجذّرة من العادات والتقاليد العربية التي شكّلت هويتهم الاجتماعية والثقافية عبر الأجيال.
            </p>
            <p className="text-gray-200 text-lg leading-loose">
              وقد ارتبط اسم النعيم بقيم <span className="text-cyan-400 font-bold">الكرم</span> و<span className="text-cyan-400 font-bold">الشهامة</span> و<span className="text-cyan-400 font-bold">النخوة العربية</span>، إلى جانب التمسّك بروابط العائلة والتكافل الاجتماعي واحترام الضيف والجار.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Councils and Diwans */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-[#162544] rounded-2xl p-8 border border-cyan-600/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                  <UsersIcon />
                </div>
                <h4 className="text-xl font-bold text-white">المجالس والدواوين</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                تحتل المجالس والدواوين مكانةً بارزة في حياة أبناء القبيلة، إذ تُعدّ ملتقىً للتشاور وحلّ الخلافات وتعزيز أواصر المحبة والتعاون بين أفراد المجتمع القبلي.
              </p>
            </div>

            {/* Social Events */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-[#162544] rounded-2xl p-8 border border-cyan-600/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                  <StarIcon />
                </div>
                <h4 className="text-xl font-bold text-white">المناسبات الاجتماعية</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                تتميّز مناسباتهم الاجتماعية — من الأعراس والصلحات والولائم — بطابعٍ تراثي يعكس روح الأصالة والاحترام المتبادل.
              </p>
            </div>
          </div>

          {/* Heritage Elements */}
          <div className="bg-gradient-to-l from-[#0a1628] to-[#162544] rounded-3xl p-10 mb-12 border border-cyan-600/20">
            <h4 className="text-xl font-bold text-cyan-400 mb-8 flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <span>الموروث البدوي</span>
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <span className="text-5xl block mb-3">📜</span>
                <span className="font-semibold text-white">الشعر النبطي</span>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <span className="text-5xl block mb-3">🎵</span>
                <span className="font-semibold text-white">الأهازيج الشعبية</span>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <span className="text-5xl block mb-3">🏇</span>
                <span className="font-semibold text-white">الفروسية</span>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <span className="text-5xl block mb-3">🐪</span>
                <span className="font-semibold text-white">تربية الإبل</span>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-gradient-to-br from-cyan-700 to-cyan-600 rounded-3xl p-10 mb-12 shadow-2xl">
            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-2xl">⚔️</span>
              <span>النخوة العربية والقيم المتوارثة</span>
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HeartIcon />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2">الوفاء والصدق</h5>
                  <p className="text-cyan-200 text-sm">من أبرز الصفات التي رسّخت مكانة القبيلة</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShieldIcon />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2">إغاثة الملهوف</h5>
                  <p className="text-cyan-200 text-sm">قيمة أصيلة في تراث النعيم</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CoffeeIcon />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2">إكرام الضيف</h5>
                  <p className="text-cyan-200 text-sm">رمز الكرم العربي الأصيل</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <UsersIcon />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2">صلة الرحم</h5>
                  <p className="text-cyan-200 text-sm">احترام كبار السن والترابط الأسري</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Paragraph */}
          <div className="bg-gradient-to-r from-cyan-900/30 to-cyan-800/30 rounded-3xl p-10 border border-cyan-600/30 mb-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-3xl">🌟</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">الإرث الحي</h4>
                <p className="text-gray-200 text-lg leading-relaxed">
                  ولا تزال قبيلة النعيم تحافظ على إرثها الثقافي والاجتماعي العريق، <span className="text-cyan-400 font-bold">جامعـةً بين أصالة الماضي وحضور الحاضر</span>، لتبقى العادات والتقاليد جزءًا أساسيًا من هوية القبيلة وامتدادًا حيًّا لقيم البادية العربية الأصيلة.
                </p>
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