import Highway from '@dogstudio/highway'

export default class Error extends Highway.Renderer {

  onEnterCompleted(): void {
    console.log('Hello from Error')
  }
  onLeave(): void {
    console.log('Leave from Error')
  }
}
