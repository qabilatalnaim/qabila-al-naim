import { useState } from 'react'

interface NewsletterProps {
  variant?: 'inline' | 'card'
}

export default function Newsletter({ variant = 'card' }: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('يرجى إدخال بريد إلكتروني صحيح')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setMessage(data.message || 'تم الاشتراك بنجاح! شكراً لك')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'حدث خطأ، حاول مرة أخرى')
      }
    } catch {
      setStatus('error')
      setMessage('تعذر الاتصال بالخادم. حاول لاحقاً')
    }
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="بريدك الإلكتروني"
          aria-label="البريد الإلكتروني للاشتراك في النشرة"
          className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0a1628] font-bold rounded-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all disabled:opacity-50"
        >
          {status === 'loading' ? '...' : 'اشترك'}
        </button>
      </form>
    )
  }

  return (
    <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] rounded-3xl p-8 md:p-10 border border-[#D4AF37]/30 text-center">
      <div className="text-5xl mb-4">📬</div>
      <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
        اشترك في نشرتنا الشهرية
      </h3>
      <p className="text-gray-300 mb-6 max-w-md mx-auto">
        احصل على آخر الفيديوهات والمقالات التراثية مباشرة في بريدك الإلكتروني
      </p>

      {status === 'success' ? (
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-emerald-400">
          ✅ {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === 'error') setStatus('idle')
              }}
              placeholder="بريدك الإلكتروني"
              aria-label="البريد الإلكتروني للاشتراك في النشرة"
              className={`flex-1 px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors ${
                status === 'error' ? 'border-red-500' : 'border-white/20 focus:border-[#D4AF37]'
              }`}
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0a1628] font-bold rounded-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all disabled:opacity-50"
            >
              {status === 'loading' ? 'جاري...' : 'اشترك الآن'}
            </button>
          </div>
          {status === 'error' && (
            <p className="text-red-400 text-sm mt-2">⚠️ {message}</p>
          )}
        </form>
      )}

      <p className="text-gray-500 text-xs mt-4">
        🔒 نحترم خصوصيتك. لا نشارك بريدك مع أي طرف ثالث.
      </p>
    </div>
  )
}