import imagesLoaded from 'imagesloaded'
import gsap from 'gsap'
import {state} from '@/state'

type TFunc = () => void

export class Loader {
  $el = document.querySelector('#loader')
  constructor(private cb?: TFunc) {
    this.init()
  }

  init(): void {
    imagesLoaded('#scroll-container', {background: true}, () =>
      this.hideLoader()
    )
  }

  hideLoader(): void {
    const tl = gsap.timeline({
      onComplete: () => {
        this.cb && this.cb()
        this.$el.parentElement.removeChild(this.$el)
        state.isLoaded = true
      }
    })
    tl.to(this.$el, {duration: 0.5, opacity: 0})
  }
}
