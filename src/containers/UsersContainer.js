import { connect } from "react-redux"
import { createSelector } from "reselect"

import Users from "../components/Users"

const getUsers = users => {
  return users.ids
}

const createUserSelector = createSelector(state => state.users, getUsers)

const mapStateToProps = state => {
  return {
    users: createUserSelector(state)
  }
}

export default connect(mapStateToProps)(Users)
