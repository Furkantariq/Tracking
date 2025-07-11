import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function MealDetails({ style, duration, textStyle, complexity, affordability}) {
    return (
        <View style={[styles.details , style]}>
            <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    detailItem: {

        marginHorizontal: 4,
        fontSize: 12
    }
})