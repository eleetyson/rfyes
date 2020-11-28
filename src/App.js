// top-level component always renders nav bar and and a component depending on route
import './App.css'
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom'
import TransitionSwitch from 'react-router-transition-switch'
import Fader from 'react-fader'
import Generator from './containers/Generator'
import IdeasIndex from './containers/IdeasIndex'
import About from './containers/About'
import Form from './components/Form'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <TransitionSwitch component={Fader}>
        <Route exact path="/"> <Generator /> </Route>
        <Route exact path="/all"> <IdeasIndex /> </Route>
        <Route exact path="/about"> <About /> </Route>
        <Route exact path="/ideas/new"> <Form /> </Route>
      </TransitionSwitch>
    </div>
  )

}

export default App
