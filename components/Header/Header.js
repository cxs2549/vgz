import Logo from "./parts/Logo"
import Icons from "./parts/Icons"
import { useCategoriesState } from "../../context/categories"
import Link from "next/link"
import { useRouter } from "next/router"

const Container = ({ children, classes }) => (
  <div
    className={`max-w-7xl mx-auto flex items-center justify-between xl:px-0 ${classes}`}
  >
    {children}
  </div>
)

const Header = () => {
  const { data: categories } = useCategoriesState()
  const loopMe = categories
  const router = useRouter()
  return (
    <header className="z-50 bg-green-600 text-white">
      <Container classes={`p-5`}>
        <Logo />
        <Icons />
      </Container>
      <Container classes={` h-12`}>
        <div className="flex px-5 xl:px-0 gap-8 pb-4 overflow-x-scroll no-scrollbar">
          <Link href="/">
            <div
              className={`whitespace-nowrap  font-semibold rounded-full  px-3 py-1 cursor-pointer  ${
                router.pathname == "/" ? "bg-green-500" : ""
              }`}
            >
              Home
            </div>
          </Link>
          {loopMe?.map((cat) => (
            <Link href={`/categories/${cat.slug}`}>
              <div
                className={`whitespace-nowrap cursor-pointer rounded-full  font-semibold px-3  py-1 ${
                  router.asPath == `/categories/${cat.slug}` ? "bg-green-500 text-brand" : ""
                }`}
              >
                {cat.name}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </header>
  )
}
export default Header
