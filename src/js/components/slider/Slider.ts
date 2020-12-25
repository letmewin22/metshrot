export default class Slider {
  $slides: NodeListOf<HTMLElement>
  counter: number
  previous: null | number
  length: number

  constructor(public $el: HTMLElement, counter = 0) {
    this.$slides = this.$el.querySelectorAll('[data-slide]')

    this.counter = counter
    this.previous = null
    this.length = this.$slides.length

    this.init()
  }

  bounds(): void {
    const methods = ['prev', 'next']
    methods.forEach(fn => {
      this[fn] = this[fn].bind(this)
    })
  }

  init(): void {
    if (this.length < 2) return
    this.bounds()
  }

  prev(): void {
    this.counter--
    this.previous = this.counter + 1

    if (this.counter < 0) {
      this.counter = this.length - 1
      this.previous = 0
    }
  }

  next(): void {
    this.counter++
    this.previous = this.counter - 1

    if (this.counter > this.length - 1) {
      this.counter = 0
      this.previous = this.length - 1
    }
  }

  destroy(): void {
    this.$slides.forEach(slide => {
      slide.classList.remove('active')
      slide.style.cssText = ''
    })
  }
}
