import React, { useEffect, useState } from "react"
import Table from "./Table"
import FormAddTable from "./FormAddTable"
import FormDeleteTable from "./FormDeleteTable"
import { Link, useParams } from "react-router-dom"
import FormAddTask from "../tasks/FormAddTask"
import FormUpdateTask from "../tasks/FormUpdateTask"
import FormUpdateTable from "./FormUpdateTable"
import { useDispatch, useSelector } from "react-redux"
import { setDisplayFormTable, setTables } from "../../redux/tables/tablesSlice"
import { getTablesApi } from "../firebase/TableAPI"

function Tables() {
  const params = useParams()

  const { tables, displayFormTable } = useSelector((state) => state.tables)
  const dispatch = useDispatch()

  const [displayAddFormTask, setDisplayAddFormTask] = useState(false)
  const [displayUpdateFormTask, setDisplayUpdateFormTask] = useState(false)
  const [displayFormUpdateTable, setDisplayFormUpdateTable] = useState(false)
  const [db, setDb] = useState(null)

  useEffect(() => {
    // const getTables = async () => {
    //   dispatch(setTables(await getTablesApi()))
    // }
    // getTables()
  }, [])

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
      <Link to="/spaces" className="btn btn-primary">
        Page des spaces
      </Link>
      <div className="container mx-auto my-4 w-80 d-flex align-items-start justify-content-center column-gap-5">
        <button
          className="btn btn-primary"
          onClick={() =>
            dispatch(setDisplayFormTable({ type: "add", boolean: true }))
          }
        >
          Ajouter un tableau
        </button>
        <button
          className="btn btn-danger"
          onClick={() =>
            dispatch(setDisplayFormTable({ type: "delete", boolean: true }))
          }
        >
          Supprimer un tableau
        </button>
        <button
          className="btn btn-success"
          onClick={() => setDisplayAddFormTask(true)}
        >
          Ajouter une tâche
        </button>

        {displayFormTable.add && <FormAddTable db={db} />}
        {displayAddFormTask && (
          <FormAddTask setDisplayAddFormTask={setDisplayAddFormTask} />
        )}
        {displayFormTable.update && <FormDeleteTable />}
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
        {tables &&
          [...tables]
            .filter((t) => t.spaceId.toString() === params.id.toString())
            .sort((a, b) => (a.order >= b.order ? 1 : -1))
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
