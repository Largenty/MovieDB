import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

function App() {
  const [movies, setMovies] = useState([]);
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

  return (
    <div>
      <div className="Search">
        <MovieListHeading heading="movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;

//http://www.omdbapi.com
