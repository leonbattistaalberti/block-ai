import React from "react";

import OrderCard from "../components/OrderCard";
import { data } from "../utils/data"; // this should be Orders data
import "./OrderManagement.css";

const OrderManagement = () => {
  return (
    <div className="orderManagement">
      <div className="orderManagement__container">
        {data.map((order) => (
          <OrderCard
            key={order.id}
            name={order.commodity}
            img={order.img}
            po={order.po}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderManagement;
