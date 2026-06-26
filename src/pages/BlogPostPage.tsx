import { useParams, Link, Navigate } from 'react-router-dom'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import OptimizedImage from '../components/OptimizedImage'
import { blogPosts } from '../lib/blog-data'

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

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
  </svg>
)

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>()
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  // Related posts (same category, exclude current)
  const related = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <>
      <SEO
        title={`${post.title} | مدونة قبيلة السادة النعيم`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        url={`/blog/${post.id}`}
        type="article"
        section={post.category}
        publishedTime={post.date}
        modifiedTime={post.date}
        author={post.author}
      />
      <div className="min-h-screen bg-[#0a1628] pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[
              { label: 'المدونة', href: '/blog' },
              { label: post.title }
            ]} />

            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-1 rounded-full mb-4">
                <span className="text-2xl">{post.icon}</span>
                <span className="text-[#D4AF37] font-bold text-sm">{post.category}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span>👤 {post.author}</span>
                <span className="flex items-center gap-1">
                  <CalendarIcon />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1">
                  <ClockIcon />
                  {post.readTime} دقائق قراءة
                </span>
              </div>
            </div>

            {/* Featured Image */}
            {post.image && (
              <div className="mb-10 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30">
                <OptimizedImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            )}

            {/* Content */}
            <article className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20 mb-12">
              <div className="text-gray-200 text-lg leading-loose space-y-6">
                {post.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-200 leading-loose">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="text-sm font-bold text-[#D4AF37] mb-3">الوسوم:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Related Posts */}
            {related.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span>📚</span>
                  مقالات ذات صلة
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {related.map((p) => (
                    <Link
                      key={p.id}
                      to={`/blog/${p.id}`}
                      className="group bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl p-6 border border-white/10 hover:border-[#D4AF37]/50 transition-all"
                    >
                      <div className="text-3xl mb-3">{p.icon}</div>
                      <h3 className="text-white font-bold mb-2 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                        {p.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">{p.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back Button */}
            <div className="text-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0a1628] font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
              >
                <ArrowLeftIcon />
                <span>العودة للمدونة</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
          <Footer />
    </>
  )
}
