export class Nav {
  $nav = document.querySelector('.navbar__mobile-nav') as HTMLElement
  $burger = document.querySelector('.navbar__burger') as HTMLElement
  isOpen = false

  constructor() {
    this.bounds()
    this.$burger.addEventListener('click', this.toggle)
  }

  bounds(): void {
    const methods = ['toggle']
    methods.forEach(fn => (this[fn] = this[fn].bind(this)))
  }

  toggle(): void {
    this.isOpen ? this.close() : this.open()
  }

  open(): void {
    this.$nav.classList.add('open')
    this.$burger.classList.add('active')
    this.isOpen = true
  }

  close(): void {
    this.$nav.classList.remove('open')
    this.$burger.classList.remove('active')
    this.isOpen = false
  }
}
