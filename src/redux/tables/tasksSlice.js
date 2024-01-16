import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

const TasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, { payload }) => {
      state.push({
        id: uuidv4(),
        title: payload.title,
        tableId: payload.tableId,
      })
    },
    updateTask: (state, { payload }) => {
      const indextask = state.findIndex((t) => t.id === payload.id)
      state[indextask].title = payload.title
    },
    deleteTask: (state, { payload }) => {
      return state.filter((task) => task.id !== payload)
    },
    moveTask: (state, { payload }) => {
      let idTaskDrop = payload.idTaskDrop
      let idTableDrag = payload.idTableDrag
      const indexTask = state.findIndex((t) => t.id === idTaskDrop)
      state[indexTask].tableId = idTableDrag
    },
  },
})

export const { addTask, updateTask, deleteTask, moveTask } = TasksSlice.actions

export default TasksSlice
