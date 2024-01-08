import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img className="mycardimg" src={movie.posterURL} alt={movie.title} />
      <h3>{movie.titre}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.note}</p>
    </div>
  );
};

export default MovieCard;