import commerce from "../../lib/commerce"
import Ratings from "../../components/Products/Ratings"
import { useCartDispatch } from "../../context/cart"
import { useSession, signIn } from "next-auth/react"

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
  const { session } = useSession()
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
      <div className=" flex flex-col justify-between w-full pb-24">
        <div className="gap-8 flex flex-col w-full pr-2 ">
          <div className="flex flex-col justify-between gap-3 items-start -z-10">
            <h4 className="text-3xl dark:text-white">{product.name}</h4>
            <div className="flex-shrink-0">
              <Ratings reviews={product.created.toString().slice(-2)} />
            </div>
          </div>
          <div className="w-full dark:text-white mb-8">
            {product.description.replace(regex, "")}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl dark:text-white">
            {product.price.formatted_with_symbol}
          </h2>
          {session ? (
            <button
              onClick={addToCart}
              class=" items-center py-2 px-3 text-sm font-medium text-center  rounded-lg  transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-green-300  dark:hover:bg-green-700 dark:focus:ring-green-300 w-32 flex justify-center"
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
          ) : (
            <button
              onClick={() => signIn()}
              class=" items-center py-2 px-3 text-sm font-medium text-center  rounded-lg  transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-green-300  dark:hover:bg-green-700 dark:focus:ring-green-300 w-32 flex justify-center"
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
          )}
        </div>
      </div>
    </div>
  )
}
