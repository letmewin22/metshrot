export const lang = (): void => {
  const langBtn: HTMLElement = document.querySelector('.navbar__lang-current')
  const otherLangs: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.navbar__lang-link'
  )
  const translateUrlNode: HTMLElement = document.querySelector(
    '[data-translate-urls]'
  )
  const translateUrls = translateUrlNode.dataset.translateUrls.split(',')
  console.log(translateUrls)
  const currentLang = translateUrlNode.dataset.currentLang

  langBtn.innerText = currentLang

  otherLangs.forEach((el, idx) => {
    if (el.innerHTML.toLowerCase() === currentLang.toLowerCase()) {
      el.classList.add('is-active')
      return
    }
    el.setAttribute('href', translateUrls[idx])
  })
}
