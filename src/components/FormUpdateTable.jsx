import { useState } from "react"

function FormUpdateTable({ setDisplayFormUpdateTable, getTable, updateTable }) {
  const [title, setTitleTable] = useState("")
  return (
    <>
      <div className="popup-overlay">
        <div className="w-50 bg-white rounded p-3">
          <form
            className="w-100 p-0"
            onSubmit={(e) => {
              e.preventDefault()
              updateTable(title, getTable.id)
              setDisplayFormUpdateTable(false)
            }}
          >
            <div className="form-group">
              <label htmlFor="titre" className="mb-2">
                Tâche
              </label>
              <input
                type="text"
                className="form-control mb-2"
                id="titre"
                value={title || getTable.title}
                onChange={(e) => setTitleTable(e.target.value)}
              />
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-primary" type="submit">
                Valider
              </button>
              <button
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault()
                  setDisplayFormUpdateTable(false)
                }}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default FormUpdateTable
