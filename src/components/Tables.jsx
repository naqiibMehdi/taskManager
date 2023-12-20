import React, { useState } from "react"
import Table from "./Table"
import FormAddTable from "./FormAddTable"
import FormDeleteTable from "./FormDeleteTable"
import { v4 as uuidv4 } from "uuid"
import FormAddTask from "./FormAddTask"

function Tables() {
  const [titles, setTitles] = useState([
    { id: 1, title: "projet ressource" },
    { id: 2, title: "Sujet de la prochaine réunion" },
    { id: 3, title: "a faire" },
    { id: 4, title: "en cours" },
  ])

  const [tasks, setTasks] = useState([])

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
  return (
    <>
      <div className="container mx-auto my-4 w-80 d-flex align-items-start justify-content-center column-gap-5">
        <FormAddTable onAddTab={onAddTab} />
        <FormAddTask tables={titles} onAddTask={onAddTask} />
        <FormDeleteTable listTitle={titles} deleteTable={deleteTable} />
      </div>
      <div className="tableau">
        {titles.map((tableau, key) => {
          return <Table table={tableau} key={key} listTasks={tasks} />
        })}
      </div>
    </>
  )
}

export default Tables
