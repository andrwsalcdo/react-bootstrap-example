import React from 'react'

const Navbar = () => (
     <nav className="navbar navbar-default">
         <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">Brand</a>
            </div>
            <div id="navbar">
                <ul className="nav navbar-nav">
                    <li><a className="active"href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>                                        
                </ul>
            </div>
         </div>
     </nav>
)

export default Navbar 