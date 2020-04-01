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

  render($content, $color = 'red') {
    this.html($content)
    if ($color !== 'red') {
      this.elm.setAttribute('style', 'color: ' + $color);
    }
    document.querySelector('body').appendChild(this.elm)
  }
}