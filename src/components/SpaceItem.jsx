import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { displayFormUpdate, getSpace } from "../redux/tables/spaceSlice"

export default function SpaceItem({ space }) {
  const dispatch = useDispatch()
  return (
    <Link to={`/spaces/${space.id}/tables`}>
      <div
        style={{
          height: "150px",
          border: "solid 1px black",
          backgroundColor: space.bgcolor,
          position: "relative",
        }}
      >
        <p className="pt-2 px-2" style={{ color: "#ffffff" }}>
          {space.title}
        </p>
        <button
          className="btn btn-success"
          style={{ position: "absolute", bottom: "10px", right: "10px" }}
          onClick={(e) => {
            e.preventDefault()
            dispatch(displayFormUpdate(true))
            dispatch(getSpace(space.id))
          }}
        >
          Editer
        </button>
      </div>
    </Link>
  )
}
