import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router';
import About from './pages/about';
import Home from './pages/home';
import {Link} from 'react-router-dom';
import NotFound from './pages/notFound';
import Product from './pages/product';
import Single from './pages/single';


function App() {
    return (
        <div>
            <div>Welcome</div>
            <div>
                <Link to='.'>Home</Link>
                {'  '}
                <Link to='/pages/about'>About us</Link>
                {'  '}
                <Link to='/pages/product'>Products</Link>
                {' '} </div>

            <Routes>
                <Route path="/"
                    element={<Home/>}></Route>
                <Route path="pages/about"
                    element={<About/>}></Route>
                <Route path="*"
                    element={<NotFound/>}></Route>
                <Route path="pages/product/"
                    element={<Product/>}>
                    <Route path=":productId"
                        element={<Single/>}></Route>
                </Route>


            </Routes>

        </div>
    );
}

export default App;
