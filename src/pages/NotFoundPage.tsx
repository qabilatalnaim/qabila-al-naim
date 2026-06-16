import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import OptimizedImage from '../components/OptimizedImage'

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
)

export default function NotFoundPage() {
  const popularPages = [
    { href: '/history', label: 'النسب والتاريخ', emoji: '📖' },
    { href: '/town', label: 'بلدة عز الدين', emoji: '🏘️' },
    { href: '/camels', label: 'الإبل', emoji: '🐪' },
    { href: '/horses', label: 'الخيل', emoji: '🐎' },
    { href: '/poetry', label: 'الشعر النبطي', emoji: '📜' },
    { href: '/tent', label: 'بيت الشعر', emoji: '⛺' },
  ]

  return (
    <>
      <SEO
        title="الصفحة غير موجودة (404) | قبيلة السادة النعيم"
        description="الصفحة التي تبحث عنها غير موجودة. يمكنك العودة للصفحة الرئيسية أو استكشاف قاعات التراث."
        url="/404"
        noindex={true}
      />
      <div className="min-h-screen bg-[#0a1628] pt-24 pb-16 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Breadcrumbs items={[{ label: '404 - الصفحة غير موجودة' }]} />

            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] leading-none">
                404
              </h1>
              <div className="text-6xl mb-4">🏜️</div>
            </div>

            {/* Message */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                الصفحة غير موجودة
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                يبدو أنّ الصفحة التي تبحث عنها قد انتقلت أو لم تعد متاحة.
                <br />
                يمكنك العودة للصفحة الرئيسية أو استكشاف قاعات التراث المتاحة.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0a1628] font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
              >
                <HomeIcon />
                <span>العودة للرئيسية</span>
              </Link>
              <a
                href="#popular"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-full border border-white/20 hover:bg-white/20 transition-all"
              >
                <SearchIcon />
                <span>استكشاف الموقع</span>
              </a>
            </div>

            {/* Popular Pages */}
            <div id="popular" className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 border border-[#D4AF37]/30">
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">
                🏛️ قاعات التراث المقترحة
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {popularPages.map((page) => (
                  <Link
                    key={page.href}
                    to={page.href}
                    className="group bg-white/5 hover:bg-[#D4AF37]/10 rounded-2xl p-4 border border-white/10 hover:border-[#D4AF37]/50 transition-all"
                  >
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                      {page.emoji}
                    </div>
                    <div className="text-white font-bold text-sm group-hover:text-[#D4AF37] transition-colors">
                      {page.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Logo */}
            <div className="mt-12">
              <OptimizedImage
                src="/images/logo.webp"
                alt="شعار قبيلة السادة النعيم"
                className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-[#D4AF37] opacity-50"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
