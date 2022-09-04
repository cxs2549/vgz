import commerce from "../../lib/commerce"
import ProductList from "../../components/Products/ProductList"

export async function getStaticProps({ params }) {
  const { slug } = params

  const category = await commerce.categories.retrieve(slug, {
    type: "slug",
  })

  const { data: products } = await commerce.products.list({
    category_slug: [slug],
  })

  return {
    props: {
      category,
      products,
    },
  }
}

export async function getStaticPaths() {
  const { data: categories } = await commerce.categories.list()

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  }
}

export default function CategoryPage({ category, products }) {
  if (!products) return null
  return (
    <div className="max-w-5xl mx-auto p-5 xl:px-0">
      <h4 className="text-4xl xs:text-5xl md:text-6xl mb-12  font-extrabold italic uppercase dark:text-white">
        {category.name} <span className="text-sm">({products.length})</span>
      </h4>
      <ProductList products={products} />
    </div>
  )
}
