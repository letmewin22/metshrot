import Highway from '@dogstudio/highway'
import {PageLoader} from '@/components/loaders/PageLoader'
import {onLoaded} from '@/utils/onLoaded'

export default class Production extends Highway.Renderer {
  onEnterCompleted(): void {
    onLoaded(() => {
      PageLoader.load()
    })
  }
  onLeaveCompleted(): void {}
}
