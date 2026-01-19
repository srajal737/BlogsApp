import { baseurl } from "../Baseurl";
import { createContext, useState } from "react";
import {useNavigate, useSearchParams} from 'react-router-dom';
export const Appcontext = createContext();

export default function Appcontextprovider({children}){
    const [loading ,setloading] = useState(false);
    const [page ,setpage] = useState(1);
    const [post,setpost] = useState([]);
    const [totalpages ,settotalpages] = useState(null);
    const navigate = useNavigate();
    async function fetchpage(page=1 ,tag=null , category){
        setloading(true);
        try{
            let url = `${baseurl}?page=${page}`
            if(tag){
                url+=`&tag=${tag}`;
            }
            if(category){
                url+=`&category=${category}`;
            }
            let response = await fetch(url);
            let output = await response.json();
            if(!output.posts || output.posts.length===0){
                throw new Error("something went wrong");
            }
            setpage(output.page);
            settotalpages(output.totalPages);
            setpost(output.posts);
        }
        catch(e){
            setpage(1);
            settotalpages(1);
            setpost([]);
        }
        setloading(false);
        
    }

    function handlepagechange(page){
        navigate({search: `?page=${page}`})
        setpage(page);
    }
    let value = {
        loading,setloading,page,setpage , post ,setpost ,totalpages , settotalpages ,handlepagechange,fetchpage
    }
    //provider return 
    return <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>
}