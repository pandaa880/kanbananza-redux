import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"

// import reducer
import rootReducer from "./reducers"

import Application from "./components/Application"
import TSDemo from "./TypescriptDemo"

import "./index.scss"

// create redux store
const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <TSDemo />
    <Application />
  </Provider>,
  document.getElementById("root")
)
