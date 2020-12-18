import Highway from '@dogstudio/highway'
import gsap from 'gsap'

class Home extends Highway.Renderer {
  onEnterCompleted(): void {
    const img = document.querySelector('.parallax-wrapper')
    const imgWrapper = document.querySelector('.home-header__container-left')
    const h1 = document.querySelector('.home-header__h1')
    const descriptor = document.querySelector('.home-header__descriptor')
    const btn = document.querySelector('.home-header__btn')

    window.addEventListener('load', () => {
      document.body.style.opacity = '1'

      setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            document.body.classList.remove('e-fixed')
          }
        })

        tl.to(img, {duration: 1.2, x: '0%', scale: 1, ease: 'power2.inOut'})
        tl.to(imgWrapper, {duration: 1.2, x: '0%', ease: 'power2.inOut'}, 0)
        tl.to(
          descriptor,
          {duration: 1, y: 0, opacity: 1, ease: 'power2.out'},
          0.4
        )
        tl.to(h1, {duration: 1, y: 0, opacity: 1, ease: 'power2.out'}, 0.6)
        tl.to(btn, {duration: 1, y: 0, opacity: 1, ease: 'power2.out'}, 0.8)
      }, 500)
    })
  }
}
// Don`t forget to export your renderer
export default Home
