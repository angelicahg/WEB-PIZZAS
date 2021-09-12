import React from 'react'
import { addToCart } from '../../redux/Shopping/Shopping-action';
import { connect } from "react-redux";


import "./Pizza.css"




const TarjetaPizza = ({ addToCart, id, img, name, desc, price }) => {




  return (
    <div className="prodpizza">
      <h2 className="name">{name}</h2>
      <img className="imgprod" src={img} alt="" />
      <h2 className="descp">{desc}</h2>
      <h2>{price}</h2>

      <button onClick={() => addToCart(id)}> agregar</button>









    </div>
  )

}

const mapDispatchToProps = (dispatch) => { return { addToCart: (id) => dispatch(addToCart(id)), }; };
export default connect(null, mapDispatchToProps)(TarjetaPizza);