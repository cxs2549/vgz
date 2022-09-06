import commerce from "../../lib/commerce"
import Ratings from "../../components/Products/Ratings"
import { useCartDispatch } from "../../context/cart"

export async function getStaticProps({ params }) {
  const { permalink } = params

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  })

  return {
    props: {
      product,
    },
  }
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list()

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  }
}

const regex = /(<([^>]+)>)/gi

export default function ProductPage({ product }) {
  const { setCart } = useCartDispatch()
  const addToCart = () =>
    commerce.cart
      .add(product.id)
      .then(({ cart }) => setCart(cart))
      .catch((err) => console.log(err))

  return (
    <div className="max-w-5xl mx-auto p-5 xl:px-0 space-y-2 md:flex md:gap-4 w-full">
      <div className="bg-white max-w-lg rounded-xl overflow-hidden">
        <img src={product.image.url} className="rounded-xl" alt="" />
      </div>
      <div className=" flex flex-col justify-between w-full">
        <div className="gap-8 flex flex-col w-full pr-2 ">
          <div className="flex flex-col lg:flex-row justify-between gap-4 items-start lg:items-center -z-10">
            <h5 className="text-2xl font-medium dark:text-white">
              {product.name}
            </h5>
            <div className="flex-shrink-0 self-start">
              <Ratings reviews={product.created.toString().slice(-2)} />
            </div>
          </div>
          <div className="w-full dark:text-white mb-8">
            {product.description.replace(regex, "")}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl dark:text-white">
            {product.price.formatted_with_symbol}
          </h2>
          <button
              onClick={addToCart}
              class=" items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32 flex justify-center"
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
  )
}
