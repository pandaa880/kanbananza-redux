import set from "lodash/fp/set"

import { lists as defaultLists } from "../normalized-state"

// card actions
import { CREATE_LIST } from "../actions/list-actions"
import { CREATE_CARD, MOVE_CARD_TO_LIST } from "../actions/card-actions"

const listReducer = (lists = defaultLists, action) => {
  const actionType = action.type
  const actionPayload = action.payload

  if (actionType === CREATE_CARD) {
    const { cardId, listId } = actionPayload

    const cards = lists.entities[listId].cards.concat(cardId)

    return set(["entities", listId, "cards"], cards, lists)
  }

  if (actionType === CREATE_LIST) {
    const { listId, list } = actionPayload
    const newListsEntities = { ...lists.entities, [listId]: list }
    const newListsIds = [...lists.ids, listId]

    return {
      entities: newListsEntities,
      ids: newListsIds
    }
  }

  if (actionType === MOVE_CARD_TO_LIST) {
    const { cardId, currentListId, newListId, list } = actionPayload

    // remove card from currentList
    const currentListCards = [...list.entities[currentListId].cards]
    const newListCards = [...list.entities[newListId].cards]

    const cardIndexInCurrentList = currentListCards.findIndex(
      element => element === cardId
    )

    if (cardIndexInCurrentList >= 0) {
      currentListCards.splice(cardIndexInCurrentList, 1)

      // add new card id in selected list
      newListCards.push(cardId)

      // update current list with previous card removed
      const updatedCurrentList = {
        ...list.entities[currentListId],
        cards: currentListCards
      }

      // updated new list with new card
      const updatedNewList = {
        ...list.entities[newListId],
        cards: newListCards
      }

      // construct new list entities
      const newListEntities = {
        ...list.entities,
        [currentListId]: updatedCurrentList,
        [newListId]: updatedNewList
      }

      return {
        entities: newListEntities,
        ids: list.ids
      }
    }

    return {
      entities: { ...list.entities },
      ids: list.ids
    }
  }

  return lists
}

export default listReducer
