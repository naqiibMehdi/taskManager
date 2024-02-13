import React, { useEffect } from "react"
import Task from "../tasks/Task"
import { useDispatch, useSelector } from "react-redux"
import { moveTask, setTasks } from "../../redux/tables/tasksSlice"
import { getOneTable } from "../../redux/tables/tablesSlice"

function Table({
  table,
  setDisplayUpdateFormTask,
  setDisplayFormUpdateTable,
  moveTable,
}) {
  const tasks = useSelector((state) => state.tasks.tasks)
  const dispatch = useDispatch()

  useEffect(() => {
    const request = indexedDB.open("task-managerDB", 1)

    request.onsuccess = (e) => {
      const db = e.target.result

      const taskStore = db
        .transaction(["tasks"], "readonly")
        .objectStore("tasks")
      const allTasks = taskStore.getAll()

      allTasks.onsuccess = (e) => {
        dispatch(setTasks(e.target.result))
      }
    }
  }, [])
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
            dispatch(moveTask({ idTaskDrop: idTask, idTableDrag: table.id }))
            return
          } else if (idTable_drag) {
            moveTable(idTable_drag, table.id, order_table_drag, table.order)
          }
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <p
          onClick={() => {
            dispatch(getOneTable(table.id))
            setDisplayFormUpdateTable(true)
          }}
          style={{ cursor: "pointer" }}
        >
          {table.title}
        </p>
        <div>
          {tasks &&
            tasks.map((task) => {
              if (table.id.toString() === task.tableId.toString()) {
                return (
                  <Task
                    task={task}
                    key={task.id}
                    setDisplayUpdateFormTask={setDisplayUpdateFormTask}
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
