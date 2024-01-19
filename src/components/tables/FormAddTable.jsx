import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTable, setDisplayFormTable } from "../../redux/tables/tablesSlice"
import { useParams } from "react-router-dom"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"

function FormAddTable() {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()
  const displayFormTable = useSelector((state) => state.tables.displayFormTable)
  const params = useParams()

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
        open={displayFormTable.add}
        onClose={() =>
          dispatch(setDisplayFormTable({ type: "add", boolean: false }))
        }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-50 bg-white rounded p-3">
            <form
              className="w-100 p-0"
              onSubmit={(e) => {
                e.preventDefault()
                if (title.length === 0) {
                  alert("Vous devez saisir un titre pour ajouter un tableau")
                  return
                }
                dispatch(addTable({ title, spaceId: params.id }))
                dispatch(setDisplayFormTable({ type: "add", boolean: false }))
                setTitle("")
              }}
            >
              <div className="form-group">
                <label htmlFor="titre" className="mb-2">
                  Saisir un titre
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="titre"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-primary">Ajouter</button>
                <button
                  className="btn btn-secondary"
                  onClick={() =>
                    dispatch(
                      setDisplayFormTable({ type: "add", boolean: false })
                    )
                  }
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default FormAddTable
