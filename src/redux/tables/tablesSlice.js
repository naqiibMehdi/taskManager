import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

const TablesSlice = createSlice({
  name: "tables",
  initialState: [
    { id: 1, title: "projet ressource", order: 1 },
    { id: 2, title: "Sujet de la prochaine réunion", order: 2 },
    { id: 3, title: "a faire", order: 3 },
    { id: 4, title: "en cours", order: 4 },
  ],
  reducers: {
    addTable: (state, { payload }) => {
      state.push({ id: uuidv4(), title: payload, order: state.length + 1 })
    },
  },
})

export const { addTable } = TablesSlice.actions

export default TablesSlice
