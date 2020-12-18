export class Nav {
  $els: NodeListOf<HTMLElement>
  $nav = document.querySelector('.navbar__mobile-nav') as HTMLElement
  $burger = document.querySelector('.navbar__burger') as HTMLElement
  isOpen = false

  constructor() {
    this.$els = this.$nav.querySelectorAll('.navbar__li a')
    this.bounds()
    this.init()
  }

  bounds(): void {
    const methods = ['toggle', 'close']
    methods.forEach(fn => (this[fn] = this[fn].bind(this)))
  }

  init(): void {
    this.$burger.addEventListener('click', this.toggle)
    this.$els.forEach(el => el.addEventListener('click', this.close))
  }

  toggle(): void {
    this.isOpen ? this.close() : this.open()
  }

  open(): void {
    this.$nav.classList.add('open')
    this.$burger.classList.add('active')
    this.isOpen = true
    document.body.classList.add('e-fixed')
  }

  close(): void {
    this.$nav.classList.remove('open')
    this.$burger.classList.remove('active')
    this.isOpen = false
    document.body.classList.remove('e-fixed')
  }

  destroy(): void {
    this.$burger.removeEventListener('click', this.toggle)
    this.$els.forEach(el => el.removeEventListener('click', this.close))
  }
}
