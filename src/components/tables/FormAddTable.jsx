import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTable } from "../../redux/tables/tablesSlice"
import { useParams } from "react-router-dom"

function FormAddTable({ setDisplayAddFormTable }) {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()
  const params = useParams()
  return (
    <>
      <div className="popup-overlay">
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
              setTitle("")
              setDisplayAddFormTable(false)
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
                onClick={() => setDisplayAddFormTable(false)}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default FormAddTable
