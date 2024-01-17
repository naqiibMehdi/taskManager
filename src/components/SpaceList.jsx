import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import SpaceItem from "./SpaceItem"
import FormUpdateSpace from "./FormUpdateSpace"

export default function SpaceList() {
  const spaces = useSelector((state) => state.spaces.spaces)
  const displayForm = useSelector((state) => state.spaces.hideFormUpdate)
  return (
    <>
      {displayForm && <FormUpdateSpace />}
      <div
        className="container my-5"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {spaces.map((space) => (
          <SpaceItem space={space} key={space.id} />
        ))}
      </div>
    </>
  )
}
