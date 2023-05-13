import React, { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';
const Product = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        // fetch('http://localhost:5000/product')
        // .then(res=>res.json())
        // .then(data => setData(data))
    },[])
    return (
        <div className="py-10">
        <div className="text-center space-y-2 p-3">
        <h2 className="font-semibold text-xl text-orange-600">Popular Products</h2>
        <h3 className="text-3xl font-bold">Browse Our Products</h3>
        <h3>the majority have suffered alteration in some form, by injected humour  <br /> or randomised words which don't look even slightly believable. </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {
            data.map(datas =><ProductDetails key={datas.id} datas={datas}></ProductDetails>)
        }
        </div>
        <div className="flex justify-center">
            <button className="btn bg-orange-600 border-none">More Services</button>
        </div>
      </div>
    );
};

export default Product;