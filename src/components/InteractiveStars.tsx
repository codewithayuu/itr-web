'use client'

import { useEffect, useRef, useState } from 'react'

interface Star {
  id: number
  x: number
  y: number
  size: 'small' | 'medium' | 'large'
  color: 'white' | 'blue' | 'purple' | 'yellow'
  opacity: number
  twinkleSpeed: number
}

interface ShootingStar {
  id: number
  x: number
  y: number
  angle: number
  speed: number
  life: number
}

export function InteractiveStars() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [stars, setStars] = useState<Star[]>([])
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const animationRef = useRef<number | undefined>(undefined)

  // Generate initial stars
  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = []
      const starCount = 150

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: ['small', 'medium', 'large'][Math.floor(Math.random() * 3)] as 'small' | 'medium' | 'large',
          color: ['white', 'blue', 'purple', 'yellow'][Math.floor(Math.random() * 4)] as 'white' | 'blue' | 'purple' | 'yellow',
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Shooting stars generation
  useEffect(() => {
    const generateShootingStar = () => {
      const newShootingStar: ShootingStar = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 2 + 1,
        life: 1,
      }
      setShootingStars(prev => [...prev, newShootingStar])
    }

    const interval = setInterval(generateShootingStar, 3000)
    return () => clearInterval(interval)
  }, [])

  // Animation loop
  useEffect(() => {
    const animate = () => {
      // Update stars with mouse interaction
      setStars(prevStars => 
        prevStars.map(star => {
          const distanceToMouse = Math.sqrt(
            Math.pow(star.x - mousePosition.x, 2) + Math.pow(star.y - mousePosition.y, 2)
          )
          
          // Stars closer to mouse move slightly towards it
          const attraction = distanceToMouse < 20 ? (20 - distanceToMouse) / 20 : 0
          const moveX = (mousePosition.x - star.x) * attraction * 0.01
          const moveY = (mousePosition.y - star.y) * attraction * 0.01
          
          return {
            ...star,
            x: Math.max(0, Math.min(100, star.x + moveX)),
            y: Math.max(0, Math.min(100, star.y + moveY)),
            opacity: Math.max(0.1, Math.min(1, star.opacity + (Math.random() - 0.5) * star.twinkleSpeed)),
          }
        })
      )

      // Update shooting stars
      setShootingStars(prevShootingStars => 
        prevShootingStars
          .map(star => ({
            ...star,
            x: star.x + Math.cos(star.angle) * star.speed,
            y: star.y + Math.sin(star.angle) * star.speed,
            life: star.life - 0.01,
          }))
          .filter(star => star.life > 0 && star.x >= -10 && star.x <= 110 && star.y >= -10 && star.y <= 110)
      )

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  return (
    <div ref={containerRef} className="interactive-stars" style={{ pointerEvents: 'none' }}>
      {/* Parallax layers */}
      <div className="parallax-layer parallax-layer-1" />
      <div className="parallax-layer parallax-layer-2" />
      <div className="parallax-layer parallax-layer-3" />
      
      {/* Nebula effects */}
      <div className="nebula purple" style={{ 
        top: '10%', 
        left: '20%', 
        width: '300px', 
        height: '300px',
        animation: 'nebula-pulse 12s ease-in-out infinite'
      }} />
      <div className="nebula blue" style={{ 
        top: '60%', 
        right: '10%', 
        width: '250px', 
        height: '250px',
        animation: 'nebula-pulse 15s ease-in-out infinite 3s'
      }} />
      <div className="nebula pink" style={{ 
        bottom: '20%', 
        left: '60%', 
        width: '200px', 
        height: '200px',
        animation: 'nebula-pulse 18s ease-in-out infinite 6s'
      }} />
      
      {/* Interactive stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className={`star ${star.size} ${star.color}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animation: 'twinkle 3s ease-in-out infinite',
            animationDelay: `${star.id * 0.1}s`,
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {shootingStars.map(star => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.life,
            transform: `rotate(${star.angle * 180 / Math.PI}deg)`,
          }}
        />
      ))}
    </div>
  )
}
