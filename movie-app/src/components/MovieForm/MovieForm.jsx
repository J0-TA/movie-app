import React, { useState } from "react";
import { generate as id } from "shortid";

const MovieForm = ({ handleSubmit }) => {
  const [genres, setGenres] = useState([]);

  const handleGenreInput = (e) => {
    if (e.keyCode === 13) {
      let currentGenres = [...genres];
      currentGenres.push(e.target.value);
      console.log(currentGenres);
      setGenres(currentGenres);
      e.target.value = ""
    }
  };

  const handleErase = () => {
    setGenres([])
  }
  
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, genres)} className="new-movie">
        <label htmlFor="name">Name:</label>
        <input name="name" placeholder="Enter movie name..."></input>
        <label htmlFor="currentGenres">Genre:</label>
        <p>
          {genres.length === 0
            ? "Any genre added."
            : genres.map((genre) => <span key={id()} className="genre">{genre} </span>)}
        </p>

        <button onClick={handleErase}>Submit</button>
      </form>
      <label htmlFor="genre">Add genre:</label>
      <input type="text" name="add-genre" onKeyUp={handleGenreInput} />
    </>
  );
};
export default MovieForm;
