import React, { useState } from "react"
import Table from "./Table"
import FormAddTable from "./FormAddTable"
import FormDeleteTable from "./FormDeleteTable"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import FormAddTask from "./FormAddTask"
import FormUpdateTask from "./FormUpdateTask"
import FormUpdateTable from "./FormUpdateTable"
import { useSelector } from "react-redux"

function Tables() {
  const [titles, setTitles] = useState([
    { id: 1, title: "projet ressource", order: 1 },
    { id: 2, title: "Sujet de la prochaine réunion", order: 2 },
    { id: 3, title: "a faire", order: 3 },
    { id: 4, title: "en cours", order: 4 },
  ])

  const listTables = useSelector((state) => state.tables)

  const [tasks, setTasks] = useState([])
  const [displayAddFormTable, setDisplayAddFormTable] = useState(false)
  const [displayDeleteFormTable, setDisplayDeleteFormTable] = useState(false)
  const [displayAddFormTask, setDisplayAddFormTask] = useState(false)
  const [displayUpdateFormTask, setDisplayUpdateFormTask] = useState(false)
  const [displayFormUpdateTable, setDisplayFormUpdateTable] = useState(false)
  const [getTask, setGetTask] = useState({})
  const [getTable, setGetTable] = useState({})

  const deleteTable = (idTable) => {
    const newTables = titles.filter((title) => title.id.toString() !== idTable)
    setTitles(newTables)
  }

  const onAddTask = (titleTask, tableId) => {
    setTasks([...tasks, { id: uuidv4(), title: titleTask, tableId }])
  }

  const onDeleteTask = (id) => {
    const newTasks = [...tasks].filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  const moveTask = (idTaskdrop, idTableDrag) => {
    const newTasks = [...tasks]
    const indexTask = newTasks.findIndex((t) => t.id === idTaskdrop)
    newTasks[indexTask].tableId = idTableDrag
    setTasks(newTasks)
  }

  const idTaskToEdit = (idTask) => {
    const getTask = [...tasks].find((t) => t.id === idTask)
    setGetTask(getTask)
  }

  const updateTask = (titleTask, idTask) => {
    const newTasks = [...tasks]
    const indextask = newTasks.findIndex((t) => t.id === idTask)
    newTasks[indextask].title = titleTask
    setTasks(newTasks)
  }

  const updateTitleTable = (idTable) => {
    const oneTable = [...listTables].find((t) => t.id === idTable)
    setGetTable(oneTable)
  }

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
          <FormAddTask
            tables={titles}
            onAddTask={onAddTask}
            setDisplayAddFormTask={setDisplayAddFormTask}
          />
        )}
        {displayDeleteFormTable && (
          <FormDeleteTable
            setDisplayDeleteFormTable={setDisplayDeleteFormTable}
          />
        )}
        {displayUpdateFormTask && (
          <FormUpdateTask
            setDisplayUpdateFormTask={setDisplayUpdateFormTask}
            task={getTask}
            updateTask={updateTask}
          />
        )}

        {displayFormUpdateTable && (
          <FormUpdateTable
            setDisplayFormUpdateTable={setDisplayFormUpdateTable}
            getTable={getTable}
          />
        )}
      </div>
      <div className="tableau">
        {listTables
          // .sort((a, b) => (a.order >= b.order ? 1 : -1))
          .map((tableau, key) => {
            return (
              <Table
                table={tableau}
                key={tableau.id}
                listTasks={tasks}
                onDeleteTask={onDeleteTask}
                moveTask={moveTask}
                setDisplayUpdateFormTask={setDisplayUpdateFormTask}
                setDisplayFormUpdateTable={setDisplayFormUpdateTable}
                idTaskToEdit={idTaskToEdit}
                updateTitleTable={updateTitleTable}
                moveTable={moveTable}
              />
            )
          })}
      </div>
    </>
  )
}

export default Tables
