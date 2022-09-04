import HeaviesLogo from "../components/Homepage/HeaviesLogo"
import Container from "../components/common/Container"
import MyCarousel from "../components/Homepage/MyCarousel"
import Newsletter from "../components/Homepage/Newsletter"
import commerce from '../lib/commerce'

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

const Home = ({products}) => {
  const theHeavies = products.filter((product) => product.categories[0].name === 'The Heavies')
  return (
    <Container>
      <div className="flex flex-col gap-4 md:flex-row md:gap-8 h-[calc(100vh-136px)]">
        <div className="flex-1 flex flex-col items-center gap-6 ">
          <HeaviesLogo />
          <MyCarousel products={theHeavies} />
        </div>
        <div className="flex-1">
          <Newsletter />
        </div>
      </div>
    </Container>
  )
}
export default Home
