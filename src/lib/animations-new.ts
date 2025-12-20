import { gsap } from 'gsap'

// Dynamic import for ScrollTrigger to avoid SSR issues
let ScrollTrigger: any = null

export const initializeAnimations = () => {
  // Import ScrollTrigger dynamically for client-side only
  if (typeof window !== 'undefined') {
    import('gsap/ScrollTrigger').then((module) => {
      ScrollTrigger = module.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)
      setupAnimations()
    })
  }
}

const setupAnimations = () => {
  // Hero section animations
  gsap.from('.hero-title', {
    duration: 1.2,
    y: 100,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.5
  })

  gsap.from('.hero-subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.8
  })

  gsap.from('.hero-cta', {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 1.1
  })

  // Only add ScrollTrigger animations if it's available
  if (ScrollTrigger) {
    // Section reveal animations
    gsap.utils.toArray('.reveal-section').forEach((section: any) => {
      gsap.from(section, {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    // Parallax effects
    gsap.utils.toArray('.parallax-element').forEach((element: any) => {
      gsap.to(element, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    })

    // Image zoom on scroll
    gsap.utils.toArray('.zoom-on-scroll').forEach((image: any) => {
      gsap.fromTo(image, 
        { scale: 1.2 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      )
    })

    // Text reveal animations
    gsap.utils.toArray('.text-reveal').forEach((element: any) => {
      const inner = element.querySelector('.text-reveal-inner')
      if (inner) {
        gsap.from(inner, {
          duration: 0.8,
          yPercent: 100,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        })
      }
    })

    // Stagger animations for cards/items
    gsap.utils.toArray('.stagger-item').forEach((container: any) => {
      const items = container.querySelectorAll('.stagger-child')
      gsap.from(items, {
        duration: 0.6,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    })
  }
}

export const animateNavbar = (isScrolled: boolean) => {
  gsap.to('.navbar', {
    duration: 0.3,
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0)',
    backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
    ease: 'power2.out'
  })
}

export const animateButton = (element: HTMLElement, isHover: boolean) => {
  gsap.to(element, {
    duration: 0.3,
    scale: isHover ? 1.05 : 1,
    ease: 'power2.out'
  })
}

export const animateImageHover = (element: HTMLElement, isHover: boolean) => {
  gsap.to(element, {
    duration: 0.4,
    scale: isHover ? 1.1 : 1,
    ease: 'power2.out'
  })
}

export const createTimeline = () => {
  return gsap.timeline()
}
