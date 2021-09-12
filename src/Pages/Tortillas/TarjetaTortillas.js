import React from 'react'
import { addToCart } from '../../redux/Shopping/Shopping-action';
import { connect } from "react-redux";



const TarjetaTortillas = ({ addToCart, id, img, name, desc, price }) => {
  return (
    <div className="cake">
      <h2>{name}</h2>
      <img className="imgck" src={img} alt="" />
      <h2>{desc}</h2>
      <h2>{price}</h2>
      <button onClick={() => addToCart(id)}> agregar</button>







    </div>
  )
}




const mapDispatchToProps = (dispatch) => { return { addToCart: (id) => dispatch(addToCart(id)), }; };

export default connect(null, mapDispatchToProps)(TarjetaTortillas);