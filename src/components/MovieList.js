import React from "react";

export default function MovieList(props) {
  const FavoriteComponent = props.favoriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div>
          <img src={movie.Poster} alt={movie.Title} />
          <div onClick={() => props.handleFavoriteClick(movie)}>
            <FavoriteComponent />
          </div>
        </div>
      ))}
    </>
  );
}
