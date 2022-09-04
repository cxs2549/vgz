import Link from "next/link"
import Product from "./Product"

export default function ProductList({ products }) {
  if (!products) return null
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {products.map((product) => (
        <div key={product.permalink}>
          <Product {...product} />
        </div>
      ))}
    </ul>
  )
}
