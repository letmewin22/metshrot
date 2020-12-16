import '@/libs/ie-detect'
import '@/libs/sayHello'
import cssWebP from '@/libs/testWebP'
import moveEl from '@/libs/moveEl'

import Hooks from '@core/Hooks'
import {state} from '@/state'

import {TSmoothScroll} from '@/components/SmoothScroll/SmoothScroll'
import bgWebP from '@/utils/bgWebP'
import {resize} from '@/utils/Resize'
import {winH} from '@/utils/winH'
import NavbarPos from '@/utils/navbarPos'

export const render = <T>(H: T): void => {
  process.env.NODE_ENV === 'production' && cssWebP()

  const hooks = new Hooks(H)

  hooks.useNavigateOut(() => {
    state.isLoaded = false
  })

  hooks.useNavigateEnd(() => {
    state.isLoaded = true
  })

  let smoothScroll: TSmoothScroll

  hooks.useBothStart(() => {
    bgWebP()
    moveEl()

    smoothScroll && smoothScroll.reset()
  })

  hooks.useLoad(() => {
    resize.on(winH)

    const navbarPos = new NavbarPos()
    navbarPos.init()

    void import(
      /* webpackChunkName: "smooth-scroll" */
      '@/components/SmoothScroll/SmoothScroll'
    ).then(module => {
      const SmoothScroll = module.default
      const sc = document.querySelector('#scroll-container')
      smoothScroll = new SmoothScroll({el: sc})
    })
  })

  const links = document.querySelectorAll('nav a')

  hooks.useBoth(() => {
    void import(
      /* webpackChunkName: "form" */
      '@emotionagency/form'
    ).then(module => {
      const Form = module.default
      new Form('#form', {
        URL: 'http://localhost:8080/api/mail.php'
      })
    })

    links.forEach((link: HTMLLinkElement) => {
      link.classList.remove('is-active')
      link.href === location.href && link.classList.add('is-active')
    })
  })
}
