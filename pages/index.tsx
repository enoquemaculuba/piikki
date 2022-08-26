import { useAuth } from "@hooks/useAuth"
import { Box } from "@mui/material"
import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  const user = useAuth()
  return (
    <div>
      <Head>
        <title>Piikki</title>
        <meta name="description" content="Piiki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user ? (
        <Box display={"flex"} flex="1" width="100%" height={"100vh"}>
          logged in
        </Box>
      ) : (
        <Box display={"flex"} flex="1" width="100%" height={"100vh"}>
          not logged in
        </Box>
      )}
    </div>
  )
}

export default Home
