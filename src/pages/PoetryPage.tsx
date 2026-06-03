import { Link } from 'react-router-dom'

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

const QuillIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
  </svg>
)

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
)

const CrownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/>
    <path d="M3 20h18"/>
  </svg>
)

const FireIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
)

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
)

export default function PoetryPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#2a1a1a] to-[#0a1628] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-rose-600/20 px-6 py-2 rounded-full mb-6">
              <span className="text-4xl">📜</span>
              <span className="text-rose-400 font-bold">الشعر النبطي</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">قاعة الشعر النبطي</h1>
            <p className="text-gray-400 text-lg">إرثٌ حيٌّ يعبّر عن الهوية والانتماء وعزّة البادية العربية</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">

          {/* Header Banner */}
          <div className="bg-gradient-to-l from-rose-700 to-rose-600 rounded-3xl p-8 mb-12 shadow-2xl">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                <span className="text-5xl">📜</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">الشعر النبطي في قبيلة النعيم</h3>
                <p className="text-rose-200">ديوان القبيلة ولسان رجالها الذي حفظ التاريخ</p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#1a1520] rounded-3xl p-10 border border-rose-600/30 mb-12">
            <p className="text-gray-200 text-lg leading-loose mb-6">
              يُعدّ الشعر النبطي في قبيلة النعيم من أبرز صور <span className="text-rose-400 font-bold">الموروث البدوي العربي الأصيل</span>، فقد كان على مرّ السنين ديوان القبيلة ولسان رجالها الذي حفظ التاريخ، وخلّد المواقف، ونقل قيم <span className="text-rose-400 font-bold">الكرم والشجاعة والنخوة والفروسية</span> جيلاً بعد جيل.
            </p>
            <p className="text-gray-200 text-lg leading-loose">
              ولم يكن الشعر عند أبناء النعيم مجرد كلمات تُقال، بل <span className="text-rose-400 font-bold">إرثًا حيًّا</span> يُعبّر عن الهوية والانتماء وعزّة البادية العربية.
            </p>
          </div>

          {/* Poetry Heritage Section */}
          <div className="bg-gradient-to-l from-[#0a1628] to-[#1a1520] rounded-3xl p-10 mb-12 border border-rose-600/20">
            <h4 className="text-xl font-bold text-rose-400 mb-8 flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <span>الموروث الشعري</span>
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <span className="text-5xl block mb-3">📜</span>
                <span className="font-semibold text-white">الشعر النبطي</span>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <span className="text-5xl block mb-3">🎵</span>
                <span className="font-semibold text-white">الأهازيج</span>
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

          {/* Poetry Description */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#1a1520] rounded-3xl p-10 border border-rose-600/30 mb-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-400 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <QuillIcon />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">جزالة اللفظ وصدق المعنى</h4>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  وعُرف شعراء النعيم بجزالة اللفظ وقوة المعنى وصدق القصيد، حيث امتلأت المجالس والدواوين بقصائد الفخر والمدائح والأرجاز التي تستحضر حياة البادية وصور الإبل والخيل وميادين الكرم والمواقف المشرفة.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed">
                  كما ارتبط الشعر النبطي بالمناسبات القبلية والاجتماعية، فكان حاضرًا في الأعراس والصلحات والولائم واستقبال الضيوف، ليبقى شاهدًا على أصالة المجتمع البدوي وترابط أبنائه.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-gradient-to-br from-rose-700 to-rose-600 rounded-3xl p-10 mb-12 shadow-2xl">
            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-2xl">⚔️</span>
              <span>القيم المتوارثة</span>
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HeartIcon />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2">الاعتزاز بالأصل</h5>
                  <p className="text-rose-200 text-sm">حفظ التاريخ والعهد عبر الأجيال</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CrownIcon />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2">إكرام الضيف</h5>
                  <p className="text-rose-200 text-sm">قيمة أصيلة في تراث النعيم</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FireIcon />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2">نصرة المظلوم</h5>
                  <p className="text-rose-200 text-sm">رمز الشجاعة والنخوة العربية</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookIcon />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2">توثيق السير</h5>
                  <p className="text-rose-200 text-sm">تسجيل مكارم الرجال ومآثرهم</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Verses Section - New Comprehensive Poetry */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#1a1520] rounded-3xl p-10 border border-rose-600/30 mb-12">
            <h4 className="text-xl font-bold text-rose-400 mb-8 flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <span>قصيدة أهل الطيب - من أعظم قصائد الفخر النبطي</span>
            </h4>

            {/* Main Verses Card */}
            <div className="bg-gradient-to-l from-rose-900/50 to-[#0a1628] rounded-2xl p-8 border border-rose-600/30 mb-8">
              <div className="text-center mb-8">
                <span className="text-5xl">🖋️</span>
              </div>

              {/* Verse 1 */}
              <div className="mb-8 pb-8 border-b border-rose-600/30">
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  حنّا هل الطيب لا ضاقت على الناس الأيام
                </p>
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  نرخص غوالي العمر دون الوجيه الطيّبة
                </p>
                <p className="text-rose-400 text-center text-sm mt-4">
                  ✨ البيت الأول: يرمز إلى كرم النعيم وتفانيهم حتى في أصعب الأوقات
                </p>
              </div>

              {/* Verse 2 */}
              <div className="mb-8 pb-8 border-b border-rose-600/30">
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  سادات فعلٍ على العليا تروّضها الأقدام
                </p>
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  ما هي بلبس البشوت ولا حكي به هيبة
                </p>
                <p className="text-rose-400 text-center text-sm mt-4">
                  ✨ البيت الثاني: يصف سؤدد الأفعال لا الأقاويل، والهيبة بالفعال لا بالملبس
                </p>
              </div>

              {/* Verse 3 */}
              <div className="mb-8 pb-8 border-b border-rose-600/30">
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  حنّا عيال النعيم أهل المواقف والإقدام
                </p>
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  إلى دعا داعي الوفا نلحق دروب الصعيبة
                </p>
                <p className="text-rose-400 text-center text-sm mt-4">
                  ✨ البيت الثالث: وصف أهل النخوة والاقدام عند دعوة الوفاء
                </p>
              </div>

              {/* Verse 4 */}
              <div className="mb-8 pb-8 border-b border-rose-600/30">
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  أهل الكرم والجود من سالف الوقت لأعوام
                </p>
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  تُعرف منافعنا قبل تُعرف أسامينا القريبة
                </p>
                <p className="text-rose-400 text-center text-sm mt-4">
                  ✨ البيت الرابع: منافعهم معروفة قبل أسماءهم، والكرم والجود متجذر فيهم
                </p>
              </div>

              {/* Verse 5 */}
              <div className="mb-8 pb-8 border-b border-rose-600/30">
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  حنّا هل الصفرا إلى هبّت هبوب الأوهام
                </p>
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  تبقى معاني الوفا بصدورنا ما تغيبة
                </p>
                <p className="text-rose-400 text-center text-sm mt-4">
                  ✨ البيت الخامس: ذكر النخوة "أهل الصفرا" والوفاء راسخ في الصدور
                </p>
              </div>

              {/* Verse 6 */}
              <div className="mb-8 pb-8 border-b border-rose-600/30">
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  لنا من البيد تاريخٍ ومن الطيب وسام
                </p>
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  ولنا مع العزوة مواقف تشهد القريبة
                </p>
                <p className="text-rose-400 text-center text-sm mt-4">
                  ✨ البيت السادس: تاريخ من البيد والشرف، ومواقف مع العزوة شاهدة
                </p>
              </div>

              {/* Verse 7 */}
              <div className="mb-8 pb-8 border-b border-rose-600/30">
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  نرعى الوفا مثل ما تُرعى مطاليع الأنعام
                </p>
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  نصون حق الجار لو جتنا الليالي الكئيبة
                </p>
                <p className="text-rose-400 text-center text-sm mt-4">
                  ✨ البيت السابع: حفظ الوفاء وصون حق الجار في الليالي الصعبة
                </p>
              </div>

              {/* Verse 8 */}
              <div className="mb-8 pb-8 border-b border-rose-600/30">
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  ساس العرب من قديم الوقت لين اليوم ما ضام
                </p>
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  نبني على الطيب مجدٍ ما تهزّه مصيبة
                </p>
                <p className="text-rose-400 text-center text-sm mt-4">
                  ✨ البيت الثامن:ساس العرب بالطيب، والمجد مبني على أساس ثابت
                </p>
              </div>

              {/* Verse 9 */}
              <div className="mb-8 pb-8 border-b border-rose-600/30">
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  حنّا هل العادات وأهل الشهامة والإحشام
                </p>
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  لا جا نهار اللزوم تبان فعول النجيبة
                </p>
                <p className="text-rose-400 text-center text-sm mt-4">
                  ✨ البيت التاسع: أهل العادات والشهامة والاحشام، فعولهم نجيبة عند اللزوم
                </p>
              </div>

              {/* Verse 10 */}
              <div className="mb-8 pb-8 border-b border-rose-600/30">
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  من دارنا يطلع الطيب وتتعطّر به الشام
                </p>
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  ومن فعلنا تنكتب سيرة رجالٍ مهيبة
                </p>
                <p className="text-rose-400 text-center text-sm mt-4">
                  ✨ البيت العاشر: الطيب يملأ الشام، وسيرتهم مكتوبة بالهيبة
                </p>
              </div>

              {/* Verse 11 */}
              <div className="mb-8 pb-8 border-b border-rose-600/30">
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  ما ننثني دون حق ولا نهاب الخصام
                </p>
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  واللي يجي دارنا يلقى المراجل رحيبة
                </p>
                <p className="text-rose-400 text-center text-sm mt-4">
                  ✨ البيت الحادي عشر: لا نتراجع دون حق، وضيوفنا محل ترحيب وكرم
                </p>
              </div>

              {/* Final Verse - Closing */}
              <div>
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  يبقى النعيم بعزّه ما تغيّره الأعوام
                </p>
                <p className="text-gray-200 text-xl leading-loose mb-4 text-center font-medium">
                  قبيلةٍ بالمجد والتاريخ دومٍ قريبة
                </p>
                <p className="text-rose-400 text-center text-sm mt-4">
                  ✨ الختام: النعيم باقٍ بعزه عبر الأعوام، قريبون من المجد والتاريخ
                </p>
              </div>
            </div>
          </div>

          {/* ملحمة النعيم - Malhama Section */}
          <div className="bg-gradient-to-br from-[#1a1520] to-[#0a1628] rounded-3xl p-8 md:p-12 border border-rose-600/30 mb-12">
            <div className="text-center mb-8">
              <span className="text-4xl mb-4 block">📜</span>
              <h2 className="text-3xl font-bold text-rose-400 mb-2">ملحمة النعيم</h2>
              <p className="text-gray-400">منظومة شعرية في تاريخ قبيلة السادة النعيم وعزتها</p>
            </div>

            <section className="poem space-y-8">
              {/* Opening */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-rose-400 mb-4">✦ الافتتاح المبارك ✦</h3>
                <p className="text-gray-200 text-xl leading-loose mb-2">
                  بِسْمِ الإله الواحد الديّـان ✦✦✦ ربّ العباد ومنزِّل الفرقـان
                </p>
                <p className="text-gray-200 text-xl leading-loose">
                  ثمّ الصلاة على النبي العدنان ✦✦✦ محمدٍ نور الهدى والبيان
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 my-6">
                <div className="h-px bg-gradient-to-r from-transparent to-rose-600/50 flex-1"></div>
                <span className="text-rose-400">❈ ✦ ❈ ✦ ❈</span>
                <div className="h-px bg-gradient-to-l from-transparent to-rose-600/50 flex-1"></div>
              </div>

              {/* راية آل البيت */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-rose-400 mb-4">✦ راية آل البيت ✦</h3>
                <p className="text-gray-200 text-xl leading-loose mb-2">
                  جدّنا عليّ الكرّار يوم الطعان ✦✦✦ سيفه على روس العدا ما يلان
                </p>
                <p className="text-gray-200 text-xl leading-loose mb-2">
                  باب خيبر درع بيمناه القويّه ✦✦✦ يكسر جموع البأس كسر المنيّه
                </p>
                <p className="text-gray-200 text-xl leading-loose mb-2">
                  فاطمة تاجٍ فوق روس البريّه ✦✦✦ من نسلها ورثنا العلا والحمِيّه
                </p>
                <p className="text-gray-200 text-xl leading-loose mb-2">
                  حسنٍ وحسينٍ رايات حقٍ رضيّه ✦✦✦ فعولهم بالمواقف مثل برقٍ بسريّه
                </p>
                <p className="text-gray-200 text-xl leading-loose">
                  من بني هاشم لنا ساس مجدٍ ✦✦✦ راسخٍ رسوخ الجبال الشامخات
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 my-6">
                <div className="h-px bg-gradient-to-r from-transparent to-rose-600/50 flex-1"></div>
                <span className="text-rose-400">❈ ✦ ❈ ✦ ❈</span>
                <div className="h-px bg-gradient-to-l from-transparent to-rose-600/50 flex-1"></div>
              </div>

              {/* عزّ النعيم */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-rose-400 mb-4">✦ عزّ النعيم ✦</h3>
                <p className="text-gray-200 text-xl leading-loose mb-2">
                  عزّ الدين أرضٍ جذورها بالدم مرويّه ✦✦✦ عاصمة النعيم دارٍ على الضيم عصيّه
                </p>
                <p className="text-gray-200 text-xl leading-loose mb-2">
                  دار النعيم اللي تعزّ المراجل ✦✦✦ لا ثار نقع الحرب بان الشجعان
                </p>
                <p className="text-gray-200 text-xl leading-loose">
                  ما نحني الراس من جور الليالي العتيّه ✦✦✦ تشهد لنا الأيام بكل صبحٍ وعشيّه
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 my-6">
                <div className="h-px bg-gradient-to-r from-transparent to-rose-600/50 flex-1"></div>
                <span className="text-rose-400">❈ ✦ ❈ ✦ ❈</span>
                <div className="h-px bg-gradient-to-l from-transparent to-rose-600/50 flex-1"></div>
              </div>

              {/* صهيل الوغى */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-rose-400 mb-4">✦ صهيل الوغى ✦</h3>
                <p className="text-gray-200 text-xl leading-loose mb-2">
                  صهيل خيلٍ فوق نقع المعارك ✦✦✦ يهزّ دجى ليل الوغى والسنان
                </p>
                <p className="text-gray-200 text-xl leading-loose">
                  برق المنايا يوم هزّ الطعان ✦✦✦ يخلي دجى ليل الوغى كالنهار
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 my-6">
                <div className="h-px bg-gradient-to-r from-transparent to-rose-600/50 flex-1"></div>
                <span className="text-rose-400">❈ ✦ ❈ ✦ ❈</span>
                <div className="h-px bg-gradient-to-l from-transparent to-rose-600/50 flex-1"></div>
              </div>

              {/* أثر الهجن */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-rose-400 mb-4">✦ أثر الهجن ✦</h3>
                <p className="text-gray-200 text-xl leading-loose mb-2">
                  أخفاف الهجن لا دارت رحاها ✦✦✦ ترسم على وجه الصخا عنوان
                </p>
                <p className="text-gray-200 text-xl leading-loose">
                  تسبق هبوب الريح لا ثار عجاجـها ✦✦✦ كأن الصحارى من خطاها بركان
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 my-6">
                <div className="h-px bg-gradient-to-r from-transparent to-rose-600/50 flex-1"></div>
                <span className="text-rose-400">❈ ✦ ❈ ✦ ❈</span>
                <div className="h-px bg-gradient-to-l from-transparent to-rose-600/50 flex-1"></div>
              </div>

              {/* يوم الهيّه */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-rose-400 mb-4">✦ يوم الهيّه ✦</h3>
                <p className="text-gray-200 text-xl leading-loose mb-2">
                  أهل الصفرة ليا دعا داعي الهيّه ✦✦✦ تلقاهم أول من يلبّي الحميّه
                </p>
                <p className="text-gray-200 text-xl leading-loose">
                  حنّا نعيم الفخر لا هبّت الهيّه ✦✦✦ نرسي كما ترسي الرواسي القويّه
                </p>
              </div>
            </section>
          </div>

          {/* Final Paragraph */}
          <div className="bg-gradient-to-r from-rose-900/30 to-rose-800/30 rounded-3xl p-10 border border-rose-600/30 mb-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-400 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-3xl">🌟</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">الإرث الحي</h4>
                <p className="text-gray-200 text-lg leading-relaxed">
                  ولا يزال الشعر النبطي حاضرًا بقوة في حياة أبناء قبيلة النعيم حتى اليوم، باعتباره <span className="text-rose-400 font-bold">جزءًا أصيلًا من التراث البدوي والهوية العربية</span>، ومرآةً تعكس عراقة القبيلة ومكانتها وقيمها المتوارثة عبر الزمن.
                </p>
              </div>
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