import React, { useState } from "react"

function FormAddTask({ tables, onAddTask, setDisplayAddFormTask }) {
  const [task, setTask] = useState("")
  const [idTable, setIdTable] = useState("0")
  return (
    <>
      <div className="popup-overlay">
        <div className="w-50 bg-white p-3 rounded">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              onAddTask(task, idTable)
              setTask("")
              setIdTable("")
              setDisplayAddFormTask(false)
            }}
          >
            <label htmlFor="add" className="mb-2">
              Choisissez votre tableau:
            </label>
            <select
              className="form-select"
              id="add"
              onChange={(e) => setIdTable(e.target.value)}
              value={idTable}
            >
              <option defaultValue="0">-</option>
              {tables.map((table) => {
                return (
                  <option value={table.id} key={table.id}>
                    {table.title}
                  </option>
                )
              })}
            </select>
            <div className="form-group">
              <label htmlFor="titleTask">Ecrivez votre tâche:</label>
              <input
                type="text"
                id="titleTask"
                className="form-control"
                onChange={(e) => setTask(e.target.value)}
                value={task}
              />
            </div>
            <button
              className="btn btn-success mt-2"
              disabled={idTable === "0" || task === "" ? true : false}
            >
              Ajouter une tâche
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setDisplayAddFormTask(false)}
            >
              Annuler
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default FormAddTask
