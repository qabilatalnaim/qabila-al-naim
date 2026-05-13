import { Link } from 'react-router-dom'

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

export default function SheepPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#162544] to-[#0a1628] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-blue-600/20 px-6 py-2 rounded-full mb-6">
              <span className="text-4xl">🐑</span>
              <span className="text-blue-400 font-bold">الغنم</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">قاعة الغنم</h1>
            <p className="text-gray-400 text-lg">سلالة الغنم والعناية والرعي وأصالة السلالة</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-blue-600/30 mb-12">
            <div className="text-center mb-8">
              <span className="text-6xl">🐑</span>
            </div>
            <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">غنم قبيلة النعيم</h2>
            <div className="text-gray-200 text-lg leading-loose space-y-6">
              <p>
                تُعدّ الأغنام عند قبيلة النعيم جزءًا أصيلًا من الموروث البدوي والحياة الصحراوية التي ارتبطت بالصبر والقوة والكرم عبر الأجيال. فقد اشتهر أبناء القبيلة بتربية الأغنام والعناية بها منذ القدم، مستفيدين من خبرتهم العريقة في معرفة المراعي ومواسم الأمطار والتنقّل في البادية، مما جعل قطعانهم رمزًا للرزق والخير والاستقرار.
              </p>
              <p>
                وتتميّز غنم قبيلة النعيم بقوتها وقدرتها على التأقلم مع طبيعة البادية والمناخ القاسي، إضافةً إلى اهتمام المربين بالحفاظ على السلالات الأصيلة وجودة التربية والتغذية. كما ارتبطت الأغنام بعادات الكرم العربية الأصيلة، حيث كانت ولا تزال حاضرة في الولائم والمناسبات الاجتماعية والتراثية التي تعبّر عن أصالة القبيلة وتمسّكها بعادات الأجداد.
              </p>
              <p>
                ولا تقتصر مكانة الأغنام لدى أبناء النعيم على الجانب الاقتصادي فحسب، بل تمثل جزءًا من الهوية والتراث البدوي الذي توارثته الأجيال، لتبقى رمزًا للعزّة والوفرة وحياة البادية الأصيلة في مختلف مناطق انتشار القبيلة.
              </p>
            </div>
          </div>

          {/* Section 1: Types of Sheep */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
              <span>📋</span> أنواع الغنم العربية
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-blue-600/20">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">الأغنام النجدية</h3>
                  <p className="text-gray-400 leading-relaxed">
                    تتميز بلونها الأبيض أو البني، وتُعتبر من أندر السلالات وأجودها.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">الأغنام الشامية</h3>
                  <p className="text-gray-400 leading-relaxed">
                    تنتشر في بلاد الشام، وتتميز بلون الصوف الجميل وصغر حجمها.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">الأغنام العواس</h3>
                  <p className="text-gray-400 leading-relaxed">
                    من أشهر السلالات في الجزيرة العربية، تتميز بلونها الأحمر.
                </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">الأغنام النجدي</h3>
                  <p className="text-gray-400 leading-relaxed">
                    سُميت نسبة إلى نجد، وتُعتبر من أفضل السلالات للتربية والتكاثر.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Sheep Products */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
              <span>🥛</span> منتجات الغنم
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: '🥛', name: 'الحليب', desc: 'من أهم مصادر التغذية' },
                { icon: '🧈', name: 'الزبد', desc: 'يُصنع من حليب الغنم' },
                { icon: '🧀', name: 'الأجبان', desc: 'منتجات محلية أصيلة' },
                { icon: '🥩', name: 'اللحم', desc: 'غذاء أساسي للأهل' },
                { icon: '🧶', name: 'الصوف', desc: 'للكسوة والبطانيات' },
                { icon: '🐑', name: 'التسمين', desc: 'للبيع والتجارة' },
              ].map((product, index) => (
                <div key={index} className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-xl p-6 text-center border border-white/10">
                  <span className="text-4xl">{product.icon}</span>
                  <h3 className="text-lg font-bold text-white mt-4 mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm">{product.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Shepherd Life */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
              <span>🏕️</span> حياة الراعي
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-blue-600/20">
              <p className="text-gray-300 leading-loose mb-6">
                حياة الراعي في البادية لها طقوسها وأمجادها، حيث يخرج يومياً مع قطيعه للبحث عن الكلأ والماء.
                وهذه الحياة تُعتبر مصدر فخر واعتزاز.
              </p>
              <div className="space-y-4">
                <div className="bg-blue-600/10 rounded-xl p-6 border border-blue-600/30">
                  <h3 className="text-lg font-bold text-blue-400 mb-2">الكلأ والماء</h3>
                  <p className="text-gray-400 text-sm">البحث عن المراعي الخصبة والمياه النظيفة</p>
                </div>
                <div className="bg-blue-600/10 rounded-xl p-6 border border-blue-600/30">
                  <h3 className="text-lg font-bold text-blue-400 mb-2">الحماية</h3>
                  <p className="text-gray-400 text-sm">حماية القطيع من الحيوانات المفترسة</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all"
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