import React, { useContext } from 'react'
import { Appcontext } from '../appcontext/Appcontext'

const Pagination = () => {
  const {page,totalpages ,handlepagechange}  = useContext(Appcontext)
  return (
    <div className=' bg-white w-screen fixed p-1 border border-gray-300 bottom-0 box-border mt-7'>
    <div className='flex justify-between max-w-[90%] w-165 mx-auto items-center box-border '>
       <div>
        {
          (page>1)&&<button className='border rounded-lg mr-2 cursor-pointer p-2' onClick={()=>(handlepagechange(page-1))}>Previous</button>
        }
        {
          (page<totalpages )&&<button className='border rounded-lg ml-2 cursor-pointer p-2' onClick={()=>(handlepagechange(page+1))}>Next</button>
        }
      </div>
      <div className='font-bold'>
        Pages {page} of {totalpages}
      </div>
    </div>
     
    </div>
  )
}

export default Pagination