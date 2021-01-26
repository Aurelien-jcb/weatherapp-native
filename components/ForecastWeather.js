import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

export default function ForecastWeather({item}) {
    return (
        <ScrollView style={styles.listContainer}>  
          <View key={uuidv4()} style={styles.forecast}>
            <Image
              style={styles.weatherLogo}
              source={{
              uri: `https://www.openweathermap.org/img/w/${item.weather[0].icon}.png`,
              }}
            />
            <View style={styles.weatherInfos}>
              <Text style={{flex:1}}>{new Date(item.dt_txt).toLocaleString("fr-FR", {weekday:"long",year: 'numeric', month: 'long', day: 'numeric'})}</Text>
              <Text  style={{flex:1}}>{item.weather[0].description}</Text>
            </View>
            <View style={styles.weatherTemp}>
              <Text style={{fontSize: 20}}>
                {item.main.temp_max.toFixed(1)}°C
              </Text>
              <Text>
                {item.main.temp_min.toFixed(1)}°C
              </Text>  
            </View>    
          </View> 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  listContainer: {
    flex:1,
    width: '100%',
  },
  forecast: {
      height:100,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderBottomWidth: 2,
      borderBottomColor: 'grey'
  },
  weatherLogo: {
    width: 60,
    height: 60,
    marginLeft: 20
  },
  weatherInfos: {
    flex:3, 
    flexDirection:'column', 
    justifyContent:'center', 
    textAlign: 'center' 
  },
  weatherTemp: {
    flex: 1, 
    textAlign:'right', 
    flexDirection: 'column', 
    marginRight: 20
  }
})