import Highway from '@dogstudio/highway'
import {PageLoader} from '@/components/loaders/PageLoader'
import {Parallax} from '@/components/Parallax'
import {onLoaded} from '@/utils/onLoaded'

export default class About extends Highway.Renderer {
  p: typeof Parallax.prototype

  onEnterCompleted(): void {
    onLoaded(() => {
      PageLoader.load()
      this.p = new Parallax()
    })
  }
  onLeave(): void {
    this.p.destroy()
  }
}
