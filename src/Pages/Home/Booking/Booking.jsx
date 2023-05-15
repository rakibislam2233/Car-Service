import React, { useContext, useEffect, useState } from "react";
import MyBookingDetails from "./MyBookingDetails";
import Swal from "sweetalert2";
import { UserContext } from "../../../Context/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
const Booking = () => {
  const { user } = useContext(UserContext);
  const [bookingDetail, setbookingDetail] = useState([]);
  const token = localStorage.getItem('carServiceToken');
  const neviget = useNavigate()
  useEffect(() => {
    fetch(`https://car-service-server-side.vercel.app/bookings?email=${user?.email}`,{
      method:'GET',
      headers:{
        authorization:`Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if(!data.error){
          setbookingDetail(data);
        }
        else{
          neviget('/')
        }
      });
  }, [user]);
  const hendelRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be Deleted booking item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-service-server-side.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Booking item deleted successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            const remaning = bookingDetail.filter((data) => data._id !== id);
            setbookingDetail(remaning);
          });
      }
    });
  };
  const handelUpdate = (id) => {
    fetch(`https://car-service-server-side.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: "Confirmed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaning = bookingDetail.filter(
            (booking) => booking._id !== id
          );
          const update = bookingDetail.find((booking) => booking._id === id);
          update.status = "Confirmed";
          const newBookings = [update, ...remaning];
          setbookingDetail(newBookings);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Booking item updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <>
      {bookingDetail.length == 0 ? (
        <div className="flex justify-center items-center h-80 w-full max-w-7xl mx-auto">
          <h3 className="text-3xl font-semibold">No Booking Data</h3>
        </div>
      ) : (
        <div className="w-full  max-w-7xl h-80 mx-auto overflow-auto py-10">
          <table className="table w-full max-w-7xl mx-auto dark:text-black">
            {/* head */}
            <thead>
              <tr>
                <th>Remove</th>
                <th>images</th>
                <th>Name</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookingDetail.map((dt) => (
                <MyBookingDetails
                  key={dt._id}
                  dt={dt}
                  handelUpdate={handelUpdate}
                  hendelRemove={hendelRemove}
                ></MyBookingDetails>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Booking;
