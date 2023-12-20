import React from "react"
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <>
      <h1>Accueil</h1>
      <Link to="/login" className="btn btn-primary">
        Login
      </Link>
      <Link to="/tasklist" className="btn btn-primary">
        Liste des Tables
      </Link>
    </>
  )
}

export default HomePage
