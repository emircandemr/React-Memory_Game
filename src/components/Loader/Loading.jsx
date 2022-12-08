import React from 'react'
import RingLoader from "react-spinners/RingLoader";
import "./Loading.scss"

const Loading = () => {
  return (
    <div className='loader'>
        <RingLoader color="#ddd" size={150}/>
    </div>
  )
}

export default Loading