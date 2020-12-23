import Highway from '@dogstudio/highway'

import {home, about, production} from '@/core/renderers'
import {Basic} from '@/core/transitions'
import {render} from '@/core/render'

import * as serviceWorker from '../serviceWorker'

const H: typeof Highway = new Highway.Core({
  renderers: {
    home,
    about,
    production
  },
  transitions: {
    default: Basic
  }
})

render(H)

process.env.NODE_ENV === 'production' && serviceWorker.unregister()
