import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  deleteTable,
  setDisplayFormTable,
} from "../../redux/tables/tablesSlice"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import { deleteTablesApi } from "../firebase/TableAPI"

function FormDeleteTable() {
  const [id, setId] = useState("0")
  const [db, setDB] = useState(null)
  const dispatch = useDispatch()
  const { tables, displayFormTable } = useSelector((state) => state.tables)

  useEffect(() => {
    const request = indexedDB.open("task-managerDB", 1)

    request.onsuccess = (e) => {
      setDB(e.target.result)
    }
  }, [])

  const style = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor:
      "rgba(0, 0, 0, 0.5)" /* Semi-transparent black background */,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zindex: 1000,
  }
  return (
    <>
      <Modal
        open={displayFormTable.delete}
        onClose={() =>
          dispatch(setDisplayFormTable({ type: "delete", boolean: false }))
        }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-50 rounded bg-white p-3">
            <form>
              <label className="mb-2">Supprimer un tableau:</label>
              <select
                className="form-select mb-2"
                aria-label="Default select example"
                value={id}
                onChange={(e) => {
                  setId(e.target.value)
                }}
              >
                <option defaultValue="0">-</option>
                {tables.map((objTab) => {
                  return (
                    <option value={objTab.id} key={objTab.id}>
                      {objTab.title}
                    </option>
                  )
                })}
              </select>
              <button
                className="btn btn-danger"
                disabled={id === "0" ? true : false}
                onClick={async (e) => {
                  e.preventDefault()
                  await deleteTablesApi(id)
                  dispatch(deleteTable(id))
                  dispatch(
                    setDisplayFormTable({ type: "delete", boolean: false })
                  )
                  setId("0")
                }}
              >
                Supprimer
              </button>
              <button
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault()
                  dispatch(
                    setDisplayFormTable({ type: "delete", boolean: false })
                  )
                }}
              >
                Annuler
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default FormDeleteTable
