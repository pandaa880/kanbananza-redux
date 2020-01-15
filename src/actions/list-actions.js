export const CREATE_LIST = "CREATE_LIST"

// list reducer - create list function
const defaultListData = {
  title: "",
  cards: []
}

export const createList = listData => {
  const listId = Date.now().toString()

  const list = {
    id: listId,
    ...defaultListData,
    ...listData
  }

  return {
    type: CREATE_LIST,
    payload: {
      listId,
      list
    }
  }
}
