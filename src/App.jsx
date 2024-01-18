import Tables from "./components/tables/Tables"
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import Login from "./components/Login"
import SpaceList from "./components/spaces/SpaceList"
import Message from "./components/Message"
import "./App.css"
import { useSelector } from "react-redux"

function App() {
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
