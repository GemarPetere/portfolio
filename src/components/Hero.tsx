import { useState, useRef, useEffect } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({ x, y })
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setMousePosition({ x: 50, y: 50 })
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
      section.addEventListener('mouseleave', handleMouseLeave)
      return () => {
        section.removeEventListener('mousemove', handleMouseMove)
        section.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  // Calculate parallax offsets for text
  const parallaxX = (mousePosition.x - 50) * 0.02
  const parallaxY = (mousePosition.y - 50) * 0.02

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative overflow-hidden bg-gray-900"
    >
      {/* Enhanced animated background with multiple layers */}
      <div className="absolute inset-0">
        {/* Large gradient orbs with opposite movement */}
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            top: `${mousePosition.y * 0.4}%`,
            right: `${100 - mousePosition.x * 0.4}%`,
            transform: `translate(50%, -50%) scale(${isHovering ? 1.2 + mousePosition.x / 300 : 1})`,
            opacity: isHovering ? 1 : 0.6,
          }}
        ></div>
        
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            bottom: `${100 - mousePosition.y * 0.4}%`,
            left: `${mousePosition.x * 0.4}%`,
            transform: `translate(-50%, 50%) scale(${isHovering ? 1.2 + mousePosition.y / 300 : 1})`,
            opacity: isHovering ? 1 : 0.6,
          }}
        ></div>

        {/* Medium gradient orb */}
        <div 
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-blue-500/8 via-indigo-500/5 to-transparent rounded-full blur-3xl transition-all duration-1200 ease-out"
          style={{
            left: `${50 + (mousePosition.x - 50) * 0.3}%`,
            top: `${50 + (mousePosition.y - 50) * 0.3}%`,
            transform: 'translate(-50%, -50%)',
            opacity: isHovering ? 0.8 : 0.4,
          }}
        ></div>

        {/* Cursor-following glow with trail effect */}
        <div 
          className="absolute w-80 h-80 bg-gradient-radial from-indigo-500/15 via-indigo-500/8 to-transparent rounded-full blur-2xl transition-all duration-500 ease-out pointer-events-none"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: `translate(-50%, -50%) scale(${isHovering ? 1 : 0.5})`,
            opacity: isHovering ? 1 : 0,
          }}
        ></div>

        {/* Secondary smaller glow following with delay */}
        <div 
          className="absolute w-48 h-48 bg-gradient-radial from-purple-500/20 via-purple-500/10 to-transparent rounded-full blur-xl transition-all duration-700 ease-out pointer-events-none"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: `translate(-50%, -50%) scale(${isHovering ? 1 : 0.3})`,
            opacity: isHovering ? 0.7 : 0,
          }}
        ></div>

        {/* Animated grid pattern overlay (subtle) */}
        <div 
          className="absolute inset-0 opacity-5 transition-opacity duration-500"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)`,
            opacity: isHovering ? 0.08 : 0.03,
          }}
        ></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-48">
        <div 
          className="max-w-3xl mx-auto transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${parallaxX}px, ${parallaxY}px)`,
          }}
        >
          {/* Text Content */}
          <div className="space-y-8">
            {/* Subtle intro text */}
            <div className="animate-fade-in-up delay-100">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Software Developer
              </p>
            </div>
            
            {/* Main heading - minimal and clean */}
            <div className="animate-fade-in-up delay-200">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-tight">
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>I'm</span>{' '}
                <span className="inline-block font-normal text-indigo-400 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Gemar</span>
                <br />
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Petere</span>
              </h1>
            </div>
            
            {/* Description - clean and minimal */}
            <div className="animate-fade-in-up delay-300">
              <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed">
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.6s' }}>Crafting beautiful and functional web applications.</span>
                <br />
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.8s' }}>Turning complex problems into simple, elegant solutions.</span>
              </p>
            </div>
            
            {/* CTA Buttons - minimal design */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up delay-400">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors duration-200 text-sm uppercase tracking-wider"
              >
                View Work
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-700 text-gray-300 font-medium hover:border-gray-600 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

