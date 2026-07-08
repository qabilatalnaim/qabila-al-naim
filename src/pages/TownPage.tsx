import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import OptimizedImage from '../components/OptimizedImage'
import Breadcrumbs from '../components/Breadcrumbs'
import { seoConfig } from '../lib/seo-config'

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

export default function TownPage() {
  return (
    <>
      <SEO {...seoConfig.town} />
      <Breadcrumbs items={[{ label: 'بلدة عز الدين' }]} />
      {/* CacheBust20260706083500 */}
      <div className="min-h-screen bg-[#0a1628] pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#162544] to-[#0a1628] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-teal-600/20 px-6 py-2 rounded-full mb-6">
              <span className="text-4xl">🏘️</span>
              <span className="text-teal-400 font-bold">بلدة عز الدين</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">موطن قبيلة النعيم أهل الصفرا ٥١٥</h1>
            <p className="text-gray-400 text-lg">قصة البلدة ومعالمها وجذور الانتماء</p>
          </div>
        </div>
      </div>

      {/* Hero Image - منظر بلدة عز الدين */}
      <div className="container mx-auto px-4 -mt-4 mb-16">
        <div className="max-w-5xl mx-auto">
          <figure className="relative group">
            <div className="relative h-[280px] md:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden border-2 border-teal-600/40 shadow-[0_0_60px_rgba(20,184,166,0.25)]">
              <OptimizedImage
                src="/images/town-overview-v2.webp"
                alt="منظر بانورامي لبلدة عز الدين - موطن قبيلة النعيم أهل الصفرا ٥١٥، يظهر فيها المسجد والمئذنة والقبور والطبيعة المحيطة"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                decoding="async"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />
              {/* Caption overlay */}
              <figcaption className="absolute bottom-0 right-0 left-0 p-6 md:p-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block w-12 h-0.5 bg-teal-400"></span>
                  <span className="text-teal-400 text-sm md:text-base font-bold tracking-wide">من قلب حمص · سوريا</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  بلدة عزّ الدين أبو حمرة
                </h2>
                <p className="text-gray-200 text-sm md:text-base mt-2 max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  موطن الجدّ الجامع لقبيلة النعيم أهل الصفرا ٥١٥، حيث تتلاقى أرواح الأجداد مع ذاكرة الأبناء
                </p>
              </figcaption>
            </div>
            {/* Image caption below — احترافي مع أيقونات + خط ذهبي */}
            <figcaption className="text-center mt-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#D4AF37]/5 border border-[#D4AF37]/20">
                <span className="text-xl">📸</span>
                <span className="text-sm md:text-base font-medium text-gray-300 leading-relaxed">
                  منظر بانورامي لبلدة <span className="text-[#D4AF37] font-bold">عزّ الدين</span> — مسجدها ومقابرها وأراضيها الشاسعة تمتد تحت سماء <span className="text-[#D4AF37] font-bold">بلاد الشام</span>
                </span>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">

          {/* Introduction */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-teal-600/30 mb-12">
            <div className="text-center mb-8">
              <span className="text-6xl">🏘️</span>
            </div>
            <p className="text-gray-200 text-lg leading-loose text-center mb-6">
              تحمل بلدة <span className="text-teal-400 font-bold">عزّ الدين</span> اسم الجدّ الجامع لقبيلة النعيم أهل الصفرا ٥١٥، الشيخ <span className="text-teal-400 font-bold">عزّ الدين أبو حمرة (أحمد بن نعيم)</span>، تخليدًا لذكراه وتقديرًا لمكانته في تاريخ القبيلة وذاكرتها الجمعية.
            </p>
            <p className="text-gray-300 text-lg leading-loose text-center">
              وتُعدّ البلدة اليوم شاهدًا حيًّا على عراقة النسب وعمق الجذور، ومركزًا لتلاحم أبناء القبيلة وحفظ موروثها الاجتماعي عبر الأجيال.
            </p>
          </div>

          {/* Section 1: قصة التسمية */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-teal-400 mb-6 flex items-center gap-3">
              <span>📜</span> قصة التسمية
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-teal-600/20 mb-8">
              <p className="text-gray-300 leading-loose mb-6">
                نُسبت بلدة <span className="text-teal-400 font-bold">عزّ الدين</span> إلى الشيخ <span className="text-teal-400 font-bold">عزّ الدين أبو حمرة</span>، الجدّ الجامع لقبيلة النعيم، الذي ارتبط اسمه بمرحلة مهمّة من تاريخ القبيلة، وظلّ حاضرًا في الذاكرة المتوارثة بوصفه رمزًا لوحدة النسب وعمق الجذور.
              </p>
              <p className="text-gray-300 leading-loose mb-6">
                وقد حملت البلدة اسمه تخليدًا لذكراه وتقديرًا لمكانته، لتبقى شاهدًا على حضور اسمه في الوجدان الاجتماعي لأبناء القبيلة، وعلى ما يمثّله من معاني الانتماء والترابط والاعتزاز بالموروث التاريخي.
              </p>
              <div className="bg-teal-600/10 rounded-xl p-6 border border-teal-600/30">
                <p className="text-gray-300 leading-loose text-center">
                  <span className="text-teal-400 font-bold">عزّ الدين</span> لم يكن مجرّد اسم جغرافي، بل هو عنوان هوية ورمز وحدة، يذكّر الأبناء بجدّهم الجامع وبالقيم التي أسّس عليها كيانهم الاجتماعي.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: الموقع الجغرافي */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-teal-400 mb-6 flex items-center gap-3">
              <span>🌍</span> الموقع الجغرافي
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-teal-600/20">
              <p className="text-gray-300 leading-loose mb-6">
                تقع بلدة عزّ الدين ضمن النطاق الجغرافي لبلاد الشام، وتُعدّ من المناطق التي استقرّ فيها أبناء قبيلة النعيم عبر أجيال متعاقبة، وشكّلت مركزًا لتجمّعهم الاجتماعي وممارستهم لأنماط حياتهم القائمة على الكرم والوحدة والتكافل.
              </p>
              <p className="text-gray-300 leading-loose mb-6">
                وقد أسهم الموقع في تعزيز التواصل بين أبناء القبيلة في مختلف المناطق، إذ ظلت بلدة عزّ الدين قبلةً لأبناء البطون والأفخاذ، ومحطّةً للتزاور والتلاقي في المناسبات والأعياد والمواسم.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-teal-600/10 rounded-xl p-6 border border-teal-600/30 text-center">
                  <span className="text-3xl">🏛️</span>
                  <h3 className="text-lg font-bold text-teal-400 mt-2 mb-1">منطقة بلاد الشام</h3>
                  <p className="text-gray-400 text-sm">إرث عربي أصيل</p>
                </div>
                <div className="bg-teal-600/10 rounded-xl p-6 border border-teal-600/30 text-center">
                  <span className="text-3xl">🕌</span>
                  <h3 className="text-lg font-bold text-teal-400 mt-2 mb-1">حاضرة قبلية</h3>
                  <p className="text-gray-400 text-sm">مركز تجمع أبناء النعيم</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: معالم البلدة */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-teal-400 mb-6 flex items-center gap-3">
              <span>🏛️</span> معالم البلدة
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-teal-600/20">
              <p className="text-gray-300 leading-loose mb-6">
                تزخر بلدة عزّ الدين بالعديد من المعالم التي تعكس تاريخها العريق وحضورها الاجتماعي، ومن أبرزها:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: '🕌',
                    name: 'المساجد والجوامع',
                    desc: 'مراكز العبادة والتعليم وحفظ القرآن، شكّلت ركنًا أساسيًا في الحياة الدينية والاجتماعية للبلدة'
                  },
                  {
                    icon: '🏘️',
                    name: 'بيوتات القبيلة',
                    desc: 'العائلات والأفخاذ التي استقرّت في البلدة عبر الأجيال، وحافظت على امتدادها ونفوذها'
                  },
                  {
                    icon: '🛤️',
                    name: 'الأسواق والطرقات',
                    desc: 'مسارات الحركة التجارية والاجتماعية التي ربطت البلدة بمحيطها الإقليمي'
                  },
                  {
                    icon: '🕋',
                    name: 'مقام الشيخ عزّ الدين',
                    desc: 'مقام الجدّ الجامع، يُعدّ من أبرز المعالم الروحية والتاريخية في البلدة، ومقصدًا للزوار من أبناء القبيلة'
                  },
                  {
                    icon: '🏫',
                    name: 'المدارس والكتاتيب',
                    desc: 'مراكز التعليم الأولى التي حافظت على نقل العلوم الشرعية واللغة العربية للأجيال الناشئة'
                  },
                  {
                    icon: '🌳',
                    name: 'العيون والمزارع',
                    desc: 'مصادر المياه والأراضي الزراعية التي شكّلت قاعدة الاستقرار الاقتصادي لأبناء البلدة'
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-teal-600/10 rounded-xl p-6 border border-teal-600/30">
                    <div className="flex items-start gap-3">
                      <span className="text-3xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-teal-400 mb-2">{item.name}</h3>
                        <p className="text-gray-300 text-sm leading-loose">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: الدور الاجتماعي */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-teal-400 mb-6 flex items-center gap-3">
              <span>🤝</span> الدور الاجتماعي للبلدة
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-teal-600/20">
              <p className="text-gray-300 leading-loose mb-6">
                لعبت بلدة عزّ الدين دورًا محوريًا في تنظيم الحياة الاجتماعية لقبيلة النعيم، إذ شكّلت:
              </p>
              <div className="space-y-4">
                <div className="bg-teal-600/10 rounded-xl p-6 border border-teal-600/30">
                  <h3 className="text-xl font-bold text-teal-400 mb-2">🏛️ مركزًا للقيادة والمشورة</h3>
                  <p className="text-gray-300 leading-loose">
                    احتضنت البلدة مجالس شيوخ القبيلة ووجهائها، وكانت مسرحًا للقرارات المصيرية والاجتماعية التي أثرت في مسار القبيلة عبر تاريخها.
                  </p>
                </div>
                <div className="bg-teal-600/10 rounded-xl p-6 border border-teal-600/30">
                  <h3 className="text-xl font-bold text-teal-400 mb-2">⚖️ ملتقى للصلح والإصلاح</h3>
                  <p className="text-gray-300 leading-loose">
                    كانت البلدة وجهةً لأبناء القبيلة والقبائل المجاورة في حالات النزاع والخلاف، إذ عُرف عن شيوخها النزاهة وسداد الرأي، فكانت قراراتهم محلّ ثقة واحترام.
                  </p>
                </div>
                <div className="bg-teal-600/10 rounded-xl p-6 border border-teal-600/30">
                  <h3 className="text-xl font-bold text-teal-400 mb-2">🎪 منبعًا للتقاليد والأعراف</h3>
                  <p className="text-gray-300 leading-loose">
                    حافظت البلدة على العادات والتقاليد العربية الأصيلة، من الكرم والشهامة وإكرام الضيف، ونقلتها جيلاً بعد جيل، حتى صارت جزءًا لا يتجزأ من هوية أبناء النعيم.
                  </p>
                </div>
                <div className="bg-teal-600/10 rounded-xl p-6 border border-teal-600/30">
                  <h3 className="text-xl font-bold text-teal-400 mb-2">📚 منبرًا للعلم والثقافة</h3>
                  <p className="text-gray-300 leading-loose">
                    برز من بلدة عزّ الدين ومن أحضانها عدد من رجال العلم والأدب، الذين أسهموا في إثراء المكتبة العربية والإسلامية بمؤلفاتهم وإسهاماتهم.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: الحياة الاقتصادية */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-teal-400 mb-6 flex items-center gap-3">
              <span>💼</span> الحياة الاقتصادية
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-teal-600/20">
              <p className="text-gray-300 leading-loose mb-6">
                ارتبطت الحياة الاقتصادية في بلدة عزّ الدين ارتباطًا وثيقًا بالأنشطة الرعوية والزراعية، إذ اشتغل أبناؤها بـ:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: '🐪', name: 'تربية الإبل', desc: 'النشاط الأبرز، وقد اشتهرت القبيلة بإبلها الأصيلة المعروفة بـ"الصفرا"' },
                  { icon: '🐑', name: 'تربية الأغنام', desc: 'مصدر رزق مهم، واشتُهر أبناء النعيم بجودة سلالاتهم' },
                  { icon: '🐎', name: 'تربية الخيل', desc: 'الفروسية العربية الأصيلة، ودورها في الحروب والمناسبات' },
                  { icon: '🌾', name: 'الزراعة', desc: 'زراعة الحبوب والبقول في الأراضي المستصلحة حول البلدة' },
                ].map((item, index) => (
                  <div key={index} className="bg-teal-600/10 rounded-xl p-6 border border-teal-600/30">
                    <div className="flex items-start gap-3">
                      <span className="text-3xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-teal-400 mb-2">{item.name}</h3>
                        <p className="text-gray-300 text-sm leading-loose">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 6: الهوية والانتماء */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-teal-400 mb-6 flex items-center gap-3">
              <span>🛡️</span> الهوية والانتماء
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-teal-600/20">
              <p className="text-gray-300 leading-loose mb-6">
                تبقى بلدة عزّ الدين عنوانًا للهوية والانتماء عند أبناء قبيلة النعيم أهل الصفرا ٥١٥، إذ يربطون بها ذاكرة الجدّ الجامع، ويستحضرون من خلالها قصص الأجداد ومواقفهم وأمجادهم.
              </p>
              <p className="text-gray-300 leading-loose mb-6">
                وهي اليوم ليست مجرّد موقع جغرافي، بل <span className="text-teal-400 font-bold">رمزٌ لوحدة النسب</span>، و<span className="text-teal-400 font-bold">منارةٌ للموروث</span>، يلتقي عندها الأبناء في المناسبات والأعياد، ويجدّدون فيها عهود الوفاء لجذورهم وانتمائهم الأصيل.
              </p>
              <div className="bg-gradient-to-l from-teal-600/20 to-transparent p-6 rounded-r-2xl border-r-4 border-teal-400 mt-6">
                <h3 className="font-bold text-teal-400 text-xl mb-3 text-center">✦ كلمة ختامية ✦</h3>
                <p className="text-gray-200 leading-loose text-center">
                  بلدة عزّ الدين ليست مكانًا يُزار، بل هي <span className="text-teal-400 font-bold">هويةٌ تُحمل</span>، و<span className="text-teal-400 font-bold">جذورٌ تُروى</span>، و<span className="text-teal-400 font-bold">قصةٌ تستمر</span> في ذاكرة كل فرد من أبناء قبيلة النعيم أهل الصفرا ٥١٥، جيلاً بعد جيل.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-[#0a1628] font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transition-all"
            >
              <ArrowRightIcon />
              <span>العودة للرئيسية</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
          <Footer />
    </>
  )
}
