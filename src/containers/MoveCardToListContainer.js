import { connect } from "react-redux"

import MoveCardToList from "../components/MoveCardToList"

import { moveCardToList } from "../actions/card-actions"
const mapDispatchToProps = {
  moveCardToList
}

export default connect(null, mapDispatchToProps)(MoveCardToList)
