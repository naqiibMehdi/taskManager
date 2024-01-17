import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function SpaceList() {
  const spaces = useSelector((state) => state.spaces.spaces)
  return (
    <>
      <div
        className="container my-5"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {spaces.map((space) => (
          <Link to={`/spaces/${space.id}/tables`} key={space.id}>
            <div
              style={{
                height: "150px",
                border: "solid 1px black",
                backgroundColor: "#0065ff",
              }}
            >
              <p className="pt-2 px-2" style={{ color: "#ffffff" }}>
                {space.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
