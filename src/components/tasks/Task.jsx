import React, { useEffect, useState } from "react"
import { deleteTask, getTask, setTasks } from "../../redux/tables/tasksSlice"
import { useDispatch } from "react-redux"

function Task({ task, setDisplayUpdateFormTask }) {
  const dispatch = useDispatch()

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: "5px",
        marginRight: "5px",
        marginBlock: "10px",
        padding: "10px 5px",
        cursor: "pointer",
      }}
      draggable="true"
      onDragStart={(e) => {
        e.stopPropagation()
        e.dataTransfer.setData("id_task", task.id)
      }}
      onClick={() => {
        dispatch(getTask(task.id))
        setDisplayUpdateFormTask(true)
      }}
    >
      <p className="m-0" style={{ maxWidth: "80%", wordWrap: "break-word" }}>
        {task.title}
      </p>
      <div
        onClick={(e) => {
          e.stopPropagation()
          dispatch(deleteTask(task.id))
        }}
        style={{ width: "20px", display: "flex", justifyContent: "center" }}
      >
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            fontSize: "18px",
          }}
        >
          &#9747;
        </button>
      </div>
    </div>
  )
}

export default Task
