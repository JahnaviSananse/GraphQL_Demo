import React, {useState} from 'react';
import TextField from '../Components/TextField/index';
import Button from '../Components/Button/index';
import {useLazyQuery} from '@apollo/client';
import {GET_WEATHER_QUERY} from '../GraphQL/Queries';
import {Text} from 'react-native';
import {style} from './style';

const Home = () => {
  const [citySearched, setCitySearched] = useState('');
  const [getWeather, {data, error}] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: {name: citySearched},
  });

  if (error) return <Text> Error found</Text>;
  if (data) {
    console.log('data>>>', data);
  }

  return (
    <>
      <Text style={style.heading}>Search for Weather</Text>
      <TextField
        title="Where are you from ?"
        placeholder="type your city name ..."
        change={text => {
          setCitySearched(text);
        }}
      />
      <Button title="NEXT" type="fill" onPress={() => getWeather()} />

      {data && (
        <>
          <Text style={style.text}>{data?.getCityByName?.name} </Text>
          <Text style={style.text}>
            Temperature: {data?.getCityByName?.weather?.temperature?.actual}
          </Text>
          <Text style={style.text}>
            Description: {data?.getCityByName?.weather?.summary?.description}
          </Text>
          <Text style={style.text}>
            Wind Speed: {data?.getCityByName?.weather?.wind?.speed}
          </Text>
        </>
      )}
    </>
  );
};
export default Home;
