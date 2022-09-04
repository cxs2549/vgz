import "../styles/globals.scss"
import type { AppProps } from "next/app"
import Header from "../components/Header/Header"
import { CategoriesProvider } from "../context/categories"
import { CartProvider } from "../context/cart"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <CategoriesProvider>
        <Header />
      </CategoriesProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
