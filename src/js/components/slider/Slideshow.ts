import gsap from 'gsap'

import Slider from './Slider'
import Navigation from './Navigation'

type TOpts = {
  time: number
  ease: string
}

export default class Slideshow extends Slider {
  $imgs: NodeListOf<HTMLElement>
  opts: TOpts
  nav: typeof Navigation.prototype
  isAnimating = false

  constructor($el: HTMLElement, counter = 0) {
    super($el, counter)

    this.$imgs = this.$el.querySelectorAll('[data-slide-img]')

    this.opts = {
      time: 1.4,
      ease: 'power2.inOut'
    }

    this.$slides[this.counter].classList.add('active')
  }

  init(): void {
    super.init()
    this.nav = new Navigation(this.$el, {
      prev: this.prev,
      next: this.next
    })
  }

  prev(): void {
    if (!this.isAnimating) {
      super.prev()
      this.slideAnimation('left')
    }
  }

  next(): void {
    if (!this.isAnimating) {
      super.next()
      this.slideAnimation('right')
    }
  }

  slideAnimation(dir: string): void {
    this.isAnimating = true

    const from = dir === 'left' ? '100%' : '-100%'
    const to = dir === 'left' ? '-100%' : '100%'

    this.$slides[this.counter].style.zIndex = '999'
    this.$slides[this.previous].style.zIndex = '1000'
    this.$slides[this.counter].classList.add('active')

    const tl = gsap.timeline({
      onComplete: () => {
        this.$slides[this.previous].classList.remove('active')
        this.isAnimating = false
      }
    })

    tl.fromTo(
      this.$slides[this.previous],
      {x: '0%', duration: this.opts.time},
      {x: from, ease: this.opts.ease}
    )
      .fromTo(
        this.$imgs[this.previous],
        {x: '0%', scale: 1, duration: this.opts.time},
        {x: to, scale: 1.2, ease: this.opts.ease},
        0
      )

      .fromTo(
        this.$slides[this.counter],
        {x: to, duration: this.opts.time},
        {x: '0%', ease: this.opts.ease},
        0
      )

      .fromTo(
        this.$imgs[this.counter],
        {x: from, scale: 1.2, duration: this.opts.time},
        {x: '0%', scale: 1, ease: this.opts.ease},
        0
      )
  }
  destroy(): void {
    super.destroy()
    this.$imgs.forEach(img => {
      img.style.cssText = `
      background-image: ${window.getComputedStyle(img).backgroundImage}`
    })
    this.nav.destroy()
  }
}
