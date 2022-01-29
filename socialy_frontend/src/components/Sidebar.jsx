import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import Logo from './Logo';
import { categories } from '../utils/data';
const isNotActiveStyle = "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize md:text-md text-xs";
const isActiveStyle = "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out md:text-md text-xs";



const Sidebar = ({user, closeToggle}) => {
  const handleCloseSidebar = () => {
    if(closeToggle) 
      closeToggle(false);
  }
  return (
    <div className="flex flex-col justify-between bg-gray-50 h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link 
          to="/"
          className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'
          onClick={handleCloseSidebar}
        >
        <Logo />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={( {isActive}) => isActive ? isActiveStyle : isNotActiveStyle }
            onClick={handleCloseSidebar}
          >
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className="text-md ml-3"> 
            Discover Categories
          </h3>
          {categories.slice(0, categories.length-1).map((category) => {
              return <NavLink
              className={( {isActive}) => isActive ? isActiveStyle : isNotActiveStyle }
                to={`/category/${category.name}`}
                key={category.name}
                onClick={handleCloseSidebar}
              >
                <img src={category.image} alt="category-image" className='w-8 h-8 rounded-full shadow-sm' />
                {category.name}
           </NavLink>
            })}
        </div>
      </div>
      {user && (
        <Link
          to={`user/${user?._id}`}
          className='flex mt-5 mb-3 p-2 gap-2 items-center text-sm font-light shadow-md bg-gray-100 border-none'
        >
          <img src={user.image} alt="user-profile" className="w-10 h-10 rounded-full " />
          <p>{user.userName}</p>
        </Link>
      )} 
    </div>
  )
}

export default Sidebar
