import React from 'react'
import { Link } from 'react-router-dom'

const EntryPage = () => {
    return (
        <div className='container height-100'>
            <div className="row height-100">
                <div className="row col-md-6 col-sm-12 col-lg-6 height-100 justify-content-center align-item-center align-content-center">
                    <div className='welcome-text col-md-12'>
                        Welcome To The
                    </div>
                    <div className='welcome-text col-md-12'>
                        Collections
                    </div>
                    <div className='welcome-text col-md-12'>
                        of
                    </div>
                    <div className='logo-box col-md-12 p-0'>
                        <div className='logo-box-1'>
                            DEEPIKA
                        </div>
                        <div className='logo-box-2'>
                            JAGADISH
                        </div>
                    </div>

                </div>
                <div className="col-md-6 col-sm-12 col-lg-6 row height-100 justify-content-center align-item-center align-content-center">
                    <Link to="/home" className="card card-see-all col-md-8 d-flex justify-content-center align-item-center align-content-center p-5">
                        <div className='card-text'>
                            See All
                        </div>
                        <div className='card-text'>
                            Collections
                        </div>
                        <div className='d-flex justify-content-center align-item-center align-content-center mt-5'>
                            <img src="arrow.svg" width="75%" alt="" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EntryPage