import { users as defaultUsers } from "../normalized-state"

import { CREATE_USER } from "../actions/user-actions"

const userReducer = (users = defaultUsers, action) => {
  const actionType = action.type
  const actionPayload = action.payload

  if (actionType === CREATE_USER) {
    const { userId, user } = actionPayload

    const newUsersEntities = { ...users.entities, [userId]: user }
    const newUsersIds = [...users.ids, userId]

    return {
      entities: newUsersEntities,
      ids: newUsersIds
    }
  }

  return users
}

export default userReducer
