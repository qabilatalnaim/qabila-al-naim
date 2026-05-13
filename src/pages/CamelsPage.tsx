import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

// Icons
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

const CamelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 2l-3 4-2-1-1 2-2-1-2 2h-3l-1-2-3 1 1 2-2 1v3l2 1v1l-2 2v2l3 1 2-1 1 2 2-1h1l1-2 2 1 1-3 2 1v-2l-2-2 2-1v-3l-2-1 1-2 3 1 1-2-3-1h-3l-2 2-2-1-1 2-2-1-2 1-3-4z"/>
  </svg>
)

const MilkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2h8"/><path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"/>
  </svg>
)

const WoolIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v12"/><path d="M6 12h12"/>
  </svg>
)

const MeatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15.5 2.5c2 0 3.5 1.5 3.5 3.5 0 1.58-.98 2.9-2.38 3.38"/><path d="M8.5 2.5c-2 0-3.5 1.5-3.5 3.5 0 1.58.98 2.9 2.38 3.38"/><path d="M3 10c0 4.42 3.58 8 8 8s8-3.58 8-8H3z"/>
  </svg>
)

const PastureIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313-12.454z"/>
    <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2-2a2 2 0 0 0 2-2"/>
  </svg>
)

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5a5.5 5.5 0 0 0-11 0c0 2.29 1.51 4.04 3 5.5l7 7z"/>
  </svg>
)

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
)

const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
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

export default function CamelsPage() {
  const stats = [
    { number: 30000, label: 'رأس من الإبل', suffix: '+' },
    { number: 12, label: 'سلالة أصيلة', suffix: '' },
    { number: 150, label: 'سنة من الخبرة', suffix: '+' },
    { number: 400, label: 'مربي ومالك', suffix: '+' },
  ]

  const camelTypes = [
    {
      name: 'الإبل الحُمر (العادية)',
      description: 'الأكثر انتشاراً في البادية، تتميز بتحمّل المشاق وصبرها على العطش والجوع، وكانت سفينة الصحراء في رحلات الترحال والترحال.',
      features: ['تحمّل عالٍ', 'صبر على المشاق', 'سفينة الصحراء'],
      icon: <CamelIcon />
    },
    {
      name: 'الإبل العراب',
      description: 'تُركب للمهمات الرسمية والمسافات البعيدة، تتميز بسرعة الجري وجمال المنظر ورشاقة الحركة وأناقة الخطوة.',
      features: ['سرعة الفائقة', 'جمال المنظر', 'ركوب رسمي'],
      icon: <CamelIcon />
    },
    {
      name: 'المهاري',
      description: 'تُستخدم في السباقات والمعارض، وتتميز بجسمها الرياضي وسرعتها الفائقة وبيئتها المخصصة لرياضة الهجن.',
      features: ['للسباقات', 'جسم رياضي', 'سرعة عالية'],
      icon: <CamelIcon />
    },
    {
      name: 'النخيل (الصفراء)',
      description: 'سُميت بالصفراء نسبة إلى لونها الذهبي المميز، وكانت مفضلة لدى قبيلة النعيم، واشتهرت بها منطقة الصفرا.',
      features: ['لون مميز', 'أصيلة', 'تراث عريق'],
      icon: <CamelIcon />
    },
  ]

  const products = [
    { name: 'حليب الإبل', description: 'غني بالبروتين والفيتامينات', icon: <MilkIcon />, color: 'from-amber-500 to-orange-500' },
    { name: 'لحم الإبل', description: 'لحم صحي قليل الدهون', icon: <MeatIcon />, color: 'from-red-500 to-rose-500' },
    { name: 'الوبر', description: 'للملابس والبطانيات الفاخرة', icon: <WoolIcon />, color: 'from-gray-400 to-gray-600' },
    { name: 'الجلد', description: 'منتجات جلدية أصيلة', icon: <WoolIcon />, color: 'from-yellow-600 to-amber-700' },
  ]

  const traditions = [
    {
      title: 'تراث تربية الإبل',
      description: 'تربية الإبل جزء أصيل من الموروث البدوي، متوارث عبر الأجيال بالخبرة والمعرفة العريقة عن طبيعة البادية.',
      icon: <HeartIcon />
    },
    {
      title: 'سباقات الهجن',
      description: 'تُقام سنوياً سباقات الهجن في العديد من المناسبات، وتُشكّل مصدر فخر لأصحاب الإبل الفائزة.',
      icon: <TrophyIcon />
    },
    {
      title: 'الحماية والتنقل',
      description: 'كانت الإبل وسيلة النقل الأساسية في البادية، وكان اركوبها للتنقل والترحال والبحث عن الماء والكلأ.',
      icon: <ShieldIcon />
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a1628] pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#162544] via-[#0a1628] to-[#162544]">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600/20 to-amber-600/20 px-8 py-3 rounded-full mb-8 border border-white/10">
              <span className="text-5xl">🐪</span>
              <span className="text-2xl font-bold text-white">قاعة الإبل</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              إبل قبيلة <span className="text-[#D4AF37]">النعيم</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              تُعدّ الإبل رمزاً أساسياً من رموز البادية العربية، وكانت على مر العصور عنواناً للكرم والفخر والعزّة، حيث عُرفت بأصالة سلالاتها وجمال منظرها
            </p>

            <div className="mt-10 inline-block">
              <div className="bg-amber-600/20 rounded-2xl px-8 py-4 border border-amber-600/40">
                <p className="text-amber-400 font-bold text-2xl">"روسٍ تعرف المجد"</p>
                <p className="text-gray-400 text-sm mt-2">من أمثال البادية العربية</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-[#0a1628] to-[#162544]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-[#162544] to-[#0a1628] rounded-2xl p-8 text-center border border-white/10 hover:border-[#D4AF37]/50 transition-all hover:transform hover:scale-105">
                  <div className="text-4xl md:text-5xl font-black text-[#D4AF37] mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Introduction */}
            <div className="bg-gradient-to-br from-[#162544] to-[#0a1628] rounded-3xl p-10 md:p-14 border border-[#D4AF37]/30 mb-16">
              <div className="text-center mb-10">
                <span className="text-7xl">🐪</span>
              </div>
              <h2 className="text-3xl font-bold text-[#D4AF37] mb-8 text-center">إبل قبيلة النعيم</h2>
              <div className="text-gray-200 text-lg leading-loose space-y-6">
                <p>
                  تُعدّ الإبل رمزاً أساسياً من رموز البادية العربية، وكانت على مر العصور عنواناً للكرم والفخر والعزّة. وفي قبيلة السادة النعيم، تحتل تربية الإبل مكانة خاصة، حيث عُرفت بأصالة سلالاتها وجمال منظرها ورياشتها.
                </p>
                <p>
                  وتتميّز إبل قبيلة النعيم بقوتها وقدرتها على التأقلم مع طبيعة البادية والمناخ القاسي، إضافةً إلى اهتمام المربين بالحفاظ على السلالات الأصيلة وجودة التربية والتغذية. كما اشتهرت بعض السلالات مثل "النخيل" أو "الصفراء" بجمالها ومميزاتها.
                </p>
                <p>
                  ولا تقتصر مكانة الإبل لدى أبناء النعيم على الجانب الاقتصادي فحسب، بل تمثل جزءاً من الهوية والتراث البدوي الذي توارثته الأجيال، لتبقى رمزاً للعزّة والوفرة وحياة البادية الأصيلة.
                </p>
              </div>
            </div>

            {/* Camel Types Grid */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">سلالات الإبل العربية</h2>
                <p className="text-gray-400 text-lg">أنواع الإبل المتوارثة في القبيلة</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {camelTypes.map((type, index) => (
                  <div key={index} className="group bg-gradient-to-br from-[#162544] to-[#0a1628] rounded-3xl p-8 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(212,175,55,0.2)]">
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600/20 to-amber-600/20 rounded-2xl flex items-center justify-center text-[#D4AF37] flex-shrink-0 group-hover:scale-110 transition-transform">
                        {type.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{type.name}</h3>
                        <p className="text-gray-400 mb-4 leading-relaxed">{type.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {type.features.map((feature, i) => (
                            <span key={i} className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Products Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">منتجات الإبل</h2>
                <p className="text-gray-400 text-lg">منتجات أصيلة من إبل قبيلة النعيم</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <div key={index} className="group bg-gradient-to-br from-[#162544] to-[#0a1628] rounded-2xl p-8 text-center border border-white/10 hover:border-[#D4AF37]/50 transition-all hover:transform hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      {product.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-gray-400 text-sm">{product.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Traditions Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">التراث والتجربة</h2>
                <p className="text-gray-400 text-lg">الإرث العريق في تربية الإبل</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {traditions.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-[#162544] to-[#0a1628] rounded-3xl p-10 border border-white/10 text-center hover:border-[#D4AF37]/30 transition-all">
                    <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-[#D4AF37] mx-auto mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Famous Camels Section */}
            <div className="bg-gradient-to-br from-[#162544] to-[#0a1628] rounded-3xl p-10 md:p-14 border border-white/10">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-white mb-4">الإبل في التاريخ والتراث</h2>
                <p className="text-gray-400 text-lg">قصص وإرث منسي للأجيال القادمة</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-600/10 to-transparent rounded-2xl p-8 border border-blue-600/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                      <AwardIcon />
                    </div>
                    <h3 className="text-xl font-bold text-blue-400">قصة دخول الإبل إلى العرب</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    تُروى قصص عديدة عن دخول الإبل إلى شبه الجزيرة العربية، وتعود في أصلها إلى رحلات التجارة من الهند والمناطق الشرقية. ومن تلك اللحظات التاريخية تأسست علاقة العرب بالإبل.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-600/10 to-transparent rounded-2xl p-8 border border-amber-600/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center text-amber-400">
                      <TrophyIcon />
                    </div>
                    <h3 className="text-xl font-bold text-amber-400">الإبل في الشعر النبطي</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    تغنّى الشعراء بالإبل في قصائدهم، وجعلوها رمزاً للكرم والشجاعة والأصالة. والشاعر النبطي لا يكتمل شعره إلا بذكر الإبل ومراعيها.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-600/10 to-transparent rounded-2xl p-8 border border-green-600/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center text-green-400">
                      <PastureIcon />
                    </div>
                    <h3 className="text-xl font-bold text-green-400">المراعي والمواسم</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    معرفة أفضل المراعي وأوقات التنقل من أهم فنون الرعي، حيث يعرف الراعي خبرةً مواقع الكلأ بعد الأمطار ومواعيد الجفاف.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-600/10 to-transparent rounded-2xl p-8 border border-purple-600/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-400">
                      <ShieldIcon />
                    </div>
                    <h3 className="text-xl font-bold text-purple-400">الإبل والكرم</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    من أعراف العرب تقديم الضيافة من لحم الإبل وحليبها للزوار، وهذه العادة لا تزال حية في قبيلة النعيم وفي البوادي.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center mt-16">
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0a1628] font-bold text-xl rounded-full hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all transform hover:scale-105"
        >
          <span>العودة للرئيسية</span>
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  )
}