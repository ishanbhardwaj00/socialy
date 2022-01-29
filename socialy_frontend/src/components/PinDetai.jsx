import React, { useState, useEffect } from 'react'
import { MdDownloadForOffline } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom';
import { v4 as uuiv4 } from 'uuid';

import { client, urlFor } from '../client';
import MasonryLayout from './MasonryLayout';
import { pinDetailMoreQuery, pinDetailQuery} from '../utils/data';
import Spinner from './Spinner';

const PinDetail = ({ user }) => {

  const [pins, setPins] = useState(null);
  const [pinDetail, setPinDetail] = useState(null);
  const [comment, setComment] = useState('');
  const [addingComment, setAddingComment] = useState(false);
  const { pinId } = useParams();


  const fetchPinDetails = () => {
    let query = pinDetailQuery(pinId);

    if(query) {
      client.fetch(query)
        .then((data) => {
          console.log(data);
          setPinDetail(data[0]);
          if(data[0]) {
            query = pinDetailMoreQuery(data[0]);
  
            client.fetch(query)
              .then((res) => {
                setPins(res);
              })
          }
        })
    }
  }

  useEffect(() => {
    fetchPinDetails();
  }, [pinId])

  if(!pinDetail) 
  return <div className="flex h-full items-center justify-center">
    <Spinner message="Loading pins"/>
  </div>;

  return (
    <div 
    className="flex xl:flex-row flex-col m-auto bg-white"
    style={{maxWidth: '420px', borderRadius: '32px' }}
    > 
      <div className="flex justify-center items-center md:items-start flex-initial">
        <img src={pinDetail?.image && urlFor(pinDetail?.image).url()} alt="pin-image"
          className='rounded-t-3xl rounded-b-lg'
        />
      </div>
      <div className="w-full p-5 flex-1">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center ">
            <a 
              href={`${pinDetail?.asset?.url}?dl=`}
              download={true}
              onClick={(e) => e.stopPropagation()}
              className='bg-white rounded-full flex items-center p-1 justify-center opacity-75 hover:opacity-100 shadow-md'
              >    
                <MdDownloadForOffline fontSize={21} className='' />
              </a>
          </div>
          </div>
          <div className='flex flex-col justify-start'>
            <h1 className='text-4xl font-bold break-words mt-3 self-start'>{pinDetail.title}</h1>
            <p className="mt-3">{pinDetail.about}</p>
          </div>
          <Link
            to={`user/${pinDetail?.postedBy?._id}`}
            className='flex  gap-2 mt-2 items-center'
          >
            <img src={pinDetail?.postedBy?.image} alt="user-profile" className='w-8 h-8 rounded-full object-cover' />
            <p className='font-semibold'>{pinDetail?.postedBy?.userName}</p>
          </Link>
          <h2 className="mt-5 text-2xl self-start">Comments</h2>
      </div>
      
    </div>
  )
}

export default PinDetail
