import { createSlice } from "@reduxjs/toolkit"

const spaces = [
  {
    id: 1,
    title: "apprentissage",
    bgcolor: "#0065ff",
  },
  {
    id: 2,
    title: "conduite de projet",
    bgcolor: "#0065ff",
  },
  {
    id: 3,
    title: "feu de l'action",
    bgcolor: "#0065ff",
  },
  {
    id: 4,
    title: "InStone",
    bgcolor: "#0065ff",
  },
]

const SpaceSlice = createSlice({
  name: "slice",
  initialState: {
    spaces,
    space: {},
    hideFormUpdate: null,
    spacesToDelete: [],
  },
  reducers: {
    displayFormUpdate: (state, { payload }) => {
      state.hideFormUpdate = payload
    },
    getSpace: (state, { payload }) => {
      state.space = state.spaces.find(
        (s) => s.id.toString() === payload.toString()
      )
    },
    updateSpace: (state, { payload }) => {
      const index = state.spaces.findIndex(
        (s) => s.id.toString() === payload.id.toString()
      )
      state.spaces[index].bgcolor = payload.bgcolor
      state.spaces[index].title = payload.title
    },
    addSpacesToDelete: (state, { payload }) => {
      state.spacesToDelete.push(payload)
    },
    deleteSpaces: (state, { payload }) => {
      let newSpaces = state.spaces.filter((space) => {
        if (!payload.includes(space.id)) {
          return space
        }
      })
      state.spaces = newSpaces
      state.spacesToDelete = []
    },
  },
})

export const {
  displayFormUpdate,
  getSpace,
  updateSpace,
  addSpacesToDelete,
  deleteSpaces,
} = SpaceSlice.actions

export default SpaceSlice
