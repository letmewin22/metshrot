import swipedetect from '@/libs/swipe'

type TOpts = {
  prev: () => void
  next: () => void
}

type TNav = {
  $left: HTMLElement
  $right: HTMLElement
}

export default class Navigation {
  $parent: HTMLElement
  nav: TNav

  constructor(public $el: HTMLElement, public opts: TOpts) {
    this.$parent = this.$el.parentElement

    this.nav = {
      $left: this.$parent.querySelector('[data-nav="prev"]'),
      $right: this.$parent.querySelector('[data-nav="next"]')
    }

    this.init()
  }

  init(): void {
    this.click()
    this.swipe()
    this.keydown = this.keydown.bind(this)
    window.addEventListener('keydown', this.keydown)
  }

  click(): void {
    this.nav.$left.addEventListener('click', this.opts.prev)
    this.nav.$right.addEventListener('click', this.opts.next)
  }

  swipe(): void {
    swipedetect(this.$el, (swipedir: string) => {
      swipedir === 'left' ? this.opts.next() : this.opts.prev()
    })
  }

  keydown(e: KeyboardEvent): void {
    if (e.key === 'ArrowLeft') this.opts.prev()
    if (e.key === 'ArrowRight') this.opts.next()
  }

  destroy(): void {
    this.nav.$left.removeEventListener('click', this.opts.prev)
    this.nav.$right.removeEventListener('click', this.opts.next)
    window.removeEventListener('keydown', this.keydown)
  }
}
