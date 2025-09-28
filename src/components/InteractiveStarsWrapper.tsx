'use client'

import dynamic from 'next/dynamic'

// Lazy load InteractiveStars with SSR disabled
const InteractiveStars = dynamic(() => import('./InteractiveStars').then(mod => ({ default: mod.InteractiveStars })), {
  ssr: false, // Disable SSR for this component since it's purely visual
  loading: () => null // No loading component needed for background stars
})

export function InteractiveStarsWrapper() {
  return <InteractiveStars />
}
