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
import {
  TbHome,
  TbSearch,
  TbCash,
  TbMessage,
  TbSchool,
  TbSettings,
  TbLogout,
} from "react-icons/tb"
import { useSession, signIn, signOut } from "next-auth/react"

type Anchor = "right"

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false)
  const { data: session } = useSession()
  const [signedIn, setSignedIn] = React.useState(
    session ? "Sign out" : "Sign in"
  )
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

  return (
    <div className="relative -ml-9">
      <React.Fragment>
        <Button
          onClick={toggleDrawer("right", true)}
          className="overflow-hidden z-50 relative lg:hidden -translate-y-1.5 translate-x-2 "
        >
          <HamburgerIcon open={state} onClick={() => setState(!state)} />
        </Button>
        <Drawer
          id="drawer"
          anchor={"right"}
          open={state}
          onClose={toggleDrawer("right", false)}
        >
          <div className="w-[260px] sm:w-[280px]">
            <Box role="presentation" className="dark:bg-slate-700 h-screen">
              <div className="h-20 flex items-center justify-end px-5 bg-green-600">
                <Button
                  onClick={toggleDrawer("right", true)}
                  className="overflow-hidden z-50 relative md:hidden -right-1.5"
                >
                  <HamburgerIcon
                    open={state}
                    onClick={() => setState(!state)}
                  />
                </Button>
              </div>
              <List className="mt-4">
                {[
                  { name: "Home", icon: <TbHome size={28} /> },
                  { name: "Search", icon: <TbSearch size={28} /> },
                  { name: "Discounts & Promos", icon: <TbCash size={28} /> },
                  { name: "Feedback", icon: <TbMessage size={28} /> },
                  { name: "University Lessons", icon: <TbSchool size={28} /> },
                ].map((text, index) => (
                  <ListItem key={text.name} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{text.icon}</ListItemIcon>
                      <ListItemText
                        className="dark:text-white"
                        primary={text.name}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TbSettings size={28} />
                    </ListItemIcon>
                    <ListItemText
                      className="dark:text-white"
                      primary="Settings"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => (session ? signOut() : signIn())}
                  >
                    <ListItemIcon>
                      <TbLogout size={28} />
                    </ListItemIcon>
                    <ListItemText
                      className="dark:text-white"
                      primary={signedIn}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  )
}
