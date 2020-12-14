import React from 'react';
import dayPic from '../assets/day.svg'

const Days = ({ days }) => {
  if (days) {
    return (
      <>
      <div class="days">
        {days.response.map((day, i) => (
          <span className='day' key={i}>
            <img src={dayPic} alt='day' />
            <p>Min: {day.tMin} Max: {day.tMax}</p>
          </span>
         
        ))}
         </div>
      </>
    );
  }
  return null;
};
export default Days;
