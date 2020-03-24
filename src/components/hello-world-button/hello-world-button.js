import './hello-world-button.scss'

export default class HelloWorldButton {

  displayedText = 'Hello Wold'

  constructor () {
    this.button = document.createElement('button')
    this.button.innerHTML = this.displayedText
    this.button.classList.add('btn-hello')
    this.p = null

    this.button.onclick = this.btnClicked.bind(this)
  }

  btnClicked() {
    if(this.p === null) {
      this.p = document.createElement('p')
      this.p.classList.add('text-hello')
      this.p.innerHTML = this.displayedText
      document.querySelector('body').appendChild(this.p)
    } else {
      if(this.p.innerHTML === '') {
        this.p.innerHTML = this.displayedText
      } else {
        this.p.innerHTML = ''
      }
    }

  }

  render() {
    document.querySelector('body').appendChild(this.button)
  }


}