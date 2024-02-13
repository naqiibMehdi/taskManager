import Tables from "./components/tables/Tables"
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import Login from "./components/Login"
import SpaceList from "./components/spaces/SpaceList"
import Message from "./components/Message"
import "./App.css"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    const request = indexedDB.open("task-managerDB", 1)

    request.onupgradeneeded = (e) => {
      const db = e.target.result

      db.createObjectStore("spaces", {
        keyPath: "id",
        autoIncrement: true,
      })

      db.createObjectStore("tables", {
        keyPath: "id",
        autoIncrement: true,
      })

      db.createObjectStore("tasks", {
        keyPath: "id",
        autoIncrement: true,
      })
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/spaces/:id/tables" element={<Tables />} />
        <Route path="/spaces" element={<SpaceList />} />
      </Routes>
      <Message />
    </>
  )
}

export default App
