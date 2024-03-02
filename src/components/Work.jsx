import React from 'react'
import proj1 from '../assets/Natour.jpg'
import proj2 from '../assets/Portfolio.jpg'

function Work() {
  return (
      <div className='max-w-[1200px] mx-auto p-5 bg-black '>
          <div className='pb-8 py-5'>
              <p className='text-4xl text-center mb-3 font-bold primary-color mt-10'>Work</p>
              <p className='text-gray-400 text-center'> Check out some of my Projects</p>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-5 px-5  md:w-[100%] mx-auto'>
              <div className='transform, transition-transform duration-300 hover:scale-105 overflow-hidden 
              shadow-lg shadow-[#40c16] group container rounded-md flex
              justify-center items-center mx-auto content-div   bg-cover relative  '>
                  <img src={proj1} layout="fill" objectFit="cover" alt="" />
                  <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                      <span className='text-2xl font-bold text-white -tracking-wider'>Natour Project</span>
                      <div className='py-auto text-center'>
                          <a href="https://bilalhaider20.github.io/Natour-Website/">
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                              font-bold text-lg'>
                                  Live
                              </button>
                        </a>
                      </div>
                  </div>
              </div>
              <div className='transform, transition-transform duration-300 hover:scale-105 overflow-hidden
              shadow-lg shadow-[#40c16] group container rounded-md flex
              justify-center items-center mx-auto content-div  bg-cover relative  '>
                  <img src={proj2} layout="fill" objectFit="cover" alt="" />
                  <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                      <span className='text-2xl font-bold text-white -tracking-wider'>Portfolio</span>
                      <div className='py-auto text-center'>
                          <a href="https://bilalhaider20.github.io/portfolio/" target='_black'>
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                              font-bold text-lg'>
                                  Live
                              </button>
                        </a>
                      </div>
                  </div>
              </div>
              {/* <div className='transform, transition-transform duration-300 hover:scale-105 overflow-hidden
              shadow-lg shadow-[#40c16] group container rounded-md flex
              justify-center items-center mx-auto content-div h-[200px] bg-cover relative  '>
                  <img src={proj3} layout="fill" objectFit="cover" alt="" />
                  <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                      <span className='text-2xl font-bold text-white -tracking-wider'>Project</span>
                      <div className='pt-8 text-center'>
                          <a href="#">
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                              font-bold text-lg'>
                                  Live
                              </button>
                        </a>
                      </div>
                  </div>
              </div> */}
              {/* <div className='transform, transition-transform duration-300 hover:scale-105 overflow-hidden
              shadow-lg shadow-[#40c16] group container rounded-md flex
              justify-center items-center mx-auto content-div h-[200px] bg-cover relative  '>
                  <img src={proj4} layout="fill" objectFit="cover" alt="" />
                  <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                      <span className='text-2xl font-bold text-white -tracking-wider'>Project</span>
                      <div className='pt-8 text-center'>
                          <a href="#">
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                              font-bold text-lg'>
                                  Live
                              </button>
                        </a>
                      </div>
                  </div>
              </div> */}
              {/* <div className='transform, transition-transform duration-300 hover:scale-105 overflow-hidden
              shadow-lg shadow-[#40c16] group container rounded-md flex
              justify-center items-center mx-auto content-div h-[200px] bg-cover relative  '>
                  <img src={proj5} layout="fill" objectFit="cover" alt="" />
                  <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                      <span className='text-2xl font-bold text-white -tracking-wider'>Project</span>
                      <div className='pt-8 text-center'>
                          <a href="#">
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                              font-bold text-lg'>
                                  Live
                              </button>
                        </a>
                      </div>
                  </div>
              </div> */}
              {/* <div className='transform, transition-transform duration-300 hover:scale-105 overflow-hidden
              shadow-lg shadow-[#40c16] group container rounded-md flex
              justify-center items-center mx-auto content-div h-[200px] bg-cover relative  '>
                  <img src={proj6} layout="fill" objectFit="cover" alt="" />
                  <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                      <span className='text-2xl font-bold text-white -tracking-wider'>Project</span>
                      <div className='pt-8 text-center'>
                          <a href="#">
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                              font-bold text-lg'>
                                  Live
                              </button>
                        </a>
                      </div>
                  </div>
              </div> */}
          </div>
    </div>
  )
}

export default Work