import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import OptimizedImage from '../components/OptimizedImage'
import { blogPosts, type BlogPost } from '../lib/blog-data'

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
)

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل')

  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogPosts.map((p) => p.category)))
    return ['الكل', ...cats]
  }, [])

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'الكل') return blogPosts
    return blogPosts.filter((p) => p.category === selectedCategory)
  }, [selectedCategory])

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <>
      <SEO
        title="المدونة | قبيلة السادة النعيم"
        description="أخبار ومقالات عن تاريخ وتراث قبيلة السادة النعيم. مقالات تثقيفية عن الإبل، الخيل، النسب، بلدة عز الدين، الشعر النبطي، والضيافة."
        keywords="مدونة, أخبار, مقالات, قبيلة النعيم, تراث, تاريخ, إبل, خيل"
        url="/blog"
        type="website"
      />
      <div className="min-h-screen bg-[#0a1628] pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Breadcrumbs items={[{ label: 'المدونة' }]} />

            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-[#D4AF37]/10 px-6 py-2 rounded-full mb-6">
                <span className="text-3xl">📰</span>
                <span className="text-[#D4AF37] font-bold">المدونة</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                أخبار ومقالات التراث
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                مقالات تثقيفية ودراسات عن تاريخ وتراث قبيلة السادة النعيم
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-10 flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0a1628]'
                      : 'bg-white/5 text-gray-300 hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} formatDate={formatDate} />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📭</div>
                <p className="text-gray-400 text-lg">لا توجد مقالات في هذه الفئة حالياً</p>
              </div>
            )}
          </div>
        </div>
      </div>
          <Footer />
    </>
  )
}

function BlogPostCard({ post, formatDate }: { post: BlogPost; formatDate: (d: string) => string }) {
  return (
    <article className="group bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all hover:transform hover:scale-[1.02]">
      {/* Image */}
      {post.image && (
        <div className="relative h-48 overflow-hidden">
          <OptimizedImage
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent"></div>
          <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#0a1628] px-3 py-1 rounded-full text-xs font-bold">
            {post.category}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <CalendarIcon />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <ClockIcon />
            {post.readTime} دقائق
          </span>
        </div>

        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
          {post.title}
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-2xl">{post.icon}</div>
          <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-semibold group-hover:gap-3 transition-all">
            <span>اقرأ المزيد</span>
            <ArrowRightIcon />
          </div>
        </div>
      </div>
    </article>
  )
}
