import './App.css'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import Generator from './containers/Generator'
import Index from './containers/Index'
// import about page component

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"> <Generator /> </Route>
        <Route exact path="/all"> <Index /> </Route>
      </Switch>
    </div>
  )

}

export default App
