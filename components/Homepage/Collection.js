import Link from "next/link"

const Title = ({ children }) => (
  <h2 className="text-3xl px-5 font-bold w-full mb-4 opacity-95">{children}</h2>
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
    <div className="bg-slate-200 dark:bg-[#1F2937] rounded-3xl  py-5 lg:px-5  pt-5 shadow bg-blend-lighten">
      <Title>{title}</Title>
      <div className="flex flex-col  w-full  ">
        <div className="flex flex-col">
          {collections.map((collection) => (
            <div>
              <div className="flex items-center justify-between px-5">
                <h4 className="text-lg xl:text-xl opacity-90 font-medium mb-2 ml-1">
                  {collection.title}
                </h4>
                <div className="text-xs md:text-sm -translate-y-0.5 font-medium whitespace-nowrap">
                  View all &rarr;
                </div>
              </div>
              <div className="grid-cols-2 grid overflow-hidden overflow-x-scroll sm:grid-cols-3 lg:grid-cols-4 gap-3 no-scrollbar snap-mandatory snap-x">
                {collection.collection.map((item) => (
                  <Card
                    image={item.image.url}
                    permalink={item.permalink}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Collection
