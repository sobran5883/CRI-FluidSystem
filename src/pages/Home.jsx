import img1 from '../assets/home/1.png'
import img2 from '../assets/home/2.png'
import img3 from '../assets/home/3.png'
function home() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row w-11/12 items-center'>
            <div className='w-11/12 md:w-[40%] flex items-center justify-center'>
                <img className='w-9/12' src={img1} alt="" />
            </div>
            <div className='w-11/12 md:w-[60%]'>
                <h1 className=' font-bold text-sm'>C.R.I's PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
                <ul className='list-disc text-sm font-medium pl-4 md:pl-10'>
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutiens, as trustworthy products for various projects across the globe to save energy. </li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                </ul>
                <img className='my-3' src={img2} alt="" />
                <h1 className='text-sm font-medium'>Government of India has awarded the <span className='font-semibold'>"National Energy Conservation Award 2018"</span> Mr. G. salvaraj, joint managing Director of C.R.I. Group received the award from smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h1>
            </div>
        </div>
        <div className=' w-11/12 mt-8 md:mt-16 flex flex-col items-center border-b-2 border-b-red-500'>
            <h1 className='text-sm font-semibold'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h1>
            <img src={img3} alt="" />
            <p className='text-sm font-semibold py-3'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
        </div> 
        <div className='w-11/12'>
            <h1 className='text-center font-bold my-3'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h1>
            <div className='text-sm flex flex-wrap items-center justify-center font-medium text-center pb-2'>
                <span className='px-1 border-r-2 border-r-red-500'>CHEMICALS & PROCESS</span>
                <span className='px-1 border-r-2 border-r-red-500'>POWER WATER & WASTE</span>
                <span className='px-1 border-r-2 border-r-red-500'>WATER OILS & GAS PHARMA</span>
                <span className='px-1 border-r-2 border-r-red-500'>SUGARS & DISTILLERIES</span>
                <span className='px-1 border-r-2 border-r-red-500'>PAPER & PULP</span>
                <span className='px-1 border-r-2 border-r-red-500'>MARINE & DEFENCE</span>
                <span className='px-1 border-r-2 border-r-red-500'>METAL & MINING</span>
                <span className='px-1 border-r-2 border-r-red-500'>PETROCHEMICAL & REFINERIES</span>
                <span className='px-1 border-r-2 border-r-red-500'>SOLAR</span>
                <span className='px-1 border-r-2 border-r-red-500'>BUILDING</span>
                <span className='px-1 border-r-2 border-r-red-500'>HVAC</span>
                <span className='px-1 border-r-2 border-r-red-500'>FIRE</span>
                <span className='px-1 border-r-2 border-r-red-500'>FIGHTING</span>
                <span className='px-1 border-r-2 border-r-red-500'>AGRICULTURE & RESIDENTIAL</span>
            </div>
        </div>
    </div>
  )
}

export default home
