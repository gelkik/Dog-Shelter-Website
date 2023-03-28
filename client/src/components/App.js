import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    // Fetch the list of dogs from an API or database
    // and update the state with the list of dogs.
    // For this example, we will use a hard-coded list of dogs.
    const hardCodedDogs = [
      {
        id: 1,
        name: "Buddy",
        breed: "Golden Retriever",
        age: 2,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Charlie",
        breed: "Labrador Retriever",
        age: 5,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        name: "Daisy",
        breed: "Poodle",
        age: 1,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "Max",
        breed: "German Shepherd",
        age: 3,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        name: "Lucy",
        breed: "Beagle",
        age: 4,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 6,
        name: "Rocky",
        breed: "Boxer",
        age: 6,
        image: "https://via.placeholder.com/150",
      },
    ];
    setDogs(hardCodedDogs);
  }, []);

  return (
    <div>
      <h1>Adoptable Dogs</h1>
      <div className="dog-card-container">
        {dogs.map((dog) => (
          <div key={dog.id} className="dog-card">
            <img src={dog.image} alt={dog.name} />
            <h2>{dog.name}</h2>
            <p>Breed: {dog.breed}</p>
            <p>Age: {dog.age}</p>
            <a href={`/dogs/${dog.id}`}>Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
