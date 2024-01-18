import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  addForm,
  addSpace,
  displayFormUpdate,
  updateSpace,
} from "../../redux/tables/spaceSlice"
import { MuiColorInput } from "mui-color-input"

function FormUpdateSpace() {
  const [title, setTitleSpace] = useState("")
  const [color, setColor] = useState("")
  const dispatch = useDispatch()
  const space = useSelector((state) => state.spaces.space)
  const addOrEdit = useSelector((state) => state.spaces.addOrEdit)

  const handleChange = (newColor) => {
    setColor(newColor)
  }
  return (
    <>
      <div className="popup-overlay">
        {addOrEdit ? (
          <div className="w-50 bg-white rounded p-3">
            <form
              className="w-100 p-0"
              onSubmit={(e) => {
                e.preventDefault()
                dispatch(
                  addSpace({
                    title: !title ? "default space" : title,
                    bgcolor: color,
                  })
                )
                dispatch(addForm(false))
                dispatch(displayFormUpdate(false))
                setColor("")
              }}
            >
              <div className="form-group">
                <label htmlFor="titre" className="mb-2">
                  Edition du titre et de la couleur de fond du Space
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="titre"
                  value={title}
                  onChange={(e) => setTitleSpace(e.target.value)}
                />
              </div>
              <MuiColorInput
                value={color || "#0065ff"}
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
        ) : (
          <div className="w-50 bg-white rounded p-3">
            <form
              className="w-100 p-0"
              onSubmit={(e) => {
                e.preventDefault()
                dispatch(
                  updateSpace({
                    id: space.id,
                    bgcolor: color === "" ? space.bgcolor : color,
                    title: title || space.title,
                  })
                )
                dispatch(displayFormUpdate(false))
                setColor("")
              }}
            >
              <div className="form-group">
                <label htmlFor="titre" className="mb-2">
                  Edition du titre et de la couleur de fond du Space
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="titre"
                  value={title || space.title}
                  onChange={(e) => setTitleSpace(e.target.value)}
                />
              </div>
              <MuiColorInput
                value={color || space.bgcolor}
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
                    dispatch(displayFormUpdate(false))
                  }}
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  )
}

export default FormUpdateSpace
