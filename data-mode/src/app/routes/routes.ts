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
])
