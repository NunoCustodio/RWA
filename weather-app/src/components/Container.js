import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Content from './Content';
import WeatherSearch from './WeatherSearch';
import Days from './Days';

const Container = () => {
  const [weather, setWeather] = useState();
  
  const api_call = async (e) => {
    e.preventDefault();
    let response = [];
    let url = null;
    let request = null;
    let day = 0;
    while (day < 3) {
      url = `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day${day}.json`;
      request = axios.get(url);
      const answer = await request;
      const date=answer.data.forecastDate;
      var temp=answer.data.data.filter((city) => city.globalIdLocal === 1151200)[0];
      temp = { ...temp, date};
      response.push(temp);
      setWeather({response});

      day++;
    }
    //console.log(weather);
  };
  // if (weather) {
  //   weather.response.map((day, i) => console.log('index ' + i));
    
  // }
  //weather.map(x=>(console.log(x)))
  //console.log(weather);
  //  useEffect( (e) => {
  //    api_call();
  //  }, []);

  return (
    <div className='container'>
      <Header />
      <Content>
        <WeatherSearch api_call={api_call} />
        <Days days={weather} />
      </Content>
    </div>
  );
};

export default Container;
