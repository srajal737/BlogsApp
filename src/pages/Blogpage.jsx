import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import BlogDetail from '../components/BlogDetail';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
const Blogpage = () => {
    const idurl = 'https://codehelp-apis.vercel.app/api/';
    const [blog,setblog] = useState(null);
    const [loading,setloading] = useState();
    const [relatedblog,setrelatedblog] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    let blogid = location.pathname.split('/').at(-1);
    async function fetchrelatedblogusingid(){
        setloading(true);
        try{
            let url = `${idurl}get-blog?blogId=${blogid}`
            let response = await fetch(url);
            let output = await response.json();
           setblog(output.blog);
           setrelatedblog(output.relatedBlogs);
        }
        catch(e){
            alert("something went wrong");
            setblog(null);
            setrelatedblog([]);
        }
      setloading(false);
    }
    useEffect(()=>{
        if(blogid){
            fetchrelatedblogusingid();
        }
    },[location.pathname])
  return (
    <div className='h-auto min-h-screen mt-3 bg-[#7bbfea]'>
        <Header/>
        <div className='pt-18 max-w-[95%] w-165 mx-auto'>
          <button className='border border-gray-400 p-1 rounded-xl cursor-pointer px-5 text-lg bg-white' onClick={()=>(navigate(-1))}>Back</button>
        </div>
        {
            (loading)?(<Loader/>):(
                blog?
                (
                <div className='py-10 max-w-[95%] w-165 mx-auto'>
                   <BlogDetail post={blog}/>
                   <h2 className='text-3xl font-bold py-6'>Related Blogs</h2>
                {
                   relatedblog.map((obj)=>(<BlogDetail key={obj.id} post={obj}/>))
                } 
                </div>
                ):(<p>no data found</p>)
            )
        }
    </div>
  )
}

export default Blogpage