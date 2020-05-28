import React, { useState } from "react";

import { generate as id } from "shortid";

const Movie = ({
  viewed,
  name,
  genres,
  handleDeleteMovie,
  handleViewedMovie,
}) => {
  const [movieName, setName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <tr>
        <td>
          <input
            checked={viewed && "checked"}
            name="viewed"
            onChange={handleViewedMovie}
            type="checkbox"
          />
        </td>
        <td>
          {isEditing ? (
            <input onChange={handleName} type="text" value={movieName} />
          ) : (
            movieName
          )}
        </td>
        <td>
          {genres.map((genre) => (
            <span className="genre" key={id()}>
              {genre}{" "}
            </span>
          ))}
        </td>
        <td onClick={handleEdit}>
          {isEditing ? (
            <button>Save</button>
          ) : (
            <span role="img" aria-label="edit">
              ✏️
            </span>
          )}
        </td>
        <td onClick={handleDeleteMovie}>
          <span role="img" aria-label="delete">
            🗑
          </span>
        </td>
      </tr>
    </>
  );
};
export default Movie;
