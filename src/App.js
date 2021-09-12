import NavBar from "./components/NavBar/NavBar";
import { Home } from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import './App.css';
import Pizzas from "./Pages/Pizzas/Pizzas";
import Tortillas from "./Pages/Tortillas/Tortillas";
import Promociones from "./Pages/Promociones /Promociones";



import Cart from "./components/Cart/Cart"
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Promociones" exact component={Promociones} />
            <Route path="/Pizzas" exact component={Pizzas} />
            <Route path="/Tortillas" exact component={Tortillas} />
            < Route exact path="/cart" component={Cart} />


          </Switch>

        </div>


      </Router>
    </>
  );

}


export default App;
