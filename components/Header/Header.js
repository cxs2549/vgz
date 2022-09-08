import Logo from "./parts/Logo"
import Icons from "./parts/Icons"
import Link from "next/link"
import { useRouter } from "next/router"

const Container = ({ children, classes }) => (
  <div
    className={`max-w-6xl mx-auto flex items-center justify-between xl:px-0 ${classes}`}
  >
    {children}
  </div>
)

const Header = () => {
  const loopMe = [
    { name: "The Heavies", slug: "the-heavies" },
    { name: "Torch Powered", slug: "torch-powered" },
    { name: "Desktop", slug: "desktop" },
    { name: "Portable", slug: "desktop" },
    { name: "Induction Heaters", slug: "induction-heaters" },
    { name: "Coming soon", slug: "coming-soon" },
  ]
  const router = useRouter()
  return (
    <header className="z-50 bg-green-600 text-white">
      <Container classes={`p-5`}>
        <Logo />
        <Icons />
      </Container>
      <Container classes={` h-10`}>
        <div className="flex px-5 xl:px-0 gap-6 pb-4 overflow-x-scroll no-scrollbar">
          <Link href={`/`}>
            <div
              className={`whitespace-nowrap cursor-pointer rounded-full  font-medium text-base px-3  py-1 ${
                router.asPath == `/` ? "bg-green-500 text-brand" : ""
              }`}
            >
              Home
            </div>
          </Link>
          {loopMe.map((cat) => (
            <Link href={`/categories/${cat.slug}`}>
              <div
                className={`whitespace-nowrap cursor-pointer rounded-full  font-medium text-base px-3 hover:bg-green-500 transition-all duration-500 py-1 ${
                  router.asPath == `/categories/${cat.slug}`
                    ? "bg-green-500 text-brand"
                    : ""
                }`}
              >
                {cat.name}
              </div>
            </Link>
          ))}
          {/* mini menu */}
          
        </div>
      </Container>
    </header>
  )
}
export default Header
