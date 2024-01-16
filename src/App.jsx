import Tables from "./components/Tables"
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import Login from "./components/Login"
import SpaceList from "./components/SpaceList"
import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasklist" element={<Tables />} />
        <Route path="/spaces" element={<SpaceList />} />
      </Routes>
    </>
  )
}

export default App
