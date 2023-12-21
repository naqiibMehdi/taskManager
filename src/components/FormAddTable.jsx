import React, { useState } from "react"

function FormAddTable({ onAddTab }) {
  const [title, setTitle] = useState("")
  const [displayForm, setDisplayForm] = useState(false)
  return (
    <>
      <div className="row w-10">
        {displayForm ? (
          <form
            className="w-100 p-0"
            onSubmit={(e) => {
              e.preventDefault()
              if (title.length === 0) {
                alert("Vous devez saisir un titre pour ajouter un tableau")
                return
              }
              onAddTab(title)
              setTitle("")
              setDisplayForm(false)
            }}
          >
            <div className="form-group">
              <label htmlFor="titre" className="mb-2">
                Saisir un titre
              </label>
              <input
                type="text"
                className="form-control mb-2"
                id="titre"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <button className="btn btn-primary">Ajouter</button>
          </form>
        ) : (
          <button
            className="btn btn-primary mt-3"
            onClick={() => setDisplayForm(true)}
          >
            Ajouter un tableau
          </button>
        )}
      </div>
    </>
  )
}

export default FormAddTable
