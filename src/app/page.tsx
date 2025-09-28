import dynamic from 'next/dynamic'
import { Hero } from '@/components/Hero'

// Lazy load components for better performance
const LatestUpdates = dynamic(() => import('@/components/LatestUpdates').then(mod => ({ default: mod.LatestUpdates })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading updates...</div></div>
})

const FeaturedStudents = dynamic(() => import('@/components/FeaturedStudents').then(mod => ({ default: mod.FeaturedStudents })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading students...</div></div>
})

export default function HomePage() {
  return (
    <div className="relative z-10">
      <Hero />
      <LatestUpdates />
      <FeaturedStudents />
    </div>
  )
}