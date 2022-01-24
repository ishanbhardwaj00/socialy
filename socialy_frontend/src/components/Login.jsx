import React from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons';
import shareVideo from '../assets/share.mp4'

const Login = () => {
  return (
    <div className='flex justify-start items-center flex-row h-screen'>
      <div className='relative w-full h-full'>
        <video 
          className='w-full h-full object-cover'
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
        />
      </div>
      <div className='absolute flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay '>
        <div className='p-5'>
          
        </div>
      </div>
    </div>
  )
}

export default Login
