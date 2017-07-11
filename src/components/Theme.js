import React from 'react'

import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import Page from './Page'

const Theme = () => (
    <div>
        <Navbar brand='Brand' 
        currentPage='home' />
        <Jumbotron heading='Hello, world!' 
        text='Sample bootstrap theme with React.js' />
        <Page currentPage='home' />
    </div>
)

export default Theme 