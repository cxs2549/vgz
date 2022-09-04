import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Link from "next/link"

const MyCarousel = ({ products }) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      className="max-w-sm md:max-w-md"
    >
      {products.map((item, i) => (
        <Link href={`/products/${item.permalink}`}>
          <div key={i} className="bg-white rounded-xl overflow-hidden">
            <img
              src={item.image.url}
              className="rounded-xl cursor-pointer"
              alt=""
            />
          </div>
        </Link>
      ))}
    </Carousel>
  )
}
export default MyCarousel
