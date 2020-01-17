export const CREATE_USER = "CREATE_USER"

// default data
const defaultData = {
  name: "",
  email: ""
}

export const createUser = userData => {
  const userId = Date.now().toString()

  const user = {
    id: userId,
    ...defaultData,
    ...userData
  }

  return {
    type: CREATE_USER,
    payload: {
      userId,
      user
    }
  }
}
