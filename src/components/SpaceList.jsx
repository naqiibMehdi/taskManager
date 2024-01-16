import React, { useEffect } from "react"
import { useSelector } from "react-redux"

export default function SpaceList() {
  const spaces = useSelector((state) => state.spaces.spaces)
  useEffect(() => {}, [spaces])
  return (
    <>
      <div className="container d-flex flex-wrap gap-4 py-3">
        {spaces.map((space) => (
          <div
            key={space.id}
            style={{
              width: "280px",
              height: "200px",
              border: "solid 1px black",
            }}
          >
            <p className="pt-2 px-2">{space.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}
