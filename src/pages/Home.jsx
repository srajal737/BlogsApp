import React, { useContext } from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'
import Blogs from '../components/Blogs'
import { Appcontext } from '../appcontext/Appcontext'
const Home = () => {
    const {loading ,post } = useContext(Appcontext)
  return (
    <div className='h-auto min-h-full mt-3 bg-[#7bbfea]'>
        <Header/>
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

export default Home