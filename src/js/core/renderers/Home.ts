import Highway from '@dogstudio/highway'
import {PageLoader} from '@/components/loaders/PageLoader'
import {onLoaded} from '@/utils/onLoaded'
import {Parallax} from '@/components/Parallax'

class Home extends Highway.Renderer {
  p: typeof Parallax.prototype

  onEnterCompleted(): void {
    onLoaded(() => {
      PageLoader.load()
      this.p = new Parallax()
    })
  }
  onLeaveCompleted(): void {
    this.p.destroy()
  }
}
// Don`t forget to export your renderer
export default Home
