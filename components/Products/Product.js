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
    <div class="max-w-sm bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/products/${permalink}`}>
        <div>
          <img class="rounded-t-lg object-cover" src={image.url} alt="" />
        </div>
      </Link>
      <div class="px-5 h-[200px] flex flex-col justify-between py-2">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>

        <div className="flex justify-between">
          <p>{price.formatted_with_symbol}</p>
          <a
            href="#"
            class="mb-1 items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32 flex justify-center"
          >
            Read more
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
          </a>
        </div>
      </div>
    </div>
  )
}
