import { Header } from './header'
import { Outlet } from 'react-router'

export const MainLayout = () => {
  return (
    <div className='w-full h-full relative min-h-screen'>
        <Header />
        <Outlet />

        <img src="/src/assets/images/bg-mesh.png" className="absolute -bottom-4 left-0 right-0 w-full h-[240px] object-cover" />
    </div>
  )
}
