import Link from "next/link"

const Categories = ({ categories }) => {
  return (
    <div id="cats">
      <div className="min-h-[200px]  bg-red-300 rounded-xl p-2 relative w-full lg:ma  pb-8 transition-all duration-150">
      <div className="text-3xl md:text-right font-bold dark:text-white mb-2">
        Categories
      </div>
        <ul className="w-full flex overflow-scroll gap-x-2 gap-y-4 justify-between">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/categories/${cat.slug}`}>
              <div>
                <h4 className="mb-0.5 dark:text-white  cursor-pointer">
                  {cat.name}
                </h4>
                <div
                  className=" shadow text-white rounded-xl w-[180px] overflow-hidden h-[180px] med:block"
                  key={cat.slug}
                >
                  <img
                    src={cat.assets[0]?.url}
                    className="w-full object-cover object-center"
                    alt=""
                  />
                </div>
              </div>
            </Link>
          ))}
        </ul>
        {/* <div className="w-full flex   justify-center mt-5">
          <Link href="/products">
            <button className="font-semibold dark:text-white px-6 py-3 bg-brand dark:bg-green-500 text-white rounded-full">
              See all &rarr;
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  )
}
export default Categories
