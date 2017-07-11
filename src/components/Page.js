import React from 'react'

const Page = (props) => (
    <div className="container">
        <h2>{props.currentPage.charAt(0).toUpperCase() + props.currentPage.slice(1)}</h2>
        This is the home page
    </div>
)

export default Page 