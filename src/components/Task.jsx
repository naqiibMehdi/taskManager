import React, { useState } from "react"

function Task({ titleTask, onDeleteTask }) {
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
      }}
    >
      <p className="m-0" style={{ height: "auto" }}>
        {titleTask}
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
