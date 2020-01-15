import set from "lodash/fp/set"

import { lists as defaultLists } from "../normalized-state"

// card actions
import { CREATE_LIST } from "../actions/list-actions"
import { CREATE_CARD } from "../actions/card-actions"

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
  return lists
}

export default listReducer
