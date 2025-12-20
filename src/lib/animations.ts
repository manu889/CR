import { gsap } from 'gsap'

// Lightweight animations for faster loading and hydration safety
export const initializeAnimations = () => {
  // Only run on client side and after DOM is ready
  if (typeof window === 'undefined') return
  
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupLightAnimations)
  } else {
    setupLightAnimations()
  }
}

const setupLightAnimations = () => {
  // Skip if GSAP is not available
  if (typeof window === 'undefined') return
  
  try {
    // Import GSAP dynamically to avoid SSR issues
    import('gsap').then(({ gsap }) => {
      // Minimal hero animations with faster timing
      const heroTitle = document.querySelector('.hero-title')
      const heroSubtitle = document.querySelector('.hero-subtitle')
      const heroCta = document.querySelector('.hero-cta')

      if (heroTitle) {
        gsap.from(heroTitle, {
          duration: 0.6,
          y: 30,
          opacity: 0,
          ease: 'power2.out'
        })
      }

      if (heroSubtitle) {
        gsap.from(heroSubtitle, {
          duration: 0.5,
          y: 20,
          opacity: 0,
          ease: 'power2.out',
          delay: 0.2
        })
      }

      if (heroCta) {
        gsap.from(heroCta, {
          duration: 0.4,
          y: 15,
          opacity: 0,
          ease: 'power2.out',
          delay: 0.3
        })
      }

      // Simple reveal for sections that are in view
      const revealSections = document.querySelectorAll('.reveal-section')
      revealSections.forEach((section) => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.from(entry.target, {
                duration: 0.5,
                y: 20,
                opacity: 0,
                ease: 'power2.out'
              })
              observer.unobserve(entry.target)
            }
          })
        }, { threshold: 0.1 })
        
        observer.observe(section)
      })
    })
  } catch (error) {
    console.log('GSAP animations skipped')
  }
}

export const animateNavbar = (isScrolled: boolean) => {
  // Only run on client side
  if (typeof window === 'undefined') return
  
  try {
    import('gsap').then(({ gsap }) => {
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        gsap.to(navbar, {
          duration: 0.2,
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
          ease: 'power2.out'
        })
      }
    })
  } catch (error) {
    // Fallback to CSS transitions
    const navbar = document.querySelector('.navbar') as HTMLElement
    if (navbar) {
      navbar.style.backgroundColor = isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)'
    }
  }
}

export const animateButton = (element: HTMLElement, isHover: boolean) => {
  // Only run on client side
  if (typeof window === 'undefined') return
  
  try {
    import('gsap').then(({ gsap }) => {
      gsap.to(element, {
        duration: 0.2,
        scale: isHover ? 1.02 : 1,
        ease: 'power2.out'
      })
    })
  } catch (error) {
    // Fallback to CSS transforms
    element.style.transform = `scale(${isHover ? 1.02 : 1})`
  }
}

export const animateImageHover = (element: HTMLElement, isHover: boolean) => {
  // Only run on client side
  if (typeof window === 'undefined') return
  
  try {
    import('gsap').then(({ gsap }) => {
      gsap.to(element, {
        duration: 0.3,
        scale: isHover ? 1.05 : 1,
        ease: 'power2.out'
      })
    })
  } catch (error) {
    // Fallback to CSS transforms
    element.style.transform = `scale(${isHover ? 1.05 : 1})`
  }
}
