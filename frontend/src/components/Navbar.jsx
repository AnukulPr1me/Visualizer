import React from 'react';

export default function Navbar() {
  return (
    <div className='text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Visual.</h1>
      <ul>
        <li className='flex'>
          <a href='#' className='p-4 text-white hover:text-[#00df9a]'>Home</a>
        </li>
        <li>
          <a href='#' className='p-4 text-white hover:text-[#00df9a]'>About</a>
        </li>
        <li>
          <a href='#' className='p-4 text-white hover:text-[#00df9a]'>Contact</a>
        </li>
      </ul>
    </div>
  );
}
