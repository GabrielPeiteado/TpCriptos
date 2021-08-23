import React from "react";
import { Route, Switch} from "react-router-dom";
import Home from './Components/Home.js';
import Historia from './Components/Historia.js';
import Caracteristicas from './Components/Caracteristicas.js';
import Ventajas from './Components/Ventajas.js';
import TiposDeCriptos from './Components/TiposDeCriptos.js';
import Wallets from './Components/Wallets.js';
import Minado from './Components/Minado.js';





export default function Routes() {
  return (
    <Switch>
      {/* <Route path="/">
        <NavBar />
      </Route> */}
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/historia">
        <Historia/>
      </Route>
      <Route exact path="/caracteristicas">
        <Caracteristicas/>
      </Route>
      <Route exact path="/ventajas&desventajas">
        <Ventajas/>
      </Route>
      <Route exact path="/tipos">
        <TiposDeCriptos/>
      </Route>
      <Route exact path="/wallets">
        <Wallets/>
      </Route>
      <Route exact path="/minado">
        <Minado/>
      </Route>
        
    </Switch>
    );
  }
