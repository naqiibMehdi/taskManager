import React from "react"
import { hideMessage } from "../redux/tables/messageSlice"
import { useSelector } from "react-redux"
import { store } from "../redux/store"
import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"

export default function Message() {
  const texte = useSelector((state) => state.message.texte)
  const viewMessage = useSelector((state) => state.message.viewMessage)

  return (
    <>
      <Snackbar
        open={viewMessage}
        autoHideDuration={6000}
        onClose={() => store.dispatch(hideMessage())}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
          onClose={() => store.dispatch(hideMessage())}
        >
          {texte}
        </Alert>
      </Snackbar>
    </>
  )
}
