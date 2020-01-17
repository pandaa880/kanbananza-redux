import React from "react"

import CreateUserContainer from "../containers/CreateUserContainer"
import UserContainer from "../containers/UserContainer"

function Users({ users = [] }) {
  return (
    <section className="Users">
      <h2>Users</h2>
      <CreateUserContainer />

      {users.map(userId => (
        <UserContainer userId={userId} key={userId} />
      ))}
    </section>
  )
}

export default Users
