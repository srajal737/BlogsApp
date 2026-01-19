import React, { useContext, useEffect } from 'react'
import { Appcontext } from './appcontext/Appcontext'
import Home from './pages/Home'
import Category from './pages/Category'
import Tag from './pages/Tag'
import Blogpage from './pages/Blogpage'
import { Routes ,Route,useLocation, useSearchParams } from 'react-router-dom'


const App = () => {
  let {page ,post , fetchpage ,loading} = useContext(Appcontext);
  const [searchparam , setsearchparam] = useSearchParams();
  const location = useLocation();
  useEffect(()=>{
    const page = searchparam.get("page") ?? 1;
    if(location.pathname.includes("tag")){
      let tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchpage(Number(page) , tag);
    }
    else if(location.pathname.includes("category")){
      let c = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchpage(Number(page),null , c);
    }
    else{
      fetchpage(Number(page));
    }
  } , [location.pathname ,location.search]);
  return (
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/category/:category' element={<Category/>}/>
      <Route path='/tag/:tag' element={<Tag/>}/>
      <Route path='/blog/:blogid' element={<Blogpage/>}/>
   </Routes>
  )
}

export default App