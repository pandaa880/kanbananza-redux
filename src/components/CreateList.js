import React, { useState } from "react"

function CreateList(props) {
  const [title, setTitle] = useState("")

  const isValid = () => {
    return !!title
  }

  const isInvalid = () => {
    return !isValid()
  }

  // form submit handler
  const handleSubmit = event => {
    event.preventDefault()

    if (props.createList) {
      props.createList({
        title
      })
    }

    setTitle("")
  }

  return (
    <form className="CreateList" onSubmit={handleSubmit}>
      <input
        className="CreateList-title"
        id="CreateList-title"
        name="title"
        onChange={event => setTitle(event.target.value)}
        placeholder="New List Title"
        value={title}
      />
      <input
        className="CreateList-submit"
        type="submit"
        disabled={isInvalid()}
      />
    </form>
  )
}

// add function methods

export default CreateList
