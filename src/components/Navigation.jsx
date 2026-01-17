import React from 'react'
import info from "../images/info.webp"

const Navigation = () => {
  return (
    <div className='navbar' id="#top">
        <div className="logo-container">
        <img  src={info} alt='S'/>

        <h2 className='title1'>ARAH INFOTECH</h2>
    </div>    
        <div className='nav'>
           
            <a href='./'>HOME</a>
            <a href='./about'>ABOUT</a>
            <a href='/services'>SERVICES</a>
            <a href='/contact'>CONTACT</a>
        </div>

    </div>
  )
}

export default Navigation