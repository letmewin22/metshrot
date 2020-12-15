import VirtualScroll from 'virtual-scroll'
import {IScrollBar} from './Scrollbar/IScrollbar'
import ScrollBar from './Scrollbar/ScrollBar'
import {state} from '@/state'

import {clamp, lerp} from '@/utils/math'
import mutationObserver from '@/utils/mutationObserver'
import {raf} from '@/utils/RAF'
import {resize} from '@/utils/Resize'
import {IOpts} from './ISmoothScrollOpts'

export default class SmoothScroll {
  current = 0
  min = 0
  max: number
  vs: typeof VirtualScroll
  scrollbar: IScrollBar

  constructor(protected opts: IOpts) {
    this.opts = {
      el: opts.el ?? document.documentElement,
      touchMultiplier: opts.touchMultiplier ?? 3.8,
      firefoxMultiplier: opts.firefoxMultiplier ?? 40,
      preventTouch: opts.preventTouch ?? true,
      scrollbar: opts.scrollbar ?? true,
      easing: opts.easing ?? 0.08,
      mobile: opts.mobile ?? true,
      breakpoint: opts.breakpoint ?? 960
    }

    this.init()
  }

  bounds(): void {
    const methods = ['resize', 'animate']
    methods.forEach(fn => (this[fn] = this[fn].bind(this)))
  }

  init(): void {
    this.bounds()

    resize.on(this.resize)
    mutationObserver(this.opts.el, this.resize)

    state.target = 0
    this.scroll()

    raf.on(this.animate)
    this.scrollbar = this.opts.scrollbar && new ScrollBar()
  }

  resize(): void {
    this.max = this.opts.el.scrollHeight - window.innerHeight
    if (!this.opts.mobile && window.innerWidth <= this.opts.breakpoint) {
      this.destroy()
    }
  }

  scroll(): void {
    this.vs = new VirtualScroll({
      el: this.opts.el,
      touchMultiplier: this.opts.touchMultiplier,
      firefoxMultiplier: this.opts.firefoxMultiplier,
      preventTouch: this.opts.preventTouch
    })

    this.vs.on((e: WheelEvent) => {
      state.target -= e.deltaY
      state.target = clamp(state.target, this.min, this.max)
    })
  }

  detectScrolling(): void {
    const s = state.scrollbar
    const dif = Math.abs(Math.round(state.target) - Math.round(this.current))

    if (dif >= 1 || s) {
      state.scrolling = true
    } else {
      state.scrolling = false
    }
  }

  animate(): void {
    this.detectScrolling()

    if (state.scrolling) {
      this.current = lerp(this.current, state.target, this.opts.easing)
      this.current = Math.round(this.current * 100) / 100
      this.opts.el.scrollTop = this.current
      state.scrolled = this.current
    }
  }

  reset(): void {
    state.target = 0
    this.current = 0
    this.opts.el.scrollTop = 0
  }

  destroy(): void {
    state.target = 0
    state.scrolled = 0
    state.scrolling = false
    raf.off(this.animate)
    resize.off(this.animate)
    this.vs.destroy()
    this.scrollbar.destroy()
  }
}

export type TSmoothScroll = typeof SmoothScroll.prototype
