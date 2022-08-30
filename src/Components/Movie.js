import React from "react";
import SeriesList from "./SeriesList";
import "./Series.css";

const DUMMY_SERIES = [
  { name: "American Psycho", director: "Mary Harron", id: "m1" },
  { name: "Pulp Fiction", director: "Quentin Tarantino", id: "m2" },
  { name: "Shutter Island", director: "Martin Scorsese", id: "m3" },
  { name: "Django Unchained", director: " Tarantino", id: "m4" },
];

const Movie = () => {
  return (
    <div className="container  justify-content-center">
      <div className="row bg-warning rnd p-4 mb-4 mt-3 text-light ">
        <div className="col fs-3">Movie name</div>
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

export default Movie;
