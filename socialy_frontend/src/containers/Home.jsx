import React, { useState, useRef, useEffect } from 'react'
import { HiMenu } from 'react-icons/ai'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link, Route, Routes } from 'react-router-dom'
import { Sidebar, UserProfile  } from '../components'
import Pins from './Pins'
import { client } from '../client'


const Home = () => {
  return (
    <div className='flex bg-gray-50'>
      <h1>Home</h1>
    </div>
  )
}

export default Home
