import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import OptimizedImage from '../components/OptimizedImage'
import Breadcrumbs from '../components/Breadcrumbs'
import { seoConfig } from '../lib/seo-config'
import { useState } from 'react'
import { useTownPlaylist } from '../lib/useSocialStats'

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

export default function TownPage() {
  // قائمة تشغيل "بلدة عزالدين أبو حمرة" - ديناميكية من YouTube
  const { videos: playlistVideos, data: playlistData, loading: videosLoading, refresh: refreshPlaylist } = useTownPlaylist()
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = async () => {
    setIsRefreshing(true)
    try { await refreshPlaylist() } finally { setTimeout(() => setIsRefreshing(false), 600) }
  }

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
                  منظر بانورامي لبلدة <span className="text-[#D4AF37] font-bold">عزّ الدين</span> — <span className="text-[#D4AF37] font-bold">بلاد الشام</span>
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

          {/* ═══════════════════════════════════════════════════════════
              قسم قائمة تشغيل البلدة - ديناميكي من YouTube
              ═══════════════════════════════════════════════════════════ */}
          <div className="max-w-6xl mx-auto mt-20 mb-12 px-4">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600/20 to-teal-500/20 px-6 py-2.5 rounded-full border border-red-500/40 mb-4">
                <span className="text-2xl">🏕️</span>
                <span className="text-lg md:text-xl font-bold text-teal-300">قائمة تشغيل بلدة عزالدين — فيديوهات مختارة</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                تعرّف على البلدة عبر الشاشة
              </h2>
              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                مجموعة منتقاة من فيديوهات القناة تتناول بلدة عزالدين أبو حمرة، تاريخها، معالمها، وحياتها اليومية في البادية
              </p>
              {playlistData && (
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm">
                  <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-full">
                    <span>🎬</span>
                    <span className="font-bold text-white">{playlistData.count}</span>
                    <span>فيديو</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-full">
                    <span className={`w-2 h-2 rounded-full ${playlistData.source === 'live' ? 'bg-teal-400 animate-pulse' : 'bg-gray-400'}`}></span>
                    <span>{playlistData.source === 'live' ? 'مباشر من يوتيوب' : 'نسخة احتياطية'}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-full">
                    <span>⏰</span>
                    <span>آخر تحديث: {new Date(playlistData.updatedAt).toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}</span>
                  </span>
                  <button
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                    className="inline-flex items-center gap-1.5 bg-teal-500/15 hover:bg-teal-500/25 border border-teal-500/40 text-teal-300 hover:text-white px-3 py-1.5 rounded-full font-bold transition-all disabled:opacity-50"
                    aria-label="تحديث قائمة التشغيل"
                  >
                    <span className={isRefreshing ? 'animate-spin' : ''}>↻</span>
                    <span>{isRefreshing ? 'جاري التحديث...' : 'تحديث'}</span>
                  </button>
                </div>
              )}
            </div>

            {videosLoading && (
              <div className="text-center py-12">
                <div className="inline-block w-12 h-12 border-4 border-teal-500/30 border-t-teal-400 rounded-full animate-spin"></div>
                <p className="text-gray-400 mt-4">جاري تحميل قائمة التشغيل...</p>
              </div>
            )}

            {!videosLoading && playlistVideos.length > 0 && (
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-[#162544] to-[#0a1628] rounded-3xl overflow-hidden border-2 border-teal-500/30 shadow-[0_0_40px_rgba(20,184,166,0.2)]">
                    <div className="relative aspect-video bg-black">
                      {activeVideoId ? (
                        <iframe
                          key={activeVideoId}
                          src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?rel=0&modestbranding=1&hl=ar`}
                          title="مشغل فيديو بلدة عزالدين"
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          loading="lazy"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          {playlistVideos[0] && (
                            <img
                              src={playlistVideos[0].thumbnail.replace('hqdefault', 'maxresdefault')}
                              alt={playlistVideos[0].title}
                              className="w-full h-full object-cover opacity-60"
                              loading="lazy"
                            />
                          )}
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-2xl shadow-red-600/50">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                            <p className="text-white text-xl font-bold mb-2">قائمة تشغيل بلدة عزالدين</p>
                            <p className="text-gray-300 text-sm">اختر فيديو من القائمة لبدء المشاهدة</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-4 md:p-5">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 line-clamp-2">
                        {(activeVideoId ? playlistVideos.find(v => v.id === activeVideoId) : playlistVideos[0])?.title || 'تشغيل الفيديو'}
                      </h3>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <span>🏕️</span>
                          <span>قناة قبيلة النعيم أهل الصفرا ٥١٥</span>
                        </div>
                        <a
                          href={playlistData?.playlistUrl || 'https://www.youtube.com/playlist?list=PLkJUzCOLsXAONtoYl_4wd1COLwTg5CAft'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-1.5 rounded-full text-sm transition-all"
                        >
                          <span>كل الفيديوهات</span>
                          <span>↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-[#162544] to-[#0a1628] rounded-3xl border-2 border-white/10 p-3 md:p-4 h-full">
                    <div className="flex items-center justify-between mb-3 px-2">
                      <h3 className="text-base md:text-lg font-bold text-white flex items-center gap-2">
                        <span>▶</span>
                        <span>قائمة التشغيل</span>
                      </h3>
                      <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full">
                        {playlistVideos.length} فيديو
                      </span>
                    </div>
                    <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1 custom-scrollbar">
                      {playlistVideos.map((video, idx) => {
                        const isActive = (activeVideoId || playlistVideos[0]?.id) === video.id
                        return (
                          <button
                            key={video.id}
                            onClick={() => setActiveVideoId(video.id)}
                            className={`w-full text-right flex gap-2 md:gap-3 p-2 rounded-xl transition-all group ${
                              isActive
                                ? 'bg-teal-500/15 border-2 border-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.3)]'
                                : 'hover:bg-white/5 border-2 border-transparent'
                            }`}
                          >
                            <div className="relative w-24 md:w-28 aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-black">
                              <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                              {isActive && (
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                                      <path d="M8 5v14l11-7z"/>
                                    </svg>
                                  </div>
                                </div>
                              )}
                              <div className="absolute top-1 right-1 bg-black/80 text-white text-[10px] px-1.5 py-0.5 rounded">
                                {idx + 1}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className={`text-xs md:text-sm font-bold leading-snug line-clamp-2 mb-1 ${
                                isActive ? 'text-teal-300' : 'text-white group-hover:text-teal-300'
                              }`}>
                                {video.title}
                              </h4>
                              <p className="text-[10px] md:text-xs text-gray-400 truncate">
                                قبيلة النعيم ٥١٥
                              </p>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 text-center">
              <a
                href="https://www.youtube.com/playlist?list=PLkJUzCOLsXAONtoYl_4wd1COLwTg5CAft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(220,38,38,0.4)]"
              >
                <span className="text-2xl">🏕️</span>
                <span>شاهد قائمة "بلدة عزالدين أبو حمرة" كاملة على يوتيوب</span>
                <span>↗</span>
              </a>
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
