import { Link } from 'react-router-dom'

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

export default function HorsesPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#162544] to-[#0a1628] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-emerald-600/20 px-6 py-2 rounded-full mb-6">
              <span className="text-4xl">🐎</span>
              <span className="text-emerald-400 font-bold">الخيل</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">قاعة الخيل</h1>
            <p className="text-gray-400 text-lg">الفروسية العربية وسلالات الخيل وفنون الرماية</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-emerald-600/30 mb-12">
            <div className="text-center mb-8">
              <span className="text-6xl">🐎</span>
            </div>
            <p className="text-gray-200 text-lg leading-loose text-center mb-6">
              لطالما كانت الخيل عنواناً للفخر والمجد، ورمزاً للتراث العربي الأصيل. وقد أولى العرب خيولهم اهتماماً بالغاً، فصانوها ونقلوها جيلاً بعد جيل نقية الدماء، محفوظة النسب.
            </p>
            <div className="bg-emerald-600/10 rounded-2xl p-6 border border-emerald-600/30 text-center">
              <p className="text-emerald-400 font-bold text-xl">"الخيل معقود في نواصيها"</p>
              <p className="text-gray-400 text-sm mt-2">حديث شريف</p>
            </div>
          </div>

          {/* Section 1: The Five Original Lineages (Arsan) */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
              <span>📋</span> الأرسان الخمسة للخيول العربية
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-emerald-600/20">
              <p className="text-gray-300 mb-6 leading-relaxed">
                الرَّسَن في عرف العرب هو الأصل أو العائلة التي تنتمي إليها الفرس، وقد اشتهرت الخيول العربية الأصيلة بخمسة أرسان أساسية من جهة الأم.
              </p>
              <div className="space-y-4">
                {[
                  { name: 'الصقلاوية', desc: 'سميت لصقالة (نعومة ولمعان) شعرها' },
                  { name: 'الهدبان', desc: 'معروف ببنيته القوية العضلية والعظمية' },
                  { name: 'الدهمان', desc: 'يتماز بتناسق جسمه وقوة حوافره واتساع رأسه' },
                  { name: 'العبية', desc: 'سميت كذلك لأن عباءة صاحبها علقت بذيلها أثناء السباق فأبقتاها مرفوعة' },
                  { name: 'الكحيلة', desc: 'لكون الكحل بادياً في عينيها بطبيعتها' },
                ].map((arsan, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-emerald-400 mb-2">{index + 1}. {arsan.name}</h3>
                    <p className="text-gray-400">{arsan.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Horse Types */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
              <span>🏆</span> أجناس الخيل العربية
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: 'الحجازي', desc: 'أشرفها' },
                { name: 'النجدي', desc: 'أيمنها' },
                { name: 'اليماني', desc: 'أصبرها' },
                { name: 'الشامي', desc: 'ألونها' },
                { name: 'الجزيري', desc: 'أحسنها' },
                { name: 'البرقي', desc: 'أخشنها' },
                { name: 'المصري', desc: 'أفرهها' },
                { name: 'الخفاجي', desc: 'أوصلها' },
              ].map((type, index) => (
                <div key={index} className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold">{index + 1}.</span>
                    <span className="text-white font-semibold">{type.name}</span>
                    <span className="text-gray-400 text-sm">– {type.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Horsemanship */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
              <span>⚔️</span> فنون الفروسية
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl p-6 border border-white/10">
                <span className="text-3xl">🏹</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">الرماية على ظهر الفرس</h3>
                <p className="text-gray-400 leading-relaxed">
                  كانت الرماية من أهم فنون الفروسية، حيث يُطلق الرامي السهم وهو على ظهر الفرس بدقة متناهية.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl p-6 border border-white/10">
                <span className="text-3xl">🦅</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">الصقارة</h3>
                <p className="text-gray-400 leading-relaxed">
                  فن تربية الصقور وتدريبها على الصيد، وكان الفرسان يخرجون بالصقور في مهامهم.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all"
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