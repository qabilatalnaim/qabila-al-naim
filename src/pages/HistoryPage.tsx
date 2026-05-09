import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7"/>
    <path d="M19 12H5"/>
  </svg>
)

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
  </svg>
)

const CrownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>
  </svg>
)

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const TreeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-6"/>
    <path d="M12 16V8"/>
    <path d="M6 12H2"/>
    <path d="M22 12h-4"/>
    <circle cx="12" cy="5" r="3"/>
    <path d="M6 5h6"/>
    <path d="M12 8v8"/>
    <path d="M12 8l4-3"/>
    <path d="M12 8L8 5"/>
  </svg>
)

const WarningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>
    <path d="M12 9v4"/>
    <path d="M12 17h.01"/>
  </svg>
)

const SwordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/>
    <line x1="13" x2="19" y1="19" y2="13"/>
    <line x1="16" x2="20" y1="16" y2="20"/>
    <line x1="19" x2="21" y1="21" y2="19"/>
  </svg>
)

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const QuestionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <path d="M12 17h.01"/>
  </svg>
)

const MaleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="14" r="5"/>
    <path d="m19 5-7 7"/>
    <path d="m13 5 6 6"/>
  </svg>
)

const BabyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12h.01"/>
    <path d="M15 12h.01"/>
    <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/>
    <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>
  </svg>
)

function HistoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#162544] to-[#0a1628] py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors mb-8"
          >
            <ArrowLeftIcon />
            <span>العودة للرئيسية</span>
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-[#D4AF37]/10 px-6 py-2 rounded-full mb-6">
              <span className="text-3xl"><BookIcon /></span>
              <span className="text-[#D4AF37] font-bold tracking-wider">نسب قبيلة السادة النعيم</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              نسب <span className="text-[#D4AF37]">قبيلة السادة النعيم</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              أصل النسب وتاريخ السلالة الرفاعية الموسوية الحسينية
            </p>
          </div>
        </div>
      </div>

      {/* Content - Part 1: نسب قبيلة السادة النعيم */}
      <div className="container mx-auto px-4 py-16">

        {/* Part 1 Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-transparent rounded-2xl p-6 border border-[#D4AF37]/30">
            <div className="flex items-center gap-3">
              <span className="text-4xl"><HomeIcon /></span>
              <div>
                <h2 className="text-2xl font-bold text-[#D4AF37]">نسب قبيلة السادة النعيم</h2>
                <p className="text-gray-400">أصل النسب وتاريخ السلالة الرفاعية</p>
              </div>
            </div>
          </div>
        </div>

        {/* Silsilat Al-Nasb Image */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-6 border border-[#D4AF37]/30 overflow-hidden">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📜</span>
                  <h3 className="text-xl font-bold text-[#D4AF37]">شجرة النسب</h3>
                </div>
                <p className="text-[#D4AF37] font-bold text-2xl mb-4">سلسلة النسب الهاشمي</p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  نسب قبيلة السادة النعيم العريقة، المتجذرة في التاريخ العربي، تنتسب إلى السلالة الرفاعية الموسوية الحسينية.
                </p>
                <div className="bg-[#D4AF37]/10 rounded-xl p-4 border border-[#D4AF37]/20">
                  <p className="text-white font-semibold">الرفاعية ← الموسوية ← الحسينية</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30">
                  <img
                    src="/images/silsilat-al-nasb.jpg"
                    alt="شجرة نسب قبيلة السادة النعيم - سلسلة النسب الهاشمي الرفاعي الموسوي الحسيني"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">

          {/* Section 1: Origin */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <TreeIcon />
              </div>
              <h2 className="text-3xl font-bold text-white">أصل النسب</h2>
            </div>
            <div className="text-gray-300 text-lg leading-loose space-y-6">
              <p>
                ترجع قبيلة السادة النعيم إلى <span className="text-[#D4AF37] font-bold">السادة آل الرفاعي</span>، فهي قبيلة رفاعية موسوية حسينية.
              </p>
            </div>
          </div>

          {/* Section 2: Who are Al-Rifai */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <QuestionIcon />
              </div>
              <h2 className="text-3xl font-bold text-white">من هم آل الرفاعي؟</h2>
            </div>
            <div className="text-gray-300 text-lg leading-loose space-y-4">
              <p>يرجع الرفاعيون إلى رفاعة، واسمه:</p>
              <div className="bg-[#D4AF37]/10 rounded-2xl p-6 border border-[#D4AF37]/20">
                <div className="space-y-2">
                  {[
                    'الحسن المكي',
                    'بن محمد المهدي',
                    'بن حسن القاسم',
                    'بن حسين',
                    'بن أحمد الأكبر',
                    'بن موسى الأصغر',
                    'بن إبراهيم المرتضى',
                    'بن موسى الكاظم',
                    'بن جعفر الصادق',
                    'بن محمد الباقر',
                    'بن علي زين العابدين',
                    'بن الحسين السبط الشهيد',
                    'بن علي بن أبي طالب',
                    'بن عبدالمطلب',
                    'بن هاشم القرشي'
                  ].map((name, index) => (
                    <p key={index} className="text-white font-medium">
                      <span className="text-[#D4AF37] ml-2">←</span>
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Lineage after Rifaa */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <CrownIcon />
              </div>
              <h2 className="text-3xl font-bold text-white">تسلسل النسب بعد رفاعة</h2>
            </div>
            <div className="text-gray-300 text-lg leading-loose space-y-6">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
                <p className="text-[#D4AF37] font-bold text-xl">
                  الحسن المكي (رفاعة) ← علي المكي ← أحمد المرتضى ← حازم الرفاعي
                </p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-[#D4AF37] font-bold text-xl mb-4">حازم الرفاعي أعقب:</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-300">
                  <li><span className="text-white font-semibold">١. عبد الله المدني</span></li>
                  <li><span className="text-white font-semibold">٢. محمد عسلة</span></li>
                  <li><span className="text-white font-semibold">٣. ثابت الرفاعي</span></li>
                </ol>
              </div>
            </div>
          </div>

          {/* Section 4: From Thabet */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <BookIcon />
              </div>
              <h2 className="text-3xl font-bold text-white">من ثابت الرفاعي</h2>
            </div>
            <div className="text-gray-300 text-lg leading-loose space-y-6">
              <p>
                من ثابت الرفاعي جاء <span className="text-[#D4AF37] font-bold">السيد يحيى الرفاعي</span>، نقيب الأشراف بالبصرة، وأول من سكن العراق من الرفاعيين.
              </p>
              <div className="bg-[#D4AF37]/10 rounded-2xl p-6 border border-[#D4AF37]/20">
                <h3 className="text-[#D4AF37] font-bold text-xl mb-4">ترجمته في كتاب الأعلام للزركلي:</h3>
                <p className="text-gray-300 leading-loose">
                  "يحيى بن ثابت (توفي ٤٦٠ هـ/ ١٠٦٨ م) الحسيني المكي، نقيب أشراف الطالبيين بالبصرة وواسط والبطائح وما يليها. وهو جد الإمام أحمد الرفاعي. كان من الزهاد ومن ذوي الرأي والحصافة. ولد ونشأ بالمغرب، ودخل البصرة سنة ٤٥٠هـ، فأخمد الفتنة بين السنة والشيعة. وولاه الخليفة القائم بالله العباسي نقابة الأشراف سنة ٤٥٠ هـ. وتوفي بالبصرة."
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: From Yahiya Al-Naqib */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <CrownIcon />
              </div>
              <h2 className="text-3xl font-bold text-white">من يحيى النقيب</h2>
            </div>
            <div className="text-gray-300 text-lg leading-loose space-y-6">
              <p>
                من يحيى النقيب جاء <span className="text-[#D4AF37] font-bold">أبي الحسن علي الرفاعي</span>، الذي أعقب:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li><span className="text-white font-semibold">١. سيف الدين عثمان</span></li>
                <li><span className="text-white font-semibold">٢. إسماعيل الصالح</span></li>
                <li><span className="text-[#D4AF37] font-bold">٣. أحمد الرفاعي الكبير</span> (أشهرهم)</li>
              </ol>
              <div className="bg-[#D4AF37]/10 rounded-2xl p-6 border border-[#D4AF37]/20 mt-6">
                <h3 className="text-[#D4AF37] font-bold text-xl mb-4">ترجمته كما ذكرها الإمام الذهبي في سير أعلام النبلاء:</h3>
                <p className="text-white leading-loose">
                  "الإمام، القدوة، العابد، الزاهد، شيخ العارفين، أبو العباس أحمد بن أبي الحسن علي بن يحيى بن ثابت بن حازم بن علي بن رفاعة الرفاعي المغربي ثم البطائحي..."
                </p>
              </div>
              <div className="bg-green-900/20 rounded-2xl p-6 border border-green-500/30">
                <p className="text-green-400 font-semibold">
                  أحمد الرفاعي لم يُعقِب إلا ابنتين: فاطمة وزينب.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: From Ismail Al-Saleh */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <UsersIcon />
              </div>
              <h2 className="text-3xl font-bold text-white">من إسماعيل الصالح</h2>
            </div>
            <div className="text-gray-300 text-lg leading-loose space-y-6">
              <p>
                جاء السيد أحمد الرفاعي الصغير، الذي أعقب السيد نعيم، وهو أبو جدنا <span className="text-white font-semibold">أحمد عزالدين أبو حمرة</span>، دفين قرية الناهضة (عزالدين حالياً).
              </p>
            </div>
          </div>

          {/* Section 7: Important Notice */}
          <div className="bg-gradient-to-br from-red-900/20 to-[#0a1628] rounded-3xl p-8 md:p-12 border border-red-500/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center text-red-400">
                <WarningIcon />
              </div>
              <h2 className="text-3xl font-bold text-red-400">تنويه مهم</h2>
            </div>
            <div className="text-gray-300 text-lg leading-loose space-y-6">
              <p className="text-white font-semibold">
                هناك ثلاثة أشخاص رفاعيين باسم عزالدين لابد من التمييز بينهم:
              </p>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-[#D4AF37] font-bold text-xl mb-3">١. عزالدين أبو حمرة الأول</h3>
                  <p className="text-gray-300">
                    عزالدين أبو حمرة بن السيد أحمد إسماعيل عم جدنا أحمد بن نعيم.
                  </p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-[#D4AF37] font-bold text-xl mb-3">٢. عزالدين أبو حمرة الثاني - جدنا المباشر</h3>
                  <p className="text-gray-300">
                    عزالدين أبو حمرة أحمد بن نعيم جدنا المباشر، والذي أعقب ثمانية أولاد (سنذكرهم في منشور قادم).
                  </p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-[#D4AF37] font-bold text-xl mb-3">٣. عزالدين أحمد الصياد الرفاعي</h3>
                  <p className="text-gray-300">
                    دفين قرية متكين، وهو من نسل السيد محمد عسلة الرفاعي.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-4xl mx-auto my-16">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-gradient-to-r from-transparent to-[#D4AF37]/50 flex-1"></div>
            <span className="text-[#D4AF37] text-2xl">◆</span>
            <div className="h-px bg-gradient-to-l from-transparent to-[#D4AF37]/50 flex-1"></div>
          </div>
        </div>

        {/* Part 2 Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-transparent rounded-2xl p-6 border border-[#D4AF37]/30">
            <div className="flex items-center gap-3">
              <span className="text-4xl"><CrownIcon /></span>
              <div>
                <h2 className="text-2xl font-bold text-[#D4AF37]">نسب الجد المؤسس</h2>
                <p className="text-gray-400">السيد أحمد عزالدين أبو حمرة - تاريخه وإنجازاته</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">

          {/* Section 8: The Founding Ancestor */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                    <CrownIcon />
                  </div>
                  <h2 className="text-3xl font-bold text-white">نسب الجد المؤسس</h2>
                </div>
                <div className="text-gray-300 text-lg leading-loose space-y-6">
                  <p>
                    ذكرنا في المنشور السابق أن هناك ثلاثة أشخاص من السادة الرفاعية يحملون اسم عز الدين، أما جد قبيلة النعيم الذي تُنسب إليه القبيلة، والمقصود عندما يقول أي فرد في القبيلة <span className="text-[#D4AF37]">"جدي عز الدين"</span>، فهو:
                  </p>
                  <div className="bg-[#D4AF37]/10 rounded-2xl p-6 border border-[#D4AF37]/20">
                    <p className="text-white font-semibold text-xl leading-loose">
                      السيد أحمد بن نعيم بن أحمد الرفاعي الصغير بن إسماعيل الصالح بن أبي الحسن علي الرفاعي بن يحيى النقيب بن ثابت...
                    </p>
                    <p className="text-gray-400 mt-4 text-center">
                      إلى باقي النسب الشريف المعروف
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30">
                  <img
                    src="/images/nasb-al-jadd-al-moassese.jpg"
                    alt="نسب الجد المؤسس - السيد أحمد عزالدين أبو حمرة"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 9: Birth and Upbringing */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                    <BabyIcon />
                  </div>
                  <h2 className="text-3xl font-bold text-white">المولد والنشأة</h2>
                </div>
                <div className="text-gray-300 text-lg leading-loose space-y-6">
                  <p>
                    وُلد عز الدين أبو حمرة بن نعيم في <span className="text-white font-semibold">العراق</span>، في قرية أم عبيدة (المعروفة اليوم بـ <span className="text-[#D4AF37]">سيدي أحمد الرفاعي</span>) سنة <span className="text-[#D4AF37] font-bold">٦٠٧هـ</span>.
                  </p>
                  <p>
                    تلقى العلم عن والده، وكانت والدته <span className="text-[#D4AF37] font-semibold">السيدة سعيدة بنت السيد سيف الدين عثمان الرفاعي</span>.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30">
                  <img
                    src="/images/mawlid-wa-nashaa.jpg"
                    alt="المولد والنشأة - عز الدين أبو حمرة"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 10: Migration and Jihad */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <SwordIcon />
              </div>
              <h2 className="text-3xl font-bold text-white">الهجرة والجهاد</h2>
            </div>
            <div className="text-gray-300 text-lg leading-loose space-y-6">
              <p>
                عندما بلغ الأربعين من عمره، هاجر مع أبنائه إلى <span className="text-white font-semibold">بلاد الشام (حمص وحماة)</span> بعد اجتياح التتار لبغداد سنة <span className="text-[#D4AF37]">٦٥٦هـ</span>.
              </p>
              <div className="bg-red-900/20 rounded-2xl p-6 border border-red-500/30">
                <p className="text-red-400 font-semibold">
                  وما رافق ذلك من تدمير المدن وقتل الخليفة وإسقاط الخلافة العباسية.
                </p>
              </div>
              <p>
                بعد هذه الكارثة، دعا الشيخ المسلمين إلى قتال التتار، وجمع أبناءه وأقاربه وأخوال والده من بني النجار وعمومته الحسينيين، وسار على رأس لواء إلى معركة <span className="text-[#D4AF37] font-bold">عين جالوت</span> (شمال فلسطين).
              </p>
              <div className="bg-[#D4AF37]/10 rounded-2xl p-6 border border-[#D4AF37]/20">
                <p className="text-[#D4AF37] font-bold text-xl text-center mb-2">
                  يوم الجمعة ٢٥ رمضان سنة ٦٥٨هـ
                </p>
                <p className="text-gray-300 text-center">
                  مشاركًا في جيش المسلمين بقيادة السلطان قطز وبإدارة الظاهر بيبرس، فكان <span className="text-white font-semibold">النصر الباهر</span> الذي طرد التتار من بلاد الشام.
                </p>
              </div>
            </div>
          </div>

          {/* Section 11: Family Life */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <UsersIcon />
              </div>
              <h2 className="text-3xl font-bold text-white">حياته الأسرية</h2>
            </div>
            <div className="text-gray-300 text-lg leading-loose space-y-6">
              <p>
                تزوج الشيخ عز الدين أبو حمرة <span className="text-[#D4AF37] font-bold">أربع زوجات</span>:
              </p>
              <div className="space-y-3">
                {[
                  { num: '١', name: 'فاطمة الشتراء' },
                  { num: '٢', name: 'باجة الشيخانية' },
                  { num: '٣', name: 'آمنة الجنيدية' },
                  { num: '٤', name: 'فاطمة بنت جمال الدين الرفاعي' }
                ].map((wife, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center gap-4">
                    <span className="w-10 h-10 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-[#D4AF37] font-bold text-lg">{wife.num}</span>
                    <span className="text-white font-semibold text-lg">{wife.name}</span>
                  </div>
                ))}
              </div>
              <div className="bg-green-900/20 rounded-2xl p-6 border border-green-500/30 mt-6">
                <p className="text-green-400 font-semibold">
                  وأنجب عدداً من الأبناء الذكور، منهم موسى ومحمد، إضافة إلى ابنتين.
                </p>
              </div>
            </div>
          </div>

          {/* Section 12: Return and Teaching */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <BookIcon />
              </div>
              <h2 className="text-3xl font-bold text-white">العودة ونشر العلم</h2>
            </div>
            <div className="text-gray-300 text-lg leading-loose space-y-6">
              <p>
                بعد الحروب، عاد إلى <span className="text-white font-semibold">بادية الشام</span> واستقر في مناطق السلمية قرب أرياف حمص، في قرية كانت تُسمى آنذاك <span className="text-[#D4AF37]">الناهضة</span> لنهضتها في العلم والإرشاد.
              </p>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">🕌</span>
                  <div>
                    <p className="text-white font-semibold text-xl">المذهب الشافعي</p>
                    <p className="text-gray-400">اشتهر بالصلاح والعلم</p>
                  </div>
                </div>
              </div>
              <p>
                وبلغ عدد تلاميذه أكثر من <span className="text-[#D4AF37] font-bold text-2xl">٦٠ ألفًا</span>.
              </p>
              <p>
                عُرف بالزهد وكثرة العبادة، وأمضى <span className="text-[#D4AF37] font-bold">أربعين سنة</span> في التهجد والوعظ، وله مناقب مشهورة.
              </p>
              <div className="flex items-center gap-3 bg-green-900/20 rounded-xl p-4 border border-green-500/30">
                <span className="text-3xl">👑</span>
                <div>
                  <p className="text-green-400 font-bold">تولى مشيخة آل الرفاعي</p>
                  <p className="text-gray-400 text-sm">قائد روحاني وزعيم ديني</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 13: Death */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                    <CrownIcon />
                  </div>
                  <h2 className="text-3xl font-bold text-white">وفاته ومقامه</h2>
                </div>
                <div className="text-gray-300 text-lg leading-loose space-y-6">
                  <p>
                    توفي سنة <span className="text-[#D4AF37] font-bold text-2xl">٦٧٧هـ</span> ودُفن في قريته <span className="text-[#D4AF37] font-semibold">الناهضة</span>، التي سُميت بعد وفاته قرية عز الدين.
                  </p>
                  <div className="bg-[#D4AF37]/10 rounded-2xl p-6 border border-[#D4AF37]/20">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">📍</span>
                      <p className="text-white font-semibold text-xl">قرية عز الدين</p>
                    </div>
                    <p className="text-gray-400">
                      تقع اليوم في <span className="text-[#D4AF37]">ريف حمص الشمالي</span> وتتبع إدارياً لمنطقة الرستن.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30">
                  <img
                    src="/images/wafat-wa-maqam.jpg"
                    alt="وفاته ومقامه - قرية عز الدين"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 14: Important Question */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <QuestionIcon />
              </div>
              <h2 className="text-3xl font-bold text-white">سؤال مهم</h2>
            </div>
            <div className="text-gray-300 text-lg leading-loose space-y-6">
              <div className="bg-[#D4AF37]/10 rounded-2xl p-6 border border-[#D4AF37]/20 mb-6">
                <p className="text-[#D4AF37] font-bold text-xl text-center">
                  هل السادة النعيم اليوم هم فقط ذرية عزالدين أبو حمرة؟
                </p>
              </div>
              <p className="text-white font-semibold text-xl">
                الجواب: بالتأكيد لا.
              </p>
              <p>
                فعز الدين أبو حمرة هو <span className="text-[#D4AF37]">الجد الأشهر والمتعارف عليه</span>، لكن هناك من أبناء عمومتنا من الرفاعيين والصياديين وبعض السادة الحسينيين ممن عاشوا مع أبناء القبيلة ينتسبون إليها، إضافة إلى من انتسبوا للقبيلة بالولاء لا بالنسب من قبائل أخرى نتيجة المصاهرة والعيش المشترك في السلم والحرب.
              </p>
              <p>
                هؤلاء جميعًا يشكلون اليوم قبيلة النعيم التي يزيد عدد أفرادها في سورية وحدها عن <span className="text-green-400 font-bold text-xl">مليونين نسمة</span>.
              </p>
              <p className="text-gray-400 text-sm text-center mt-6 italic">
                هذا والله أعلم.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-4xl mx-auto my-16">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-gradient-to-r from-transparent to-[#D4AF37]/50 flex-1"></div>
            <span className="text-[#D4AF37] text-2xl">◆</span>
            <div className="h-px bg-gradient-to-l from-transparent to-[#D4AF37]/50 flex-1"></div>
          </div>
        </div>

        {/* Part 3 Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-transparent rounded-2xl p-6 border border-[#D4AF37]/30">
            <div className="flex items-center gap-3">
              <span className="text-4xl"><TreeIcon /></span>
              <div>
                <h2 className="text-2xl font-bold text-[#D4AF37]">أبناء عز الدين أبو حمرة وأفخاذ قبيلة النعيم</h2>
                <p className="text-gray-400">الذرية والأفخاذ - بطون قبيلة النعيم</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">

          {/* Section 15: Introduction */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                    <BookIcon />
                  </div>
                  <h2 className="text-3xl font-bold text-white">أبناء جدّنا عز الدين أبو حمرة</h2>
                </div>
                <div className="text-gray-300 text-lg leading-loose space-y-6">
                  <p>
                    كنا قد ذكرنا أن جدّ قبيلة النعيم المشهور والمتعارف عليه هو <span className="text-[#D4AF37]">عز الدين أبو حمرة أحمد بن نعيم</span>، إلى باقي النسب الشريف المعروف.
                  </p>
                  <p>
                    وفي هذا المنشور نُكمل ما بدأناه، حيث نسلّط الضوء على أبناء جدّنا عز الدين أبو حمرة، وما اشتهر من ذريّاتهم من أفخاذ وفروع داخل قبيلة النعيم.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30">
                  <img
                    src="/images/abnaa-izz-din-abu-himara.jpg"
                    alt="أبناء عز الدين أبو حمرة وأفخاذ قبيلة النعيم"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 16: Number of Sons */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <UsersIcon />
              </div>
              <h2 className="text-3xl font-bold text-white">عدد الأبناء</h2>
            </div>
            <div className="text-gray-300 text-lg leading-loose space-y-6">
              <p className="text-white font-semibold">
                اختلف النسابون في عدد أولاده الذكور على قولين:
              </p>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-[#D4AF37] font-bold text-xl mb-4">القول الأول: سبعة أبناء</h3>
                <p className="text-gray-300 mb-4">أن له سبعة أبناء ذكور، وهم:</p>
                <div className="flex flex-wrap gap-2">
                  {['موسى', 'محمد', 'عبد الرحيم', 'عبد الوهاب', 'عثمان', 'يوسف', 'منصور'].map((name, index) => (
                    <span key={index} className="bg-[#D4AF37]/10 px-4 py-2 rounded-full text-white font-semibold">
                      {name}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 mt-4">وابنتين: كليلة وحمرة.</p>
              </div>

              <div className="bg-green-900/20 rounded-2xl p-6 border border-green-500/30">
                <h3 className="text-green-400 font-bold text-xl mb-4">القول الثاني (المُرجّح): ثمانية أبناء</h3>
                <p className="text-gray-300 mb-4">المذكورون أعلاه، ويضاف إليهم:</p>
                <p className="text-white font-semibold text-xl">
                  السيد <span className="text-[#D4AF37]">سليمان</span> الملقب بـ"سليم"
                </p>
                <p className="text-gray-400 mt-2 text-sm">
                  وذلك بناءً على ما ورد في مشجّرات أبناء عمّنا من فرع "الشيخان".
                </p>
              </div>
            </div>
          </div>

          {/* Section 17: Sons and their descendants */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                    <TreeIcon />
                  </div>
                  <h2 className="text-3xl font-bold text-white">نسب كل ابن وما تفرّع عنه</h2>
                </div>
                <div className="text-gray-300 text-lg leading-loose space-y-6">

                  {/* Son 1: Musa */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-[#D4AF37] font-bold text-xl mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-sm">١</span>
                      السيد موسى
                    </h3>
                    <p className="text-gray-300">
                      من ذريّته السادة أفخاذ <span className="text-white">الحمادة (أهل عز الدين)</span> والمطايرة والقضية و آل "بيّ"، ومنهم أيضًا: قطّاعة الزهرة في رأس العين، وغيرهم.
                    </p>
                  </div>

                  {/* Son 2: Muhammad */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-[#D4AF37] font-bold text-xl mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-sm">٢</span>
                      السيد محمد
                    </h3>
                    <p className="text-gray-300">
                      من ذريّته السادة أفخاذ <span className="text-white">الناصيف</span> و<span className="text-white">السيد</span> والخزام والزواتنة وغيرهم.
                    </p>
                  </div>

                  {/* Son 3: Uthman */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-[#D4AF37] font-bold text-xl mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-sm">٣</span>
                      السيد عثمان
                    </h3>
                    <p className="text-gray-300">
                      من ذريّته السادة أفخاذ <span className="text-white">البو حيار</span> وغيرهم.
                    </p>
                  </div>

                  {/* Son 4: Mansour */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-[#D4AF37] font-bold text-xl mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-sm">٤</span>
                      السيد منصور
                    </h3>
                    <p className="text-gray-300">
                      من ذريّته السادة أفخاذ <span className="text-white">الحمران</span> وغيرهم.
                    </p>
                  </div>

                  {/* Son 5: Abd al-Rahim */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-[#D4AF37] font-bold text-xl mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-sm">٥</span>
                      السيد عبد الرحيم
                    </h3>
                    <p className="text-gray-300">
                      من ذريّته السادة أفخاذ <span className="text-white">التوبلس</span>، بفروعهم الكثيرة.
                    </p>
                  </div>

                  {/* Son 6: Suleiman */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-[#D4AF37] font-bold text-xl mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-sm">٦</span>
                      السيد سليمان (سليم)
                    </h3>
                    <p className="text-gray-300">
                      من ذريّته السادة أفخاذ <span className="text-white">آل الشيخ إبراهيم في خانكي – سوريا</span>، ومن الشيخان أيضًا في عين العرب وغيرهم.
                    </p>
                  </div>

                  {/* Son 7: Youssef */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-[#D4AF37] font-bold text-xl mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-sm">٧</span>
                      السيد يوسف
                    </h3>
                    <p className="text-gray-300">
                      من ذريّته السادة أفخاذ <span className="text-white">الطحّان</span> وآل عز الدين في مضايا وآل الفاعل وغيرهم.
                    </p>
                  </div>

                  {/* Son 8: Abd al-Wahhab */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-[#D4AF37] font-bold text-xl mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-sm">٨</span>
                      السيد عبد الوهاب
                    </h3>
                    <p className="text-gray-300">
                      من ذريّته السادة أفخاذ <span className="text-white">المداهيش</span> والوهبان والجلوف والكميّان والشقّان وآل عز الدين (في قسمته غربي إدلب) وغيرهم.
                    </p>
                  </div>

                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30">
                  <img
                    src="/images/nasb-kull-ibn.jpg"
                    alt="نسب كل ابن وما تفرّع عنه"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 18: Distribution */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <CrownIcon />
              </div>
              <h2 className="text-3xl font-bold text-white">امتدادات قبيلة النعيم</h2>
            </div>
            <div className="text-gray-300 text-lg leading-loose space-y-6">
              <p>
                فهؤلاء الأبناء وذريّاتهم يشكلون عموم السادة قبيلة النعيم في سوريا، ولهم امتدادات واسعة في <span className="text-white">العراق والأردن والخليج العربي</span>.
              </p>

              <div className="bg-[#D4AF37]/10 rounded-2xl p-6 border border-[#D4AF37]/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-[#D4AF37] font-bold text-2xl">+٢ مليون</p>
                    <p className="text-gray-400">نسمة في سوريا</p>
                  </div>
                  <div>
                    <p className="text-[#D4AF37] font-bold text-2xl">٤</p>
                    <p className="text-gray-400">بطون كبرى</p>
                  </div>
                  <div>
                    <p className="text-[#D4AF37] font-bold text-2xl">+٧٤</p>
                    <p className="text-gray-400">فخذاً</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 italic">
                ونُشير إلى أن هناك الكثير من الأفخاذ لم نتمكن من ذكرها في هذا السياق لكثرتها.
              </p>

              <div className="bg-[#D4AF37]/10 rounded-2xl p-8 border border-[#D4AF37]/20 mt-8">
                <h3 className="text-[#D4AF37] font-bold text-xl mb-6 text-center">البطون الكبرى لقبيلة النعيم</h3>
                <p className="text-white text-center mb-6">
                  تنقسم قبيلة النعيم إلى أربعة بطون كبرى، يتفرع عنها عشرات الأفخاذ والعشائر:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10 text-center">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-[#D4AF37]/20 rounded-full text-[#D4AF37] font-bold text-xl mb-3">١</span>
                    <p className="text-white font-semibold text-xl">الفخر</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10 text-center">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-[#D4AF37]/20 rounded-full text-[#D4AF37] font-bold text-xl mb-3">٢</span>
                    <p className="text-white font-semibold text-xl">المحمدية (المحاميد)</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10 text-center">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-[#D4AF37]/20 rounded-full text-[#D4AF37] font-bold text-xl mb-3">٣</span>
                    <p className="text-white font-semibold text-xl">الحزومين</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10 text-center">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-[#D4AF37]/20 rounded-full text-[#D4AF37] font-bold text-xl mb-3">٤</span>
                    <p className="text-white font-semibold text-xl">البو طارق</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 19: Important Note */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <BookIcon />
              </div>
              <h2 className="text-3xl font-bold text-white">ملاحظة مهمة</h2>
            </div>
            <div className="text-gray-300 text-lg leading-loose space-y-6">
              <p>
                ونؤكد أن أي تقصير في الذكر هو غير مقصود، فجميع أبناء القبيلة هم <span className="text-[#D4AF37] font-bold">سادة أشراف</span>، متكافئون في النسب والقدر، لا يتفاضلون إلا بالتقوى.
              </p>
              <div className="bg-[#D4AF37]/10 rounded-2xl p-6 border border-[#D4AF37]/20 text-center">
                <p className="text-white font-semibold text-xl leading-loose">
                  ﴿ إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ ﴾
                </p>
                <p className="text-gray-400 mt-2">(سورة الحجرات، الآية ١٣)</p>
              </div>
            </div>
          </div>

          {/* Section 20: Conclusion */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20">
            <div className="text-gray-300 text-lg leading-loose space-y-6 text-center">
              <p>
                نسأل الله أن يوفقنا وإياكم لما يحب ويرضى، وأن يبارك في هذه القبيلة المباركة المتجذّرة في الأرض والعزّ والكرم.
              </p>
              <p className="text-[#D4AF37] font-bold text-xl mt-6">
                والحمد لله رب العالمين
              </p>
              <p className="text-gray-500 text-sm">
                تمّ بعون الله
              </p>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center pt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0a1628] font-bold text-lg rounded-full hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeftIcon />
              <span>العودة للرئيسية</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HistoryPage