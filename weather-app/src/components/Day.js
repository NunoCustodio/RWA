import React from 'react';
import cloudy from '../assets/cloudy.svg'
const Day = () => {
  return (
    <span className='day'>
      <img src={cloudy} alt='cloudy' />
      <p>today</p>
    </span>
  );
};
export default Day;
