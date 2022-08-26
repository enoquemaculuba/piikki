import React, { useEffect, useState } from "react"
import firebase from "firebase/app"
import { auth } from "@utils/firebase"
import { User } from "@firebase/auth"

export const AuthenticationProvider: React.FC<{
  children?: React.ReactNode
}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser)
    })

    return unsubscribe
  }, [])
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export const AuthContext = React.createContext<User | null>(null)
