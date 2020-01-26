import set from "lodash/fp/set"

import { lists as defaultLists } from "../normalized-state"

// card actions
import { CREATE_LIST, REMOVE_LIST } from "../actions/list-actions"
import {
  CREATE_CARD,
  MOVE_CARD_TO_LIST,
  REMOVE_CARD_FROM_LIST
} from "../actions/card-actions"

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

  /**
   * remove card from list
   */
  if (actionType === REMOVE_CARD_FROM_LIST) {
    const { listId, lists, cardId } = actionPayload

    // make a copy of lists entities and ids
    const updatedListOfCards = [...lists.entities[listId].cards]

    // find the list and remove card reference from that list
    const cardIndexInList = updatedListOfCards.findIndex(id => id === cardId)

    if (cardIndexInList >= 0) {
      updatedListOfCards.splice(cardIndexInList, 1)
    }

    // define new card entities
    const updatedList = {
      ...lists.entities[listId],
      cards: updatedListOfCards
    }

    // return updated data
    return {
      entities: { ...lists.entities, [listId]: updatedList },
      ids: lists.ids
    }
  }

  // remove list
  if (actionType === REMOVE_LIST) {
    const { listId, lists } = actionPayload

    const newEntities = { ...lists.entities }
    const newIds = [...lists.ids]

    // delete the list using listId
    delete newEntities[listId]

    // find the list id from array of ids using listId from param
    const listIdIndex = newIds.findIndex(id => id === listId)

    if (listIdIndex >= 0) {
      newIds.splice(listIdIndex, 1)
    }

    return {
      entities: newEntities,
      ids: newIds
    }
  }

  return lists
}

export default listReducer
