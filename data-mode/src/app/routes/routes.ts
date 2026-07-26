import { createBrowserRouter } from "react-router"

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { HomePage } = await import("@/pages/home/home-page")

      return {
        Component: HomePage,
      }
    },
  },
  {
    lazy: async () => {
      const { AuthLayout } = await import("@/app/layouts/auth-layout")

      return {
        Component: AuthLayout,
      }
    },
    children: [
      {
        path: "login",
        lazy: async () => {
          const { LoginPage } = await import("@/pages/login/login-page")

          return {
            Component: LoginPage,
          }
        },
      },
      {
        path: "signup",
        lazy: async () => {
          const { SignupPage } = await import("@/pages/signup/signup-page")

          return {
            Component: SignupPage,
          }
        },
      },
    ],
  },
  {
    lazy: async () => {
      const { AppLayout } = await import("@/app/layouts/app-layout")

      return {
        Component: AppLayout,
      }
    },
    children: [],
  },
])
