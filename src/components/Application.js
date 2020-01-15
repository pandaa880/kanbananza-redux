import React from "react"

import Users from "./Users"
import CreateListContainer from "../containers/CreateListContainer"
import ListsContainer from "../containers/ListsContainer"

function Application() {
  return (
    <main className="Application">
      <Users />
      <section>
        <CreateListContainer />
        <ListsContainer />
      </section>
    </main>
  )
}

export default Application
