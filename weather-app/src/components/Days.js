import React, { useContext } from 'react';
import Day from './Day';
import Context from '../Context';

const Days = () => {
  const { days } = useContext(Context);
  if (days) {
    return (
      <>
        <div className='days'>
          {days.response.map((day, i) => (
            <span className='day' key={i}>
              <Day dayData={day} />
            </span>
          ))}
        </div>
      </>
    );
  }
  return null;
};
export default Days;
