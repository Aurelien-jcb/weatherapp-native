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
import AppLoading from 'expo-app-loading';

export default function App() {

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=lens&lang=fr&units=metric&appid=ef6e6acf960b100b476d9774b9ac20a3')
    .then(res =>{
      setData(res.data.list);
    })
  }, [])

  const [data, setData] = useState([]);
  // let client = {
  //   nom: "Carl",
  //   details: { age: 82 },
  //   ville: 'Limoge'
  // };
  // const dataRes = data?.weather ?? "pas de données";
  // console.log(dataRes);

  const [weather, setWeather] = useState([
    {id: uuidv4(), name: 'PluiePluiePluiePluiePluie', description: 'grosse pluie de ces morts'},
    {id: uuidv4(), name: 'Vent', description: 'grosse pluie de ces morts'},
    {id: uuidv4(), name: 'Neige', description: 'grosse pluie de ces morts'},
    {id: uuidv4(), name: 'Orage', description: 'grosse pluie de ces morts'},
  ])
  if(data[0] == null) {
    return(<AppLoading/>) 
  }
  else 
  {

    // console.log(data[0])
    //  const currentData = data.map(forecast => {
    //     return <Text key={forecast.id} style={styles.forecast}>
    //     {forecast.main.temp_max}
    //     </Text>
    //     })
    return (
      <SafeAreaView style={styles.container}>
        <CurrentWeather data={data[0]}/>
        <FlatList
          data={weather}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ForecastWeather item={item} />}
          />
        {/* <ForecastWeather data={weather}/> */}
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
