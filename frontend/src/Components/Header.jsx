import React from 'react';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar className='border-b-2'>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
         <span style={{ fontSize: 40, backgroundImage: 'linear-gradient(to right, #8A2BE2, #9B30FF, #9B30FF)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Visual.</span>
      </Link>
      <button data-toggle="dropdownNavbar" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false" style={{ background: 'transparent', border: 'none' }}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5 text-purple-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="/src/pages/Home.jsx" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent hover:bg-blue-800 hover:text-white md:hover:bg-transparent md:hover:text-blue-800" aria-current="page" style={{ fontSize: '1rem' }}>Home</a>
          </li>
          <li>
            <button id="dropdownNavbarLink" data-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" style={{ fontSize: '1rem' }}>Visualizer <svg className="w-2.5 h-2.5 ms-2.5 text-purple-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg></button>
            {/* Dropdown menu */}
            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sorting</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Path Finding</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="https://devtales.onrender.com/" target="_blank" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-purple-600" style={{ fontSize: '1rem' }}>Blog</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-purple-600" style={{ fontSize: '1rem' }}>About</a>
          </li>
          <div className='flex items-center space-x-4 ml-auto'>
            <form className="flex items-center">
              <TextInput
                type='text'
                placeholder='example@email.com'
                className='mr-2' // Removed hidden lg:inline and added margin-right
              />
              <Button className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-1 text-center hover:text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </ul>

      </div>
    </Navbar>
  );
}
