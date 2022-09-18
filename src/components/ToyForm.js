import React, {useState} from "react";

function ToyForm({onFormSubmit}) {
  const [formData, setFormdata] = useState({
    name: '',
    image: '',
    likes: 0
  })
  
  function handleChange(e) {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  function handleFormSubmit(e) {
    e.preventDefault()
    onFormSubmit(formData)
    e.target.reset()
  }
  
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
