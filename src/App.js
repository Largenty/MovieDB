import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavorites from "./components/AddFavorites";

function App() {
  const [movies, setMovies] = useState([]);
  const [favorite, setFavorite] =useState([])
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=15d8aac3`;
    await axios.get(url).then((resp) => {
      if (resp.data.Search) {
        setMovies(resp.data.Search);
      }
    });
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorite, movie];
    setFavorite(newFavoriteList)
  }

  return (
    <div>
      <div className="Search">
        <MovieListHeading heading="movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <MovieList movies={movies} handleFavoriteClick={addFavoriteMovie} favoriteComponent={AddFavorites}/>
    </div>
  );
}

export default App;

//http://www.omdbapi.com
//https://www.youtube.com/watch?v=jc9_Bqzy2YQ