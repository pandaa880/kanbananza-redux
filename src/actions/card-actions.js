export const CREATE_CARD = "CREATE_CARD"

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
