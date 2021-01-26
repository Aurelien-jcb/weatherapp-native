import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function CurrentWeather({data}) {

    const [currentDate, setCurrenDate] = useState();
    return (
        <>
            <View style={styles.header}>
                <View style={styles.current}>
                    <Text style={styles.title}>{new Date(data.dt_txt).toLocaleString("fr-FR", {weekday:"long",year: 'numeric', month: 'long', day: 'numeric'})}</Text>
                    <Text style={styles.title}>{data.main.temp_max.toFixed(1)}°C</Text>
                    <Text style={styles.title}>{data.main.temp_min.toFixed(1)}°C</Text>
                </View>
                <View style={styles.icones}>
                    <Image
                        style={styles.weatherLogo}
                        source={{
                        uri: `https://www.openweathermap.org/img/w/${data.weather[0].icon}.png`,
                        }}
                    />
                    {/* <Text style={styles.title}>{data.weather[0].description}</Text> */}
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fcb131',
        paddingTop: 100,
        padding: 40,
        width: '100%',
    },
    current: {

    },
    title: {
        fontSize: 20,
        color: 'white',
    },
    weatherLogo: {
        width: 60,
        height: 60,
      }
})
