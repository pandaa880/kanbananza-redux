import { cards as defaultCards } from "../normalized-state"

import { CREATE_CARD } from "../actions/card-actions"

const cardReducer = (cards = defaultCards, action) => {
  const actionType = action.type
  const actionPayload = action.payload

  if (actionType === CREATE_CARD) {
    const { card, cardId } = actionPayload

    return {
      entities: { ...cards.entities, [cardId]: card },
      ids: [...cards.ids, cardId]
    }
  }
  return cards
}

export default cardReducer
