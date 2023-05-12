import React from 'react';
const ProductDetails = (datas) => {
    const {id,name,rating,price,image}=datas.datas;
    return (
        <div className="card card-compact w-full h-full bg-base-100 shadow-xl p-5 space-y-2 text-center">
        <figure>
          <img
          className="w-40 h-32 rounded-2xl cursor-pointer"
            src={image}
            alt="Shoes"
          />
        </figure>
         <div className=''>
         <h2 className="text-2xl font-semibold">{name}</h2>
          <h2 className="text-xl font-semibold text-orange-600">Price:${price}</h2>
         </div>
        </div>
    );
};

export default ProductDetails;