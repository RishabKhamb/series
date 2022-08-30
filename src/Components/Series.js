import React from "react";
import SeriesList from "./SeriesList";
import "./Series.css";

const DUMMY_SERIES = [
  { name: "Office", director: "Ken Kwapis", id: "q1" },
  { name: "The Sopranos", director: "David Chase", id: "q2" },
  { name: "The Wire", director: "David Simon", id: "q3" },
  { name: "Two and a half men", director: "Chuck Lorre", id: "q4" },
];

const Series = () => {
  return (
    <div className="container  justify-content-center ">
      <div className="row bg-warning rnd p-4 mb-4 mt-3 text-light">
        <div className="col fs-3">Series name</div>
        <div className="col fs-3">Directed by</div>
        <div className="col fs-3">View full</div>
      </div>
      <div className="row bod">
        {DUMMY_SERIES.map((item) => {
          return (
            <SeriesList
              name={item.name}
              director={item.director}
              key={item.id}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Series;
