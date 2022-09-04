const Newsletter = () => {
  return (
    <div className="pb-8 pt-3 -translate-y-8 md:translate-y-0 flex flex-col items-center justify-center w-full">
      <p id="keep" className="text-4xl lg:text-5xl font-bold text-center xl:w-[490px] max-w-md md:ml-auto text-brand dark:text-white opacity-80 dark:opacity-100 w-full md:text-right">
        Keep up with the latest in <span className="italic font-extrabold">heavy</span> vaping technologies.
      </p>
      <div className="mt-10 w-full max-w-lg lg:max-w-md md:ml-auto">
        <div className="relative w-full ml-auto flex justify-end">
        <h2 className="absolute left-0 -top-4 translate-x-1 opacity-80">
          Sign up for our newsletter today.
        </h2>
          <input
            type="email"
            placeholder="Email"
            className="mt-2 px-4 h-[50px]  w-full focus:ring-0"
          />
          <button className="absolute  whitespace-nowrap top-1/2 -translate-y-1/2 mt-1 font-semibold right-4 h-[50px]">
            Notify me &rarr;
          </button>
        </div>
      </div>
    </div>
  )
}
export default Newsletter
