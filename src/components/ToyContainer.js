import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toysData, deleteToy}) {
  
  function onDeleteClick(deleteId) {
    deleteToy(deleteId)
  }
  
  return (
    <div id="toy-collection">
      {toysData.map((toy) => (
        <ToyCard key={toy.id} toy={toy} onDeleteClick={onDeleteClick}/>
      ))}
    </div>
  );
}

export default ToyContainer;
