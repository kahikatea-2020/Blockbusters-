import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
           <div className="navBar">
               <nav className="nav">
                <div className="logoDiv"><img className="logo" src = '/images/Logo.png' alt='originalLogo'></img></div>
                    <p><a className="headerText" href="./">Home</a></p>
                    <p><a className="headerText" href="./Library">Library</a></p>
                    <p><a className="headerText" href="./About">About </a></p>
                </nav>
            </div>
        </>
    )
}

export default Header