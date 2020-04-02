import HelloWorldButton from './components/hello-world-button/hello-world-button'
import Header from './components/heading/hearding'
import _ from 'lodash'

let head = new Header(_.upperFirst('accueil'))
head.render()

let helloWorldButton = new HelloWorldButton()
helloWorldButton.render()

if (process.env.NODE_ENV === 'production') {
  console.log('Production mode')
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development mode')
}
