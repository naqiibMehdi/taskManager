import { configureStore } from "@reduxjs/toolkit"
import TablesSlice from "./tables/tablesSlice"
import TasksSlice from "./tables/tasksSlice"

export const store = configureStore({
  reducer: {
    tables: TablesSlice.reducer,
    tasks: TasksSlice.reducer,
  },
})
