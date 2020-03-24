import './hello-world-button.css'

export default class HelloWorldButton {

  constructor () {
    this.button = document.createElement('button')
    this.button.innerHTML = 'Hello World'
    this.button.classList.add('btn-hello')
    this.p = null

    this.button.onclick = this.btnClicked.bind(this)
  }

  btnClicked() {
    if(this.p === null) {
      this.p = document.createElement('p')
      this.p.classList.add('text-hello')
      this.p.innerHTML = 'Hello World'
      document.querySelector('body').appendChild(this.p)
    } else {
      if(this.p.innerHTML === '') {
        this.p.innerHTML = 'Hello World'
      } else {
        this.p.innerHTML = ''
      }
    }

  }

  render() {
    document.querySelector('body').appendChild(this.button)
  }


}