import React from 'react'
import { urlFor } from '../client'

const Pin = ({ pin }) => {
  console.log(pin);
  return (
    <div>
       <img className="rounded-lg w-full " src={(urlFor(pin.image).width(250).url())} alt="user-post" />
    </div>
  )
}

export default Pin
