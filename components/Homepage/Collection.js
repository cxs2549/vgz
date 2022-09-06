const Collection = ({ title, collections }) => {
  return (
    <div className="bg-slate-200 dark:bg-slate-700 rounded-xl p-5 pb-12 pt-5 shadow bg-blend-lighten opacity-95">
      <h2 className="text-3xl font-bold w-full mb-4 opacity-95">
        {title}
      </h2>
      <div className="flex flex-col  w-full  ">
        <div className="gap-8 flex flex-col">
          {collections.map((collection) => (
            <div className="">
              <div className="flex items-center justify-between">
                <h4 className="text-lg xl:text-xl opacity-90 font-medium mb-1 ml-1">
                  {collection.title} 
                </h4>
                <div className="text-xs md:text-base font-medium">
                  View all
                &rarr;
                </div>
              </div>
              <div className="flex overflow-hidden overflow-x-scroll gap-2 no-scrollbar snap-mandatory snap-x">
                {collection.collection.map((item) => (
                  <div className="snap-start rounded-xl overflow-hidden min-w-[260px] xl:min-w-[210px]">
                    <img src={item.image.url} className="w-full" alt="" />
                    <div className="bg-slate-300 px-5 py-6 flex-col flex gap-4">
                      <h3 className="h-[40px]">{item.name}</h3>
                      <div className="flex gap-2">
                        <h2 className="line-through">{item.price.formatted_with_symbol}</h2>
                        <h2 className="font-medium">${item.price.raw - (item.price.raw * 0.25)}</h2>
                      </div>
                      <div>Add to cart</div>
                    </div>
                  </div>
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
