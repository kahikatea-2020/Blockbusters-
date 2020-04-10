import React from 'react'

const Header = () => {
    return (
        <>
           <div className="navBar">
               <nav className="nav">
                <img className="logo" src = '/images/Logo.png' alt='originalLogo'></img>
                    <p>Home</p>
                    <p>Library</p>
                    <p>About</p>
                </nav>
            </div>

        </>
    )

}

export default Header