import React from "react";
import Movies from "../Movies/Movies.jsx";

export function MoviesList({ movies}) {
  return (
    <>
      {movies.map((movie) => (
        <Movies key={movie.id} {...movie} />
      ))}
    </>
  );
}
