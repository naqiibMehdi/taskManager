import React, { useState } from "react"

function FormDeleteTable({ listTitle, deleteTable }) {
  const [id, setId] = useState("0")
  return (
    <>
      <form>
        <label className="mb-2">Supprimer un tableau:</label>
        <select
          className="form-select mb-2"
          aria-label="Default select example"
          value={id}
          onChange={(e) => {
            setId(e.target.value)
          }}
        >
          <option defaultValue="0">-</option>
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
          disabled={id === "0" ? true : false}
          onClick={(e) => {
            e.preventDefault()
            deleteTable(id)
            setId("0")
          }}
        >
          Supprimer
        </button>
      </form>
    </>
  )
}

export default FormDeleteTable
