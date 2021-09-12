import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";
import Image from "../../Assents/img/logo/chopizz final (1).png"
import Carro from "../../Assents/img/menu/cart.svg"


import { connect } from 'react-redux';


const NavBar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0); useEffect(() => { let count = 0; cart.forEach((item) => { count += item.qty; }); setCartCount(count); }, [cart, cartCount]);


  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          <Link to="/" className="nav-logo">
            <div className="logo">
              <img src={Image} className="logo" alt="" />
            </div>

          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link

                to="promociones"

                className="nav-links"
                onClick={handleClick}

              >

                Promociones del dia
              </Link>
            </li>
            <li className="nav-item">
              <Link

                to="Pizzas"

                className="nav-links"
                onClick={handleClick}

              >
                Pizzas
              </Link>
            </li>
            <li className="nav-item">
              <Link

                to="tortillas"
                className="nav-links"
                onClick={handleClick}


              >
                Tortilla Hacks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Cart" className="nav-logo" onClick={handleClick}>
                <div className="cart">
                  <img src={Carro} className="carrito" alt="" />
                  {cartCount}

                </div>

              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => { return { cart: state.shop.cart, }; }; export default connect(mapStateToProps)(NavBar);