import React from "react"
import Task from "./Task"

function Table({
  table,
  listTasks,
  onDeleteTask,
  moveTask,
  setDisplayUpdateFormTask,
  setDisplayFormUpdateTable,
  idTaskToEdit,
  updateTitleTable,
}) {
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
        <p
          onClick={() => {
            updateTitleTable(table.id)
            setDisplayFormUpdateTable(true)
          }}
          style={{ cursor: "pointer" }}
        >
          {table.title}
        </p>
        <div>
          {listTasks &&
            listTasks.map((task) => {
              if (table.id.toString() === task.tableId.toString()) {
                return (
                  <Task
                    task={task}
                    key={task.id}
                    onDeleteTask={() => onDeleteTask(task.id)}
                    setDisplayUpdateFormTask={setDisplayUpdateFormTask}
                    idTaskToEdit={idTaskToEdit}
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
