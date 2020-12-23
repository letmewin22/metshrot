import Highway from '@dogstudio/highway'

export default class Production extends Highway.Renderer {

  onEnterCompleted(): void {
    console.log('Hello from Production')
  }
  onLeave(): void {
    console.log('Leave from Production')
  }
}
