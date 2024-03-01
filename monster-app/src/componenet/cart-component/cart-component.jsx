import React from "react";

const Card = (props) => {
  const { id, name, email } = props.users;
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?set=set2&size180x180`} alt="" />
      <h1>{name}</h1>
      <h2>{email}</h2>
    </div>
  );
};

export default Card;

