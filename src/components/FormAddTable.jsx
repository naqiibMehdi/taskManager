import React, { useState } from "react"

function FormAddTable({ onAddTab }) {
  const [title, setTitle] = useState("")
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onAddTab(title)
          setTitle("")
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
        <button className="btn btn-primary">Ajouter un tableau</button>
      </form>
    </>
  )
}

export default FormAddTable
