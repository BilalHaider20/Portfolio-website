import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
function Skills() {
  return (
      <div className="flex flex-col bg-black text-gray-400 md:h-[250px] max-w-[100%] ">
          
          <h2 class="my-[30px] primary-color text-3xl md:text-4xl font-bold mx-auto">
              My Tech Stack 
          </h2>
      <div className='  w-[95%] mx-auto flex flex-row justify-evenly items-center flex-wrap'> 
      <div className='flex flex-col items-center m-4 w-[80px] '>
        <img src={html} alt="HTML logo" />
        <p >
          HTML
        </p>
          </div>
      <div className='flex flex-col items-center m-4 w-[80px]'>
        <img src={css} alt="CSS logo" />
        <p>
          CSS
        </p>
          </div>
      <div className='flex flex-col items-center m-4 w-[80px] '>
        <img src={js} alt="Js logo" />
        <p>
          JavaScript
        </p>
          </div>
      <div className='flex flex-col items-center m-4 w-[80px] md:w-[80px]'>
        <img src={tailwind} alt="Tailwind logo" />
        <p>
          Tailwind
        </p>
          </div>
      <div className='flex flex-col items-center m-4 w-[80px] md:w-[80px]'>
        <img src={react} alt="react logo" />
        <p>
          React
        </p>
          </div>
      </div>

    </div>
  )
}

export default Skills