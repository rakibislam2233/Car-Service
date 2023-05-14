import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../../Context/AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
const CheckOut = () => {
  const checkOut = useLoaderData();
  const {user} = useContext(UserContext)
  const { _id, title, service_id, price, img, description } = checkOut;
  const handelSubmit =(e)=>{
    e.preventDefault();
    const form = e.target
    const name = e.target.name.value;
    const email = e.target.email.value;
    const price = e.target.price.value;
    const date = e.target.date.value;
    const status= 'Confirm'
    const bookingDetails ={
      name,email,price,date,img,status
    }
   fetch('http://localhost:5000/bookings',{
    method: 'POST',
    headers:{'content-type': 'application/json'},
    body: JSON.stringify(bookingDetails)
   })
   .then(res=>res.json())
   .then(data=>{
    console.log(data);
    if(data.insertedId){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Service Bookings Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }
    form.reset()
   })
  }
  return (
    <div className="p-3">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
        className={`bg-gray-500 w-full h-80 rounded px-2`}
      >
        <div className="w-ful h-full flex justify-center items-center ">
          <h3 className="text-3xl font-semibol text-white">CheckOut</h3>
        </div>
      </div>
      <form  onSubmit={handelSubmit} className="w-full max-w-6xl mx-auto bg-slate-100 dark:bg-gray-700 p-10 my-5 rounded-2xl ">
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            placeholder="Enter your name"
            className="input input-bordered dark:bg-slate-600"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="Enter your email address"
            className="input input-bordered dark:bg-slate-600"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Date</span>
          </label>
          <input
            type="date"
            name="date"
            className="input input-bordered dark:bg-slate-600"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Price</span>
          </label>
          <input
            type="text"
            name="price"
            defaultValue={price}
            placeholder="Service Price"
            className="input input-bordered dark:bg-slate-600"
            required
          />
        </div>
       
      </div>
      <div className="form-control mt-6">
            <textarea className="rounded p-5 dark:bg-slate-600" placeholder="Enter Your Message" name="message" id="" cols="30" rows="10"></textarea>
      </div>
      <div className="form-control mt-6">
          <input type="submit" className="btn bg-orange-600 border-none" value="Order Confirm" />
        </div>
    </form>
    </div>
  );
}

export default CheckOut;
