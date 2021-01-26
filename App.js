import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
  FlatList
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecastWeather';
import axios from 'axios';
import AppLoading from 'expo-app-loading';

export default function App() {

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=lens&cnt=16&lang=fr&units=metric&appid=ef6e6acf960b100b476d9774b9ac20a3')
    .then(res =>{
      setData(res.data.list);
    })
  }, [])

  const [data, setData] = useState([]);

  if(data[0] == null) {
    return(<AppLoading/>) 
  }
  else 
  {
    return (
      <SafeAreaView style={styles.container}>
        <CurrentWeather data={data[0]}/>
        <FlatList
          data={data}
          keyExtractor={item => uuidv4().toString()}
          renderItem={({item}) => <ForecastWeather item={item} />}
          />
        <StatusBar style="auto" />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
