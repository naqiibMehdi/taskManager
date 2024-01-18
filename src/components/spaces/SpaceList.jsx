import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import SpaceItem from "./SpaceItem"
import FormUpdateSpace from "./FormUpdateSpace"
import {
  addForm,
  deleteSpaces,
  displayFormUpdate,
} from "../../redux/tables/spaceSlice"
import { deleteTablesWithSpaces } from "../../redux/tables/tablesSlice"

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
        className={
          listSpacesToDelete.length === 0 ? "d-none" : "btn btn-danger"
        }
        onClick={() => {
          dispatch(deleteTablesWithSpaces(listSpacesToDelete))
          dispatch(deleteSpaces(listSpacesToDelete))
        }}
      >
        Supprimer en masse
      </button>
      <button
        className={"btn btn-success"}
        onClick={() => {
          dispatch(addForm(true))
          dispatch(displayFormUpdate(true))
        }}
      >
        Ajouter un space
      </button>
    </>
  )
}