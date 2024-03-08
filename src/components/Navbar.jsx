import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
export default function Navbar() {
    const [nav, setNav] = useState(0)

    function handleNav()
    {
        setNav(!nav);
    }

  return (
      <div>
          <div className='bg-black h-[100px] text-gray-200 max-w-[100%]
           mx-auto flex justify-between items-center '>
                <h1 className=" text-3xl primary-color font-bold ml-4">Bilal Haider</h1>  
              <ul className='hidden md:flex mr-10 gap-5'>
                  <li className='p-2 font-bold hover:text-red-500/80 '><a href="#"></a>About</li>
                  <li className='p-2 font-bold hover:text-red-500/80'><a href="#"></a>Work</li>
                  <li className='p-2 font-bold hover:text-red-500/80'><a href="#"></a>Contact</li>
                </ul>
              <div onClick={handleNav} className=" block md:hidden mr-4" >
                  {nav? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
              </div>
          <div className={nav ? ' fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500':' transition-all duration-500 ease-in-out fixed left-[-100%]'}>
          <h1 className=" text-3xl primary-color m-4">Bilal Haider</h1>  
              <ul className='p-8 text-2xl'>
                  <li className='p-2 hover:text-orange-500'><a href="#"></a>About</li>
                  <li className='p-2  hover:text-orange-500'><a href="#"></a>Work</li>
                  <li className='p-2  hover:text-orange-500'><a href="#"></a>Contact</li>
                </ul>
          </div>
          </div>
    </div>
  )
}
