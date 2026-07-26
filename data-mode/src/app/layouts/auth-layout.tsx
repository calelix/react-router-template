import { Outlet } from "react-router"

export function AuthLayout() {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center">
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </main>
  )
}
