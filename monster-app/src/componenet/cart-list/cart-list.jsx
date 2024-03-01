import React from "react";
import Card from "../cart-component/cart-component";

const CartList = ({ data }) => {
  return (
    <div className="card-list">
      {data.map((user) => {
        return <Card key={user.id} users={user} />;
      })}
    </div>
  );
};

export default CartList;
