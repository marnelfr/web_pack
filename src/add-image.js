import link from './img/pretre.png'

function addImage() {
  const img = document.createElement('img')
  img.alt = 'Grand Prêtre'
  img.width = 300
  img.src = link

  document.querySelector('body').appendChild(img)
}

export default addImage