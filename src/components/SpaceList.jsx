import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import SpaceItem from "./SpaceItem"
import FormUpdateSpace from "./FormUpdateSpace"
import { deleteSpaces } from "../redux/tables/spaceSlice"
import { deleteTablesWithSpaces } from "../redux/tables/tablesSlice"

export default function SpaceList() {
  const spaces = useSelector((state) => state.spaces.spaces)
  const displayForm = useSelector((state) => state.spaces.hideFormUpdate)
  const listSpacesToDelete = useSelector((state) => state.spaces.spacesToDelete)
  const dispatch = useDispatch()
  return (
    <>
      {displayForm && <FormUpdateSpace />}
      <div
        className="container my-5"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {spaces.map((space) => (
          <SpaceItem space={space} key={space.id} />
        ))}
      </div>
      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch(deleteTablesWithSpaces(listSpacesToDelete))
          dispatch(deleteSpaces(listSpacesToDelete))
        }}
      >
        Supprimer en masse
      </button>
    </>
  )
}
