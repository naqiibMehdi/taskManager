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
  moveTable,
}) {
  return (
    <>
      <div
        className="tableau-child"
        draggable="true"
        onDragStart={(e) => {
          e.dataTransfer.setData("order", table.order)
          e.dataTransfer.setData("id_table", table.id)
        }}
        onDrop={(e) => {
          const idTable_drag = e.dataTransfer.getData("id_table")
          const order_table_drag = e.dataTransfer.getData("order")
          const idTask = e.dataTransfer.getData("id_task")
          if (idTask) {
            moveTask(idTask, table.id)
            return
          } else if (idTable_drag) {
            moveTable(idTable_drag, table.id, order_table_drag, table.order)
          }
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
