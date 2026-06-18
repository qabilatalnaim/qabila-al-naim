import { useState, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import { search, type SearchItem } from '../lib/search-data'

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
)

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQuery)

  // Update URL with search query
  useEffect(() => {
    if (query.trim()) {
      setSearchParams({ q: query }, { replace: true })
    } else {
      setSearchParams({}, { replace: true })
    }
  }, [query, setSearchParams])

  // Real-time search results
  const results: SearchItem[] = useMemo(() => {
    return search(query)
  }, [query])

  const popularSearches = ['الإبل', 'الفروسية', 'النسب', 'بلدة عز الدين', 'الوسم', 'الشعر النبطي']

  return (
    <>
      <SEO
        title="بحث في الموقع | قبيلة السادة النعيم"
        description="ابحث في محتوى موقع قبيلة السادة النعيم - التراث، التاريخ، النسب، الإبل، الخيل، الشعر، والضيافة."
        keywords="بحث, قبيلة النعيم, السادة النعيم, أهل الصفرا, تراث"
        url="/search"
      />
      <div className="min-h-screen bg-[#0a1628] pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[{ label: 'بحث' }]} />

            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 bg-[#D4AF37]/10 px-6 py-2 rounded-full mb-6">
                <span className="text-3xl">🔍</span>
                <span className="text-[#D4AF37] font-bold">البحث في الموقع</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                ابحث في تراثنا
              </h1>
              <p className="text-gray-400 text-lg">
                اكتشف صفحات التراث والتاريخ بسهولة
              </p>
            </div>

            {/* Search Box */}
            <div className="mb-8">
              <div className="relative">
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D4AF37]">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="ابحث عن الإبل، الخيل، النسب، بلدة عز الدين..."
                  className="w-full pr-14 pl-14 py-5 bg-gradient-to-br from-[#0a1628] to-[#162544] border-2 border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-2xl text-white placeholder-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                  autoFocus
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    aria-label="مسح"
                  >
                    <CloseIcon />
                  </button>
                )}
              </div>
            </div>

            {/* Popular Searches (when no query) */}
            {!query && (
              <div className="mb-8">
                <h3 className="text-sm text-gray-400 font-semibold mb-3">عمليات بحث شائعة:</h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 bg-white/5 hover:bg-[#D4AF37]/20 rounded-full text-gray-300 hover:text-[#D4AF37] transition-all border border-white/10 hover:border-[#D4AF37]/30 text-sm"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {query && (
              <div>
                {results.length > 0 ? (
                  <>
                    <div className="mb-4 text-sm text-gray-400">
                      عُثر على <span className="text-[#D4AF37] font-bold">{results.length}</span> نتيجة
                    </div>
                    <div className="space-y-4">
                      {results.map((item) => (
                        <Link
                          key={item.url}
                          to={item.url}
                          className="group block bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-2xl p-6 border border-white/10 hover:border-[#D4AF37]/50 transition-all hover:transform hover:scale-[1.01]"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full">
                                  {item.category}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                                {highlightMatch(item.title, query)}
                              </h3>
                              <p className="text-gray-400 leading-relaxed mb-3">
                                {highlightMatch(item.description, query)}
                              </p>
                              <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-semibold group-hover:gap-3 transition-all">
                                <span>زيارة الصفحة</span>
                                <ArrowRightIcon />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold text-white mb-2">لا توجد نتائج</h3>
                    <p className="text-gray-400 mb-6">
                      جرب البحث بكلمة أخرى أو استكشف عمليات البحث الشائعة
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {popularSearches.map((term) => (
                        <button
                          key={term}
                          onClick={() => setQuery(term)}
                          className="px-4 py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 rounded-full text-[#D4AF37] transition-all text-sm"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Empty State (no query) */}
            {!query && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-white mb-2">ابدأ البحث</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  اكتب كلمة في خانة البحث لاكتشاف صفحات التراث والتاريخ، أو اختر من عمليات البحث الشائعة أعلاه
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

// Helper: highlight matching text
function highlightMatch(text: string, query: string) {
  if (!query) return text
  const parts = text.split(new RegExp(`(${escapeRegex(query)})`, 'gi'))
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="bg-[#D4AF37]/30 text-[#D4AF37] font-bold rounded px-1">
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
