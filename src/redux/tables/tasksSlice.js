import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"
import { addTaskDB, deleteTaskDB, updateTaskDB } from "../../utils/TaskService"

const TasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    task: {},
  },
  reducers: {
    setTasks: (state, { payload }) => {
      state.tasks = payload
    },
    addTask: (state, { payload }) => {
      let newTask = {
        id: payload.id,
        title: payload.title,
        tableId: payload.tableId,
      }
      state.tasks.push(newTask)
      // addTaskDB(newTask)
    },
    updateTask: (state, { payload }) => {
      const indextask = state.tasks.findIndex((t) => t.id === payload.id)
      state.tasks[indextask].title = payload.title
      // updateTaskDB({ ...state.tasks[indextask] })
    },
    deleteTask: (state, { payload }) => {
      deleteTaskDB(payload)
      return state.tasks.filter((task) => task.id !== payload)
    },
    moveTask: (state, { payload }) => {
      let idTaskDrop = payload.idTaskDrop
      let idTableDrag = payload.idTableDrag
      const indexTask = state.tasks.findIndex((t) => t.id === idTaskDrop)
      state.tasks[indexTask].tableId = idTableDrag
    },
    getTask: (state, { payload }) => {
      state.task = state.tasks.find((t) => t.id === payload)
    },
  },
})

export const { addTask, updateTask, deleteTask, moveTask, getTask, setTasks } =
  TasksSlice.actions

export default TasksSlice
