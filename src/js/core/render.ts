import '@/libs/ie-detect'
import '@/libs/sayHello'
import cssWebP from '@/libs/testWebP'
import moveEl from '@/libs/moveEl'

import Hooks from '@core/Hooks'
import {state} from '@/state'

import bgWebP from '@/utils/bgWebP'
import {resize} from '@emotionagency/utils'
import {winH} from '@/utils/winH'
import NavbarPos from '@/utils/navbarPos'
import Dropdown from '@/components/Dropdown'
import {Nav} from '@/components/Nav'
import {intersectionOvserver} from '@/utils/intersectionOvserver'
import {Loader} from '@/components/loaders/Loader'

export const render = <T>(H: T): void => {
  process.env.NODE_ENV === 'production' && cssWebP()

  const hooks = new Hooks(H)

  hooks.useNavigateOut(() => {
    state.isLoaded = false
  })

  hooks.useNavigateEnd(() => {
    state.isLoaded = true
  })

  let smoothScroll

  hooks.useBothStart(() => {
    bgWebP()
    moveEl()

    const sections = [
      ...document.querySelectorAll('header'),
      ...document.querySelectorAll('.section'),
      ...document.querySelectorAll('footer')
    ] as HTMLElement[]

    sections.forEach(section => {
      intersectionOvserver(section).on()
    })

    smoothScroll && smoothScroll.reset()
  })

  hooks.useLoad(() => {
    resize.on(winH)
    new Loader(async() => {
      const dropdown = new Dropdown({
        btn: '.dropdown__btn',
        items: '.dropdown__content',
        parent: '.dropdown'
      })
      dropdown.init()

      new Nav()

      const {SmoothScroll} = await import(
        /* webpackChunkName: "smooth-scroll" */
        '@emotionagency/smoothscroll'
      )
      smoothScroll = new SmoothScroll()

      const navbarPos = new NavbarPos()
      navbarPos.init()
    })
  })

  const links = document.querySelectorAll('nav a')

  hooks.useBoth(async() => {
    const {default: Form} = await import(
      /* webpackChunkName: "form" */
      '@emotionagency/form'
    )

    new Form('#form', {
      URL: 'http://localhost:8080/api/mail.php'
    })

    links.forEach((link: HTMLLinkElement) => {
      link.classList.remove('is-active')
      link.href === location.href && link.classList.add('is-active')
    })
  })
}
