export const CREATE_CARD = "CREATE_CARD"
export const MOVE_CARD_TO_LIST = "MOVE_CARD"
export const REMOVE_CARD_FROM_LIST = "REMOVE_CARD"

// card reducer function abstraction
const defaultCardData = {
  title: "",
  description: "",
  assignedTo: ""
}

export const createCard = (listId, cardData) => {
  const cardId = Date.now().toString()

  const card = {
    id: cardId,
    ...defaultCardData,
    ...cardData
  }

  return {
    type: CREATE_CARD,
    payload: {
      card,
      listId,
      cardId
    }
  }
}

export const moveCardToList = (
  cardId,
  listId,
  currentlySelectedListId,
  lists
) => {
  return {
    type: MOVE_CARD_TO_LIST,
    payload: {
      cardId,
      currentListId: listId,
      newListId: currentlySelectedListId,
      list: lists
    }
  }
}

export const removeCardFromList = (cardId, listId, lists, cards) => {
  return {
    type: REMOVE_CARD_FROM_LIST,
    payload: {
      cardId,
      listId,
      lists,
      cards
    }
  }
}
