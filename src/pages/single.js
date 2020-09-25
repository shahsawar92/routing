import React from 'react'
import {useParams} from 'react-router-dom'

export default function Single() {
    const {productId} = useParams();
    return (
        <div>
            hello your product is here: {productId} </div>
    )
}
