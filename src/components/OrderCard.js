import React from "react";
import "./OrderCard.css";

// TODO: make the orders dynamic, using live data
const OrderCard = (props) => {
  console.log(props);
  return (
    <div className="orderCard">
      <div className=""></div>
      {/* img */}
      <img className="orderCard__img" src={props.img} />
      {/* order title */}
      <h3>{props.name}</h3>
      {/* PO number */}
      <p>PO: {props.po}</p>
      {/* FOOTER */}
      <div className="orderCard__footer">
        <div className="orderCard__footer__top">
          <p>Procurement Hash</p>
          <p>Producer Hash</p>
        </div>
        <div className="orderCard__footer__bottom">
          <button>
            <span>Verify Order</span>
          </button>
          <button>
            <span>Order Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
