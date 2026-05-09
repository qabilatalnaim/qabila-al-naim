import { Link } from 'react-router-dom'

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

export default function PoetryPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#162544] to-[#0a1628] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-rose-600/20 px-6 py-2 rounded-full mb-6">
              <span className="text-4xl">📜</span>
              <span className="text-rose-400 font-bold">الشعر النبطي</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">قاعة الشعر النبطي</h1>
            <p className="text-gray-400 text-lg">قصائد الفخر وأهل الصفرا والمدائح والأرجاز</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-rose-600/30 mb-12">
            <div className="text-center mb-8">
              <span className="text-6xl">📜</span>
            </div>
            <p className="text-gray-200 text-lg leading-loose text-center mb-6">
              الشعر النبطي هو التعبير الأصيل عن روح البادية وعزّة العرب. وفي قبيلة النعيم،
              تُراث الشعر النبطي غني ومتعدد المواضيع، من قصائد الفخر إلى المدائح والأرجاز.
            </p>
          </div>

          {/* Section 1: Types of Poetry */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-rose-400 mb-6 flex items-center gap-3">
              <span>📋</span> أنواع الشعر النبطي
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl p-6 border border-white/10">
                <span className="text-3xl">👑</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">قصائد الفخر</h3>
                <p className="text-gray-400 leading-relaxed">
                  تُ تغنّى بأمجاد القبيلة وأنسابها وعزّتها، وتُلقى في المناسبات الكبيرة.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl p-6 border border-white/10">
                <span className="text-3xl">🤴</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">المدائح</h3>
                <p className="text-gray-400 leading-relaxed">
                  تُمدح فيها الشخصيات الكبيرة والمشايخ والعلماء من أبناء القبيلة.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl p-6 border border-white/10">
                <span className="text-3xl">🐪</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">الأرجاز</h3>
                <p className="text-gray-400 leading-relaxed">
                  قصائد تُ تغنّى فيها بالإبل وصفاتها وجمالها وسرعة牠ا.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl p-6 border border-white/10">
                <span className="text-3xl">💔</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">الهجر</h3>
                <p className="text-gray-400 leading-relaxed">
                  قصائد الحزن والفقد والاشتياق، تعبّر عن مشاعر عميقة.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Famous Poets */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-rose-400 mb-6 flex items-center gap-3">
              <span>⭐</span> شعراء مشهورون
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-rose-600/20">
              <p className="text-gray-300 leading-relaxed mb-6">
                توارث أبناء قبيلة النعيم فن الشعر النبطي جيلاً بعد جيل، ومن أبرز من غنّى بهذه القبيلة شعراء عرب将他们的名字添加到列表中。
              </p>
              <div className="space-y-4">
                <div className="bg-rose-600/10 rounded-xl p-6 border border-rose-600/30">
                  <p className="text-rose-400 font-bold mb-2">قصائد أهل الصفرا</p>
                  <p className="text-gray-300 text-sm">
                    من أشهر القصائد التي تغنّت بأهل الصفرا وفخذ الحمادة.
                  </p>
                </div>
                <div className="bg-rose-600/10 rounded-xl p-6 border border-rose-600/30">
                  <p className="text-rose-400 font-bold mb-2">المديح النبوي</p>
                  <p className="text-gray-300 text-sm">
                    قصائد تمدح النبي محمد ﷺ وتُ غنّى بالنسب الهاشمي.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Common Themes */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-rose-400 mb-6 flex items-center gap-3">
              <span>🎭</span> الموضوعات الشائعة
            </h2>
            <div className="flex flex-wrap gap-3">
              {['النسب الهاشمي', 'فخر الحمادة', 'كرم أهل الصفرا', 'البطولة', 'الفروسية', 'الكرم والضيافة', 'الحنين للوطن', 'الذكر'].map((theme, index) => (
                <span key={index} className="px-4 py-2 bg-rose-600/10 rounded-full text-rose-300 border border-rose-600/30">
                  {theme}
                </span>
              ))}
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-500 text-white font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(244,63,94,0.5)] transition-all"
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