import Hearding from './components/heading/hearding'
import PreteImage from './components/pretre-image/pretre-image'
import _ from 'lodash'

const hearding = new Hearding()
hearding.render(_.upperFirst('grand prêtre'))

const img = new PreteImage()
img.render()