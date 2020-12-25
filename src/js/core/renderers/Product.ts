import Highway from '@dogstudio/highway'
import {PageLoader} from '@/components/loaders/PageLoader'
import {onLoaded} from '@/utils/onLoaded'
import Slideshow from '@/components/slider/Slideshow'

export default class Product extends Highway.Renderer {
  onEnterCompleted(): void {
    onLoaded(() => {
      PageLoader.load(() => {
        new Slideshow(document.querySelector('.product-header__slider'), 0)
      })
    })
  }
  onLeave(): void {
    console.log('Leave from Product')
  }
}
