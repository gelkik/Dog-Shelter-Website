import React from 'react';
import DogCard from './DogCard';

function HomePage({ dogs }) {
  return (
    <div>
      <h1>Dog Shelter</h1>
      <div className="dog-container">
        {dogs.map(dog => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
