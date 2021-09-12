import React from 'react'
import "./Footer.css"
import Imagefooter from "../../Assents/img/logo/chopizz final (1).png"
import ImageInsta from "../../Assents/img/social/instagram.png"

function Footer() {
  return (

    <div className="footer">
      <img className="logofooter" src={Imagefooter} alt="" />
      <img className="logoInsta" src={ImageInsta} alt="/" />
      <h1>Copyright©2021     Todos los derechos reservados</  h1>
    </div>



  )
}

export default Footer
