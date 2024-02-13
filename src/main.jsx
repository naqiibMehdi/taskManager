import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./redux/store.js"

const request = indexedDB.open("task-managerDB", 1)

request.onupgradeneeded = (e) => {
  let db = e.target.result
  let spaceStore = db.createObjectStore("spaces", {
    keyPath: "id",
  })

  let tableStore = db.createObjectStore("tables", {
    keyPath: "id",
  })

  db.createObjectStore("tasks", {
    keyPath: "id",
  })

  // for (let table of tables) {
  //   tableStore.put(table)
  // }

  // for (let space of spaces) {
  //   spaceStore.put(space)
  //   console.log(space)
  // }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
