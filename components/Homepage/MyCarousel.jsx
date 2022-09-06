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
        className="max-w-sm md:max-w-md flex gap-1 relative"
      >
        {products.map((item, i) => (
          <Link href={`/products/${item.permalink}`}>
            <div key={i} className="bg-white rounded-xl overflow-hidden ml-1 mr-1">
              <img
                src={item.image.url}
                className="rounded-xl cursor-pointer"
                alt=""
              />
            </div>
          </Link>
        ))}
        <div className="absolute"></div>
      </Carousel>
  )
}
export default MyCarousel
