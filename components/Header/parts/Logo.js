import Link from "next/link"

const Logo = () => {
  return (
    <Link href={`/`}>
      <div className="w-32 sm:w-40">
        <img src="/logo.png" alt="" />
      </div>
    </Link>
  )
}
export default Logo
