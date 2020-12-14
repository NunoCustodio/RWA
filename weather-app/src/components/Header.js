import React, { useContext } from 'react';
import Context from '../Context';

const Header = () => {
  const { city } = useContext(Context);
  return (
    <div className='header'>
      <div className='header_title'>{city ? city : 'Weather App'}</div>
    </div>
  );
};

export default Header;
