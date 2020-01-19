import React, { useState, useEffect } from "react"

function MoveCardToList({ cardId, lists, listId, moveCardToList }) {
  // lists
  const [listsArr, setListsArr] = useState(Object.values(lists.entities))
  // currently selected list id
  const [selectedListId, setSelectedListId] = useState(listId)

  // componentdidupdate call
  useEffect(() => {
    setListsArr(Object.values(lists.entities))
  }, [lists])

  // handle when user changes the list by selecting a new list name
  const handleDropdownChange = e => {
    const newSelectedListId = e.target.value
    setSelectedListId(newSelectedListId)
    moveCardToList(cardId, listId, newSelectedListId, lists)
  }
  return (
    <select
      className="Card-move"
      onChange={handleDropdownChange}
      value={selectedListId}
    >
      {listsArr &&
        listsArr.map(list => (
          <option value={list.id} key={list.id}>
            {list.title}
          </option>
        ))}
    </select>
  )
}

export default MoveCardToList
