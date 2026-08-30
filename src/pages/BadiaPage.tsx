import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQSchema from '../components/FAQSchema';
import { seoConfig } from '../lib/seo-config';
import { useBadiaPlaylist } from '../lib/useSocialStats';

export default function BadiaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FAQ Schema for rich snippets
  const badiaFaqs = [
    {
      question: 'أين تقع البادية السورية (الحماد)؟',
      answer: 'الحماد السوري هو هضبة صحراوية شاسعة تقع في جنوب شرق سوريا، تمتد عبر محافظات حمص ودير الزور والرقة وحماة، وتُعدّ الموطن التاريخي لقبيلة النعيم أهل الصفرا ٥١٥.',
    },
    {
      question: 'ما هو الفرق بين الحماد والصحراء؟',
      answer: 'الحماد هو هضبة بازلتية من الحجر الأسود، بينما الصحراء رملية. الحماد السوري يختلف عن النفود والربع الخالي بإنه صخري أكثر منه رملي.',
    },
    {
      question: 'هل البادية السورية مهد قبيلة النعيم؟',
      answer: 'نعم، البادية السورية (الحماد) هي الموطن التاريخي لقبيلة النعيم أهل الصفرا ٥١٥، حيث استقرّت على هذه الأرض منذ قرون طويلة، وعاشت على تربية الإبل والخيل.',
    },
    {
      question: 'ما هي أبرز معالم البادية السورية؟',
      answer: 'تشمل: قصر الحير الغربي، آثار تدمر، الهضاب البازلتية السوداء، وآبار المياه الجوفية. كما تضم تنوعاً بيئياً من نباتات الرِّمث والقيصوم.',
    },
  ];

  // قائمة تشغيل "البادية السورية" - ديناميكية من YouTube
  const { videos: playlistVideos, data: playlistData, loading: videosLoading, refresh: refreshPlaylist } = useBadiaPlaylist();
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try { await refreshPlaylist(); } finally { setTimeout(() => setIsRefreshing(false), 600); }
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white" dir="rtl">
      <SEO {...seoConfig.badia} />
      <FAQSchema faqs={badiaFaqs} pageUrl="https://qabilat-alnaim.qabilat-alnaim.workers.dev/badia" />
      <h1 className="sr-only">البادية السورية (الحماد) - مهد قبيلة النعيم أهل الصفرا ٥١٥</h1>

      {/* Header */}
      <div className="bg-gradient-to-b from-stone-900 to-[#0a1628] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-amber-700/20 px-6 py-2 rounded-full mb-6">
              <span className="text-4xl">🏜️</span>
              <span className="text-amber-400 font-bold">الحماد السوري</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">البادية السورية (الحماد)</h2>
            <p className="text-gray-400 text-lg">مهد قبيلة النعيم - الأرض والتاريخ والجغرافيا</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">

          {/* البانوراما الرئيسية */}
          <figure className="mb-12 relative rounded-3xl overflow-hidden border-2 border-amber-600/40 shadow-[0_0_50px_rgba(217,119,6,0.3)]">
            <picture>
              <source
                type="image/avif"
                srcSet="/images/syrian-badia-2026-400w.avif 400w, /images/syrian-badia-2026-800w.avif 800w, /images/syrian-badia-2026-1200w.avif 1200w, /images/syrian-badia-2026-1600w.avif 1600w, /images/syrian-badia-2026-2000w.avif 2000w"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              />
              <source
                type="image/webp"
                srcSet="/images/syrian-badia-2026-400w.webp 400w, /images/syrian-badia-2026-800w.webp 800w, /images/syrian-badia-2026-1200w.webp 1200w, /images/syrian-badia-2026-1600w.webp 1600w, /images/syrian-badia-2026-2000w.webp 2000w"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              />
              <img
                src="/images/syrian-badia-2026-2000w.webp"
                srcSet="/images/syrian-badia-2026-400w.webp 400w, /images/syrian-badia-2026-800w.webp 800w, /images/syrian-badia-2026-1200w.webp 1200w, /images/syrian-badia-2026-1600w.webp 1600w, /images/syrian-badia-2026-2000w.webp 2000w"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                alt="بانوراما الحماد السوري - هضبة البازلت السوداء في البادية السورية مع قطيع جمال وخيمة بدوية وأطلال رومانية قديمة في الخلفية"
                className="w-full h-auto object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width="2752"
                height="1536"
              />
            </picture>
            <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/70 to-transparent px-3 md:px-6 py-3 md:py-4">
              <p className="text-center text-white text-xs sm:text-sm md:text-base font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                الحماد السوري — هضبة البازلت، مهد قبيلة النعيم في البادية
              </p>
            </figcaption>
          </figure>

          {/* نبذة عن البادية */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-stone-900/40 via-[#162544] to-[#0a1628] rounded-3xl p-8 md:p-10 border-2 border-amber-700/30">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-amber-700/30 px-5 py-2 rounded-full mb-4">
                  <span className="text-2xl">📜</span>
                  <span className="text-amber-300 font-bold text-sm">نبذة عن البادية السورية</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-amber-400 mb-4">
                  الحماد السوري
                </h2>
                <div className="inline-flex items-center gap-2 bg-amber-500/20 px-4 py-1.5 rounded-full">
                  <span className="text-amber-300 font-bold text-sm">هضبة بازلتية شاسعة في قلب الشام</span>
                </div>
              </div>

              <div className="max-w-3xl mx-auto space-y-4 text-gray-200 leading-loose text-lg">
                <p>
                  <span className="text-amber-300 font-bold">الحماد السوري</span> هو هضبة صحراوية شاسعة تقع في
                  <span className="text-amber-300 font-bold"> جنوب شرق سوريا</span>، وتمتد على مساحات واسعة من
                  محافظات <span className="text-amber-300 font-bold">حمص ودير الزور والرقة وحماة</span>، حيث تشكّل
                  الامتداد الطبيعي لشبه الجزيرة العربية في بلاد الشام.
                </p>
                <p>
                  تتكوّن هذه الهضبة في معظمها من <span className="text-amber-300 font-bold">الحجر البازلتي الأسود</span>
                  الذي أعطاها اسمها (الحماد من حَمَدَ بمعنى اشتدّ واسوَدّ)، وهي أرض فقيرة بالمياه لكنها غنية
                  بتراثها وأصالة أهلها من القبائل البدوية العريقة.
                </p>
                <p>
                  تُعدّ الحماد السوري <span className="text-amber-300 font-bold">الموطن التاريخي</span> لقبيلة
                  النعيم أهل الصفرا ٥١٥، حيث استقرّت هذه القبيلة على هذه الأرض منذ قرون طويلة، وعاشت على
                  تربية الإبل والخيل والغنم، واستثمرت مواردها الطبيعية بما يضمن لها البقاء والازدهار.
                </p>
              </div>
            </div>
          </div>

          {/* خصائص الحماد */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
              <span>🗺️</span> خصائص البادية السورية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: '🪨',
                  title: 'الحجر البازلتي',
                  desc: 'هضبة من الحجر البازلتي الأسود، تكوّنت من نشاط بركاني قديم، وتُغطيها الحصى والصخور البركانية'
                },
                {
                  icon: '🏜️',
                  title: 'مساحة شاسعة',
                  desc: 'تمتد على مساحات واسعة تقدّر بعشرات الآلاف من الكيلومترات المربعة، وتُعدّ من أكبر الصحاري في المنطقة'
                },
                {
                  icon: '☀️',
                  title: 'مناخ صحراوي قاري',
                  desc: 'مُناخ قاري حار وجاف صيفاً، بارد قليل الأمطار شتاءً، وتتفاوت درجات الحرارة بين فصول السنة'
                },
                {
                  icon: '💧',
                  title: 'موارد مائية محدودة',
                  desc: 'أراضي فقيرة بالمياه السطحية، تعتمد على آبار المياه الجوفية، وتنتشر فيها بعض الواحات'
                },
                {
                  icon: '🌿',
                  title: 'نباتات طبيعية',
                  desc: 'تنمو فيها نباتات صحراوية محلية كالرمث والقيصوم والشيح، إضافة إلى بعض الزهور البرية في موسم الربيع'
                },
                {
                  icon: '🐪',
                  title: 'موطن الإبل',
                  desc: 'بيئة مثالية لتربية الإبل والخيل والغنم، حيث المراعي الطبيعية الشاسعة في فصل الربيع'
                },
                {
                  icon: '🏛️',
                  title: 'آثار تاريخية',
                  desc: 'تحتضن آثاراً رومانية وقبل إسلامية مهمة كـ قصر الحير الغربي وقلعة الحلبية وأطلال تدمر القريبة'
                },
                {
                  icon: '🧭',
                  title: 'ممر تاريخي',
                  desc: 'كانت البادية ممرّاً تاريخياً للقوافل التجارية بين الشام والعراق وشبه الجزيرة العربية'
                },
              ].map((item, index) => (
                <div key={index} className="bg-amber-700/10 rounded-xl p-6 border border-amber-600/30 hover:border-amber-500 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-300 mb-2">{item.title}</h3>
                      <p className="text-gray-300 leading-relose">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* العلاقة بين البادية والقبيلة */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
              <span>🤝</span> العلاقة بين البادية وقبيلة النعيم
            </h2>
            <div className="bg-gradient-to-br from-amber-900/30 to-[#0a1628] rounded-3xl p-8 border-2 border-amber-600/30">
              <div className="space-y-4 text-gray-200 leading-loose text-lg">
                <p>
                  ارتبطت <span className="text-amber-300 font-bold">قبيلة النعيم أهل الصفرا ٥١٥</span> بالبادية
                  السورية ارتباطاً وثيقاً عبر التاريخ، فالأرض <span className="text-amber-300 font-bold">جزءٌ
                  من هويتها</span>، والتراث الذي تحمله القبيلة نابع من بيئتها الصحراوية الأصيلة.
                </p>
                <p>
                  شكّلت البادية <span className="text-amber-300 font-bold">المدرسة الأولى</span> لأبناء القبيلة،
                  حيث تعلّموا منها الفروسية والصبر والشجاعة والكرم، واكتسبوا خبرات العيش في ظروفها القاسية
                  بكل صمود واقتدار، وتوارثوا هذه القيم جيلاً بعد جيل.
                </p>
                <p>
                  وإلى جانب حياة البادية، <span className="text-amber-300 font-bold">ارتبطت القبيلة ببلدة عزّ
                  الدين أبو حمرة</span> في ريف حمص كموطن تاريخي ومركز للتجمّع، حيث تتنقّل القبيلة بين
                  <span className="text-amber-300 font-bold"> حياة البادية في مواسم المراعي</span> وبين
                  الاستقرار في البلدة.
                </p>
                <p className="text-center text-amber-300 font-bold text-xl pt-4 border-t border-amber-700/30">
                  فالبادية والبلدة وجهان لعملة واحدة، هما أصل قبيلة النعيم ومهدها الأول
                </p>
              </div>
            </div>
          </div>

          {/* البطاقات الإضافية */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
              <span>🌟</span> ملامح من حياة البادية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '🏕️', title: 'بيت الشعر', desc: 'خيمة بدوية من شعر الماعز، رمز الحياة في البادية، وملتقى الضيوف والمجالس', link: '/tent' },
                { icon: '☕', title: 'القهوة العربية', desc: 'طقس الضيافة الأصيل، تبدأ بها المجالس، وتُعدّ رمز الكرم في البادية', link: '/coffee' },
                { icon: '🐪', title: 'الإبل', desc: 'سفينة الصحراء، رفيق الدرب، ومصدر الرزق والثراء لأهل البادية', link: '/camels' },
                { icon: '🐎', title: 'الخيل العربي', desc: 'فخر العرب ومصدر قوتهم، تربية الخيل فنٌ متوارث في البادية', link: '/horses' },
                { icon: '🐑', title: 'الغنم', desc: 'من مصادر المعيشة، ترتبط بحياة البادية، ويُنتج منها الصوف والحليب واللحم', link: '/sheep' },
                { icon: '✒️', title: 'الوسم ٥١٥', desc: 'رمز الانتماء الذي يميّز أبناء القبيلة، وسمت به الإبل منذ القدم', link: '/wasm' },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="group block bg-gradient-to-br from-stone-900/50 to-[#0a1628] rounded-2xl p-6 border-2 border-amber-700/30 hover:border-amber-500 transition-all duration-300 hover:transform hover:scale-[1.02]"
                >
                  <div className="text-5xl mb-3 text-center group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-xl font-bold text-amber-300 mb-2 text-center group-hover:text-amber-200 transition-colors">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              قسم قائمة تشغيل البادية السورية - ديناميكي من YouTube
              ═══════════════════════════════════════════════════════════ */}
          <div className="max-w-6xl mx-auto mt-20 mb-12 px-4">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600/20 to-stone-600/20 px-6 py-2.5 rounded-full border border-amber-500/40 mb-4">
                <span className="text-2xl">🏜️</span>
                <span className="text-lg md:text-xl font-bold text-amber-400">قائمة تشغيل البادية السورية — فيديوهات مختارة</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                شاهد جمال البادية على الشاشة
              </h2>
              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                مجموعة منتقاة من فيديوهات القناة عن الحماد السوري، مطر البادية، ربيع الصحراء، الكمأة، حياة البدو، وأصالة الأرض التي تنبض بالحياة
              </p>
              {playlistData && (
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm">
                  <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-full">
                    <span>🎬</span>
                    <span className="font-bold text-white">{playlistData.count}</span>
                    <span>فيديو</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-full">
                    <span className={`w-2 h-2 rounded-full ${playlistData.source === 'live' ? 'bg-amber-400 animate-pulse' : 'bg-gray-400'}`}></span>
                    <span>{playlistData.source === 'live' ? 'مباشر من يوتيوب' : 'نسخة احتياطية'}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-full">
                    <span>⏰</span>
                    <span>آخر تحديث: {new Date(playlistData.updatedAt).toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}</span>
                  </span>
                  <button
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                    className="inline-flex items-center gap-1.5 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 hover:text-white px-3 py-1.5 rounded-full font-bold transition-all disabled:opacity-50"
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
                <div className="inline-block w-12 h-12 border-4 border-amber-500/30 border-t-amber-400 rounded-full animate-spin"></div>
                <p className="text-gray-400 mt-4">جاري تحميل قائمة التشغيل...</p>
              </div>
            )}

            {!videosLoading && playlistVideos.length > 0 && (
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-[#162544] to-[#0a1628] rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-[0_0_40px_rgba(217,119,6,0.2)]">
                    <div className="relative aspect-video bg-black">
                      {activeVideoId ? (
                        <iframe
                          key={activeVideoId}
                          src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?rel=0&modestbranding=1&hl=ar`}
                          title="مشغل فيديو البادية السورية"
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
                            <p className="text-white text-xl font-bold mb-2">قائمة تشغيل البادية السورية</p>
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
                          <span>🏜️</span>
                          <span>قناة قبيلة النعيم أهل الصفرا ٥١٥</span>
                        </div>
                        <a
                          href={playlistData?.playlistUrl || 'https://www.youtube.com/playlist?list=PLkJUzCOLsXAMSBCKDbSe9xlYj1U2tJlmW'}
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
                        const isActive = (activeVideoId || playlistVideos[0]?.id) === video.id;
                        return (
                          <button
                            key={video.id}
                            onClick={() => setActiveVideoId(video.id)}
                            className={`w-full text-right flex gap-2 md:gap-3 p-2 rounded-xl transition-all group ${
                              isActive
                                ? 'bg-amber-500/15 border-2 border-amber-400 shadow-[0_0_20px_rgba(217,119,6,0.3)]'
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
                                isActive ? 'text-amber-400' : 'text-white group-hover:text-amber-400'
                              }`}>
                                {video.title}
                              </h4>
                              <p className="text-[10px] md:text-xs text-gray-400 truncate">
                                قبيلة النعيم ٥١٥
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 text-center">
              <a
                href="https://www.youtube.com/playlist?list=PLkJUzCOLsXAMSBCKDbSe9xlYj1U2tJlmW"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(220,38,38,0.4)]"
              >
                <span className="text-2xl">🏜️</span>
                <span>شاهد قائمة "البادية السورية" كاملة على يوتيوب</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-amber-700/20 hover:bg-amber-700/30 text-amber-300 font-bold px-8 py-3 rounded-full border-2 border-amber-600/40 hover:border-amber-500 transition-all"
            >
              <span>←</span>
              <span>العودة للرئيسية</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
