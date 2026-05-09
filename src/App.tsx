import { useState, useEffect, useRef } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HistoryPage from './pages/HistoryPage'
import CamelsPage from './pages/CamelsPage'
import HorsesPage from './pages/HorsesPage'
import SheepPage from './pages/SheepPage'
import WasmPage from './pages/WasmPage'
import PoetryPage from './pages/PoetryPage'
import CoffeePage from './pages/CoffeePage'
import TraditionsPage from './pages/TraditionsPage'
import TentPage from './pages/TentPage'

// Icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
)

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
)

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3"/>
  </svg>
)

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7"/><path d="M19 12"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const TiktokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
)

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return <div ref={ref}>{count}{suffix}</div>
}

// Heritage Card Component
const HeritageCard = ({ icon, title, description, link, color }: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  color: string
}) => (
  <Link
    to={link}
    className="group relative bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl p-8 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(212,175,55,0.2)] block overflow-hidden"
  >
    {/* Decorative gradient */}
    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-3xl ${color}`}></div>

    {/* Icon */}
    <div className={`w-20 h-20 ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>

    {/* Content */}
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed mb-6">{description}</p>

    {/* Arrow */}
    <div className="flex items-center gap-2 text-[#D4AF37] font-semibold group-hover:gap-4 transition-all">
      <span>اكتشف المزيد</span>
      <ArrowRightIcon />
    </div>
  </Link>
)

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'about', label: 'نبذة عنا' },
    { id: 'heritage', label: 'التراث' },
    { id: 'videos', label: 'الفيديوهات' },
    { id: 'contact', label: 'تواصل معنا' },
  ]

  const socialLinks = {
    youtube: 'https://www.youtube.com/@qabilatalnaim',
    facebook: 'https://www.facebook.com/share/19n8j2XqBu/',
    instagram: 'https://www.instagram.com/qabilatalnaim',
    tiktok: 'https://www.tiktok.com/@qabilaalnaim',
    email: 'qabilaaalnaim@gmail.com',
  }

  const stats = [
    { number: 563, label: 'مشترك على يوتيوب', suffix: '+' },
    { number: 103, label: 'متابع على فيسبوك', suffix: 'K' },
    { number: 150, label: 'ألف مشاهدة', suffix: 'K+' },
    { number: 153, label: 'فيديو توثيقي', suffix: '+' },
  ]

  const featuredVideo = {
    id: 'KiIEUqNFh4w',
    title: 'من عاصمة قبيلة السادة النعيم إلى مدينة حمص عاصمة الثورة',
    description: 'رحلة توثيقية من عاصمة قبيلة السادة النعيم في الصفرا إلى مدينة حمص',
  }

  const heritageTopics = [
    {
      icon: <span className="text-4xl">📖</span>,
      title: 'النسب والتاريخ',
      description: 'سلسلة النسب الهاشمي، تاريخ قبيلة النعيم، البطون والأفخاذ',
      link: '/history',
      color: 'bg-[#D4AF37]/20 text-[#D4AF37]'
    },
    {
      icon: <span className="text-4xl">🐪</span>,
      title: 'الإبل',
      description: 'تربية الإبل، سلالات النعيم، فن الرعي في البادية',
      link: '/camels',
      color: 'bg-amber-600/20 text-amber-400'
    },
    {
      icon: <span className="text-4xl">🐎</span>,
      title: 'الخيل',
      description: 'الفروسية العربية، سلالات الخيل، فنون الرماية',
      link: '/horses',
      color: 'bg-emerald-600/20 text-emerald-400'
    },
    {
      icon: <span className="text-4xl">🐑</span>,
      title: 'الغنم',
      description: 'سلالة الغنم، العناية والرعي، أصالة السلالة',
      link: '/sheep',
      color: 'bg-blue-600/20 text-blue-400'
    },
    {
      icon: <span className="text-4xl">✒️</span>,
      title: 'الوسم',
      description: 'رمز ٥١٥، تاريخ الوسم، دلالة الانتماء',
      link: '/wasm',
      color: 'bg-purple-600/20 text-purple-400'
    },
    {
      icon: <span className="text-4xl">📜</span>,
      title: 'الشعر النبطي',
      description: 'قصائد الفخر، أهل الصفرا، المدائح والأرجاز',
      link: '/poetry',
      color: 'bg-rose-600/20 text-rose-400'
    },
    {
      icon: <span className="text-4xl">☕</span>,
      title: 'القهوة العربية',
      description: 'الدلة وطقوسها، فناجين الضيافة، كرم العرب',
      link: '/coffee',
      color: 'bg-orange-600/20 text-orange-400'
    },
    {
      icon: <span className="text-4xl">🏕️</span>,
      title: 'العادات والتقاليد',
      description: 'الكرم والضيافة، بيت الشعر، المجالس والأمجاد',
      link: '/traditions',
      color: 'bg-cyan-600/20 text-cyan-400'
    },
    {
      icon: <span className="text-4xl">⛺</span>,
      title: 'بيت الشعر',
      description: 'الخيمة العربية، دخلة البادية، كرم الضيافة',
      link: '/tent',
      color: 'bg-yellow-600/20 text-yellow-400'
    },
  ]

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-[#0a1628]">
          {/* Navigation */}
          <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a1628]/95 backdrop-blur-lg shadow-xl py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                  <img src="/images/logo.png" alt="شعار قبيلة النعيم" className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]" />
                  <div className="hidden sm:block">
                    <h1 className="font-bold text-lg text-white">قبيلة السادة النعيم</h1>
                    <p className="text-xs text-gray-400">أهل الصفرا</p>
                  </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-white hover:text-[#D4AF37] transition-colors font-medium"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0a1628] font-bold rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all"
                >
                  <YoutubeIcon />
                  <span>اشترك الآن</span>
                </a>

                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden p-2 text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
              </div>

              {/* Mobile Menu */}
              {isMenuOpen && (
                <div className="lg:hidden mt-4 pb-4 bg-[#0a1628]/95 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-right py-3 text-white hover:text-[#D4AF37] border-b border-white/10 last:border-0"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#162544] to-[#0a1628]">
              <div className="absolute inset-0 opacity-10">
                <img src="/images/banner.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D4AF37] rounded-full opacity-10 blur-[150px]"></div>
              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D4AF37] rounded-full opacity-10 blur-[150px]"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
              {/* Logo */}
              <div className="mb-10">
                <img
                  src="/images/logo.png"
                  alt="شعار قبيلة النعيم"
                  className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-[#D4AF37] shadow-[0_0_60px_rgba(212,175,55,0.4)]"
                />
              </div>

              {/* Banner */}
              <div className="mb-10">
                <img
                  src="/images/banner.jpg"
                  alt="بيرق قبيلة النعيم"
                  className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl border border-[#D4AF37]/30"
                />
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
                قبيلة <span className="text-[#D4AF37]">السادة</span> النعيم
              </h1>
              <p className="text-2xl text-[#D4AF37] font-bold mb-6">أهل الصفرا - تراث عربي أصيل</p>
              <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                منصّة توثّق تاريخ قبيلة السادة النعيم العريقة - السادة الرفاعية الموسوية الحسينية - نسب هاشمي متصل بالإمام الحسين رضي الله عنه
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('about')}
                  className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0a1628] font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
                >
                  اكتشف تاريخنا
                </button>
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-red-600 text-white font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  <YoutubeIcon />
                  شاهد الفيديوهات
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-[#D4AF37] mb-2">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-8 h-12 border-2 border-[#D4AF37] rounded-full flex justify-center pt-2">
                <div className="w-1 h-3 bg-[#D4AF37] rounded-full"></div>
              </div>
            </div>
          </section>

          {/* نبذة عن القبيلة Section */}
          <section id="about" className="py-24 bg-gradient-to-b from-[#162544] to-[#0a1628]">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 bg-[#D4AF37]/10 px-6 py-2 rounded-full mb-6">
                    <span className="text-3xl">📜</span>
                    <span className="text-[#D4AF37] font-bold">نبذة تاريخية</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4">قبيلة السادة النعيم</h2>
                  <p className="text-gray-400 text-lg">قبيلة عريقة من قبائل الشام العربية الأصيلة</p>
                </div>

                <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-10 md:p-14 border border-[#D4AF37]/30">
                  <div className="text-gray-200 text-lg leading-loose space-y-6">
                    {/* نبذة القبيلة - النص الجديد */}
                    <div className="bg-gradient-to-l from-[#D4AF37]/10 to-transparent p-6 rounded-r-2xl border-r-4 border-[#D4AF37]">
                      <p className="text-xl font-semibold text-[#D4AF37]">
                        قبيلة السادة النعيم
                      </p>
                      <p className="mt-3 leading-relaxed">
                        من القبائل العربية العريقة ذات الجذور الهاشمية الشريفة، تمتد في عمق التاريخ العربي،
                        وكان لها حضورٌ راسخ في بلاد الشام عبر العصور.
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-2xl">👑</span>
                      </div>
                      <div>
                        <p className="font-bold text-white text-lg">المكانة والقيادة</p>
                        <p className="text-gray-300 mt-1">
                          عُرفت بمكانتها الاجتماعية الرفيعة ودورها البارز في الإصلاح والقيادة بين القبائل العربية.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-2xl">⚔️</span>
                      </div>
                      <div>
                        <p className="font-bold text-white text-lg">القيم العربية الأصيلة</p>
                        <p className="text-gray-300 mt-1">
                          وتميّز أبناؤها بالتمسّك بالقيم العربية الأصيلة من كرمٍ وشهامةٍ ونخوةٍ وحفظٍ للعهود.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-2xl">🏠</span>
                      </div>
                      <div>
                        <p className="font-bold text-white text-lg">الجد المؤسس</p>
                        <p className="text-gray-300 mt-1">
                          ويعود نسبها إلى الجدّ الجامع الشيخ عزّ الدين أبو حمرة (أحمد بن نعيم)، وقد سُمّيت بلدة عزّ الدين باسمه تخليدًا لمكانته، وتُعدُّ إحدى أبرز حواضن هذه القبيلة العريقة، حيث تمثل رمزًا حيًا للأصالة والترابط القبلي.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#D4AF37]/10 rounded-2xl p-6 border border-[#D4AF37]/20 mt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">🏆</span>
                        <p className="text-[#D4AF37] font-bold text-xl">شعار القبيلة</p>
                      </div>
                      <p className="text-white font-semibold text-lg text-center">
                        فبقي اسم السادة النعيم عنوانًا للعزّ والسيادة،
                      </p>
                      <p className="text-gray-200 text-center mt-2">
                        ورمزًا للأصالة والامتداد المجيد في تاريخ القبائل العربية.
                      </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                        <div className="text-3xl font-black text-[#D4AF37]">1210</div>
                        <div className="text-gray-400 text-sm mt-1">عام التأسيس</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                        <div className="text-3xl font-black text-[#D4AF37]">700+</div>
                        <div className="text-gray-400 text-sm mt-1">سنة من التاريخ</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                        <div className="text-3xl font-black text-[#D4AF37]">٥١٥</div>
                        <div className="text-gray-400 text-sm mt-1">وسم القبيلة</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                        <div className="text-2xl font-black text-[#D4AF37]">عزالدين أبو حمرة</div>
                        <div className="text-gray-400 text-sm mt-1">الجد المؤسس</div>
                      </div>
                    </div>
                  </div>

                  {/* الهوية البصرية Section */}
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-[#D4AF37] mb-6 text-center">الهوية البصرية لقبيلة النعيم</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* بطاقة الشعار */}
                      <div className="bg-gradient-to-br from-[#162544] to-[#0a1628] rounded-2xl p-8 border-2 border-[#D4AF37]/30 hover:border-[#D4AF37]/50 transition-all">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center">
                            <span className="text-3xl">🛡️</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white">الشعار الرسمي</h4>
                            <p className="text-gray-400 text-sm">رمز الهوية والانتماء</p>
                          </div>
                        </div>
                        <div className="flex justify-center mb-6">
                          <img
                            src="/images/tribe-logo-calligraphy.jpg"
                            alt="شعار قبيلة السادة النعيم"
                            className="max-w-[200px] w-full rounded-xl shadow-lg border-2 border-[#D4AF37]/30"
                          />
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start gap-3">
                            <span className="text-[#D4AF37]">⚪</span>
                            <div>
                              <p className="text-white font-semibold">الخلفية البيضاء</p>
                              <p className="text-gray-400">لون النقاء والطهارة - من أحب الألوان إلى الإسلام</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="text-[#D4AF37]">☪️</span>
                            <div>
                              <p className="text-white font-semibold">كلمة التوحيد</p>
                              <p className="text-gray-400">أساس الدين وأول واجب على العباد</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="text-[#D4AF37]">☕</span>
                            <div>
                              <p className="text-white font-semibold">الدلة العربية</p>
                              <p className="text-gray-400">رمز الكرم والضيافة العربية الأصيلة</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="text-[#D4AF37]">⚔️</span>
                            <div>
                              <p className="text-white font-semibold">سيف ذو الفقار</p>
                              <p className="text-gray-400">رمز الشجاعة والعزة - منسوب للإمام علي رضي الله عنه</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* بطاقة الراية */}
                      <div className="bg-gradient-to-br from-[#162544] to-[#0a1628] rounded-2xl p-8 border-2 border-green-500/30 hover:border-green-500/50 transition-all">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center">
                            <span className="text-3xl">🚩</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white">الراية الرسمية</h4>
                            <p className="text-gray-400 text-sm">هوية تراثية وإسلامية متجذرة</p>
                          </div>
                        </div>
                        <div className="flex justify-center mb-6">
                          <img
                            src="/images/tribe-flag.jpg"
                            alt="راية قبيلة السادة النعيم"
                            className="max-w-[250px] w-full rounded-xl shadow-lg border-2 border-green-500/30"
                          />
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start gap-3">
                            <span className="text-green-400">⚪</span>
                            <div>
                              <p className="text-white font-semibold">اللون الأبيض</p>
                              <p className="text-gray-400">رمز النقاء والشرف والصدق - كان النبي ﷺ يحب البياض</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="text-green-400">☪️</span>
                            <div>
                              <p className="text-white font-semibold">شهادة الإسلام</p>
                              <p className="text-gray-400">التزام القبيلة بتحكيم شرع الله</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="text-green-400">🌴⚔️</span>
                            <div>
                              <p className="text-white font-semibold">النخلة والسيف</p>
                              <p className="text-gray-400">رمز الحياة والعطاء والشجاعة</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="text-green-400">🐪</span>
                            <div>
                              <p className="text-white font-semibold">النخوة: "أهل الصفرا"</p>
                              <p className="text-gray-400">نسبةً إلى الإبل الصفراء والفخر</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Heritage Section - متحف التراث */}
          <section id="heritage" className="py-24 bg-[#0a1628]">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-3 bg-[#D4AF37]/10 px-6 py-2 rounded-full mb-6">
                    <span className="text-3xl">🏛️</span>
                    <span className="text-[#D4AF37] font-bold">المتحف الرقمي</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4">قاعات التراث</h2>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    استكشف مختلف جوانب تراثنا العربي الأصيل عبر قاعاتنا المتخصصة
                  </p>
                </div>

                {/* Featured Card - النسب */}
                <div className="mb-12">
                  <Link
                    to="/history"
                    className="group relative bg-gradient-to-br from-[#0a1628] via-[#162544] to-[#0a1628] rounded-3xl p-12 border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 block overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37] rounded-full opacity-10 blur-[100px]"></div>
                    <div className="relative flex flex-col md:flex-row items-center gap-8">
                      <div className="w-32 h-32 bg-[#D4AF37] rounded-2xl flex items-center justify-center text-6xl">
                        📖
                      </div>
                      <div className="flex-1 text-center md:text-right">
                        <h3 className="text-3xl font-bold text-white mb-4">قاعة النسب والتاريخ</h3>
                        <p className="text-gray-300 text-lg mb-4">سلسلة النسب الهاشمي - تاريخ قبيلة النعيم - البطون والأفخاذ</p>
                        <div className="flex items-center gap-2 text-[#D4AF37] font-semibold">
                          <span>ادخل القاعة</span>
                          <ArrowRightIcon />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Grid of Heritage Topics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {heritageTopics.filter(t => t.link !== '/history').map((topic, index) => (
                    <HeritageCard
                      key={index}
                      icon={topic.icon}
                      title={topic.title}
                      description={topic.description}
                      link={topic.link}
                      color={topic.color}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Videos Section */}
          <section id="videos" className="py-24 bg-gradient-to-b from-[#0a1628] to-[#162544]">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 bg-red-600/20 px-6 py-2 rounded-full mb-6">
                    <span className="text-3xl">📺</span>
                    <span className="text-red-400 font-bold">محتوى مرئي</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4">الفيديوهات المميزة</h2>
                </div>

                {/* Featured Video */}
                <a
                  href={`https://www.youtube.com/watch?v=${featuredVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl overflow-hidden border-2 border-red-600/50 hover:border-red-600 transition-all duration-500 block"
                >
                  <div className="relative aspect-video">
                    <img
                      src={`https://i.ytimg.com/vi/${featuredVideo.id}/maxresdefault.jpg`}
                      alt={featuredVideo.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://i.ytimg.com/vi/${featuredVideo.id}/sddefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform">
                        <PlayIcon />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-red-400 transition-colors">
                      {featuredVideo.title}
                    </h3>
                    <p className="text-gray-300 text-center">{featuredVideo.description}</p>
                    <div className="text-center mt-6">
                      <span className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-bold rounded-full">
                        <YoutubeIcon />
                        شاهد على يوتيوب
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 bg-[#0a1628]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 bg-[#D4AF37]/10 px-6 py-2 rounded-full mb-6">
                    <span className="text-3xl">📱</span>
                    <span className="text-[#D4AF37] font-bold">تواصل معنا</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4">تابعونا</h2>
                  <p className="text-gray-400 text-lg">انضموا إلينا في رحلة توثيق التاريخ والتراث العربي</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-red-600/20 to-red-600/5 rounded-2xl p-6 text-center border border-red-600/30 hover:border-red-600 transition-all hover:transform hover:scale-105 block">
                    <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                      <YoutubeIcon />
                    </div>
                    <span className="text-white font-bold">يوتيوب</span>
                  </a>

                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-blue-600/20 to-blue-600/5 rounded-2xl p-6 text-center border border-blue-600/30 hover:border-blue-600 transition-all hover:transform hover:scale-105 block">
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                      <FacebookIcon />
                    </div>
                    <span className="text-white font-bold">فيسبوك</span>
                  </a>

                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-pink-600/20 to-pink-600/5 rounded-2xl p-6 text-center border border-pink-600/30 hover:border-pink-600 transition-all hover:transform hover:scale-105 block">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                      <InstagramIcon />
                    </div>
                    <span className="text-white font-bold">انستغرام</span>
                  </a>

                  <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-gray-600/20 to-gray-600/5 rounded-2xl p-6 text-center border border-gray-600/30 hover:border-gray-600 transition-all hover:transform hover:scale-105 block">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                      <TiktokIcon />
                    </div>
                    <span className="text-white font-bold">تيك توك</span>
                  </a>
                </div>

                {/* Hashtags */}
                <div className="mt-12 bg-gradient-to-br from-[#162544] to-[#0a1628] rounded-3xl p-10 border border-[#D4AF37]/30 text-center">
                  <h3 className="text-2xl font-bold text-[#D4AF37] mb-8">هاشتاقاتنا</h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {['#قبيلة_النعيم', '#السادة_النعيم', '#تراث_النعيم', '#نسب_النعيم', '#تاريخ_النعيم', '#أهل_الصفرا', '#عزالدين_أبو_حمرة', '#فروسية_النعيم'].map((tag, index) => (
                      <span key={index} className="px-4 py-2 bg-white/5 rounded-full text-gray-300 hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] transition-all border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-[#0a1628] border-t border-white/10 py-12">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img src="/images/logo.png" alt="شعار قبيلة النعيم" className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37]" />
                    <div>
                      <h3 className="font-bold text-lg text-white">قبيلة السادة النعيم</h3>
                      <p className="text-gray-400 text-sm">أهل الصفرا</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    توثيق التاريخ والتراث العربي الأصيل من قبائل الشام
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-4">روابط سريعة</h4>
                  <div className="flex flex-wrap gap-2">
                    {navItems.map((item) => (
                      <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-4">تابعونا</h4>
                  <div className="flex gap-3">
                    <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                      <YoutubeIcon />
                    </a>
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                      <FacebookIcon />
                    </a>
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                      <InstagramIcon />
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 text-center">
                <p className="text-gray-500 text-sm">
                  جميع الحقوق محفوظة © 2026 قبيلة السادة النعيم - أبناء العم
                </p>
              </div>
            </div>
          </footer>
        </div>
      }/>

      {/* Heritage Pages */}
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/camels" element={<CamelsPage />} />
      <Route path="/horses" element={<HorsesPage />} />
      <Route path="/sheep" element={<SheepPage />} />
      <Route path="/wasm" element={<WasmPage />} />
      <Route path="/poetry" element={<PoetryPage />} />
      <Route path="/coffee" element={<CoffeePage />} />
      <Route path="/traditions" element={<TraditionsPage />} />
      <Route path="/tent" element={<TentPage />} />
    </Routes>
  )
}

export default App