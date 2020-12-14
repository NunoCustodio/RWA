import React from 'react';

const Day = ({dayData}) => {
  const weatherType=[
    {"idWeatherType":-99 ,"weatherPic":"day.svg","alt":"day"},
    {"idWeatherType":0 ,"weatherPic":"day.svg","alt":"day"},
    {"idWeatherType":1 ,"weatherPic":"day.svg","alt":"day"},
    {"idWeatherType":2 ,"weatherPic":"cloudy-day-1.svg","alt":"cloudy"},
    {"idWeatherType":3,"weatherPic":"cloudy-day-2.svg","alt":"cloudy"},
    {"idWeatherType":4,"weatherPic":"cloudy.svg","alt":"cloudy"},
    {"idWeatherType":5,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":6,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":7,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":8,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":9,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":10,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":11,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":12,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":13,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":14,"weatherPic":"rainy-3.svg","alt":"rainy"},
    {"idWeatherType":15,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":16,"weatherPic":"cloudy.svg","alt":"Mist"},
    {"idWeatherType":17,"weatherPic":"cloudy.svg","alt":"Fog"},
    {"idWeatherType":18,"weatherPic":"snowy-6.svg","alt":"snowy"},
    {"idWeatherType":19,"weatherPic":"thunder.svg","alt":"thunder"},
    {"idWeatherType":20,"weatherPic":"thunder.svg","alt":"thunder"},
    {"idWeatherType":21,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":22,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":23,"weatherPic":"thunder.svg","alt":"rainy"},
    {"idWeatherType":24,"weatherPic":"cloudy.svg","alt":"cloudy"},
    {"idWeatherType":25,"weatherPic":"cloudy-day-3.svg","alt":"cloudy"},
    {"idWeatherType":26,"weatherPic":"cloudy.svg","alt":"fog"},
    {"idWeatherType":27,"weatherPic":"cloudy.svg","alt":"cloudy"},
  
    
  ]
  var pic=weatherType.filter(dayType=>dayType.idWeatherType===dayData.idWeatherType)[0]
  if(pic)

{  return (
    <>
    <img src={`/assets/images/${pic.weatherPic}`} alt={pic.alt} />
            <p>{dayData.date}</p>
            <p>Min: {dayData.tMin} Max: {dayData.tMax}</p>
            </>
  );}
  else
  {
    return (<></>)
  }
};
export default Day;
