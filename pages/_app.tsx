import "../styles/globals.scss"
import type { AppProps } from "next/app"
import Header from "../components/Header/Header"
import { CategoriesProvider } from "../context/categories"
import { CartProvider } from "../context/cart"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <SessionProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </CartProvider>
  )
}

export default MyApp
