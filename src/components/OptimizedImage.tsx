import { useState } from 'react'

export interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  width?: number | string
  height?: number | string
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'sync' | 'auto'
  fetchPriority?: 'high' | 'low' | 'auto'
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void
}

/**
 * Optimized image component that:
 * - Auto-detects WebP version and uses it with JPG/PNG fallback
 * - Lazy loads by default
 * - Async decoding for better performance
 * - Shows a placeholder while loading
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  onError,
  ...props
}: OptimizedImageProps & Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof OptimizedImageProps>) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  // Try to use WebP version if available
  const getOptimizedSrc = (originalSrc: string) => {
    if (error) return originalSrc
    // If src is a JPG/PNG from /images/, try to use the WebP version
    if (originalSrc.startsWith('/images/')) {
      const ext = originalSrc.match(/\.(jpg|jpeg|png)$/i)
      if (ext) {
        return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp')
      }
    }
    return originalSrc
  }

  const optimizedSrc = getOptimizedSrc(src)

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      onLoad={() => setLoaded(true)}
      onError={(e) => {
        // Fallback to original if WebP fails
        if (optimizedSrc !== src) {
          setError(true)
        }
        onError?.(e)
      }}
      style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
        backgroundColor: loaded ? 'transparent' : 'rgba(255,255,255,0.05)',
        ...props.style,
      }}
      {...props}
    />
  )
}
