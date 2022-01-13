import React from 'react'


const Pagination = ({state,handleClick}) => {
  let paginate=[]
  
  for(let i=1 ;i<Math.ceil(state.length/10)+1 ;i++){
      paginate.push(i)
      console.log(i)
  }
    return (
        <div className='flex'>
           {paginate.map(x=>(
               <li className="list-none px-1 justify-center my-3 mx-5" onClick={()=> handleClick(x)}>{x}</li>
           ))} 
           
        </div>
    )
}

export default Pagination
