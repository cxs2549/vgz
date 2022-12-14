import { TbBell, TbSearch } from "react-icons/tb"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import Link from "next/link"
import { useCartState } from "../../../context/cart"
import Drawer from "./Drawer.tsx"

const Icons = () => {
  const { total_items } = useCartState()
  return (
    <div className="flex md:gap-1 text-3xl items-center relative z-50">
      <div className="hidden md:block mr-8 relative">
        <TbSearch className="text-brand" />
        <div className="absolute w-[400px] -right-3 -top-1.5 -z-10">
          <input type="text" className="w-full py-1 shadow" />
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
        <div className="ml-7 md:ml-8 translate-x-2 md:translate-x-0 relative">
          <TbBell />
          <div className="absolute text-xs rounded-full bg-red-500 text-brand shadow -top-2 right-0 font-semibold h-4 w-4 grid place-items-center">
            3
          </div>
        </div>
      </Link>
      <Drawer />
      <ProfileDropdown />
    </div>
  )
}

const ProfileDropdown = () => {
  const userNavigation = [
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ]

  return (
    <Menu as="div" className="relative ml-7 z-50 hidden md:block">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="bg-green-500  grid place-items-center text-brand rounded-full shadow  text-sm   h-8 w-8 focus:ring-opacity-100">
              <span className="sr-only">Open user menu</span>
              <h2 className="">CS</h2>
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
              className="origin-top-right  absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-slate-700  ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
            >
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <a href={item.href} className="block px-5 py-2 text-sm">
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default Icons
