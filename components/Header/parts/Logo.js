import Link from "next/link"

const Logo = () => {
  return (
    <Link href={`/`}>
      <div className="w-32 sm:w-40 opacity-90 hover:opacity-100 transition-opacity duration-500">
        <img src="/logo.png" alt="" />
      </div>
    </Link>
  )
}
export default Logo
