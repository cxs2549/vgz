import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import { FcMenu } from "react-icons/fc"
import { MdClose } from "react-icons/md"
import { HamburgerIcon } from "react-hamburger-icon"

type Anchor = "right"

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false)

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setState(!state)
    }

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="bg-red-300 h-screen"
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div className="md:hidden -translate-y-1.5 translate-x-2">
      <React.Fragment>
        <Button
          onClick={toggleDrawer("right", true)}
          className="overflow-hidden z-50 relative"
        >
          <HamburgerIcon
            open={state}
            onClick={() => setState(!state)}
          />
        </Button>
        <Drawer
          anchor={"right"}
          open={state}
          onClose={toggleDrawer("right", false)}
        >
          <div className="w-[300px] bg-slate-700 h-screen relative">
            <Button
              onClick={toggleDrawer("right", true)}
              className="overflow-hidden z-50 absolute right-5 top-8"
            >
              <HamburgerIcon
                className=""
                open={state}
                onClick={() => setState(!state)}
              />
            </Button>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  )
}
