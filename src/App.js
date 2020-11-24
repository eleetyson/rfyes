import './App.css'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import Generator from './containers/Generator'
import IdeasIndex from './containers/IdeasIndex'
// import about page component

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"> <Generator /> </Route>
        <Route exact path="/all"> <IdeasIndex /> </Route>
      </Switch>
    </div>
  )

}

export default App
