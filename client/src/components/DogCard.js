import React from 'react';

function DogCard({ dog }) {
  return (
    <div className="dog-card">
      <img src={dog.image} alt={dog.name} />
      <h2>{dog.name}</h2>
      <p>Age: {dog.age} years</p>
      <p>Breed: {dog.breed}</p>
    </div>
  );
}

export default DogCard;
