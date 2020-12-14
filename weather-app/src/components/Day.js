import React from 'react';

const Day = ({dayData}) => {
  const weatherType=[
    {"idWeatherType":-99 ,"weatherPic":"day.svg","alt":"day"},
    {"idWeatherType":0 ,"weatherPic":"day.svg","alt":"day"},
    {"idWeatherType":1 ,"weatherPic":"day.svg","alt":"day"},
    {"idWeatherType":2 ,"weatherPic":"day.svg","alt":"day"},
    {"idWeatherType":3,"weatherPic":"cloudy.svg","alt":"cloudy"},
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
    {"idWeatherType":14,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":15,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":16,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":17,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":18,"weatherPic":"snowy-6.svg","alt":"snowy"},
    {"idWeatherType":19,"weatherPic":"thunder.svg","alt":"thunder"},
    {"idWeatherType":20,"weatherPic":"thunder.svg","alt":"thunder"},
    {"idWeatherType":21,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":22,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":23,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":24,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":25,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":26,"weatherPic":"rainy-6.svg","alt":"rainy"},
    {"idWeatherType":27,"weatherPic":"rainy-6.svg","alt":"rainy"},
  
    
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
