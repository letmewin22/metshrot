import gsap from 'gsap'
import {state} from '@emotionagency/smoothscroll'

export const anchors = (): void => {
  const a = document.querySelectorAll(
    '[data-href]'
  ) as NodeListOf<HTMLAnchorElement>

  a.forEach(link =>
    link.addEventListener('click', (e: Event) => {
      e.preventDefault()
      const target = document.querySelector(link.dataset.href)
      const coords = state.target + target.getBoundingClientRect().top
      gsap.to(state, {
        duration: 1,
        target: coords
      })
    })
  )
}
