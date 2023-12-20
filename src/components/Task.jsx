import React, { useState } from "react"
import formPlus from "../assets/plus.svg"

function Task({ titleTask }) {
  return (
    <div
      style={{
        height: "40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: "5px",
        marginRight: "5px",
        marginBlock: "10px",
        padding: "0px 5px",
      }}
    >
      <p className="m-0">{titleTask}</p>
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
  )
}

export default Task
