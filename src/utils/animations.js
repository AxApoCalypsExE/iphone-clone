import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart none none reverse",
      start: "top 60%",
      end: "top top",
      ...scrollProps
    }
  })
}

export const animateWithGsapTimeline = (tl, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
  tl.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut"
  })

  tl.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut"
    },
    "<"
  )

  tl.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut"
    },
    "<"
  )
}