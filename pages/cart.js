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
        <h4 className="mb-1 ">{name}</h4>

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
        <h2 className="font-semibold text-sm">
          {line_total.formatted_with_symbol}
        </h2>
        <button className="absolute bottom-1 left-0" onClick={removeItem}>
          <p className="text-xs">Remove</p>
        </button>
      </div>
    </div>
  )
}

export default function CartPage({ products }) {
  const mom = products.filter(
    (product) =>
      product.categories[1]?.name === "Mom" ||
      product.categories[2]?.name === "Mom" ||
      product.categories[3]?.name === "Mom"
  )
  const dad = products.filter(
    (product) =>
      product.categories[1]?.name === "Dad" ||
      product.categories[2]?.name === "Dad" ||
      product.categories[3]?.name === "Dad"
  )
  const grad = products.filter(
    (product) =>
      product.categories[1]?.name === "Grad" ||
      product.categories[2]?.name === "Grad" ||
      product.categories[3]?.name === "Grad"
  )
  const { line_items, subtotal } = useCartState()
  const isEmpty = line_items.length === 0
  const emptyCart = () => commerce.cart.empty().then(handleUpdateCart)
  const { setCart } = useCartDispatch()

  const handleUpdateCart = ({ cart }) => setCart(cart)
  if (isEmpty)
    return (
      <div className="p-5 xl:px-0 max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-4xl font-semibold mb-8">
          Your cart is empty.
        </h3>
        <div>
          <h4 className="text-3xl mb-2">Shop for</h4>
        </div>
      </div>
    )

  return (
    <div className="max-w-5xl overflow-hidden mx-auto p-5 xl:px-0 grid gap-8 md:grid-cols-2 ">
      <div>
        <div className="flex items-baseline justify-between">
          <div className="flex items-baseline gap-1">
            <h3 className="text-4xl font-semibold mb-8">Cart</h3>
            <h3>({line_items.length})</h3>
          </div>
          <div>
            <button onClick={emptyCart} className="text-sm font-medium">
              Empty Cart
            </button>
          </div>
        </div>
        <div className=" relative  overflow-y-scroll md:grid flex flex-col gap-4 grid-cols-1 pb-64">
          {line_items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </div>

      {/* checkout part */}
      <div className="bg-white dark:bg-[#1F2937] h-[300px] px-8 py-12 bg-surface2 rounded-xl">
        <div className="max-w-5xl mx-auto flex w-full justify-between flex-col  h-full">
          <div className="flex items-center justify-between w-full">
            <h4 className="text-2xl">
              <strong>Subtotal</strong>{" "}
            </h4>
            <span className="font-bold text-xl">
              {subtotal.formatted_with_symbol}
            </span>
          </div>
          <div className="flex items-center justify-between w-full">
            <h4 className="text-2xl">
              <strong>Shipping</strong>{" "}
            </h4>
            <span className="font-bold text-xl">FREE</span>
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

export async function getStaticProps() {
  const { data: products } = await commerce.products.list()

  return {
    props: {
      products,
    },
  }
}
