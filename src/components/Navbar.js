import React, { Component } from 'react'


class Navbar extends Component {
    constructor(props) {
        super(props); 
    }
    change(page) {
        this.props.change(page); 
    }
    render () {
        return (                   
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">{this.props.brand}</a>
                        </div>
                        <div id="navbar">
                            <ul className="nav navbar-nav">
                                <li className={(this.props.currentPage === 'home') ? 'active': '' }>
                                    <a onClick={this.props.change.bind(this, 'home')} href="#">Home</a>
                                </li>
                                <li className={(this.props.currentPage === 'about') ? 'active': '' }>
                                    <a onClick={this.props.change.bind(this, 'about')} href="#">About</a>
                                </li>
                                <li className={(this.props.currentPage === 'contact') ? 'active': '' }>
                                    <a onClick={this.props.change.bind(this, 'contact')} href="#">Contact</a>
                                </li>                                        
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    }
}


export default Navbar