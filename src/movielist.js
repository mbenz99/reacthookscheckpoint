// MovieList.js
import React, { useState } from 'react';
import MovieCard from './moviecard';

const MovieList = ({ movies }) => {
  const [newMovie, setNewMovie] = useState({
    titre: '',
    description: '',
    posterURL: '',
    note: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: value,
    });
  };

  const addMovie = () => {
    
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating) {
    
      console.log("Nouveau film ajouté :", newMovie);

    
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        rating: '',
      });
    } else {
      alert('Veuillez remplir toutes les informations du film.');
    }
  };

  return (
    <div>
      <h2>Movie List</h2>

      {}
      <div>
        <h3>Ajouter un nouveau film</h3>
        <form>
          <label>Titre:</label>
          <input
            type="text"
            name="title"
            value={newMovie.title}
            onChange={handleInputChange}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={newMovie.description}
            onChange={handleInputChange}
          />
          <label>URL de l'affiche:</label>
          <input
            type="text"
            name="posterURL"
            value={newMovie.posterURL}
            onChange={handleInputChange}
          />
          <label>Note:</label>
          <input
            type="text"
            name="rating"
            value={newMovie.rating}
            onChange={handleInputChange}
          />
          <button type="button" onClick={addMovie}>
            Ajouter le film
          </button>
        </form>
      </div>

      {}
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
