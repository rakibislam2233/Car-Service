import React from "react";

const MyBookingDetails = ({ dt,hendelRemove,handelUpdate }) => {
  const { _id, name, date, price,img,status } = dt;
  return (
    <tr>
      <td>
        <label>
          <button onClick={() => hendelRemove(_id)} className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </td>
      <td>
        <img className="w-16 h-16 rounded" src={img} alt="" />
      </td>
      <td>
        {name}
      </td>
      <td>
        <h3>{date}</h3>
      </td>
      <td>
        <h3>{price}</h3>
      </td>
      <td>
        <button onClick={() => handelUpdate(_id)} className="btn btn-xs">
          {status}
        </button>
      </td>
    </tr>
  );
};

export default MyBookingDetails;
