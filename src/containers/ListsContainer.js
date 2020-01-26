import { connect } from "react-redux"

import { removeList } from "../actions/list-actions"
import Lists from "../components/Lists"

const mapStateToProps = state => {
  return {
    lists: state.lists.ids
  }
}

const mapDispatchToProps = {
  removeList
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
