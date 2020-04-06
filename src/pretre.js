import Hearding from './components/heading/hearding'
import PreteImage from './components/pretre-image/pretre-image'
import _ from 'lodash'
import Linker from './components/linker/linker'

/*let linker = Linker('Home', '/')
linker.render()
linker = Linker('About', '/about.html')
linker.render()*/

const hearding = new Hearding()
hearding.render(_.upperFirst('grand prêtre'))

const img = new PreteImage()
img.render()