import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function CurrentWeather({data}) {
    console.log(data.weather[0].icon)
    const [currentDate, setCurrenDate] = useState();
    // console.log(current)
    // const currentData = current.map(forecast => {
    //     return <Text key={forecast.id} style={styles.forecast}>
    //     {forecast.main.temp_max} {forecast.main.temp_min} 
    //     {forecast.weather[0].descrition} {forecast.weather[0].icon} 
    //     </Text>
    //     })
    return (
        <>
            <View style={styles.header}>
                {/* {currentData} */}
                <View style={styles.current}>
                    <Text style={styles.title}>{new Date(data.dt_txt).toLocaleString("fr-FR", {weekday:"long",year: 'numeric', month: 'long', day: 'numeric'})}</Text>
                    <Text style={styles.title}>{data.main.temp_max.toFixed(1)}°C</Text>
                    <Text style={styles.title}>{data.main.temp_min.toFixed(1)}°C</Text>
                </View>
                <View style={styles.icones}>
                <Image
                    style={styles.tinyLogo}
                    source={require(`https://www.openweathermap.org/img/w/04d.png`)}
                />
                    <Text style={styles.title}>Nuage</Text>
                    <Text style={styles.title}>Cloud</Text>
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
    icones: {

    }
})
