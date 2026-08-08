import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import OptimizedImage from '../components/OptimizedImage'
import Breadcrumbs from '../components/Breadcrumbs'
import { seoConfig } from '../lib/seo-config'
import { useState } from 'react'
import { useCoffeePlaylist } from '../lib/useSocialStats'

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

export default function CoffeePage() {
  // قائمة تشغيل "قهوة النعيم" - ديناميكية من YouTube
  const { videos: playlistVideos, data: playlistData, loading: videosLoading, refresh: refreshPlaylist } = useCoffeePlaylist()
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = async () => {
    setIsRefreshing(true)
    try { await refreshPlaylist() } finally { setTimeout(() => setIsRefreshing(false), 600) }
  }

  return (
    <>
      <SEO {...seoConfig.coffee} />
      <Breadcrumbs items={[{ label: 'القهوة العربية' }]} />
      <div className="min-h-screen bg-[#0a1628] pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#162544] to-[#0a1628] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-orange-600/20 px-6 py-2 rounded-full mb-6">
              <span className="text-4xl">☕</span>
              <span className="text-orange-400 font-bold">القهوة العربية</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">الفناجين الخمسة عند العرب</h1>
            <p className="text-gray-400 text-lg">من رموز الكرم والأصالة في البادية</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-orange-600/30 mb-12">
            <div className="text-center mb-8">
              <span className="text-6xl">☕</span>
            </div>
            <p className="text-gray-200 text-lg leading-loose text-center mb-6">
              تُعد القهوة العربية من أهم العادات والتقاليد الأصيلة عند العرب، خصوصًا في مجالس البادية والقبائل،
              حيث تحمل كل فنجان دلالة ومعنى يعكس الكرم والشهامة والأمان.
            </p>
            <p className="text-gray-300 text-lg leading-loose text-center mb-6">
              📜 تُقدَّم القهوة بخمسة فناجين، ولكل فنجان دلالة خاصة:
            </p>
            <div className="bg-orange-600/10 rounded-2xl p-6 border border-orange-600/30 text-center">
              <p className="text-orange-400 font-bold text-xl">"فنجالها يشرّف"</p>
              <p className="text-gray-400 text-sm mt-2">من أمثال العرب عن القهوة</p>
            </div>
          </div>

          {/* Section 1: فنجان الهيف */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
              <span>☕</span> فنجان الهيف
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-orange-600/20">
              <p className="text-gray-300 leading-relaxed mb-4">
                يشربه المعزّب أولًا لإثبات سلامة القهوة، ويرمز إلى الأمان والثقة.
              </p>
              <div className="bg-orange-600/10 rounded-xl p-6 border border-orange-600/30">
                <p className="text-orange-400 font-semibold text-center text-lg">
                  رمز الأمان والثقة
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: فنجان الضيف */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
              <span>☕</span> فنجان الضيف
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-orange-600/20">
              <p className="text-gray-300 leading-relaxed mb-4">
                فنجان الكرامة والترحيب، أول فنجان يُقدَّم للضيف، وهو رمز الكرم وحسن الضيافة.
              </p>
              <div className="bg-orange-600/10 rounded-xl p-6 border border-orange-600/30">
                <p className="text-orange-400 font-semibold text-center text-lg">
                  رمز الكرم وحسن الضيافة
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: فنجان الكيف */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
              <span>☕</span> فنجان الكيف
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-orange-600/20">
              <p className="text-gray-300 leading-relaxed mb-4">
                فنجان الأنس والمودة، يُشرب للاستمتاع بمذاق القهوة والأنس بالمجلس.
              </p>
              <div className="bg-orange-600/10 rounded-xl p-6 border border-orange-600/30">
                <p className="text-orange-400 font-semibold text-center text-lg">
                  رمز الأنس والمودة
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: فنجان السيف */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
              <span>☕</span> فنجان السيف
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-orange-600/20">
              <p className="text-gray-300 leading-relaxed mb-4">
                فنجان النخوة والعهد، يرمز إلى الفزعة والنخوة والوقوف مع صاحب البيت عند الشدائد.
              </p>
              <div className="bg-orange-600/10 rounded-xl p-6 border border-orange-600/30">
                <p className="text-orange-400 font-semibold text-center text-lg">
                  رمز النخوة والشجاعة والوفاء
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: فنجان الهجال (الفارس) */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
              <span>☕</span> فنجان الهجال (الفارس)
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-orange-600/20">
              <p className="text-gray-300 leading-relaxed mb-4">
                فنجان الموقف والخصومة والثأر، يرمز إلى الفروسية والشجاعة وتحمل المسؤولية والدفاع عن الديار.
              </p>
              <div className="bg-orange-600/10 rounded-xl p-6 border border-orange-600/30">
                <p className="text-orange-400 font-semibold text-center text-lg">
                  رمز الفروسية والدفاع عن الديار
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-[#162544] to-[#0a1628] rounded-3xl p-10 border border-[#D4AF37]/30 text-center">
            <span className="text-4xl">🏜️</span>
            <p className="text-gray-300 text-lg leading-loose mt-4">
              هذه العادات ما زالت حاضرة في الشعر البدوي والمجالس التراثية حتى اليوم،
              وتُعد من أبرز رموز الكرم العربي الأصيل.
            </p>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              قسم قائمة تشغيل القهوة - ديناميكي من YouTube
              ═══════════════════════════════════════════════════════════ */}
          <div className="max-w-6xl mx-auto mt-20 mb-12 px-4">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600/20 to-amber-700/20 px-6 py-2.5 rounded-full border border-red-500/40 mb-4">
                <span className="text-2xl">☕</span>
                <span className="text-lg md:text-xl font-bold text-amber-400">قائمة تشغيل القهوة — فيديوهات مختارة</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                تعرّف على قهوة الضيافة عبر الشاشة
              </h2>
              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                مجموعة منتقاة من فيديوهات القناة تتناول فنجان القهوة، الفناجين الخمسة، طقوس الضيافة، وأصالة المجالس البدوية
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
                  <div className="bg-gradient-to-br from-[#162544] to-[#0a1628] rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.2)]">
                    <div className="relative aspect-video bg-black">
                      {activeVideoId ? (
                        <iframe
                          key={activeVideoId}
                          src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?rel=0&modestbranding=1&hl=ar`}
                          title="مشغل فيديو القهوة"
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
                            <p className="text-white text-xl font-bold mb-2">قائمة تشغيل القهوة</p>
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
                          <span>☕</span>
                          <span>قناة قبيلة النعيم أهل الصفرا ٥١٥</span>
                        </div>
                        <a
                          href={playlistData?.playlistUrl || 'https://www.youtube.com/playlist?list=PLkJUzCOLsXAMZaiQMBB7wnuFb4GH11ddj'}
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
                                ? 'bg-amber-500/15 border-2 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
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
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 text-center">
              <a
                href="https://www.youtube.com/playlist?list=PLkJUzCOLsXAMZaiQMBB7wnuFb4GH11ddj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(220,38,38,0.4)]"
              >
                <span className="text-2xl">☕</span>
                <span>شاهد قائمة "قهوة النعيم" كاملة على يوتيوب</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all"
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