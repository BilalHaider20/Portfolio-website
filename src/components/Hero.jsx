import React from 'react'
import profileimage from '../assets/bilal.jpg'
import { TypeAnimation } from 'react-type-animation'
// import { ReactSocialMediaIcons } from 'react-social-media-icons';

function Hero() {
  return (
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[100%] md:h-[80vh] 
        mx-auto py-8 bg-black'>
          <div className='col-span-1 my-auto mx-auto w-[200px] h-auto lg:w-[300px]'>
              
            <img src={profileimage} alt="Profile Image" />
              
          </div>
          <div className='col-span-2 px-5'> 
              <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-bold mt-12'>
                  <span className='primary-color'>I'm a</span><br />
                  <TypeAnimation sequence={
                      ["Frontend Dev", 1000,
                          "Software Dev", 1000,
                      ]
                   }
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                  /> 
              </h1>
              <div className='text-white my-16'>
                  <a href="#" className='w-full rounded-xl bg-gradient-to-br from-orange-400 to-pink-600
                 px-6 py-3 mr-4'>Download Resume</a> 
                  <a href="#" className='w-full rounded-xl bg-gradient-to-br from-gray-600 to-gray-800
                 border-[1.5px] border-l-white
                 px-6 py-3 mr-4'>Contact</a> 
              </div>
                   
          </div>
    </div>
  )
}

export default Hero