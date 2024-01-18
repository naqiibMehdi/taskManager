import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

const TablesSlice = createSlice({
  name: "tables",
  initialState: {
    tables: [
      { id: 1, title: "projet ressource", order: 1, spaceId: 1 },
      { id: 2, title: "Sujet de la prochaine réunion", order: 2, spaceId: 2 },
      { id: 3, title: "a faire", order: 3, spaceId: 3 },
      { id: 4, title: "en cours", order: 4, spaceId: 4 },
      { id: 1, title: "test", order: 5, spaceId: 1 },
    ],
    table: {},
  },
  reducers: {
    addTable: (state, { payload }) => {
      state.tables.push({
        id: uuidv4(),
        title: payload.title,
        order: state.tables.length + 1,
        spaceId: payload.spaceId,
      })
    },
    updateTable: (state, { payload }) => {
      const indexTable = state.tables.findIndex(
        (t) => t.id.toString() === payload.id.toString()
      )
      state.tables[indexTable].title = payload.title
    },
    deleteTable: (state, { payload }) => {
      return state.tables.filter(
        (table) => table.id.toString() !== payload.toString()
      )
    },
    getOneTable: (state, { payload }) => {
      state.table = state.tables.find(
        (t) => t.id.toString() === payload.toString()
      )
    },
    deleteTablesWithSpaces: (state, { payload }) => {
      let newTables = state.tables.filter((table) => {
        if (!payload.includes(parseInt(table.spaceId))) {
          return table
        }
      })
      state.tables = newTables
    },
  },
})

export const {
  addTable,
  updateTable,
  deleteTable,
  getOneTable,
  deleteTablesWithSpaces,
} = TablesSlice.actions

export default TablesSlice
