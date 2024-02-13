import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import SpaceItem from "./SpaceItem"
import FormUpdateSpace from "./FormUpdateSpace"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"
import {
  addForm,
  deleteSpaces,
  displayFormUpdate,
  setSpaces,
} from "../../redux/tables/spaceSlice"
import { deleteTablesWithSpaces } from "../../redux/tables/tablesSlice"

export default function SpaceList() {
  const spaces = useSelector((state) => state.spaces.spaces)
  const displayForm = useSelector((state) => state.spaces.hideFormUpdate)
  const listSpacesToDelete = useSelector((state) => state.spaces.spacesToDelete)
  const dispatch = useDispatch()

  useEffect(() => {
    const request = indexedDB.open("task-managerDB", 1)

    request.onsuccess = (e) => {
      const db = e.target.result

      const taskTransaction = db.transaction(["spaces"], "readwrite")

      const spaceStore = taskTransaction.objectStore("spaces")
      const listSpaces = spaceStore.getAll()

      listSpaces.onsuccess = (e) => {
        dispatch(setSpaces(e.target.result))
      }
    }
  }, [])

  return (
    <>
      {displayForm && <FormUpdateSpace />}
      <Box sx={{ margin: "80px auto", width: "85%" }}>
        <Grid container spacing={2} sx={{ marginBlockEnd: "5px" }}>
          {spaces.map((space) => (
            <Grid xl={4} lg={4} md={4} sm={6} xs={12} key={space.id}>
              <SpaceItem space={space} />
            </Grid>
          ))}
        </Grid>
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
      </Box>
    </>
  )
}
