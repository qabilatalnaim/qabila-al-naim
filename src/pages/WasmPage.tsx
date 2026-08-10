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

export default function WasmPage() {
  return (
    <>
      <SEO {...seoConfig.wasm} />
      <Breadcrumbs items={[{ label: 'الوسم' }]} />
      <div className="min-h-screen bg-[#0a1628] pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#162544] to-[#0a1628] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-purple-600/20 px-6 py-2 rounded-full mb-6">
              <span className="text-4xl">✒️</span>
              <span className="text-purple-400 font-bold">الوسم</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">قاعة الوسم</h1>
            <p className="text-gray-400 text-lg">رمز ٥١٥ وتاريخ الوسم ودلالة الانتماء</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-purple-600/30 mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-purple-600 rounded-2xl text-4xl">
                ٥١٥
              </div>
            </div>
            <p className="text-gray-200 text-lg leading-loose text-center mb-6">
              الوسم في البادية ليس مجرد علامة، بل هو هوية ونسب وتاريخ يُحفظ عبر الأجيال.
              ووسم ٥١٥ هو وسم بني هاشم الجامع الذي يرمز إلى الانتماء للنسب الهاشمي الشريف.
            </p>
          </div>

          {/* صورة وسم بني هاشم (٥١٥) - البانوراما المدمج بالنص العربي */}
          <figure className="mb-12 relative rounded-3xl overflow-hidden border-2 border-purple-500/40 shadow-[0_0_50px_rgba(168,85,247,0.3)]">
            <picture>
              <source
                type="image/avif"
                srcSet="/images/hashim-wasm-2026-400w.avif 400w, /images/hashim-wasm-2026-800w.avif 800w, /images/hashim-wasm-2026-1200w.avif 1200w, /images/hashim-wasm-2026-1600w.avif 1600w, /images/hashim-wasm-2026-2000w.avif 2000w"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              />
              <source
                type="image/webp"
                srcSet="/images/hashim-wasm-2026-400w.webp 400w, /images/hashim-wasm-2026-800w.webp 800w, /images/hashim-wasm-2026-1200w.webp 1200w, /images/hashim-wasm-2026-1600w.webp 1600w, /images/hashim-wasm-2026-2000w.webp 2000w"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              />
              <img
                src="/images/hashim-wasm-2026-1600w.webp"
                srcSet="/images/hashim-wasm-2026-400w.webp 400w, /images/hashim-wasm-2026-800w.webp 800w, /images/hashim-wasm-2026-1200w.webp 1200w, /images/hashim-wasm-2026-1600w.webp 1600w, /images/hashim-wasm-2026-2000w.webp 2000w"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                alt="إبل قبيلة السادة النعيم أهل الصفرا ٥١٥ - وسم بني هاشم ٥١٥ الجامع، أهل الصفرا في ربيع الحماد السوري، تخضر الأرض وتسمو الأصالة"
                className="w-full h-auto object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width="1672"
                height="941"
              />
            </picture>
            <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/70 to-transparent px-3 md:px-6 py-3 md:py-4">
              <p className="text-center text-white text-xs sm:text-sm md:text-base font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                وسم بني هاشم (٥١٥) — هوية النسب الأصيل في الحماد السوري
              </p>
            </figcaption>
          </figure>

          {/* Section 1: The 515 Wasm */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
              <span>📋</span> وسم بني هاشم (٥١٥)
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-purple-600/20">
              <div className="space-y-6">
                <div className="bg-purple-600/10 rounded-xl p-6 border border-purple-600/30">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">أصل الوسم</h3>
                  <p className="text-gray-300 leading-relaxed">
                    وسم ٥١٥ هو الوسم الجامع لقبائل بني هاشم، الذي أجمع عليه المشايخ والعوارف،
                    ليكون رمزاً موحداً يجمع أبناء النسب الهاشمي تحت راية واحدة.
                  </p>
                </div>
                <div className="bg-purple-600/10 rounded-xl p-6 border border-purple-600/30">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">دلالته</h3>
                  <p className="text-gray-300 leading-relaxed">
                    يُمثّل الوسم العزّ ووحدة الصف وقوة الرابط بين أبناء القبائل،
                    ويُجسّد تاريخاً ممتداً من المجد والأصالة.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* صورة وسم قبيلة النعيم (٥١) - البانوراما بالنص العربي */}
          <figure className="mb-12 relative rounded-3xl overflow-hidden border-2 border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.3)]">
            <picture>
              <source
                type="image/avif"
                srcSet="/images/naeem-wasm-2026-400w.avif 400w, /images/naeem-wasm-2026-800w.avif 800w, /images/naeem-wasm-2026-1200w.avif 1200w, /images/naeem-wasm-2026-1600w.avif 1600w, /images/naeem-wasm-2026-2000w.avif 2000w"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              />
              <source
                type="image/webp"
                srcSet="/images/naeem-wasm-2026-400w.webp 400w, /images/naeem-wasm-2026-800w.webp 800w, /images/naeem-wasm-2026-1200w.webp 1200w, /images/naeem-wasm-2026-1600w.webp 1600w, /images/naeem-wasm-2026-2000w.webp 2000w"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              />
              <img
                src="/images/naeem-wasm-2026-1600w.webp"
                srcSet="/images/naeem-wasm-2026-400w.webp 400w, /images/naeem-wasm-2026-800w.webp 800w, /images/naeem-wasm-2026-1200w.webp 1200w, /images/naeem-wasm-2026-1600w.webp 1600w, /images/naeem-wasm-2026-2000w.webp 2000w"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                alt="إبل قبيلة السادة النعيم أهل الصفرا ٥١ - وسم قبيلة النعيم ٥١، أهل الصفرا في ربيع البادية السورية، موروث الأصالة من تراث البادية"
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
                width="1672"
                height="941"
              />
            </picture>
            <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/70 to-transparent px-3 md:px-6 py-3 md:py-4">
              <p className="text-center text-white text-xs sm:text-sm md:text-base font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                وسم قبيلة النعيم (٥١) — رمز الانتماء الخاص بأبناء القبيلة
              </p>
            </figcaption>
          </figure>

          {/* Section 2: Wasm 51 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
              <span>✒️</span> وسم قبيلة النعيم (٥١)
            </h2>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-purple-600/20">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-xl text-2xl font-black text-white">
                  ٥١
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                ارتبط وسم ٥١ بأبناء قبيلة النعيم، ويعبّر عن خصوصية داخلية تعكس عمق الانتماء وتراث القبيلة.
                وهو رمز يُستخدم للتمييز بين أبناء القبيلة.
              </p>
            </div>
          </div>

          {/* Section 3: Announcement */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
              <span>📢</span> إعلان القبيلة
            </h2>
            <div className="bg-gradient-to-br from-purple-900/30 to-[#0a1628] rounded-3xl p-10 border border-purple-600/30 text-center">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">تأكيد الهوية</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                تعلن قبيلة النعيم التزامها بـ <span className="text-purple-400 font-bold text-xl">الوسم (٥١٥)</span> كرمز موحّد،
                تأكيداً على وحدة الصف واعتزازاً بالانتماء.
              </p>
              <div className="bg-purple-600/20 rounded-xl p-6 border border-purple-600/40">
                <p className="text-purple-300 text-xl font-bold">
                  "واعتصموا بحبل الله جميعاً ولا تفرقوا"
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all"
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