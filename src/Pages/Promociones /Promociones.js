import React from 'react'
import img1 from "../../Assents/img/promociones/LUNES.jpeg"
import img2 from "../../Assents/img/promociones/MARTES.jpeg"
import img3 from "../../Assents/img/promociones/MIERCOLES.jpeg"
import img4 from "../../Assents/img/promociones/JUEVES.jpeg"
import img5 from "../../Assents/img/promociones/VIERNES.jpeg"
import img6 from "../../Assents/img/promociones/SABADO.jpeg"
import img7 from "../../Assents/img/promociones/DOMINGO.jpeg"
import "./Promociones.css"

const Promociones = () => {
  return (
    <div id="contenedor">
      <div id="titulo">
        <h1>PROMOCIONES DEL DIA</h1>
      </div>
      <div id="promociones">
        <img className="lunes" src={img1} alt="" />
        <img className="martes" src={img2} alt="" />
        <img className="miercoles" src={img3} alt="" />
        <img className="jueves" src={img4} alt="" />
        <img className="viernes" src={img5} alt="" />
        <img className="sabado" src={img6} alt="" />
        <img className="damonigo" src={img7} alt="" />
      </div>
    </div>
  )
}

export default Promociones
