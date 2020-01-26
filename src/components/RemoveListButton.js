import React from "react"
import { MdDelete } from "react-icons/md"

function RemoveListButton({ listId, lists, removeList }) {
  return (
    <button
      className="delete-list-btn"
      onClick={() => {
        removeList(listId, lists)
      }}
    >
      <MdDelete />
    </button>
  )
}

export default RemoveListButton
