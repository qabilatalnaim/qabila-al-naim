import { Link } from 'react-router-dom'

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

export default function TentPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#162544] to-[#0a1628] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-yellow-600/20 px-6 py-2 rounded-full mb-6">
              <span className="text-4xl">⛺</span>
              <span className="text-yellow-400 font-bold">بيت الشعر</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">أقسام وأجزاء بيت الشعر</h1>
            <p className="text-gray-400 text-lg">مرجع تراثي توثيقي شامل</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Introduction */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-yellow-600/30 mb-12">
            <div className="text-center mb-8">
              <span className="text-6xl">⛺</span>
            </div>
            <p className="text-gray-200 text-lg leading-loose text-center mb-6">
              هذا النص التوثيقي التراثي يُجسّد دقة التنظيم في بيت الشعر البدوي، ويعكس قيم التعاون، والكرم، والهوية العربية الأصيلة.
            </p>
          </div>

          {/* Section 1: أقسام بيت الشعر */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
              <span>🏗️</span> أقسام بيت الشعر
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-yellow-600/20 mb-8">
              <p className="text-gray-300 leading-loose mb-6">
                يُقسَّم بيت الشعر بحسب عدد الأعمدة إلى قسمين أو أكثر، ويُطلق على العمود الأوسط اسم <span className="text-yellow-400 font-bold">الواسط</span>، ويُحدَّد اسم البيت بعدد الأعمدة والأقسام الناتجة عنها:
              </p>
              <div className="space-y-4">
                {[
                  { name: 'القطبة', desc: 'بيت يُقسَّم بعمودٍ واحد إلى قسمين' },
                  { name: 'الصهوة', desc: 'بيت بعمودين يُقسَّم إلى ثلاثة أقسام' },
                  { name: 'المثوّلث', desc: 'بيت بثلاثة أعمدة يُقسَّم إلى أربعة أقسام' },
                  { name: 'المروّبع', desc: 'بيت بأربعة أعمدة يُقسَّم إلى خمسة أقسام' },
                  { name: 'المخومس', desc: 'بيت بخمسة أعمدة يُقسَّم إلى ستة أقسام' },
                  { name: 'المسدّس', desc: 'بيت بستة أعمدة يُقسَّم إلى سبعة أقسام، وغالبًا ما يكون مخصصًا لسكن شيخ القبيلة' },
                ].map((item, index) => (
                  <div key={index} className="bg-yellow-600/10 rounded-xl p-6 border border-yellow-600/30">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.name}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: أجزاء بيت الشعر */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
              <span>📋</span> أجزاء بيت الشعر
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-yellow-600/20">
              <p className="text-gray-300 leading-loose mb-6">
                يتكوّن بيت الشعر من مجموعة أجزاء متكاملة، لكلٍّ منها وظيفة ودلالة:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'الشُّقّة (جمعها أشقاق)', desc: 'تُصنع من شعر الماعز عبر النسج اليدوي' },
                  { name: 'الرِّفّة', desc: 'من شعر الماعز، وتكون على جانبي البيت يمينًا ويسارًا' },
                  { name: 'الرِّواق', desc: 'يقع في مؤخرة البيت' },
                  { name: 'السِّتار', desc: 'يكون في مقدمة البيت' },
                  { name: 'الأعمدة (العِمدان)', desc: 'الدعامات الرئيسة للبيت' },
                  { name: 'الأحبال', desc: 'تُصنع من الألياف الطبيعية' },
                  { name: 'الخِلال', desc: '' },
                  { name: 'الأوتاد', desc: '' },
                  { name: 'العَكف', desc: '' },
                  { name: 'اللَّحمة', desc: '' },
                  { name: 'الطريقة', desc: '' },
                  { name: 'السِّفلة', desc: '' },
                  { name: 'البِطانة', desc: '' },
                  { name: 'الساحة (القاطع)', desc: 'الفاصل بين مجلس الرجال ومكان النساء' },
                  { name: 'الشِّق (بكسر الشين)', desc: 'مكان جلوس الرجال' },
                  { name: 'المَحرَم', desc: 'مكان تواجد النساء' },
                ].map((item, index) => (
                  <div key={index} className="bg-yellow-600/10 rounded-xl p-4 border border-yellow-600/30">
                    <h3 className="text-lg font-bold text-yellow-400 mb-1">{item.name}</h3>
                    {item.desc && <p className="text-gray-400 text-sm">{item.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: أسماء أعمدة بيت الشعر */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
              <span>🏛️</span> أسماء أعمدة بيت الشعر
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-yellow-600/20">
              <div className="space-y-4">
                {[
                  { name: 'المُقدِّم', desc: 'العمود الأمامي للبيت' },
                  { name: 'الواسط', desc: 'العمود الأوسط' },
                  { name: 'العامِر', desc: 'عمود جانب البيت' },
                  { name: 'يَد البيت (الرِّجل)', desc: 'الأعمدة الخلفية، وتكون أقصر' },
                ].map((item, index) => (
                  <div key={index} className="bg-yellow-600/10 rounded-xl p-6 border border-yellow-600/30">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.name}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: حبال بيت الشعر */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
              <span>🪢</span> حبال بيت الشعر
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-yellow-600/20">
              <p className="text-gray-300 leading-loose mb-6">
                تُصنع حبال البيت من اللِّيف، ويقارب قطرها <span className="text-yellow-400 font-bold">٢ سم</span>، وكلما زاد طولها كانت أفضل.
              </p>
              <div className="space-y-4">
                {[
                  { name: 'حبال المُقدِّم (المِجدم)', desc: 'الحبال الأمامية، وهي أطول الحبال' },
                  { name: 'حبال المِيخر', desc: 'الحبال الخلفية، ثاني أطول الحبال' },
                  { name: 'حبال الكاسر (الطَّنب)', desc: 'حبل في كل جانب من البيت، في وسطه' },
                  { name: 'حبال الأيد', desc: 'حبلان في كل طرف من البيت، يتوسطهما حبل الكاسر' },
                ].map((item, index) => (
                  <div key={index} className="bg-yellow-600/10 rounded-xl p-6 border border-yellow-600/30">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.name}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-yellow-600/10 rounded-xl p-6 border border-yellow-600/30 mt-6">
                <p className="text-gray-300 leading-loose">
                  تُربط الحبال بعَكف الخشب وتُشد إلى الأوتاد، والتي تُصنع إمّا من الخشب أو الحديد؛ فوتد الحديد سهل التثبيت لكنه قد يخلع مع المطر والرياح، بخلاف وتد الخشب الأكثر ثباتًا.
                </p>
              </div>
              <div className="bg-yellow-600/10 rounded-xl p-6 border border-yellow-600/30 mt-4">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">حبل الشابِح</h3>
                <p className="text-gray-300">
                  يُرمى فوق البيت ويُثبت قريبًا من المقدمة والمؤخرة، ويُستخدم شتاءً عند المطر والرياح الشديدة للمساعدة على تثبيت البيت، ويكون بعدد ربعات البيت.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: صناعة الشُّقّة */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
              <span>🧵</span> مسميات أساسية في صناعة الشُّقّة
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-yellow-600/20">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">صناعة الشُّقّة</h3>
              <p className="text-gray-300 leading-loose mb-6">
                الشُّقّة صناعة يدوية من شعر الماعز، تبدأ بقص الشعر في أوائل الصيف، ثم تقوم النساء بتجميعه وغزله يدويًا باستخدام المِغزل. تستغرق هذه المرحلة عدة أشهر، ثم يُلف الخيط في الدَّحرجة (كرة من الشعر أو الصوف). وتُغزل دحرجتان معًا لزيادة متانة الخيط، ثم تُجمع الخيوط حتى تكتمل الكمية اللازمة لنسج الشُّقّة.
              </p>
              <p className="text-gray-300 leading-loose mb-6">
                بعد ذلك، تُدعى امرأة خبيرة لتحديد القياسات (الطول، العرض)، وتُدعى نساء أخريات للمساعدة في يوم يُسمّى <span className="text-yellow-400 font-bold">يوم المَدَد</span>، وهو يوم شاق يتطلب عددًا كبيرًا من الأيدي العاملة.
              </p>
              <div className="space-y-4">
                <div className="bg-yellow-600/10 rounded-xl p-6 border border-yellow-600/30">
                  <p className="text-gray-300 leading-loose">
                    تجلس النَّيّارة في بداية المدد قرب النِّيرة (عمود يُثبت على حجرين)، وتجلس امرأة أخرى في رأس المدد، وتُمرّر الجرّايات (نساء أو فتيات صغيرات) خيوط الشعر بين الطرفين.
                  </p>
                </div>
                <div className="bg-yellow-600/10 rounded-xl p-6 border border-yellow-600/30">
                  <p className="text-gray-300 leading-loose">
                    يستمر العمل من <span className="text-yellow-400 font-bold">٤ إلى ٦ ساعات</span>، ثم يُقام غداء النسّاجات الذي يُحضّره صاحب البيت، ولا يُدعى له الرجال باعتباره من العيب.
                  </p>
                </div>
                <div className="bg-yellow-600/10 rounded-xl p-6 border border-yellow-600/30">
                  <p className="text-gray-300 leading-loose">
                    تُكمل صاحبة المدد العمل وحدها لاحقًا، مع مساعدات متفرقة من النساء، ويستغرق إنجاز الشُّقّة نحو <span className="text-yellow-400 font-bold">شهر</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: أدوات النسج */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
              <span>🔧</span> أدوات النسج
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-yellow-600/20">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'المِغزل', desc: 'أداة الغزل اليدوية' },
                  { name: 'المِنْسَاج', desc: 'خشبة بعرض ٤ سم وطول يقارب ٧٠ سم، تنتهي بمثلث' },
                  { name: 'المَيْشَع', desc: 'عصا بقطر يقارب ١ سم وطول لا يتجاوز ٧٠ سم' },
                  { name: 'المِسعد', desc: 'قرن غزال أو ماعز معقوف الرأس، طوله نحو ١٥ سم' },
                ].map((item, index) => (
                  <div key={index} className="bg-yellow-600/10 rounded-xl p-6 border border-yellow-600/30">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.name}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 7: أنواع بيوت الشعر */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
              <span>🏕️</span> أنواع بيوت الشعر
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-yellow-600/20">
              <div className="space-y-4">
                <div className="bg-yellow-600/10 rounded-xl p-6 border border-yellow-600/30">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">بيت الفازة</h3>
                  <p className="text-gray-300 leading-loose">
                    البيت الكبير، يتكوّن من <span className="text-yellow-400 font-bold">٧ أشقاق</span>، ويضم <span className="text-yellow-400 font-bold">٣–٥ بواهر</span> (مساحات تشبه الغرف غير المغلقة).
                  </p>
                </div>
                <div className="bg-yellow-600/10 rounded-xl p-6 border border-yellow-600/30">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">العوديّة</h3>
                  <p className="text-gray-300 leading-loose">
                    البيت الصغير، يتكوّن من <span className="text-yellow-400 font-bold">٤–٥ أشقاق</span> صغيرة.
                  </p>
                </div>
              </div>
              <div className="bg-yellow-600/10 rounded-xl p-6 border border-yellow-600/30 mt-6">
                <p className="text-gray-300 leading-loose">
                  يختلف طول وعرض الشُّقّة بحسب مقدرة صاحب البيت؛ فالميسور يستخدم بيت الفازة الكبير، بينما يكتفي غير الميسور بالعوديّة الأصغر.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-[#0a1628] font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all"
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