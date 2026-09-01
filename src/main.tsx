import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import { reportWebVitals } from './lib/webVitals'
import './index.css'
import App from './App.tsx'

// BrowserRouter for clean SEO-friendly URLs on Vercel
// URLs: /badia instead of /#/badia
console.log('🌐 Using BrowserRouter for clean SPA routing')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        {/* Skip-to-content link for keyboard users (A11y WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:left-4 sm:focus:left-auto focus:z-[100] focus:px-6 focus:py-3 focus:bg-[#D4AF37] focus:text-[#0a1628] focus:font-bold focus:rounded-full focus:shadow-[0_0_30px_rgba(212,175,55,0.6)] focus:outline-none focus:ring-2 focus:ring-white"
        >
          ⏩ تخطّي إلى المحتوى الرئيسي
        </a>
        <App />
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)

// Report Web Vitals
reportWebVitals()

// Register Service Worker for PWA
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => {
        console.log('✅ Service Worker registered:', reg.scope)
      })
      .catch((err) => {
        console.log('❌ Service Worker registration failed:', err)
      })
  })
}
