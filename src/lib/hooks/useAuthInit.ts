// "use client"

// import { useEffect } from "react"
// import { useDispatch } from "react-redux"
// import { loginSuccess, logout } from "../redux/features/authSlice"

// export function useAuthInit() {
//   const dispatch = useDispatch()

//   useEffect(() => {
//     const initAuth = async () => {
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/user/profile`,
//           {
//             credentials: "include", // 🔥 VERY IMPORTANT (cookie token)
//           }
//         )

//         if (!res.ok) throw new Error("Unauthorized")

//         const user = await res.json()
//         dispatch(loginSuccess(user))
//       } catch (error) {
//         dispatch(logout())
//       }
//     }

//     initAuth()
//   }, [dispatch])
// }
"use client"

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { loginSuccess, logout } from "../redux/features/authSlice"
import { getClient } from "../api/client"

/* ✅ User interface based on API response */
interface User {
  _id: string
  firstName: string
  lastName: string
  email: string
  profileImage: string
  createdAt: string
  updatedAt: string
}

/* ✅ Full API response interface */
interface ProfileResponse {
  success: boolean
  message: string
  data: {
    user: User
  }
}

export function useAuthInit() {
  const dispatch = useDispatch()

  useEffect(() => {
    const initAuth = async () => {
      try {
        const response = await getClient<ProfileResponse>("/api/user/profile")

        console.log(response.data.user)

        // ✅ dispatch only the user object
        dispatch(loginSuccess(response.data.user))
      } catch (error) {
        dispatch(logout())
      }
    }

    initAuth()
  }, [dispatch])
}

