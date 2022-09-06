const Collection = ({ title, collections }) => {
  return (
    <div className="bg-slate-200 dark:bg-slate-700 rounded-xl p-2 pb-12 pt-5 shadow bg-blend-lighten opacity-95">
      <h2 className="text-3xl font-bold w-full mb-4 pl-3 opacity-95">
        {title}
      </h2>
      <div className="flex flex-col gap-1 w-full  ">
        <div className="gap-2 flex flex-col">
          {collections.map((collection) => (
            <div className="p-2">
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
