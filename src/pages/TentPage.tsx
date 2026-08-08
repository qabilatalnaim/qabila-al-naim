import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import OptimizedImage from '../components/OptimizedImage'
import Breadcrumbs from '../components/Breadcrumbs'
import { seoConfig } from '../lib/seo-config'
import { useState } from 'react'
import { useTentPlaylist } from '../lib/useSocialStats'

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

export default function TentPage() {
  // قائمة تشغيل "بيوت الشعر" - ديناميكية من YouTube
  const { videos: playlistVideos, data: playlistData, loading: videosLoading, refresh: refreshPlaylist } = useTentPlaylist()
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = async () => {
    setIsRefreshing(true)
    try { await refreshPlaylist() } finally { setTimeout(() => setIsRefreshing(false), 600) }
  }

  return (
    <>
      <SEO {...seoConfig.tent} />
      <Breadcrumbs items={[{ label: 'بيت الشعر' }]} />
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

          {/* ═══════════════════════════════════════════════════════════
              قسم قائمة تشغيل بيوت الشعر - ديناميكي من YouTube
              ═══════════════════════════════════════════════════════════ */}
          <div className="max-w-6xl mx-auto mt-20 mb-12 px-4">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 px-6 py-2.5 rounded-full border border-red-500/40 mb-4">
                <span className="text-2xl">🏕️</span>
                <span className="text-lg md:text-xl font-bold text-orange-400">قائمة تشغيل بيوت الشعر — فيديوهات مختارة</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                تعرّف على بيت الشعر عبر الشاشة
              </h2>
              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                مجموعة منتقاة من فيديوهات القناة تتناول بيوت الشعر البدوية، صناعتها، أقسامها، ودورها في حياة قبيلة السادة النعيم
              </p>
              {playlistData && (
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm">
                  <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-full">
                    <span>🎬</span>
                    <span className="font-bold text-white">{playlistData.count}</span>
                    <span>فيديو</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-full">
                    <span className={`w-2 h-2 rounded-full ${playlistData.source === 'live' ? 'bg-orange-400 animate-pulse' : 'bg-gray-400'}`}></span>
                    <span>{playlistData.source === 'live' ? 'مباشر من يوتيوب' : 'نسخة احتياطية'}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-full">
                    <span>⏰</span>
                    <span>آخر تحديث: {new Date(playlistData.updatedAt).toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}</span>
                  </span>
                  <button
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                    className="inline-flex items-center gap-1.5 bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/40 text-orange-300 hover:text-white px-3 py-1.5 rounded-full font-bold transition-all disabled:opacity-50"
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
                <div className="inline-block w-12 h-12 border-4 border-orange-500/30 border-t-orange-400 rounded-full animate-spin"></div>
                <p className="text-gray-400 mt-4">جاري تحميل قائمة التشغيل...</p>
              </div>
            )}

            {!videosLoading && playlistVideos.length > 0 && (
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-[#162544] to-[#0a1628] rounded-3xl overflow-hidden border-2 border-orange-500/30 shadow-[0_0_40px_rgba(249,115,22,0.2)]">
                    <div className="relative aspect-video bg-black">
                      {activeVideoId ? (
                        <iframe
                          key={activeVideoId}
                          src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?rel=0&modestbranding=1&hl=ar`}
                          title="مشغل فيديو بيوت الشعر"
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
                            <p className="text-white text-xl font-bold mb-2">قائمة تشغيل بيوت الشعر</p>
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
                          href={playlistData?.playlistUrl || 'https://www.youtube.com/playlist?list=PLkJUzCOLsXAMdkfAUBYxaVXJjr8E8CL0_'}
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
                                ? 'bg-orange-500/15 border-2 border-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.3)]'
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
                                isActive ? 'text-orange-400' : 'text-white group-hover:text-orange-400'
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
                href="https://www.youtube.com/playlist?list=PLkJUzCOLsXAMdkfAUBYxaVXJjr8E8CL0_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(220,38,38,0.4)]"
              >
                <span className="text-2xl">🏕️</span>
                <span>شاهد قائمة "بيوت الشعر" كاملة على يوتيوب</span>
                <span>↗</span>
              </a>
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
          <Footer />
    </>
  )
}