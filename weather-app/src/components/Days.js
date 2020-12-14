import React from 'react';

const Days = ({ days }) => {
  if (days) {
    return (
      <>
        {days.response.map((day, i) => (
          <span className='day' key={i}>
            <img src={'../assets/day.svg'} alt='day' />
          </span>
        ))}
      </>
    );
    //console.log(days);
  }
  return null;
};
export default Days;
