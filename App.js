import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  FlatList
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecastWeather';
import axios from 'axios';

export default function App() {

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=lens&lang=fr&units=metric&appid=ef6e6acf960b100b476d9774b9ac20a3')
    .then(res =>{
      console.log(res.data.list[0])
      setData(res.data)
    })
  }, [])

  const [data, setData] = useState([]);
  const [weather, setWeather] = useState([
    {id: uuidv4(), name: 'PluiePluiePluiePluiePluie', description: 'grosse pluie de ces morts'},
    {id: uuidv4(), name: 'Vent', description: 'grosse pluie de ces morts'},
    {id: uuidv4(), name: 'Neige', description: 'grosse pluie de ces morts'},
    {id: uuidv4(), name: 'Orage', description: 'grosse pluie de ces morts'},
  ])
    
  return (
    <SafeAreaView style={styles.container}>
      <CurrentWeather data={data}/>
      <FlatList
        data={weather}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <ForecastWeather item={item} />}
        />
      {/* <ForecastWeather data={weather}/> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
