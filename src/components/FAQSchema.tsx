import { useEffect } from 'react'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
  pageUrl?: string
}

/**
 * FAQSchema — injects FAQPage JSON-LD into <head> for rich snippets.
 * Cleans up on unmount.
 */
export default function FAQSchema({ faqs, pageUrl }: FAQSchemaProps) {
  useEffect(() => {
    if (!faqs || faqs.length === 0) return

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      url: pageUrl || (typeof window !== 'undefined' ? window.location.href : undefined),
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.faqSchema = 'true'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      const existing = document.querySelector('script[data-faq-schema="true"]')
      if (existing) existing.remove()
    }
  }, [faqs, pageUrl])

  return null
}