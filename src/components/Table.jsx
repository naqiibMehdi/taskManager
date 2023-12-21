import React from "react"
import formPlus from "../assets/plus.svg"
import Task from "./Task"

function Table({ table, listTasks, onDeleteTask }) {
  return (
    <>
      <div className="tableau-child">
        <p>{table.title}</p>
        <div>
          {listTasks &&
            listTasks.map((task) => {
              if (table.id.toString() === task.tableId.toString()) {
                return (
                  <Task
                    titleTask={task.title}
                    key={task.id}
                    onDeleteTask={() => onDeleteTask(task.id)}
                  />
                )
              }
            })}
        </div>
      </div>
    </>
  )
}

export default Table
