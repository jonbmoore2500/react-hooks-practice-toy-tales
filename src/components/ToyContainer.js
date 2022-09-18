import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toysData, deleteToy, addLike}) {
  
  function onDeleteClick(deleteId) {
    deleteToy(deleteId)
  }
  
  function onHandleLike(likeId, newLikes) {
    addLike(likeId, newLikes)
  }

  return (
    <div id="toy-collection">
      {toysData.map((toy) => (
        <ToyCard key={toy.id} toy={toy} onDeleteClick={onDeleteClick} onHandleLike={onHandleLike}/>
      ))}
    </div>
  );
}

export default ToyContainer;
