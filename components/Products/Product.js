import { useCartDispatch } from "../../context/cart"
import Ratings from "./Ratings"
import commerce from "../../lib/commerce"
import Link from "next/link"

export default function Product({
  name,
  id,
  price,
  created,
  image,
  permalink,
}) {
  const { setCart } = useCartDispatch()
  const addToCart = () =>
    commerce.cart
      .add(id)
      .then(({ cart }) => setCart(cart))
      .catch((err) => console.log(err))
  return (
    <div class="sm:max-w-sm rounded-2xl  border-gray-100 shadow-md dark:bg-gray-800 border-t  dark:border-gray-700">
      <Link href={`/products/${permalink}`}>
        <div>
          <img class="rounded-t-2xl object-cover" src={image.url} alt="" />
        </div>
      </Link>
      <div class="gap-12 px-6 py-8 rounded-lg rounded-t-none flex flex-col relative  justify-between ">
        <div className="flex flex-col">
          <div className="flex gap-2 w-full">
            <h4 class="w-full h-[60px] tracking-tight text-gray-900 font-[500] dark:text-white">
              {name}
            </h4>
          </div>
        </div>

        <div className="flex flex-col justify-between w-full">
          <p className="font-semibold">{price.formatted_with_symbol}</p>
          <div className="flex items-center justify-between w-full">
            <Link href={`/products/${permalink}`}>
              <button className="text-xs hover:scale-105 transition-transform duration-300 font-medium tracking-wider py-2 ">
                DETAILS
              </button>
            </Link>
            <button
              onClick={addToCart}
              class="items-center py-2 px-3 text-sm font-medium text-center  rounded-lg hover:bg-green-500 dark:hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-green-800 w-32 hidden sm:flex justify-center transition-colors duration-300"
            >
              Add to Cart
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
