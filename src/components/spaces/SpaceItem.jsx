import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {
  addSpacesToDelete,
  displayFormUpdate,
  getSpace,
} from "../../redux/tables/spaceSlice"

export default function SpaceItem({ space }) {
  const dispatch = useDispatch()
  return (
    <div
      style={{
        height: "150px",
        border: "solid 1px black",
        backgroundColor: space.bgcolor,
        position: "relative",
      }}
    >
      <Link
        to={`/spaces/${space.id}/tables`}
        style={{ textDecoration: "none" }}
      >
        <p
          className="pt-2 px-2"
          style={{ color: "#ffffff", width: "fit-content" }}
        >
          {space.title}
        </p>
      </Link>
      <div
        className="form-check"
        style={{ position: "absolute", top: "10px", right: "10px" }}
      >
        <input
          type="checkbox"
          className="form-check-input"
          onChange={() => dispatch(addSpacesToDelete(space.id))}
        />
      </div>
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
  )
}
