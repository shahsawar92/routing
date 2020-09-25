import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function ProductIndex() {
    const shoes = {
        "nike": {
            "name": "best summer collection",
            "price": "300$ only",
            "warranty": "none sorry"
        },
        "bata": {

            "name": "best collection",
            "price": "344$ only",
            "warranty": "yes"
        },
        "emperial": {

            "name": "nice choice shoes",
            "price": "500$ only",
            "warranty": "no"
        }
    }
    return (
        <div> {
            Object.entries(shoes).map(([
                productID, {
                    name,
                    price,
                    warranty
                }
            ]) => (
                <li key={productID}>
                    <Link to={productID}>
                        <h2>{productID}</h2>
                        <h4>{price}</h4>
                        <h4>{warranty}</h4>
                    </Link>
                </li>
            ))
        } </div>
    )
}
