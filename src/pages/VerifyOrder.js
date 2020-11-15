import React from "react";
import "./Home.css";

const VerifyOrder = () => {
  return (
    <div className="verifyOrders">
      <div className="verifyOrders__container">
        <img src="./check.svg" style={{ width: "300px" }} />
        {/* TODO: Write a function to get the correct PO number */}
        <h3>PO:121334563 Validated! </h3>
        <div className="verifyOrders__container__footer">
          <button>Order details</button>
          <button>Close</button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOrder;
