import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import Characters from './components/Characters'
import CharacterDetail from './components/CharacterDetail'
import Planets from './components/Planets'
import PlanetDetail from './components/PlanetDetail'
import Vehicles from './components/Vehicles'
import VehicleDetail from './components/VehicleDetail'
import Starships from './components/Starships'
import StarshipDetail from './components/StarshipDetail'
import Home from './components/Home'




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/characters/detail/:id">
            <CharacterDetail />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/planets/detail/:id">
            <PlanetDetail />
          </Route>
          <Route path="/planets">
            <Planets />
          </Route>
          <Route path="/vehicles/detail/:id">
            <VehicleDetail />
          </Route>
          <Route path="/vehicles">
            <Vehicles />
          </Route>
          <Route path="/starships/detail/:id">
            <StarshipDetail />
          </Route>
          <Route path="/starships">
            <Starships />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <main>

      </main>
    </div>
  );
}

export default App;
