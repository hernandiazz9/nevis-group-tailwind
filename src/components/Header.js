import React,{useState} from "react";
import logo from '../assets/logo.png'

export default function Header({Scroll}) {
  const [isOpen, setIsOpen] = useState(false)
  const scrollClassDown = ' md:w-screen  md:fixed  md:-mb-4  md:shadow-2xl  md:bg-black md:bg-opacity-75  '
  const scrollClassUp = '  md:bg-black md:bg-opacity-25 	 '

  return (
      
      <header className={` ${Scroll? scrollClassDown  : scrollClassUp } md:flex md:justify-between md:items-center md:px-4 transform  md:py-3 transition duration-500 ease-in-out  fixed top-0   w-screen  ${isOpen?'bg-black' :'bg-black bg-opacity-75'} `}>
        <div className="flex   items-center justify-between px-4 py-3 md:p-0">
          <div>
            <img className="h-10" src={logo} alt="nevis-logo"/>
          </div>
          <div className="md:hidden">
            <button 
              onClick={()=>setIsOpen(setIsOpen=>!setIsOpen)}
              type="button"
              className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path className={isOpen? 'block' : 'hidden'} fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                <path className={!isOpen? 'block' : 'hidden'} fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              </svg>
            </button>
          </div>
        </div>
        <nav className={`${isOpen? 'block' : 'hidden'} px-2 pt-2 pb-4 md:flex md:p-0 `}>
          <a href="/" className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">List your property</a>
          <a href="/" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2">Trips</a>
          <a href="/" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2">Messages</a>
        </nav>
    </header>
  );
}