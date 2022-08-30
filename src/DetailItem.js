import React from "react";

const DetailItem = (props) => {
  return (
    <div
      className="container bg-dark text-light mt-5"
      style={{ borderRadius: "12px" }}
    >
      <div className="row">
        <h1 className="text-center">{props.name}</h1>
      </div>
      <div className="row">
        <p className="fs-5 ">{props.description}</p>
      </div>
    </div>
  );
};

export default DetailItem;
