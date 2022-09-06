import HeaviesLogo from "../components/Homepage/HeaviesLogo"
import Container from "../components/common/Container"
import MyCarousel from "../components/Homepage/MyCarousel"
import Newsletter from "../components/Homepage/Newsletter"
import commerce from "../lib/commerce"

import Thanks from "../components/Homepage/Thanks"
import Collections from "../components/Homepage/Collection"

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list()
  const { data: products } = await commerce.products.list()

  return {
    props: {
      categories,
      products,
    },
  }
}

const Home = ({ products, categories }) => {
  const theHeavies = products.filter(
    (product) => product.categories[0].name === "The Heavies"
  )
  const summer25 = products.filter(
    (product) =>
      product.categories[0].name === "SUMMER25" ||
      product.categories[1]?.name === "SUMMER25" ||
      product.categories[2]?.name === "SUMMER25" ||
      product.categories[3]?.name === "SUMMER25"
  )
  const summer20 = products.filter(
    (product) =>
      product.categories[0].name === "SUMMER20" ||
      product.categories[1]?.name === "SUMMER20" ||
      product.categories[2]?.name === "SUMMER20" ||
      product.categories[3]?.name === "SUMMER20"
  )
  const promoCollections = [
    { title: "Code: SUMMER25 @checkout", collection: summer25 },
    { title: "Code: SUMMER20 @checkout", collection: summer20 },
  ]
  const featuredCollections = [
    { title: "Best sellers", collection: summer25 },
    { title: "Recently Added/Restocked Items", collection: summer25 },
    { title: "The Heavies", collection: summer25 },
    { title: "Cannabis Hardware", collection: summer25 },
    { title: "Ispire", collection: summer25 },
    { title: "YLLVAPES", collection: summer25 },
  ]
  return (
    <>
      <Container>
        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="flex-1 flex flex-col items-center gap-5">
            <HeaviesLogo />
            <MyCarousel products={theHeavies} />
          </div>
          <div className="flex-1 flex flex-col gap-10">
            <Newsletter />
            <Thanks />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col gap-5">
          <Collections collections={promoCollections} title="Promos" />
          <Collections collections={featuredCollections} title="Featured" />
        </div>
      </Container>
    </>
  )
}
export default Home
