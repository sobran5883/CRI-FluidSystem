import logo from '../assets/header/logo.png'
function Header() {
  return (
    <div>
        <div className='w-full flex items-center justify-center mb-6'>
            <img className='h-28' src={logo} alt="" />
        </div>
    </div>
  )
}

export default Header