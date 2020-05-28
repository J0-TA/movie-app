import React, { useState } from "react";
import Movie from "../Movie/Movie";
import MovieForm from "../MovieForm/MovieForm"
import { generate as id } from "shortid";


const movies = [
  {
    genres: ["comedy", "Horror"],
    name: "Dos pistolas para un manco",
    viewed: true,
    id: id()
  },
  {
    genres: ["comedy", "Horror"],
    name: "Tambor roto no suena",
    viewed: true,
    id: id()
  },
  {
    genres: ["Horror"],
    name: "Detrás del último no va nadie",
    viewed: false,
    id: id()
  }
];

export function MoviesList() {

  const [allMovies, setAllMovies] = useState(movies)

  const handleDelete = (id) => {
    let currentMovies = [...allMovies]
    currentMovies = currentMovies.filter(movie => movie.id !== id)
    setAllMovies(currentMovies)
  }

  const handleViewed = (id) => {
    const currentMovies = [...allMovies]
    const movie = currentMovies.find(movie => movie.id === id)
    const index = currentMovies.indexOf(movie)

    currentMovies[index].viewed = !currentMovies[index].viewed
   
    setAllMovies(currentMovies)
  }

  return (
    <>
    <MovieForm />
      <div className="list-handlers">
        <div className="genre-filters">
          <div>
            <input type="radio" id="horror" name="genre" value="horror" />
            <label htmlFor="horror">Horror</label>
          </div>
          <div>
            <input type="radio" id="romance" name="genre" value="romance" />
            <label htmlFor="romance">Romance</label>
          </div>
          <div>
            <input type="radio" id="comedy" name="genre" value="comedy" />
            <label htmlFor="comedy">Comedy</label>
          </div>
          <div>
            <button>Reset</button>
          </div>
        </div>
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
        {

         allMovies
          .sort(function(a,b){
            return a.viewed - b.viewed
          })
          .map(movie =>(
            <Movie
            genres={movie.genres}
            key={movie.id}
            handleDeleteMovie={()=>handleDelete(movie.id)}
            handleViewedMovie={()=>handleViewed(movie.id)}
            name={movie.name}
            viewed={movie.viewed}
            />
          ))
        }
        </tbody>
      </table>
    </>
  );
}
