import React from 'react';

const Days = ({ days }) => {
    return(
     <>
         {days.map((day,i)=>(
             <span className='day' key={i}>
                 <img src={'../assets/day.svg'} alt='day' />
         
         </span>
         ))}
     </>
    )
//console.log(days);


    
}
export default Days;
