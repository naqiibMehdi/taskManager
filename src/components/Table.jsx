import React from "react"
import formPlus from "../assets/plus.svg"

function Table({ title }) {
  return (
    <>
      <div className="tableau-child">
        <p>{title}</p>
        <div className="tableau-btn">
          <button>
            <span className="tableau-image">
              <img src={formPlus} alt="symbole plus" />
            </span>
            Ajouter une carte
          </button>
        </div>
      </div>
    </>
  )
}

export default Table
