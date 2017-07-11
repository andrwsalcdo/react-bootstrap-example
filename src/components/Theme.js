import React, { Component} from 'react'

import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import Page from './Page'


class Theme extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 'contact'
        }
    }

    render () {
        return (
            <div>
                <Navbar brand={this.props.brand} 
                currentPage={this.state.currentPage} />
                <Jumbotron heading={this.props.heading} 
                text={this.props.text} />
                <Page currentPage={this.state.currentPage} />
            </div>
        )
    }
}

export default Theme

// Specifies the default values for props:
Theme.defaultProps = {
    brand: 'Brand', 
    heading: 'Hello, world!', 
    text: 'Sample bootstrap theme with React.js'
};
