import React,{useContext} from 'react';
import Context from "../Context"

const WeatherSearch = () => {
  const {api_call}=useContext(Context)
  return (
    <div className='weatherSearch'>
      <form onSubmit={api_call}  className='searchBox'>
        <input className='searchInput' type='text' name='distrito' placeholder='Distrito' autoComplete='off' />
        <button className='searchButton' href='#'>
          <i className='material-icons md-18'>search</i>
        </button>
      </form>
    </div>
  );
};

export default WeatherSearch;
