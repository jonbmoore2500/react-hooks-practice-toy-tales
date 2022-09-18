import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toysData}) {
  
  
  
  return (
    <div id="toy-collection">{
      toysData.map((toy) => (
        <ToyCard key={toy.id} toy={toy}/>
      ))
    }</div>
  );
}

export default ToyContainer;
