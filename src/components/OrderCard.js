import React from "react";
import "./OrderCard.css";
import { Link } from "react-router-dom";

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
            <Link
              to="/verifyorder"
              style={{ textDecoration: "none", fontSize: "x-small" }}
            >
              <span>Verify Order</span>
            </Link>
          </button>
          {props.delivery === true ? (
            <div className="orderCard__footer__bottom__delivery">
              <img
                src="https://cms-assets.tutsplus.com/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png"
                width="30px"
              />
              <p>Delivered</p>
            </div>
          ) : (
            <div className="orderCard__footer__bottom__delivery">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Cross_red_circle.svg"
                width="30px"
              />
              <p>Pending</p>
            </div>
          )}

          <button>
            <Link
              to="/verifyorder"
              style={{ textDecoration: "none", fontSize: "x-small" }}
            >
              <span>Order Details</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
