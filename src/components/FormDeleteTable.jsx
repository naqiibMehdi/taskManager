import React, { useState } from "react"

function FormDeleteTable({ listTitle, deleteTable }) {
  const [id, setId] = useState("")
  return (
    <>
      <form>
        <p className="mb-2">Supprimer un tableau:</p>
        <select
          className="form-select mb-2"
          aria-label="Default select example"
          value={id}
          onChange={(e) => {
            setId(e.target.value)
          }}
        >
          <option defaultValue="">-</option>
          {listTitle.map((objTab) => {
            return (
              <option value={objTab.id} key={objTab.id}>
                {objTab.title}
              </option>
            )
          })}
        </select>
        <button
          className="btn btn-danger"
          onClick={(e) => {
            e.preventDefault()
            deleteTable(id)
          }}
        >
          Supprimer
        </button>
      </form>
    </>
  )
}

export default FormDeleteTable
