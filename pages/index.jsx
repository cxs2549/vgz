import HeaviesLogo from "../components/Homepage/HeaviesLogo"
import Container from "../components/common/Container"
import MyCarousel from "../components/Homepage/MyCarousel"
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
  return (
    <Container>
      <div className="flex flex-col bg-red-200 h-[calc(100vh-136px)]">
        <div className=" bg-green-300">
          <HeaviesLogo />
          <MyCarousel products={products} />
        </div>
        <div className=" bg-blue-300">column2</div>
      </div>
    </Container>
  )
}
export default Home
