const HeaviesLogo = () => {
  return (
    <div className=" relative">
      <div className="absolute -top-1.5 md:-top-1 left-[14px] md:left-5 xl:top-1 xl:left-[25px]">
        <h4 className="text-base sm:text-[20px]">Home of the</h4>
      </div>
      <h1 id="heavies" className="text-7xl sm:text-8xl italic xl:text-9xl">
        HEAVIES
      </h1>
      <div className="-mt-1 xl:-mt-2 flex">
        <h3 className="font-semibold text-sm md:text-base xl:text-lg">
          {" "}
          Get the good stuff EZ
        </h3>

        <span className="text-xs -translate-y-0.5 block">&reg;</span>
      </div>
    </div>
  )
}
export default HeaviesLogo
