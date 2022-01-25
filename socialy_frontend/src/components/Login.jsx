import React from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4'
import { client } from '../client';


const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    console.log(response);
    localStorage.setItem('user', JSON.stringify(response.profileObj));
  
    const { name, googleId, imageUrl } = response.profileObj;
  
    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl
    };
  
    client.createIfNotExists(doc)
      .then(() => {
        navigate('/', { replace: true });
      });
  }

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
      <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay z-50 '>
        <div className='p-5 text-white font-mono'>
            <h3>s o c i a l y</h3>
        </div>
        <div className='shadow-2xl'>
          <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
            render={(renderProps) => (
              <button
                className="bg-mainColor flex object-center items-center px-4 py-2 rounded-lg text-sm font-light outline-none"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
              sign in with
              <FcGoogle className='ml-2 text-xl' />
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy='single_host_origin'
          />
        </div>
      </div>
    </div>
  )
}

export default Login
