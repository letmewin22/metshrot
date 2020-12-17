import Highway from '@dogstudio/highway'
import gsap from 'gsap'

class Home extends Highway.Renderer {
  onEnterCompleted(): void {
    const img = document.querySelector('.parallax-wrapper')
    const h1 = document.querySelector('.home-header__h1')
    const descriptor = document.querySelector('.home-header__descriptor')
    const btn = document.querySelector('.home-header__btn')
    window.addEventListener('load', () => {
      document.body.style.opacity = '1'
      setTimeout(() => {
        const tl = gsap.timeline()
        tl.to(img, {duration: 1, height: '100%', ease: 'power4.out'})
        tl.to(
          descriptor,
          {duration: 1, y: 0, opacity: 1, ease: 'power4.out'},
          0.2
        )
        tl.to(h1, {duration: 1, y: 0, opacity: 1, ease: 'power4.out'}, 0.4)
        tl.to(btn, {duration: 1, y: 0, opacity: 1, ease: 'power4.out'}, 0.6)
      }, 500)
    })
  }
}
// Don`t forget to export your renderer
export default Home
