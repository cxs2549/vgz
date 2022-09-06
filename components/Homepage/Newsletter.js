const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <p
        
        className="text-3xl lg:text-5xl font-bold text-center xl:w-[490px] md:max-w-md md:ml-auto text-brand dark:text-white opacity-90 dark:opacity-100 w-full md:text-right xl:max-w-xl max-w-sm mx-auto xl:mx-0 xl:ml-auto"
      >
        Keep up with the latest in{" "}
        <span id="keep" className="italic font-extrabold">heavy</span> vaping
        technologies.
      </p>
      <div className="mt-10 w-full max-w-sm mx-auto lg:max-w-md md:ml-auto xl:mr-0">
        <div className="relative w-full ml-auto flex justify-center flex-col">
          <h2 className="absolute left-0 -top-4 translate-x-1 opacity-80">
            Sign up for our newsletter today.
          </h2>
          <input
            type="email"
            placeholder="Email"
            className="mt-2 px-4 h-[50px]  w-full focus:ring-0 border-none !outline-none"
          />
          <button className=" w-full flex justify-center items-center  whitespace-nowrap  font-semibold h-[50px]">
            Notify me &rarr;
          </button>
        </div>
      </div>
    </div>
  )
}
export default Newsletter
