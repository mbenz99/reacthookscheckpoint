import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleFilter = () => {
    // Pass the filter values to the parent component
    onFilter({ title: titleFilter, rating: ratingFilter });
  };

  return (
    <div>
      <h2>Filtrer</h2>
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filtrer par note"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
      />
      <button onClick={handleFilter}>Appliquer le filtre</button>
    </div>
  );
};

export default Filter;