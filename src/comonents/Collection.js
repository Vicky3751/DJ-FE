import React from 'react'
import Navbar from './Navbar'
import {
  useParams
} from "react-router-dom"
const Collection = () => {
  const { id } = useParams();
  console.log(id)
  return (
    <div className='container px-5 py-2'>
      <Navbar />

    </div>
  )
}

export default Collection