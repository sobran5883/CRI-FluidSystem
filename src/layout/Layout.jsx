import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function Layout (){
    return(
        <>
        <div className='bg-gradient-to-b from-white to-[#eae28f]'>
            <Header/>
            <Outlet />
            <Footer />   
        </div>
        </>
    )
}
export default Layout;