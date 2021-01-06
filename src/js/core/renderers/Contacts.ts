import Highway from '@dogstudio/highway'

export default class Contacts extends Highway.Renderer {

  onEnterCompleted(): void {
    console.log('Hello from Contacts')
  }
  onLeave(): void {
    console.log('Leave from Contacts')
  }
}
