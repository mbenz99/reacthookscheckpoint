import React, { useState } from 'react';
import MovieList from './movielist';
import Filter from './filter';
import Movies from './movies';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [filteredMovies, setFilteredMovies] = useState(Movies);

  const handleFilter = (filterValues) => {
    // Implement the logic to filter movies based on title and rating
    // Update the state with the filtered movies
    // Example: const filteredMovies = // Your filtering logic here
    setFilteredMovies(filteredMovies);
  };

  return (
    <div className='p-5 d-flex flex-column align-items-center bg-dark fs-2 text-light'>
      <h1>My Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;