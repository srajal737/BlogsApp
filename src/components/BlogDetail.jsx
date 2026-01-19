import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetail = ({post}) => {
  return (
      <div className='mb-5 bg-amber-50 p-4 rounded-4xl shadow-lg'>
          <p className='text-xl font-medium'>
          <NavLink className='hover:underline' to={`/blog/${post.id}`}>
            {post.title}
          </NavLink>
          </p>
          <p>By <span className='italic'>{post.author}</span> <span>on </span> 
          <NavLink className='hover:underline' to={`/category/${post.category.replaceAll(" ","-")}`}>
            <span className='font-bold underline'>{post.category}</span>
          </NavLink>
          </p>
          <p>Posted On {post.date}</p>
          <p className='my-3 tracking-wide font-medium text-md'>{post.content}</p>
          {
            post.tags.map((tag,index)=>(
                <NavLink className='hover:underline' key={index} to={`/tag/${tag.replaceAll(" ","-")}`}>
                   <span  className='text-blue-800 font-semibold ml-2 underline cursor-pointer'>#{tag} </span>
                </NavLink>))
          }
        </div>
  )
}

export default BlogDetail
