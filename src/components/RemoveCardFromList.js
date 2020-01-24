import React from "react"

function RemoveCardFromList(props) {
  const handleButtonClick = () => {
    const { cardId, listId, lists, cards, removeCardFromList } = props

    removeCardFromList(cardId, listId, lists, cards)
  }
  return (
    <button className="danger" onClick={handleButtonClick}>
      Remove Card
    </button>
  )
}

export default RemoveCardFromList
