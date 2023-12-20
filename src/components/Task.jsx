import React, { useState } from "react"
import formPlus from "../assets/plus.svg"

function Task({ titleTask }) {
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
        >
          &#9747;
        </button>
      </div>
    </div>
  )
}

export default Task
