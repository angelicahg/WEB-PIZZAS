import React from "react";
/* import data from "../../Data/data" */

import "./Pizza.css"
import { connect } from "react-redux";
import TarjetaPizza from "../Pizzas/TarjetaPizza";


const Pizzas = ({ products }) => {

  const pizzas = products.filter(pizza => pizza.alt === "Pizza")
  console.log(pizzas)
  return (

    <div>
      < div id="Pizzas" >
        <h1>PIZZAS</h1>
      </div>
      <div className="tarjetap">
        {pizzas.map((pizza, index) => <TarjetaPizza key={index} {...pizza} />)}
      </div>
    </div >


  );

};
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};


export default connect(mapStateToProps)(Pizzas);