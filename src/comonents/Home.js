import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios';
const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://dj-collection-api.onrender.com/collections'
            );

            setData(result.data);
        };

        fetchData();
    }, []);
    return (
        <div className='container px-5 py-2'>
            <Navbar />
            <div className='row mt-5'>
                <div className='img-tag'>
                    Saree
                </div>
                {
                    data && data.map((item, index) => {
                        return (
                            <div className="col-md-3 mb-3" key={index}>
                                <Link to={`/home/${index}`} className="card home-card">
                                    <div className='card-img'>
                                        <img src={item.image[0]} alt="" />
                                    </div>
                                    <div className='card-body'>
                                        <div className='card-heading'>
                                            {item.title}
                                        </div>
                                        <div className='card-subheading'>
                                            {item.description}...
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home