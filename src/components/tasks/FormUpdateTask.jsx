import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateTask } from "../../redux/tables/tasksSlice"
import { putTasksApi } from "../firebase/TaskAPI"

function FormUpdateTask({ setDisplayUpdateFormTask }) {
  const [titleTask, setTitleTask] = useState("")
  const dispatch = useDispatch()
  const task = useSelector((state) => state.tasks.task)
  return (
    <>
      <div className="popup-overlay">
        <div className="w-50 bg-white rounded p-3">
          <form
            className="w-100 p-0"
            onSubmit={async (e) => {
              e.preventDefault()
              await putTasksApi(task.id, titleTask, task.tableId)
              dispatch(updateTask({ title: titleTask, id: task.id }))
              setDisplayUpdateFormTask(false)
            }}
          >
            <div className="form-group">
              <label htmlFor="titre" className="mb-2">
                Tâche
              </label>
              <input
                type="text"
                className="form-control mb-2"
                id="titre"
                value={titleTask || task.title}
                onChange={(e) => setTitleTask(e.target.value)}
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
                  setDisplayUpdateFormTask(false)
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

export default FormUpdateTask
