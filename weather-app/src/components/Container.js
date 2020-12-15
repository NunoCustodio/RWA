import React, { useState } from 'react';
import axios from 'axios';

import Context from '../Context';
import Header from './Header';
import Content from './Content';
import WeatherSearch from './WeatherSearch';
import Days from './Days';
import Footer from './Footer';

const initialState = {
  weather: null,
  city: null,
};

const Container = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const api_call = async (e) => {
    e.preventDefault();
    const distrito = e.target.elements.distrito.value;
    const idLocal = getIdLocal(distrito);
    if (idLocal) {
      setCity(distrito);
      let response = [];
      let url = null;
      let request = null;
      let day = 0;
      while (day < 3) {
        url = `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day${day}.json`;
        request = axios.get(url);
        const answer = await request;
        const date = answer.data.forecastDate;
        var temp = answer.data.data.find(
          (city) => city.globalIdLocal === idLocal
        );
        temp = { ...temp, date };
        response.push(temp);
        setWeather({ response });
        day++;
      }
    } else {
      setWeather(initialState.weather);
      setCity(initialState.city);
    }
  };
  return (
    <div className='container'>
      <Context.Provider
        value={{ api_call: api_call, days: weather, city: city }}
      >
        <Header />
        <Content>
          <WeatherSearch />
          {weather && <Days />}
        </Content>
        <Footer />
      </Context.Provider>
    </div>
  );

  function getIdLocal(distrito) {
    const distritos = [
      { globalIdLocal: 1010500, local: 'Aveiro' },
      { globalIdLocal: 1020500, local: 'Beja' },
      { globalIdLocal: 1030300, local: 'Braga' },
      { globalIdLocal: 1040200, local: 'Bragança' },
      { globalIdLocal: 1050200, local: 'Castelo Branco' },
      { globalIdLocal: 1060300, local: 'Coimbra' },
      { globalIdLocal: 1070500, local: 'Évora' },
      { globalIdLocal: 1080500, local: 'Faro' },
      { globalIdLocal: 1090700, local: 'Guarda' },
      { globalIdLocal: 1100900, local: 'Leiria' },
      { globalIdLocal: 1110600, local: 'Lisboa' },
      { globalIdLocal: 1121400, local: 'Portalegre' },
      { globalIdLocal: 1131200, local: 'Porto' },
      { globalIdLocal: 1141600, local: 'Santarém' },
      { globalIdLocal: 1151200, local: 'Setúbal' },
      { globalIdLocal: 1160900, local: 'Viana do Castelo' },
      { globalIdLocal: 1171400, local: 'Vila Real' },
      { globalIdLocal: 1182300, local: 'Viseu' },
      { globalIdLocal: 2310300, local: 'Funchal' },
      { globalIdLocal: 2320100, local: 'Porto Santo' },
      { globalIdLocal: 3410100, local: 'Vila do Porto' },
      { globalIdLocal: 3420300, local: 'Ponta Delgada' },
      { globalIdLocal: 3430100, local: 'Angra do Heroismo' },
      { globalIdLocal: 3440100, local: 'Santa Cruz da Graciosa' },
      { globalIdLocal: 3450200, local: 'Velas' },
      { globalIdLocal: 3460200, local: 'Madalena' },
      { globalIdLocal: 3470100, local: 'Horta' },
      { globalIdLocal: 3480200, local: 'Santa Cruz das Flores' },
      { globalIdLocal: 3490100, local: 'Vila do Corvo' },
    ];
    const gil = distritos.find((dist) => dist.local === distrito);
    return gil ? gil.globalIdLocal : null;
  }
};
export default Container;
