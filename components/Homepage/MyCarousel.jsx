import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Link from "next/link"

const MyCarousel = ({ products }) => {
  return (
    <div className="rounded-xl -translate-x-2 relative max-w-[510px] cursor-pointer md:max-h-[490px] mx-auto md:mx-0 ">
      <Carousel
        // autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        {products.map((item, i) => (
          <Link href={`/products/${item.permalink}`}>
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow">
              <img
                src={item.image.url}
                className="rounded-xl cursor-pointer"
                alt=""
              />
            </div>
          </Link>
        ))}
      </Carousel>
      <div className="w-full flex -translate-y-20  justify-center mt-4">
        <Link href="/categories/the-heavies">
          <button className="font-semibold dark:text-white hover:bg-opacity-90 transition-opacity duration-150 bg-opacity-70 px-6 py-3 bg-green-600 dark:bg-green-500 text-white rounded-full">
            See all &rarr;
          </button>
        </Link>
      </div>
    </div>
  )
}
export default MyCarousel
