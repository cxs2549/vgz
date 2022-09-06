import Link from "next/link"
import { useCartDispatch, useCartState } from "../context/cart"

import commerce from "../lib/commerce"

function CartItem({ id, name, quantity, line_total, image, permalink }) {
  const { setCart } = useCartDispatch()

  const handleUpdateCart = ({ cart }) => setCart(cart)

  const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart)

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)
      : removeItem()
  }

  const incrementQuantity = () =>
    commerce.cart.update(id, { quantity: quantity + 1 }).then(handleUpdateCart)

  return (
    <div className="flex gap-2 max-h-[130px]">
      <Link href={`products/${permalink}`}>
        <img
          src={image.url}
          alt=""
          className="w-[120px] h-[120px] rounded-xl object-cover "
        />
      </Link>
      <div className="space-y-1 flex flex-col relative">
        <h3 className="mb-1">{name}</h3>

        {/* <div className="bg-gray-500 bg-opacity-50 rounded-lg max-w-min flex items-center">
          <button
            className="text-2xl text-white px-5 -translate-y-1"
            onClick={decrementQuantity}
          >
            -
          </button>
          <button
            className="text-2xl text-white px-5 -translate-y-1"
            onClick={incrementQuantity}
          >
            +
          </button>
          <button
            className="text-2xl text-white px-5 -translate-y-1"
            onClick={removeItem}
          >
            &times;
          </button>
        </div> */}
        <h2 className="font-semibold">{line_total.formatted_with_symbol}</h2>
        <button className="absolute bottom-1 left-0" onClick={removeItem}>
          <p className="text-xs">Remove</p>
        </button>
      </div>
    </div>
  )
}

export default function CartPage() {
  const { line_items, subtotal } = useCartState()
  const state = useCartState()
  const isEmpty = line_items.length === 0

  if (isEmpty)
    return (
      <div className="p-5 xl:px-0 max-w-5xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-semibold mb-8">
          Your cart is empty.
        </h3>
      </div>
    )

  return (
    <div className="max-w-5xl mx-auto p-5 xl:px-0 flex flex-col gap-8">
      <div>
        <h3 className="text-4xl font-semibold mb-8">Cart</h3>
        <div className=" h-[450px] relative  overflow-y-scroll pb-8 md:grid flex flex-col gap-4 grid-cols-2">
          {line_items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </div>

      {/* checkout part */}
      <div className="max-w-2xl mx-auto fixed bottom-5 w-[97%] left-1/2 -translate-x-1/2 p-5 bg-surface2 rounded-xl">
        <div className="max-w-5xl mx-auto flex w-full justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <h4 className="text-2xl">
              <strong>Subtotal</strong>{" "}
            </h4>
            <span className="font-bold text-2xl">
              {subtotal.formatted_with_symbol}
            </span>
          </div>
          <div className="flex items-center justify-between w-full">
            <h4 className="text-2xl">
              <strong>Shipping</strong>{" "}
            </h4>
            <span className="font-bold text-2xl">
              FREE
            </span>
          </div>
          <Link href="/checkout">
            <button className="bg-yellow-400 text-black py-4 w-full rounded text-xl mt-4 font-medium">
              <a>Checkout</a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
