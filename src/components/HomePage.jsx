import React, { useEffect } from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const drawerWidth = 240

export default function HomePage() {
  const { tables } = useSelector((state) => state.tables)
  const { spaces } = useSelector((state) => state.spaces)
  const { tasks } = useSelector((state) => state.tasks)

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Accueil
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <Link to="/login">
                <ListItemText primary={"login"} />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <Link to="/spaces">
                <ListItemText primary={"Liste des Spaces"} />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Typography component={"div"}>
          <h4>Liste de spaces</h4>
          <p>{spaces.length} spaces</p>
        </Typography>
        <Typography component={"div"}>
          <h4>Nombre de tableaux</h4>
          <p>{tables.length} tableaux</p>
        </Typography>
        <Typography component={"div"}>
          <h4>Nombre de tâches</h4>
          <p>{tasks.length} tâches</p>
        </Typography>
      </Box>
    </Box>
  )
}
