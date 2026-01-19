import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';
import { Appcontext } from '../appcontext/Appcontext'
import { useContext } from 'react';
const Category = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let category = location.pathname.split('/').at(-1);
     const {loading ,post } = useContext(Appcontext)
  return (
    <div className='h-auto min-h-screen mt-3 bg-[#7bbfea]'>
       <Header/>
        <div className='pt-18 max-w-[95%] w-165 mx-auto'>
          <button className='border border-gray-400 p-1 rounded-xl cursor-pointer px-5 bg-white text-lg' onClick={()=>(navigate(-1))}>Back</button> <br/> <span className='text-xl font-bold'>Blogs on {category}</span>
        </div>
     {
            (loading)?(<Loader/>):(
                post?(
                    <Blogs/>):
                    (<div>no post found</div>)
            )
        }
        <Pagination/>
    </div>
  )
}

export default Category