import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from "firebase/app"
import config from "../config"

initializeApp(config.firebase)

export const auth = getAuth()

export const signIn = async (email: string, password: string) => {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      resolve(true)
    } catch (error) {
      console.error(error)
      reject(false)
    }
  })
}

export const signOut = async () => {
  await auth.signOut()
}
