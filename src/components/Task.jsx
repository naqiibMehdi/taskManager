import React, { useState } from "react"

function Task({ task, onDeleteTask, setDisplayUpdateFormTask, idTaskToEdit }) {
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
        e.dataTransfer.setData("id_task", task.id)
      }}
      onClick={() => {
        idTaskToEdit(task.id)
        setDisplayUpdateFormTask(true)
      }}
    >
      <p className="m-0" style={{ height: "auto" }}>
        {task.title}
      </p>
      <div>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            fontSize: "18px",
          }}
          onClick={onDeleteTask}
        >
          &#9747;
        </button>
      </div>
    </div>
  )
}

export default Task
