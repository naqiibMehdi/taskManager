import React, { useState } from "react"
import Table from "./Table"
import FormAddTable from "./FormAddTable"
import FormDeleteTable from "./FormDeleteTable"
import { v4 as uuidv4 } from "uuid"

function Tables() {
  const [titles, setTitles] = useState([
    { id: 1, title: "projet ressource" },
    { id: 2, title: "Sujet de la prochaine réunion" },
    { id: 3, title: "a faire" },
    { id: 4, title: "en cours" },
  ])

  const onAddTab = (title) => {
    setTitles([...titles, { id: uuidv4(), title }])
  }

  const deleteTable = (idTable) => {
    const newTables = titles.filter((title) => title.id.toString() !== idTable)
    setTitles(newTables)
  }
  return (
    <>
      <div className="container mx-auto my-3 w-50 d-flex align-items-center column-gap-5">
        <FormAddTable onAddTab={onAddTab} />
        <FormDeleteTable listTitle={titles} deleteTable={deleteTable} />
      </div>
      <div className="tableau">
        {titles.map((tableau, key) => {
          return <Table title={tableau.title} key={key} />
        })}
      </div>
    </>
  )
}

export default Tables
