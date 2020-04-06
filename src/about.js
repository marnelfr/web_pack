import Hearding from './components/heading/hearding'
import Text from './components/text/text'
import Linker from './components/linker/linker'

/*let linker = Linker('Home', '/')
linker.render()
linker = Linker('Pretre', '/pretre.html')
linker.render()*/

let hearding = new Hearding()
hearding.render('About', 'black')

let text = new Text('Lorem ipsum dolor sita ameter, consectetur adipiscing elit, sedal do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam')
text.render()
