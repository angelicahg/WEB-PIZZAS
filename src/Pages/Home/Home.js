import React from "react";
import "./Home.css"

import Promociones from "../Promociones /Promociones";
import Pizzas from "../Pizzas/Pizzas"
import Tortillas from "../Tortillas/Tortillas";
import Footer from "../../components/Footer/Footer";
import Wassapht from "../../components/Whatsapp/Whatsapp";
import Cart from "../../components/Cart/Cart";

export const Home = () => {
  return (
    <>

      <div className="menu">


      </div>



      <Promociones />
      <Pizzas />
      <Tortillas />
      <Footer />
      <Wassapht />
      <Cart />


    </>
  );
};


