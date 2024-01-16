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
  },
})

export const { addTask, updateTask } = TasksSlice.actions

export default TasksSlice
