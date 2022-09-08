import Link from "next/link"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const Title = ({ children }) => (
  <h2 className="text-3xl font-bold w-full mb-4 opacity-95">{children}</h2>
)
const Card = ({ image, permalink }) => (
  <div class="sm:max-w-sm mb-4 rounded-2xl overflow-hidden  border-gray-100 shadow-md dark:bg-gray-800 border-t  dark:border-gray-700">
    <Link href={`/products/${permalink}`}>
      <div>
        <img class="rounded-t-2xl object-cover" src={image} alt="" />
      </div>
    </Link>
  </div>
)

const Collection = ({ title, collections }) => {
  return (
    <div className="bg-slate-200 dark:bg-[#1F2937] rounded-3xl  p-5   pt-5 shadow ">
      <Title>{title}</Title>
      <div className="flex w-full  ">
        <div className="flex flex-col overflow-hidden max-w-md lg:max-w-xl">
          <Carousel
            // autoPlay
            infiniteLoop
            showIndicators={false}
            showStatus={false}
            // showThumbs={true}
            showArrows={false}
            className="max-w-md xl:max-w-xl  overflow-hidden "
          >
            {collections.map((collection) => (
              <div className="">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg xl:text-xl opacity-90 font-medium mb-2 ml-1">
                    {collection.title}
                  </h4>
                  <div className="text-xs md:text-sm -translate-y-0.5 font-medium whitespace-nowrap">
                    View all &rarr;
                  </div>
                </div>
                <div className="grid-cols-2 grid overflow-hidden overflow-x-scroll sm:grid-cols-3 lg:grid-cols-4 gap-x-3 no-scrollbar snap-mandatory snap-x">
                  {collection.collection.map((item) => (
                    <Card image={item.image.url} permalink={item.permalink} />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
export default Collection
