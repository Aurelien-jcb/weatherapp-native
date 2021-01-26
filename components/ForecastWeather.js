import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function ForecastWeather({item}) {
    return (
        <ScrollView style={styles.listContainer}>  
                <View key={item.id} style={styles.forecast}>
                  <Text>
                    <Text>Icone</Text>  
                    </Text>  
                  <Text>
                    {item.name} 
                  </Text>
                  <Text>
                    12°
                    {/* {forecast.description}  */}
                  </Text>
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
  }
})


{/* <ScrollView style={styles.listContainer}>  
{data.map(forecast => {
return ( 
    <View key={forecast.id} style={styles.forecast}>
      <Text>
        <Text>Icone</Text>  
        </Text>  
      <Text>
        {forecast.name} 
      </Text>
      <Text>
        12°
        {/* {forecast.description}  */}
//       </Text>
//     </View> 
//   )})}
// </ScrollView> 