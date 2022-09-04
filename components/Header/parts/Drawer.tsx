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
    <div className="relative ">
      <React.Fragment>
        <Button
          onClick={toggleDrawer("right", true)}
          className="overflow-hidden z-50 relative md:hidden -translate-y-1.5 translate-x-2"
        >
          <HamburgerIcon open={state} onClick={() => setState(!state)} />
        </Button>
        <Drawer
          anchor={"right"}
          open={state}
          onClose={toggleDrawer("right", false)}
        >
          <div className="w-[260px] sm:w-[280px]">
            <Box role="presentation" className="dark:bg-slate-700 h-screen">
              <div className="h-12 flex items-center justify-end px-5 bg-green-500 translate-y-4">
                <Button
                  onClick={toggleDrawer("right", true)}
                  className="overflow-hidden z-50 relative md:hidden  translate-x-2"
                >
                  <HamburgerIcon
                    open={state}
                    onClick={() => setState(!state)}
                  />
                </Button>
              </div>
              <List className="mt-4">
                {[
                  "Home",
                  "Search",
                  "Discounts & Promos",
                  "Feedback",
                  "University Lessons",
                ].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemText
                        className="dark:text-white"
                        primary={text}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {["Settings", "Sign out"].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemText
                        className="dark:text-white"
                        primary={text}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  )
}
