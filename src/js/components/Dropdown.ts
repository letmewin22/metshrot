type TParams = {
  btn: string
  items: string
  parent: string
}

export default class Dropdown {
  btn: NodeListOf<HTMLElement>
  items: NodeListOf<HTMLElement>
  parent: NodeListOf<HTMLElement>
  itemsSelector: string
  btnSelector: string
  mql: MediaQueryList
  state: boolean
  events: any

  constructor({btn, items, parent}: TParams) {
    this.btn = document.querySelectorAll(btn)
    this.items = document.querySelectorAll(items)
    this.parent = document.querySelectorAll(parent)

    this.itemsSelector = items
    this.btnSelector = btn

    this.mql = window.matchMedia('(max-width: 960px)')
    this.state = false

    this.events = {
      click: {
        elem: el => this.toggle(el),
        body: event => {
          if (!event.target.classList.contains(this.btnSelector.slice(1))) {
            this.close()
            this.state = false
          }
        }
      },
      mouseenter: (el: MouseEvent) => this.open(el),
      mouseleave: () => this.close()
    }
  }

  init(): void {
    this.mql.addListener(this.mqHandler.bind(this))
    this.mqHandler()
  }

  toggle(el: MouseEvent): void {
    this.state ? this.close() : this.open(el)
  }

  open(el: MouseEvent): void {
    const h = el.target.parentElement.querySelector(this.itemsSelector)
      .scrollHeight
    el.target.parentElement.style.setProperty('--h', h + 'px')
    this.close()
    el.target.parentElement
      .querySelector(this.btnSelector)
      .classList.add('opened')
    el.target.parentElement
      .querySelector(this.itemsSelector)
      .classList.add('opened')
    el.target.parentElement.style.zIndex = 1000
    this.state = true
  }

  close(): void {
    this.btn.forEach(elem => elem.classList.remove('opened'))
    this.items.forEach(elem => elem.classList.remove('opened'))
    this.parent.forEach(el => (el.style.zIndex = 'auto'))
    this.state = false
  }

  mqHandler(): void {
    if (this.mql.matches) {
      this.btn.forEach(el =>
        el.addEventListener('click', this.events.click.elem)
      )

      document.addEventListener('click', this.events.click.body)

      this.btn.forEach(el =>
        el.removeEventListener('mouseenter', this.events.mouseenter)
      )
      this.btn.forEach(el =>
        el.removeEventListener('mouseleave', this.events.mouseleave)
      )

      this.items.forEach(el =>
        el.addEventListener('click', this.events.click.elem)
      )
      this.items.forEach(el =>
        el.removeEventListener('mouseenter', this.events.mouseenter)
      )
      this.items.forEach(el =>
        el.removeEventListener('mouseleave', this.events.mouseleave)
      )
    } else {
      this.btn.forEach(el =>
        el.addEventListener('mouseenter', this.events.mouseenter)
      )
      this.btn.forEach(el =>
        el.addEventListener('mouseleave', this.events.mouseleave)
      )

      this.btn.forEach(el =>
        el.removeEventListener('click', this.events.click.elem)
      )

      document.removeEventListener('click', this.events.click.body)

      this.items.forEach(el =>
        el.addEventListener('mouseenter', this.events.mouseenter)
      )
      this.items.forEach(el =>
        el.addEventListener('mouseleave', this.events.mouseleave)
      )

      this.items.forEach(el =>
        el.removeEventListener('click', this.events.click.elem)
      )
    }
  }
}
