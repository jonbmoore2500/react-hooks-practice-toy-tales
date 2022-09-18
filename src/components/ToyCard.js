import React from "react";

function ToyCard({toy, onDeleteClick, onHandleLike}) {
  const {id, name, image, likes} = toy
  
  function handleDelete() {
    onDeleteClick(id)
  }
  
  function handleLike() {
    const newLikes = likes + 1
    onHandleLike(id, newLikes)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
