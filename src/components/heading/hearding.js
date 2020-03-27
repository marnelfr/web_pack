import './heading.scss'

export default class Heading {

  defaultTitle = 'Titre de page'

  constructor() {
    this.elm = document.createElement('h1')
    this.elm.classList.add('title')
  }

  html($content) {
    this.elm.innerHTML = !$content ? this.defaultTitle : $content
  }

  render($content) {
    this.html($content)
    document.appendChild(this.elm)
  }
}