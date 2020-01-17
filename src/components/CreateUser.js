import React, { useState } from "react"

function CreateUser(props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  // check if valid or invalid
  const isValid = () => {
    return name && email
  }

  const isInvalid = () => {
    return !isValid()
  }

  // form submit handler
  const handleSubmit = event => {
    event.preventDefault()

    if (props.createUser) {
      props.createUser({
        name,
        email
      })
    }

    setName("")
    setEmail("")
  }
  return (
    <form className="CreateUser" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        placeholder="email"
      />
      <input type="submit" value="Create User" disabled={isInvalid()} />
    </form>
  )
}

export default CreateUser
