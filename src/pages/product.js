import React from 'react'
import {Link, Outlet, Route} from 'react-router-dom'
import Single from './single';

export default function Product() {

    return (
        <div>hello i have the following products:
            <br/>

            <Link to='mobile'>Mobile</Link>
            {' '}
            <Link to='laptop'>Laptop</Link>
            <hr/>
            <div>
                <Outlet/>
            </div>


        </div>

    )
}
