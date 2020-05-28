import React, { useState } from "react";
import Movie from "../Movie/Movie";
import MovieForm from "../MovieForm/MovieForm";
import { generate as id } from "shortid";

const movies = [
  {
    genres: ["Comedy", "Horror"],
    name: "Dos pistolas para un manco",
    viewed: true,
    id: id(),
  },
  {
    genres: ["Comedy", "Horror", "Romance"],
    name: "Tambor roto no suena",
    viewed: true,
    id: id(),
  },
  {
    genres: ["Horror"],
    name: "Detrás del último no va nadie",
    viewed: false,
    id: id(),
  },
];

export function MoviesList() {
  const [allMovies, setAllMovies] = useState(movies);
  const [filter, setFilter] = useState('')
  const [isReset, setReset] = useState(true)

  const handleDelete = (id) => {
    let currentMovies = [...allMovies];
    currentMovies = currentMovies.filter((movie) => movie.id !== id);
    setAllMovies(currentMovies);
  };

  const handleViewed = (id) => {
    const currentMovies = [...allMovies];
    const movie = currentMovies.find((movie) => movie.id === id);
    const index = currentMovies.indexOf(movie);

    currentMovies[index].viewed = !currentMovies[index].viewed;

    setAllMovies(currentMovies);
  };

  const handleSubmit = (e, genres) => {
    e.preventDefault();
    let currentMovies = [...allMovies];
    let newMovie = {
      name: e.target.name.value,
      genres,
      viewed: false,
      id: id(),
    };
    currentMovies.push(newMovie);

    setAllMovies(currentMovies);

    e.target.name.value = "";
  };

  const handleFilter = (e) => {
    setFilter(e.target.value)
    setReset(false)
  }
  const handleReset = (e) => {
    e.preventDefault()
    setFilter('')
    setReset(true)
    // falta la lógica para quitar el check del botón que estuviese seleccionado
  }
  return (
    <>
      <MovieForm handleSubmit={handleSubmit} />
      <h2>WatchList</h2>
      <div className="list-handlers">
        <form onSubmit={handleReset} onChange={handleFilter} className="genre-filters">
          <div>
            <input type="radio" id="horror" name="genre" value="Horror" />
            <label htmlFor="horror">Horror</label>
          </div>
          <div>
            <input type="radio" id="romance" name="genre" value="Romance" />
            <label htmlFor="romance">Romance</label>
          </div>
          <div>
            <input type="radio" id="comedy" name="genre" value="Comedy" />
            <label htmlFor="comedy">Comedy</label>
          </div>
          <div>
            <button>Reset</button>
          </div>
        </form>
        <input type="search" name="search" id="searchbar" />
      </div>
      <table className="movies-list">
        <thead>
          <tr className="list-head">
            <th>Viewed</th>
            <th>Movie Name</th>
            <th>Genre/s</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filter !== ''
          ? (
            allMovies
            .filter(movie => movie.genres.includes(filter)))
            .sort(function (a, b) {
              return a.viewed - b.viewed;
            })
            .map((movie) => (
              <Movie
                genres={movie.genres}
                handleDeleteMovie={() => handleDelete(movie.id)}
                handleViewedMovie={() => handleViewed(movie.id)}
                key={movie.id}
                name={movie.name}
                viewed={movie.viewed}
              />
            ))
             : (
            allMovies
            .sort(function (a, b) {
              return a.viewed - b.viewed;
            })
            .map((movie) => (
              <Movie
                genres={movie.genres}
                handleDeleteMovie={() => handleDelete(movie.id)}
                handleViewedMovie={() => handleViewed(movie.id)}
                key={movie.id}
                name={movie.name}
                viewed={movie.viewed}
              />
            )))}
        </tbody>
      </table>
    </>
  );
}
