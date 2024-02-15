import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  addForm,
  addSpace,
  displayFormUpdate,
  updateSpace,
} from "../../redux/tables/spaceSlice"
import { displayMessage } from "../../redux/tables/messageSlice"
import { MuiColorInput } from "mui-color-input"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import { postSpacesApi } from "../firebase/SpaceAPI"

function FormUpdateSpace() {
  const [title, setTitleSpace] = useState("")
  const [color, setColor] = useState("")
  const dispatch = useDispatch()
  const space = useSelector((state) => state.spaces.space)
  const addOrEdit = useSelector((state) => state.spaces.addOrEdit)
  const displayForm = useSelector((state) => state.spaces.hideFormUpdate)

  const handleChange = (newColor) => {
    setColor(newColor)
  }

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
        open={displayForm}
        onClose={() => dispatch(displayFormUpdate(false))}
        aria-labelledby={
          addOrEdit
            ? "Ajouter le space"
            : "Edition du titre et de la couleur de fond du Space"
        }
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-50 bg-white rounded p-3">
            <form
              className="w-100 p-0"
              onSubmit={async (e) => {
                e.preventDefault()

                if (addOrEdit) {
                  const data = await postSpacesApi(
                    !title ? "default title" : title,
                    color ? color : "#0065ff"
                  )

                  dispatch(
                    addSpace({
                      id: await data.name.split("/")[6],
                      title: !title ? "default title" : title,
                      bgcolor: color ? color : "#0065ff",
                    })
                  )
                  dispatch(
                    displayMessage({
                      texte: "space ajouté avec succès",
                      typeMessage: "success",
                    })
                  )
                } else {
                  dispatch(
                    updateSpace({
                      id: space.id,
                      bgcolor: color === "" ? space.bgcolor : color,
                      title: title || space.title,
                    })
                  )
                  dispatch(
                    displayMessage({
                      texte: "space modifié avec succès",
                      typeMessage: "success",
                    })
                  )
                }
                dispatch(displayFormUpdate(false))
                setColor("")
              }}
            >
              <div className="form-group">
                <label htmlFor="titre" className="mb-2">
                  {addOrEdit
                    ? "Ajouter le space"
                    : "Edition du titre et de la couleur de fond du Space"}
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="titre"
                  value={addOrEdit ? title || "" : title || space.title}
                  onChange={(e) => setTitleSpace(e.target.value)}
                />
              </div>
              <MuiColorInput
                value={addOrEdit ? color : color || space.bgcolor}
                onChange={handleChange}
              />
              <div className="d-flex gap-2 mt-3">
                <button className="btn btn-primary" type="submit">
                  Valider
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={(e) => {
                    e.preventDefault()
                    dispatch(addForm(false))
                    dispatch(displayFormUpdate(false))
                  }}
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

export default FormUpdateSpace
