import { useEffect, useState } from 'react'

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
  </svg>
)

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
)

// Type for the BeforeInstallPromptEvent
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      return
    }

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      // Show prompt after 30 seconds
      setTimeout(() => setShowPrompt(true), 30000)
    }

    window.addEventListener('beforeinstallprompt', handler)

    // Detect if installed
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true)
      setShowPrompt(false)
    })

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      setShowPrompt(false)
    }
    setDeferredPrompt(null)
  }

  const handleClose = () => {
    setShowPrompt(false)
    // Don't show again for 7 days
    localStorage.setItem('pwa-prompt-dismissed', Date.now().toString())
  }

  // Check if dismissed recently
  useEffect(() => {
    const dismissed = localStorage.getItem('pwa-prompt-dismissed')
    if (dismissed) {
      const daysSince = (Date.now() - parseInt(dismissed)) / (1000 * 60 * 60 * 24)
      if (daysSince < 7) {
        setShowPrompt(false)
      }
    }
  }, [])

  if (isInstalled || !showPrompt || !deferredPrompt) return null

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm animate-slide-up">
      <div className="bg-gradient-to-br from-[#0a1628] to-[#162544] border-2 border-[#D4AF37] rounded-2xl p-6 shadow-2xl backdrop-blur-lg">
        <button
          onClick={handleClose}
          className="absolute top-3 left-3 text-gray-400 hover:text-white transition-colors"
          aria-label="إغلاق"
        >
          <CloseIcon />
        </button>

        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-[#D4AF37] rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
            📱
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-1">ثبّت التطبيق</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              أضف موقع قبيلة السادة النعيم إلى شاشتك الرئيسية للوصول السريع وتجربة أفضل
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleInstall}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0a1628] font-bold text-sm rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all"
              >
                <DownloadIcon />
                <span>تثبيت</span>
              </button>
              <button
                onClick={handleClose}
                className="px-4 py-2.5 bg-white/10 text-white font-bold text-sm rounded-full hover:bg-white/20 transition-all"
              >
                لاحقاً
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
