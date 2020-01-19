import React from "react"
import MoveCardToListContainer from "../containers/MoveCardToListContainer"

function Card({ card = {}, listId, lists }) {
  return (
    <article className="Card">
      <h3>{card.title}</h3>
      <div className="Card-description">{card.description}</div>
      <MoveCardToListContainer
        card={card}
        cardId={card.id}
        listId={listId}
        lists={lists}
      />
    </article>
  )
}

export default Card
