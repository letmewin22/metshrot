export const home = (): Promise<any> => {
  return import(/* webpackChunkName: "home" */ './Home')
}

export const about = (): Promise<any> => {
  return import(/* webpackChunkName: "about" */ './About')
}

export const production = (): Promise<any> => {
  return import(/* webpackChunkName: "production" */ './Production')
}

export const product = (): Promise<any> => {
  return import(/* webpackChunkName: "product" */ './Product')
}

export const contacts = (): Promise<any> => {
  return import(/* webpackChunkName: "contacts" */ './Contacts')
}

export const error = (): Promise<any> => {
  return import(/* webpackChunkName: "error" */ './Error')
}
