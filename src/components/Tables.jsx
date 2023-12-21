import React, { useState } from "react"
import Table from "./Table"
import FormAddTable from "./FormAddTable"
import FormDeleteTable from "./FormDeleteTable"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import FormAddTask from "./FormAddTask"
import FormUpdateTask from "./FormUpdateTask"

function Tables() {
  const [titles, setTitles] = useState([
    { id: 1, title: "projet ressource" },
    { id: 2, title: "Sujet de la prochaine réunion" },
    { id: 3, title: "a faire" },
    { id: 4, title: "en cours" },
  ])

  const [tasks, setTasks] = useState([])
  const [displayAddFormTable, setDisplayAddFormTable] = useState(false)
  const [displayDeleteFormTable, setDisplayDeleteFormTable] = useState(false)
  const [displayAddFormTask, setDisplayAddFormTask] = useState(false)
  const [displayUpdateFormTask, setDisplayUpdateFormTask] = useState(false)
  const [getTask, setGetTask] = useState({})

  const onAddTab = (title) => {
    setTitles([...titles, { id: uuidv4(), title }])
  }

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
    const indexTask = [...tasks].findIndex((t) => t.id === idTaskdrop)
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
          <FormAddTable
            onAddTab={onAddTab}
            setDisplayAddFormTable={setDisplayAddFormTable}
          />
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
            listTitle={titles}
            deleteTable={deleteTable}
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
      </div>
      <div className="tableau">
        {titles.map((tableau, key) => {
          return (
            <Table
              table={tableau}
              key={key}
              listTasks={tasks}
              onDeleteTask={onDeleteTask}
              moveTask={moveTask}
              setDisplayUpdateFormTask={setDisplayUpdateFormTask}
              idTaskToEdit={idTaskToEdit}
            />
          )
        })}
      </div>
    </>
  )
}

export default Tables
