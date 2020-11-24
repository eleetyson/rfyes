import './App.css'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import Generator from './components/Generator'
// import other components

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Generator />
        </Route>
      </Switch>
    </div>
  )

}

export default App
