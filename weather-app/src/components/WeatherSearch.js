import React from 'react';

const WeatherSearch = (props) => {
  //console.log(props)
  return (
    <div className='weatherSearch'>
      <form onSubmit={props.api_call}  className='searchBox'>
        <input className='searchInput' type='text' name='' placeholder='Distrito' />
        <button className='searchButton' href='#'>
          <i className='material-icons md-18'>search</i>
        </button>
      </form>
    </div>
  );
};

export default WeatherSearch;
