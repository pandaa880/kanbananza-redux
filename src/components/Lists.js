import React from "react"
import List from "./List"

function Lists({ lists = [] }) {
  return (
    <section className="Lists">
      {lists.map(list => (
        <List />
      ))}
    </section>
  )
}

export default Lists
