import "../styles/globals.css"
import type { AppProps } from "next/app"
import { AuthenticationProvider } from "../providers/AuthenticationProvider"
import { Footer } from "../components/Footer"
import { Box } from "@mui/material"

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthenticationProvider>
      <Box display="flex" flex="1" minHeight={"100vh"} width="100%">
        <Component {...pageProps} />
      </Box>
      <Footer />
    </AuthenticationProvider>
  )
}

export default App
