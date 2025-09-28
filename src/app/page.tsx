import { Hero } from '@/components/Hero'
import { LatestUpdates } from '@/components/LatestUpdates'
import { FeaturedStudents } from '@/components/FeaturedStudents'

export default function HomePage() {
  return (
    <div className="relative z-10">
      <Hero />
      <LatestUpdates />
      <FeaturedStudents />
    </div>
  )
}