import React from 'react';

const MovieForm = () {

  return (
    <form className="new-movie">
    <input type="submit"/>
      <input placeholder="Enter movie name..."></input>
      <p>Aquí irán los tags de género</p>
      <input placeholder="Enter genre..."></input>
      <button>Submit</button>
    </form>
  );
}

export default MovieForm
