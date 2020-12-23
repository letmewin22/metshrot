import Highway from '@dogstudio/highway'
import gsap from 'gsap'

type T = {
  from?: HTMLElement
  done?: () => void
  to?: HTMLElement
  trigger?: HTMLElement
}

class Basic extends Highway.Transition {
  in({to, from, done}: T): void {
    gsap.set(to, {
      opacity: 0
    })

    from.remove()

    gsap.to(to, {
      duration: 0.3,
      opacity: 1,
      ease: 'power2.out',
      onComplete: () => {
        document.body.classList.remove('e-fixed')
        done()
      }
    })
  }

  out({done, from}: T): void {
    document.body.classList.add('e-fixed')
    gsap.to(from, {
      duration: 0.3,
      opacity: 0,
      scale: 1.05,
      ease: 'power2.out',
      onComplete: done
    })
  }
}

export default Basic
