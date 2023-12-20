import React, { useState } from "react"

function FormAddTask({ tables, onAddTask }) {
  const [task, setTask] = useState("")
  const [idTable, setIdTable] = useState("0")
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onAddTask(task, idTable)
          setTask("")
          setIdTable("")
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
      </form>
    </>
  )
}

export default FormAddTask
