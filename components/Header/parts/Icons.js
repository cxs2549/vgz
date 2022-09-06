import { TbBell, TbSearch } from "react-icons/tb"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import Link from "next/link"
import { useCartState } from "../../../context/cart"
import Drawer from "./Drawer.tsx"
import { useSession, signIn, signOut } from "next-auth/react"

const Icons = () => {
  const { data: session } = useSession()
  const { total_items } = useCartState()

  if (session) {
    return (
      <div className="flex gap-8 text-3xl items-center relative z-50">
        <div className="hidden md:block  relative">
          <TbSearch className="text-green-600" />
          <div className="absolute w-[300px] lg:w-[350px] -right-3 -top-2 -z-10">
            <input
              type="text"
              className="w-full shadow !outline-none text-slate-500 px-4 py-3 text-base"
            />
          </div>
        </div>
        <Link href="/cart">
          <div className="relative">
            <AiOutlineShoppingCart id="cart" />
            <div className="absolute text-xs rounded-full bg-green-500 text-brand shadow -top-2 -right-1 font-semibold h-4 w-4 grid place-items-center">
              {total_items}
            </div>
          </div>
        </Link>
        <Link href="/cart">
          <div className=" relative">
            <TbBell />
            <div className="absolute text-xs rounded-full bg-red-500 text-brand shadow -top-2 right-0 font-semibold h-4 w-4 grid place-items-center">
              3
            </div>
          </div>
        </Link>
        <Drawer />
        <ProfileDropdown session={session} />
      </div>
    )
  }
  return (
    <div className="flex items-center">
      {!session && (
        <div onClick={() => signIn()} className="hidden lg:block">
          <button className="font-medium">Sign in</button>
        </div>
      )}
      <Drawer />
    </div>
  )
}

const ProfileDropdown = ({ session }) => {


  return (
    <Menu as="div" className="relative ml-7 z-50 hidden lg:block">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="bg-green-500  grid place-items-center text-brand rounded-full shadow  text-sm   h-8 w-8 focus:ring-opacity-100">
              <span className="sr-only">Open user menu</span>
              <h2 className="text-white">CS</h2>
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right  absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-green-500  ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
            >
              <Menu.Item>
                <a href="/settings" className="block px-5 py-2 text-sm">
                  Settings
                </a>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => (session ? signOut() : signIn())}
                  href="/settings"
                  className="block px-5 py-2 text-sm"
                >
                  {session ? "Sign out" : "Sign in"}
                </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default Icons
