import { createSlice } from "@reduxjs/toolkit"

const spaces = [
  {
    id: 1,
    title: "apprentissage",
  },
  {
    id: 2,
    title: "conduite de projet",
  },
  {
    id: 3,
    title: "feu de l'action",
  },
  {
    id: 4,
    title: "InStone",
  },
]

const SpaceSlice = createSlice({
  name: "slice",
  initialState: {
    spaces,
  },
  reducers: {},
})

export default SpaceSlice
