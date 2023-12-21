import React from "react"
import formPlus from "../assets/plus.svg"
import Task from "./Task"

function Table({ table, listTasks, onDeleteTask, moveTask }) {
  return (
    <>
      <div
        className="tableau-child"
        onDrop={(e) => {
          const idTask = e.dataTransfer.getData("id_task")
          moveTask(idTask, table.id)
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <p>{table.title}</p>
        <div>
          {listTasks &&
            listTasks.map((task) => {
              if (table.id.toString() === task.tableId.toString()) {
                return (
                  <Task
                    task={task}
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
