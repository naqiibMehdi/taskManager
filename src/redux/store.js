import { configureStore } from "@reduxjs/toolkit"
import TablesSlice from "./tables/tablesSlice"
import TasksSlice from "./tables/tasksSlice"
import SpaceSlice from "./tables/spaceSlice"
import messageReducer from "./tables/messageSlice"

export const store = configureStore({
  reducer: {
    tables: TablesSlice.reducer,
    tasks: TasksSlice.reducer,
    spaces: SpaceSlice.reducer,
    message: messageReducer,
  },
})
