import src from './pretre.png'
import './pretre-image.scss'

export default class PreteImage{
  render() {
    let img = document.createElement('img')

    img.alt = 'Image du grand prêtre'
    img.src = src
    img.classList.add('prete-image')

    document.querySelector('body').appendChild(img)
  }
}