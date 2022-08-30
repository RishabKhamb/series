import React from "react";
import { Link } from "react-router-dom";
import "./SeriesList.css";

const SeriesList = (props) => {
  return (
    <div className="row my-2 p-2">
      <div className="col fs-4">{props.name}</div>
      <div className="col fs-4">{props.director}</div>
      <div className="col fs-4">
        {/* <button className="btn fs-4">View</button> */}
        <Link className="btn fs-4" to={`/welcome/watch/${props.id}`}>
          View
        </Link>
      </div>
    </div>
  );
};

export default SeriesList;
