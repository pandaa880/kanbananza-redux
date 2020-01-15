import React from "react"
import ListContainer from "../containers/ListContainer"

function Lists({ lists = [] }) {
  return (
    <section className="Lists">
      {lists.map(listId => (
        <ListContainer key={listId} listId={listId} />
      ))}
    </section>
  )
}

export default Lists
