import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Link from "next/link"

const MyCarousel = ({ products }) => {
  return (
    <Carousel
      // autoPlay
      // infiniteLoop
      showIndicators={false}
      showStatus={false}
      // showThumbs={true}
      showArrows={false}
      className="max-w-md lg:max-w-xl "
    >
      {products.map((item, i) => (
        <Link href={`/products/${item.permalink}`}>
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden ml-1 mr-1"
          >
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
