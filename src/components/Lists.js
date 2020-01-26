import React from "react"
import ListContainer from "../containers/ListContainer"

function Lists({ lists = [], removeList }) {
  return (
    <section className="Lists">
      {lists.map(listId => (
        <ListContainer key={listId} listId={listId} removeList={removeList} />
      ))}
    </section>
  )
}

export default Lists
