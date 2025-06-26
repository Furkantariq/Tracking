import {View, Text, StyleSheet, Image,Button, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import {MEALS} from '@/data/dummy-data'
import MealDetails from '@/components/MealDetails'
import Subtitle from '../components/Subtitle'
import List from '../components/List'
import IconButton from '../components/IconButton'

export default function MealDetailScreen({route, navigation}) {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    function headerButtonPressHandler(){

        console.log('Pressed')
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight :() =>{
                return <IconButton icon="star" color="white"  onPress={headerButtonPressHandler}/>
            }

        })
    }, [navigation, headerButtonPressHandler])
    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{
                    uri: selectedMeal.imageUrl
                }}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails  textStyle={styles.detailText}duration={selectedMeal.duration} affordability={selectedMeal.affordability} complexity={selectedMeal.complexity}/>
           
           <View style={styles.ListContainer}>
            <View style={styles.List} >
            <Subtitle>Ingredient</Subtitle>
           <List data={selectedMeal.ingredients}/>
           <Subtitle>Steps</Subtitle>
           <List data={selectedMeal.steps}/>
            </View>
           </View>
            
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    image:{
       
        width:'100%',
        height:350,
       

       
       
        borderRadius:8

    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        margin:8,
        color:'white',
        textAlign:'center'
    },
    detailText:{
        color:'white'
    },
    
    text:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        backgroundColor:'#'
    },
    ListContainer:{
        alignItems:'center',
       
    },
    List:{

         width:'80%'
    },
    rootContainer:{
       
        margin:20,
        shadowColor: 'black',
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowRadius: 5,
        shadowOpacity: 0.35,
        borderRadius:8
    }
    

    
})