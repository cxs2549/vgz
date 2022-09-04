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
          <div className="flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-center -z-10">
            <h3 className="text-2xl font-medium dark:text-white">
              {product.name}
            </h3>
            <div className="flex-shrink-0 self-start">
              <Ratings reviews={product.created.toString().slice(-2)} />
            </div>
          </div>
          <div className="w-full dark:text-white mb-8">
            {product.description.replace(regex, "")}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl mb-4 dark:text-white">
            {product.price.formatted_with_symbol}
          </h2>
          <button
            onClick={addToCart}
            className="-translate-y-2 px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
