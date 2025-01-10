
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/Navbar';
import Characters from './components/Characters'
import CharacterDetail from './components/CharacterDetail'
import Planets from './components/Planets'
import PlanetDetail from './components/PlanetDetail'
import Vehicles from './components/Vehicles'
import VehicleDetail from './components/VehicleDetail'
import Species from './components/Species'
import SpecieDetail from './components/SpecieDetail';
import Home from './components/Home'



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
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
          <Route path="/species/detail/:id">
            <SpecieDetail />
          </Route>
          <Route path="/species">
            <Species />
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
