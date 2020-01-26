import React from "react"

import RemoveListButton from "./RemoveListButton"
import CreateCardContainer from "../containers/CreateCardContainer"
import CardContainer from "../containers/CardContainer"

function List({ list = {}, listId, lists, removeList }) {
  return (
    <article className="List">
      <div className="list-title-and-delete-btn-container">
        <h2>{list.title}</h2>
        <RemoveListButton
          listId={listId}
          lists={lists}
          removeList={removeList}
        />
      </div>
      <CreateCardContainer listId={list.id} />
      <div>
        {list.cards.map(cardId => (
          <CardContainer key={cardId} cardId={cardId} listId={list.id} />
        ))}
      </div>
    </article>
  )
}

export default List
