import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="row">
            <Link to="/home " className='logo-box-small col-md-4 p-0'>
                <div  className='logo-box-small-1'>
                    DEEPIKA
                </div>
                <div className='logo-box-small-2 ps-2'>
                    JAGADISH
                </div>
            </Link>
            <div className="col-md-9 d-flex justify-content-end ">
                <div className='mx-5 header-text'>
                    Filters
                </div>
                <div className='mx-5 header-text'>
                    Contact Us
                </div>
            </div>
        </div>
    )
}

export default Navbar