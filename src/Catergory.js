import React from 'react'
import { Link } from 'react-router-dom'

function Catergory(props) {
    return (
        <Link to={'/'+props.children}>
            <div>{props.children}</div>
        </Link>
    )
}

export default Catergory
