import Login from "@components/login"
import { useAuth } from "@hooks/useAuth"
import { useRouter } from "next/router"
import React from "react"

const Admin = () => {
  const user = useAuth()
  return <>{user ? <div>admin</div> : <Login />}</>
}

export default Admin
