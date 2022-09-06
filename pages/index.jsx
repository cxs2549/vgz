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
  const promos = products.filter(
    (product) =>
      product.categories[0].name === "Promos" ||
      product.categories[1]?.name === "Promos"
  )
  const promoCollections = [
    { title: "Code: SUMMER25 @checkout", collection: promos },
    { title: "Code: SUMMER20 @checkout", collection: promos },
  ]
  const featuredCollections = [
    { title: "Best sellers", collection: promos },
    { title: "Recently Added/Restocked Items", collection: promos },
    { title: "The Heavies", collection: promos },
    { title: "Cannabis Hardware", collection: promos },
    { title: "Ispire", collection: promos },
    { title: "YLLVAPES", collection: promos },
  ]
  return (
    <>
      <Container>
        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="flex-1 flex flex-col items-center gap-5">
            <HeaviesLogo />
            <MyCarousel products={theHeavies} />
          </div>
          <div className="flex-1 flex flex-col gap-5">
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
