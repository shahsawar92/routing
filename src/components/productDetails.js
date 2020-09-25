import React from 'react'
import {useParams} from 'react-router-dom'

export default function ProductDetails() {
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
    const {productID} = useParams();
    const product = shoes[productID];
    console.log(productID)
    const {name, price} = product;
    return (
        <div>
            product detail of {productID}
            is here:
            <br></br>
            collection name: {name}
            <br/>
            collection price: {price} </div>
    )
}
