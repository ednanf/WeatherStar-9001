import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import ContentContainer from './components/ContentContainer/ContentContainer';

import './App.css';

const API_KEY = import.meta.env.VITE_WEATHER_KEY;

// TODO: figure how to pass the data to the components, destructuring is not working
// criar um objeto e distribuir de acordo as propriedas manualmente ao usar o setcurrentweatherdata

interface Coordinates {
  lat?: number;
  lon?: number;
}

interface CurrentWeatherData {
  weather?: {
    0: {
      id: number;
      main: string;
      description: string;
    };
  };
  main?: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind?: {
    speed: number;
  };
  name?: string;
}

function App() {
  const [coordinates, setCoordinates] = useState<Coordinates>({});
  const [currentWeatherData, setCurrentWeatherData] = useState<CurrentWeatherData>({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({ lat: position.coords.latitude, lon: position.coords.longitude });
    });
  }, []);

  useEffect(() => {
    // First check if coordinates have any content
    if (coordinates && Object.keys(coordinates).length > 0) {
      async function fetchCurrentWeather() {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${API_KEY}`,
          );
          const data = await response.json();
          setCurrentWeatherData({ ...data });
        } catch (error) {
          console.log(error);
        }
      }

      fetchCurrentWeather();
    }
  }, [coordinates, currentWeatherData]);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <ContentContainer currentWeatherData={currentWeatherData} />
      </main>
    </>
  );
}

export default App;
