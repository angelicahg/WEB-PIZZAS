import React from "react";
import TarjetaTortillas from "./TarjetaTortillas"
import "./Tortillas.css"
import { connect } from "react-redux";




const Tortillas = ({ products }) => {

  const tortillas = products.filter(tortilla => tortilla.alt === "Tortillas")


  return (
    <div>
      < div id="tortillas" >
        <h1>TORTILLAS HACKS</h1>
      </div>


      <div className="sss">
        {tortillas.map((Tortillas, index) => <TarjetaTortillas key={index} {...Tortillas} />)}
      </div>
    </div>







  );

};



const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};


export default connect(mapStateToProps)(Tortillas);