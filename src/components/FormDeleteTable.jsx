import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteTable } from "../redux/tables/tablesSlice"

function FormDeleteTable({ setDisplayDeleteFormTable }) {
  const [id, setId] = useState("0")
  const dispatch = useDispatch()
  const listTables = useSelector((state) => state.tables.tables)
  return (
    <>
      <div className="popup-overlay">
        <div className="w-50 rounded bg-white p-3">
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
              {listTables.map((objTab) => {
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
                dispatch(deleteTable(id))
                setId("0")
                setDisplayDeleteFormTable(false)
              }}
            >
              Supprimer
            </button>
            <button
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                setDisplayDeleteFormTable(false)
              }}
            >
              Annuler
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default FormDeleteTable
