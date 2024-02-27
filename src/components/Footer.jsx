import { BsGlobe2 } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
function Footer() {
  return (
    <div className="bg-red-500 flex items-center justify-center m-0 md:m-2">
      <div className=" md:w-full flex flex-col md:flex-row md:items-center justify-evenly pt-10 pb-16">
          <div className="flex items-center mb-2">
            <div className="p-[5px] bg-white rounded-full">
            <FaPhone className="text-red-500 bg-white h-4 w-4 rounded-full"/>
            </div>
            <h1 className="text-white mx-2">Toll free <span>18002001234</span></h1>
          </div>
          <div className="flex items-center mb-2">
            <FaFacebook className="bg-red-500 text-white h-6 w-6"/>
            <a className="text-white mx-2" href="www.facebook.cripumps">www.facebook.cripumps</a>
          </div>
          <div className="flex items-center mb-2">
            <div className="">
            <BsGlobe2 className="text-red-500 bg-white h-6 w-6 rounded-full"/>
            </div>
            <a className="text-white mx-2" href="www.crigroup.com">www.crigroup.com</a>
          </div>
        </div>
    </div>
  )
}

export default Footer
