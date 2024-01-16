import { configureStore } from "@reduxjs/toolkit"
import TablesSlice from "./tables/tablesSlice"

export const store = configureStore({
  reducer: {
    tables: TablesSlice.reducer,
  },
})
