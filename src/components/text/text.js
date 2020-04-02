import './text.scss'

export default class Text {
  constructor($text) {
    this.text = $text
  }

  render() {
    let p = document.createElement('p')
    p.classList.add('text')
    p.innerText = this.text
    document.querySelector('body').appendChild(p)
  }

}