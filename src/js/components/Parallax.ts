import {raf, resize} from '@emotionagency/utils'
import {state} from '@emotionagency/smoothscroll'

export class Parallax {
  $els = document.querySelectorAll('[data-parallax]') as NodeListOf<HTMLElement>
  $sections = document.querySelectorAll(
    '[data-section-parallax]'
  ) as NodeListOf<HTMLElement>
  sizes = [] as number[]

  constructor() {
    this.init()
  }

  init(): void {
    this.bounds()
    resize.on(this.resize)
  }

  bounds(): void {
    const methods = ['animate', 'resize']
    methods.forEach(fn => {
      this[fn] = this[fn].bind(this)
    })
  }

  move(el: HTMLElement, distance: number, scale = 1): void {
    const target = el
    const parent = target.closest('.js-in-view')
    if (target.classList.contains('js-in-view') || parent) {
      const t = `matrix3d(${scale}, 0, 0, 0,
        0, ${scale}, 0, 0,
        0, 0, 1, 0,
        0, ${distance}, 0, 1)`
      el.style.transform = t
      el.style.willChange = 'transform'
    }
  }

  els(): void {
    this.$els.length &&
      this.$els.forEach(($el, i) => {
        const coef = +$el.dataset.parallax
        const start = this.sizes[i] - this.sizes[i] * (1 + coef)
        const end = state.scrolled * coef
        const scale = $el.dataset.scale ? +$el.dataset.scale : 1
        this.move($el, start + end, scale)
      })
  }

  sections(): void {
    this.$sections.length &&
      this.$sections.forEach($el => {
        const coef = +$el.dataset.sectionParallax
        const target = state.scrolled * coef
        this.move($el, target)
      })
  }

  getSize($els: NodeListOf<HTMLElement>, array: number[]): void {
    $els.length &&
      $els.forEach($el => {
        const b = $el.getBoundingClientRect()
        const size = b.top - b.height / 2
        array.push(size)
      })
  }

  resize(): void {
    this.sizes = []
    this.getSize(this.$els, this.sizes)
    window.innerWidth > 1024 ? raf.on(this.animate) : raf.off(this.animate)
  }

  animate(): void {
    this.els()
    this.sections()
  }

  destroy(): void {
    resize.off(this.resize)
    raf.off(this.animate)
  }
}
