import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Product from './components/product';
import ProductDetails from './components/productDetails';
import ProductIndex from './components/ProductIndex';


function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="components/Home"
                    element={<Home/>}></Route>
                <Route path="components/product"
                    element={<Product/>}>
                    <Route path="/"
                        element={<ProductIndex/>}></Route>
                    <Route path="/:productID"
                        element={<ProductDetails/>}></Route>
                </Route>
                <Route path="*"
                    element={<NotFound/>}></Route>
            </Routes>
        </div>
    )
}
export default App;
