import { AuthContext } from "providers/AuthenticationProvider"
import React, { useContext } from "react"

export const useAuth = () => {
  return useContext(AuthContext)
}
