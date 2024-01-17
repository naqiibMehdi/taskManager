import React, { useState } from "react"
import Table from "./Table"
import FormAddTable from "./FormAddTable"
import FormDeleteTable from "./FormDeleteTable"
import { Link, useParams } from "react-router-dom"
import FormAddTask from "./FormAddTask"
import FormUpdateTask from "./FormUpdateTask"
import FormUpdateTable from "./FormUpdateTable"
import { useSelector } from "react-redux"

function Tables() {
  const params = useParams()

  const listTables = useSelector((state) => state.tables.tables)

  const [displayAddFormTable, setDisplayAddFormTable] = useState(false)
  const [displayDeleteFormTable, setDisplayDeleteFormTable] = useState(false)
  const [displayAddFormTask, setDisplayAddFormTask] = useState(false)
  const [displayUpdateFormTask, setDisplayUpdateFormTask] = useState(false)
  const [displayFormUpdateTable, setDisplayFormUpdateTable] = useState(false)

  const moveTable = (idDrag, idDrop, orderDrag, orderDrop) => {
    const tablesDragDrop = [...titles]
    const tab = []

    for (let el of tablesDragDrop) {
      if (orderDrag < orderDrop) {
        if (el.id.toString() === idDrag.toString()) {
          el.order = orderDrop
        } else {
          if (el.order === 0) el.order = 1
          el.order -= 1
        }
        tab.push(el)
      } else {
        if (el.id.toString() === idDrag.toString()) {
          el.order = orderDrop
        } else {
          el.order += 1
        }
        tab.push(el)
      }
    }
    setTitles(tab)
  }

  return (
    <>
      <Link to="/" className="btn btn-primary">
        Page d'accueil
      </Link>
      <div className="container mx-auto my-4 w-80 d-flex align-items-start justify-content-center column-gap-5">
        <button
          className="btn btn-primary"
          onClick={() => setDisplayAddFormTable(true)}
        >
          Ajouter un tableau
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setDisplayDeleteFormTable(true)}
        >
          Supprimer un tableau
        </button>
        <button
          className="btn btn-success"
          onClick={() => setDisplayAddFormTask(true)}
        >
          Ajouter une tâche
        </button>

        {displayAddFormTable && (
          <FormAddTable setDisplayAddFormTable={setDisplayAddFormTable} />
        )}
        {displayAddFormTask && (
          <FormAddTask setDisplayAddFormTask={setDisplayAddFormTask} />
        )}
        {displayDeleteFormTable && (
          <FormDeleteTable
            setDisplayDeleteFormTable={setDisplayDeleteFormTable}
          />
        )}
        {displayUpdateFormTask && (
          <FormUpdateTask setDisplayUpdateFormTask={setDisplayUpdateFormTask} />
        )}

        {displayFormUpdateTable && (
          <FormUpdateTable
            setDisplayFormUpdateTable={setDisplayFormUpdateTable}
          />
        )}
      </div>
      <div className="tableau">
        {[...listTables]
          .sort((a, b) => (a.order >= b.order ? 1 : -1))
          .filter((t) => t.id.toString() === params.id.toString())
          .map((tableau) => {
            return (
              <Table
                table={tableau}
                key={tableau.id}
                setDisplayUpdateFormTask={setDisplayUpdateFormTask}
                setDisplayFormUpdateTable={setDisplayFormUpdateTable}
                moveTable={moveTable}
              />
            )
          })}
      </div>
    </>
  )
}

export default Tables
