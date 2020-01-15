import React, { useState } from "react"

function CreateCard(props) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const isValid = () => {
    return title && description
  }

  const isInvalid = () => {
    return !isValid()
  }

  // handle form submit
  const handleSubmit = event => {
    event.preventDefault()

    if (isInvalid()) return

    if (props.createCard) {
      props.createCard(props.listId, {
        title,
        description
      })
    }

    setTitle("")
    setDescription("")
  }
  return (
    <form className="CreateCard" onSubmit={handleSubmit}>
      <input
        className="CreateCard-title"
        onChange={event => setTitle(event.target.value)}
        name="title"
        placeholder="Title"
        type="text"
        value={title}
      />
      <input
        className="CreateCard-description"
        onChange={event => setDescription(event.target.value)}
        placeholder="Description"
        name="description"
        type="text"
        value={description}
      />
      <input
        className="CreateCard-submit"
        type="submit"
        value="Create New Card"
        disabled={isInvalid()}
      />
    </form>
  )
}

export default CreateCard
