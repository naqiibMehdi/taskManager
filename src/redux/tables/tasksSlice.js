import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

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
      state.tasks.push({
        id: uuidv4(),
        title: payload.title,
        tableId: payload.tableId,
      })
    },
    updateTask: (state, { payload }) => {
      const indextask = state.tasks.findIndex((t) => t.id === payload.id)
      state.tasks[indextask].title = payload.title
    },
    deleteTask: (state, { payload }) => {
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
