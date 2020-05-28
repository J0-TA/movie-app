import React, { useState } from 'react';

export function MovieForm() {

  return (
    <form className="new-movie">
      <input placeholder="Enter movie name..."></input>
      <p>Aquí irán los tags de género</p>
      <input placeholder="Enter genre..."></input>
      <button>Submit</button>
    </form>
  );
}
