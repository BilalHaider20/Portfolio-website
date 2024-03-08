import React from 'react';
import proj1 from '../assets/Natour.jpg';
import proj2 from '../assets/Portfolio.jpg';

function Work() {
  const projects = [
    {
      title: 'Natour Project',
      image: proj1,
      link: 'https://bilalhaider20.github.io/Natour-Website/',
    },
    {
      title: 'Portfolio',
      image: proj2,
      link: 'https://bilalhaider20.github.io/portfolio/',
    },
    // Add additional projects here in the same format
  ];

  return (
    <div className='max-w-[1200px] mx-auto p-5 bg-black '>
      <div className='pb-8 py-5'>
        <p className='text-3xl text-center mb-3 font-bold primary-color mt-10 sm:text-5xl'>Work</p>
        <p className='text-gray-400 text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>Check out some of my projects</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-5 px-5  md:w-[100%] mx-auto'>
        {projects.map((project) => (
          <div key={project.title} className='transform, transition-transform duration-300 hover:scale-105 overflow-hidden  shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover relative'>
            <img src={project.image} layout="fill" objectfit="cover" alt="" />
            <div className='opacity-0 group-hover:opacity-90  bg-[gray]/70 absolute  inset-0 flex flex-col justify-center items-center'>
              <span className='text-2xl font-bold text-white -tracking-wider'>{project.title}</span>
              <div className='py-auto text-center'>
                <a href={project.link} target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
// transform transition-transform  hover:translate-x-full