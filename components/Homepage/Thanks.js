import {
  TbBrandMeta,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTiktok,
  TbBrandTwitter,
} from "react-icons/tb"

const Thanks = () => {
  return (
    <div className="flex flex-col w-full max-w-lg mx-auto xl:mx-0 xl:ml-auto">
      <h2 className=" text-3xl  text-center font-bold  mx-auto lg:text-4xl  opacity-90 w-full ml-auto xl:text-right">
        Thanks for checking us out!
      </h2>
      <div className="sm:-mt-4 xs:grid grid-cols-[.1fr,1fr] sm:grid-cols-[.1fr,1fr] justify-center items-center xl:gap-5">
        <div className=" text-4xl xl:text-5xl flex xs:flex-col items-center justify-center gap-5 dark:text-white py-8 relative">
          <TbBrandInstagram />
          <TbBrandMeta />
          <TbBrandFacebook />
          <TbBrandTiktok />
          <TbBrandTwitter />
          <div className="absolute text-xs top-3 xs:hidden">We float on</div>
        </div>
        <div className="  p-2">
          <p>
            We are a small family-owned business specializing in high-quality
            vaporizers & accessories by the finest artists and manufacturers
            from around the world.
            <br />
            <br />
            We aim to deliver the best value and customer experience both before
            and after your purchase!
            <br />
            <br />
            Please email{" "}
            <a className="underline" href="mailto:sales@vgoodiez.com">
              sales@vgoodiez.com
            </a>{" "}
            or call/text{" "}
            <a className="underline" href={`tel:678-224-1434`}>
              678-224-1434
            </a>{" "}
            with any questions. We'd be happy to discuss your needs! Thanks for
            visiting our store!
          </p>
        </div>
      </div>
    </div>
  )
}
export default Thanks
