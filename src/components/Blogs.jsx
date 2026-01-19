import React, { useContext } from 'react'
import { Appcontext } from '../appcontext/Appcontext'
import BlogDetail from './BlogDetail';

const Blogs = () => {
  const {post} = useContext(Appcontext);
  return (
    <div className='py-15 max-w-[95%] w-165 mx-auto'>
    {
      post.map((obj)=>(
       <BlogDetail key={obj.id} post={obj}/>
      ))
    }
    </div>
  )
}

export default Blogs