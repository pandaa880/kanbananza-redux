import { connect } from "react-redux"

import RemoveCardFromList from "../components/RemoveCardFromList"

import { removeCardFromList } from "../actions/card-actions"

const mapDispatchToProps = {
  removeCardFromList
}

export default connect(null, mapDispatchToProps)(RemoveCardFromList)
