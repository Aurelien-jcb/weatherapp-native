import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CurrentWeather({data}) {
    const currentData = data.map(forecast => {
        return <Text key={forecast.id} style={styles.forecast}>
        {forecast.main.temp_max} {forecast.main.temp_min} 
        {forecast.weather[0].descrition} {forecast.weather[0].icon} 
        </Text>
        })
    return (
        <>
            <View style={styles.header}>
                {currentData}
                <View style={styles.current}>
                    <Text style={styles.title}>Sun Jan 13 2019</Text>
                    <Text style={styles.title}>19°</Text>
                    <Text style={styles.title}>12°</Text>
                </View>
                <View style={styles.icones}>
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
