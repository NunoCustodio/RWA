import React from 'react';
import Day from './Day'

const Days = ({ days }) => {
  if (days) {
    return (
      <>
      <div className="days">
        {days.response.map((day, i) => (
          <span className='day' key={i}>
            <Day dayData={day}/>
          </span>
         
        ))}
         </div>
      </>
    );
  }
  return null;
};
export default Days;
