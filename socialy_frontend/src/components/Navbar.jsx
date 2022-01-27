import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import {IoIosAddCircleOutline, IoMdSearch} from 'react-icons/io';


const Navbar = ({ searchTerm, setSearchTerm, user }) => {
const navigate= useNavigate();

if(!user) return null;

  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className='flex text-xs items-center bg-gray-50 w-full rounded-md'>
        <IoMdSearch fontSize={15} className='ml-1' />
        <input 
          type="text"
          onChange={e => setSearchTerm(e.target.value )}
          placeholder='Search'
          value={searchTerm}
          onFocus={() => navigate('/search')}
          className='p-2 w-full bg-gray-50 outline-none rounded-r-md'
        />
      </div>
      <div className="hidden md:flex items-center">
        <Link to={`user/${user?._id}`}>
          <img src={user.image} alt="user-photo" className='h-10 rounded-full'>
            </img>
        </Link>
      </div>
      <div className="flex items-center">
        <Link to='create-pin'>
          <IoIosAddCircleOutline fontSize={20} className="cursor-pointer"/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
