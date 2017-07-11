import React from 'react'

const Jumbotron = (props) => (
    <div className="jumbotron">
        <div className="container">
            <h1>{props.heading}</h1>
            <p className="lead">{props.text}</p>
            <p><a className="btn btn-primary btn-lg"href="#">Learn More Cool Stuff</a></p>
        </div>
    </div>
)

export default Jumbotron 