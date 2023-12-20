import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const [login, setLogin] = useState("")
  const [pwd, setPwd] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handelClick = (e) => {
    e.preventDefault()
    if (login === "cloudcampus" && pwd === "0000") {
      setError(false)
      navigate("/tasklist")
      return
    }
    setError(true)
  }

  return (
    <div className="container">
      <div className={error ? "alert alert-danger" : "d-none"}>
        Votre login ou mot de passe sont incorrect !
      </div>
      <h1>Login</h1>
      <form>
        <div className="form-group mb-2">
          <label htmlFor="login">Login</label>
          <input
            placeholder="Votre login"
            type="text"
            id="login"
            className="form-control"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Mot de passe</label>
          <input
            placeholder="mot de passe"
            type="password"
            className="form-control"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handelClick}
        >
          Se Connecter
        </button>
      </form>
    </div>
  )
}

export default Login
