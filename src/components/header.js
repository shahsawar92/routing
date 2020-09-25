import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <h1>welcome to my store</h1>
            <div>
                <Link to="components/Home">Home</Link>
                {"  "}
                <Link to="components/product">Products</Link>

            </div>


        </div>
    )
}
