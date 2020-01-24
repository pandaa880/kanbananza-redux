import React from "react"
import MoveCardToListContainer from "../containers/MoveCardToListContainer"
import RemoveCardFromListContainer from "../containers/RemoveCardFromListContainer"

function Card({ card = {}, listId, lists, cards }) {
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
      <RemoveCardFromListContainer
        cardId={card.id}
        listId={listId}
        lists={lists}
        cards={cards}
      />
    </article>
  )
}

export default Card
