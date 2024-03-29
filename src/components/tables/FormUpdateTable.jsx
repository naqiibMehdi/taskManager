import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateTable } from "../../redux/tables/tablesSlice"

function FormUpdateTable({ setDisplayFormUpdateTable }) {
  const [title, setTitleTable] = useState("")
  const [db, setDb] = useState(null)
  const dispatch = useDispatch()
  const table = useSelector((state) => state.tables.table)

  useEffect(() => {
    const request = indexedDB.open("task-managerDB", 1)
    request.onsuccess = (e) => {
      setDb(e.target.result)
    }
  }, [])

  return (
    <>
      <div className="popup-overlay">
        <div className="w-50 bg-white rounded p-3">
          <form
            className="w-100 p-0"
            onSubmit={(e) => {
              e.preventDefault()
              const tableStore = db
                .transaction(["tables"], "readwrite")
                .objectStore("tables")
              tableStore.put({ title, id: table.id })

              dispatch(updateTable({ title, id: table.id }))
              setDisplayFormUpdateTable(false)
            }}
          >
            <div className="form-group">
              <label htmlFor="titre" className="mb-2">
                Edition du titre de la Table
              </label>
              <input
                type="text"
                className="form-control mb-2"
                id="titre"
                value={title || table.title}
                onChange={(e) => setTitleTable(e.target.value)}
              />
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-primary" type="submit">
                Valider
              </button>
              <button
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault()
                  setDisplayFormUpdateTable(false)
                }}
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

export default FormUpdateTable
