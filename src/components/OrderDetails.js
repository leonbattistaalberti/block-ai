import React from "react";
import "./OrderDetails.css";
import { data } from "../utils/data";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  const todaysArrival = data.find((d) => d.arrivingToday);
  console.log(todaysArrival);
  return (
    <div className="orderDetails">
      <h1 className="orderDetails__title">Orders arriving today</h1>{" "}
      <p className="orderDetails__orderNumber">{todaysArrival.id}</p>
      <Link to={`/${todaysArrival.id}`}>
        <button className="orderDetails__orderDetailsButton">
          Click here for details
        </button>
      </Link>
    </div>
  );
};

export default OrderDetails;
