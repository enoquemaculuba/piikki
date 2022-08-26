import { Box, Button, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import { signIn } from "@utils/firebase"
import { useRouter } from "next/router"

const Login = () => {
  const router = useRouter()

  const [pass, setPass] = useState<string | undefined>(undefined)
  const [email, setEmail] = useState<string | undefined>(undefined)

  const onSignIn = async () => {
    if (email && pass) {
      const res = await signIn(email, pass)
      if (res === true) {
        router.push("/")
      }
    }
  }
  return (
    <Box
      bgcolor="lightblue"
      width="100%"
      height="100vh"
      display="flex"
      flex="1 1 100%"
      justifyContent={"center"}
      alignContent="center"
      flexDirection={"column"}
    >
      <Box margin={"auto"} display="flex" flexDirection={"column"} gap="20px">
        <Typography margin="auto" variant="h2">
          Login
        </Typography>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-basic"
          label="email"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setPass(e.target.value)}
          id="outlined-basic"
          label="password"
          variant="outlined"
          type="password"
        />
        <Button
          onClick={onSignIn}
          variant="contained"
          sx={{ borderRadius: "40px" }}
        >
          Login
        </Button>
      </Box>
    </Box>
  )
}

export default Login
