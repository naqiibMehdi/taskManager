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
  },
})

export const { addTask } = TasksSlice.actions

export default TasksSlice
