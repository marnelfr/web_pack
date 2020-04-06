export default class Linker{

  constructor($html, $link) {
    this.a = document.createElement('a')
    this.a.setAttribute('href', $link)
    this.a.innerText = $html
  }

  render() {
    document.querySelector('body').appendChild(this.a)
  }

}