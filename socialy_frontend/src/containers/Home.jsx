import React, { useState, useRef, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';
import { Sidebar, UserProfile  } from '../components';
import Pins from './Pins';
import { client } from '../client';
import { userQuery } from '../utils/data';
import { getUserInfo } from '../utils/getUser';
import Logo from '../components/Logo';



const Home = () => {

  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);
  const scrollRef = useRef();

  

  useEffect(() => {
    const userInfo = getUserInfo();
    const query = userQuery(userInfo?.googleId);
    client.fetch(query)
      .then((data) => {
        setUser(data[0]);
      });
  }, []);

  useEffect(() => {
    scrollRef.current.scrollTo(0,0);
  }, []);

  return (
    <div className='flex bg-white-50 md:flex-row flex-col h-screen transition-height-75 ease-out'>
      <div className='hidden md:flex h-screen flex-initial'> 
        <Sidebar user={user && user}/>
      </div>
      <div className='md:hidden flex flex-row'>
        <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
          <HiMenu className="cursor-pointer text-lg" onClick={() => setToggleSidebar(true)}/>
          <Link to="/">
            <Logo />
          </Link>
          <Link to={`users/${user?._id}`}>
            <img src={user?.image} alt="logo" className="w-10 rounded-full" />
          </Link>
        </div>
        {toggleSidebar && (
        <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in"> 
          <div 
            className="absolute w-full flex justify-end items-center p-2">
            <AiFillCloseCircle
               fontSize={30}
               className='cursor-pointer'
               onClick={() => setToggleSidebar(false)} 
            />
          </div>
          <Sidebar user={user && user} closeToggle={setToggleSidebar}/>
        </div>
      )}
      </div>
      <div className="pb-2 flex-1 h-screen overflow-y-scroll text-center" ref={scrollRef}>
        <Routes>
          <Route path="/user/:userId" element={<UserProfile user={user} />}/>
          <Route path="/*" element={<Pins user= {user && user} />}/>
          <Route />
        </Routes>
      </div>
    </div>
  )
}

export default Home
