import gsap from 'gsap'

export class PageLoader {
  static load(cb?: () => void): void {
    const img = document.querySelector('[data-img="1"]')
    const imgWrapper = document.querySelector('[data-img="-1"]')
    const items = document.querySelectorAll('[data-i]')
    const itemsO = document.querySelectorAll('[data-o]')

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.classList.remove('e-fixed')
        cb && cb()
      }
    })

    img &&
      tl.to(img, {
        duration: 1,
        x: '0%',
        scale: 1,
        ease: 'power2.inOut'
      })

    imgWrapper &&
      tl.to(
        imgWrapper,
        {
          duration: 1,
          x: '0%',
          ease: 'power2.inOut'
        },
        0
      )

    items.length &&
      tl.to(
        items,
        {
          duration: 0.7,
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          stagger: 0.2
        },
        0.4
      )
    itemsO &&
      tl.to(
        itemsO,
        {
          duration: 1,
          opacity: 1,
          ease: 'power2.inOut'
        },
        0.4
      )
  }
}
