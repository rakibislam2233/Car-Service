import React from "react";
import {BsArrowRight} from "react-icons/bs";
import { Link } from "react-router-dom";
const ServiceDetails = ({ data }) => {
  const {_id,title,price,img}=data;
  return (
    <div className="card card-compact w-full h-full bg-base-100 shadow-xl p-5 space-y-2">
      <figure>
        <img
        className="w-full h-64 rounded-2xl cursor-pointer"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="flex justify-between items-center py-5">
       <div>
       <h2 className="text-2xl font-semibold">{title}</h2>
        <h2 className="text-xl font-semibold text-orange-600">Price:${price}</h2>
       </div>
        <div>
           <Link to={`/checkOut/${_id}`}><button><BsArrowRight className="w-6 h-6 text-gray-600"></BsArrowRight></button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
