import { Header } from '@/widgets/Header'
import { Outlet } from 'react-router-dom'

export const Layout:React.FC=()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}