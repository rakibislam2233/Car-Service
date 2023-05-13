import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const checkOut = useLoaderData();
  console.log(checkOut);
  const { _id, title, service_id, price, img, description } = checkOut;
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
      <form className="w-full max-w-6xl mx-auto bg-slate-100 dark:bg-gray-700 p-10 my-5 rounded-2xl ">
      {/* onSubmit={handelSubmit} */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Name</span>
          </label>
          <input
            type="text"
            name="name"
            // defaultValue={user?.displayName}
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
            // defaultValue={user?.email}
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
};

export default CheckOut;
