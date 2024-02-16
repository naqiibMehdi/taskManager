import { createSlice } from "@reduxjs/toolkit"

const TablesSlice = createSlice({
  name: "tables",
  initialState: {
    tables: [
      {
        id: 1,
        spaceId: "AS6KiMm5jtFOIdXTnJjm",
        title: "salut",
      },
    ],
    table: {},
    displayFormTable: {
      add: null,
      update: null,
      delete: null,
    },
  },
  reducers: {
    setTables: (state, { payload }) => {
      state.tables = payload
    },
    addTable: (state, { payload }) => {
      state.tables.push({
        id: payload.id,
        title: payload.title,
        spaceId: payload.spaceId,
        order: payload.order,
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
        if (!payload.includes(table.spaceId.toString())) {
          return table
        }
      })
      state.tables = newTables
    },
    setDisplayFormTable: (state, { payload }) => {
      switch (payload.type) {
        case "add":
          state.displayFormTable.add = payload.boolean
          break
        case "update":
          state.displayFormTable.update = payload.boolean
          break
        case "delete":
          state.displayFormTable.delete = payload.boolean
          break
      }
    },
  },
})

export const {
  addTable,
  updateTable,
  deleteTable,
  getOneTable,
  deleteTablesWithSpaces,
  setDisplayFormTable,
  setTables,
} = TablesSlice.actions

export default TablesSlice
