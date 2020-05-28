import React, { useState } from 'react';

export function MoviesList() {
  return (
    <>
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
        <tr className="list-head">
          <th>Viewed</th>
          <th>Movie Name</th>
          <th>Genre/s</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="viewed" id="1" />
          </td>
          <td>Tambor roto no suena</td>
          <td>Comedy</td>
          <td>✏️</td>
          <td>🗑</td>
        </tr>
      </table>
    </>
  );
}
