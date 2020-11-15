import React, { useState, useEffect } from "react";
import "./Home.css";
import { data } from "../utils/data";

function OrderDetailsPage({ productDetails }) {
  console.log(productDetails);
  return (
    <div className="orderDetailsPage">
      <div className="orderDetailsCard">
        <h1>Order Details</h1>
        <div className="orderDetailsCard__detail">
          <p>Commodity: </p>
          <p>{productDetails.commodity}</p>
        </div>

        <div className="orderDetailsCard__detail">
          <p>Supplier: </p>
          <p>{productDetails.supplier}</p>
        </div>

        <div className="orderDetailsCard__detail">
          <p>Shipped From: </p>
          <p>{productDetails.shippedFrom}</p>
        </div>
        <div className="orderDetailsCard__detail">
          <p>Shipped To: </p>
          <p>{productDetails.shippedTo}</p>
        </div>
        <div className="orderDetailsCard__detail">
          <p>Order Value: </p>
          <p>{productDetails.valueOfOrder}</p>
        </div>
        <div className="orderDetailsCard__detail">
          <p>Order Volume: </p>
          <p>{productDetails.volume}</p>
        </div>
        <div className="orderDetailsCard__detail">
          <p>Expiry Date: </p>
          <p>{productDetails.expiryDate}</p>
        </div>
        <div className="orderDetailsCard__detail">
          <p>Product Certification: </p>
          <p>{productDetails.productCertification}</p>
        </div>
        <div className="orderDetailsCard__detail">
          <p>Management System: </p>
          <p>{productDetails.managementSystem}</p>
        </div>
        {/* TODO */}
        {/* Add quality assurance icons and delivery icon */}
        {/* <p>{productDetails.onTimeDeliveryStatus}</p>
        <p>{productDetails.quality}</p> */}
      </div>
    </div>
  );
}

export default OrderDetailsPage;
