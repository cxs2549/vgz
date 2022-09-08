import {
  TbBrandMeta,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTiktok,
  TbBrandTwitter,
} from "react-icons/tb"

const Thanks = () => {
  return (
    <div className=" flex flex-col w-full  mx-auto xl:mx-0 xl:ml-auto ">
      <div>
        <h2 className=" text-3xl  text-center font-bold  mx-auto lg:text-4xl  opacity-90 w-full  xl:mb-4">
          Thanks for checking us out!
        </h2>
        <div className=" text-7xl  flex items-center justify-center gap-6 dark:text-white pt-4 relative">
          <h3 className="text-sm">Connect w/us!</h3>
          <TbBrandInstagram />
          <TbBrandMeta />
          <TbBrandFacebook />
          <TbBrandTiktok />
          <TbBrandTwitter />
        </div>
      </div>
      {/* <div className="  p-2">
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
        </div> */}
    </div>
  )
}
export default Thanks
