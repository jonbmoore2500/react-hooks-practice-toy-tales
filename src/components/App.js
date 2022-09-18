import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toysData, setToysData] = useState([])
  // should this be in ToyContainer? it might make more sense for initial display but adding new toys would be trickier
  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(r => r.json())
    .then(data => setToysData(data))
  }, [])

  function addNewToy(newToyObj) {
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToyObj)
    })
    .then(r => r.json())
    .then(newData => setToysData([...toysData, newData]))
  }

  function deleteToy(deleteId) {
    fetch(`http://localhost:3001/toys/${deleteId}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      const newToysData = toysData.filter(toy => toy.id !== deleteId)
      setToysData(newToysData)
    })
  }

  function addLike(likeId, newLikes) {
    fetch(`http://localhost:3001/toys/${likeId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "likes": newLikes
      })
    })
    .then(r => r.json())
    .then((data) => {
      const newData = toysData.map((toy) => {
        if (toy.id === likeId) {
          return toy = data
        }
        return toy
      })
      setToysData(newData)
    })
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onFormSubmit={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toysData={toysData} deleteToy={deleteToy} addLike={addLike}/>
    </>
  );
}

export default App;
