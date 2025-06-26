import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    Platform
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MealDetails from './MealDetails'

export default function MealItem({id,  title,  imageUrl, duration, complexity, affordability}) {
   const navigation = useNavigation()
   function selectMealItemHandler(){
    navigation.navigate('MealsDetail', {
        mealId: id
       })

   }
   
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color:'#ccc'}}
            onPress={selectMealItemHandler}
            style={({pressed}) => (pressed ? styles.buttonPressed :null)}>
               <View style={styles.innerConatiner}>
               <View>
                    <Image source={{uri: imageUrl}} style={styles.image} /> 
                    <Text style={styles.title}>{title}</Text>
                </View>

                <MealDetails  duration={duration} affordability={affordability} complexity={complexity}/>

                
               </View>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    innerConatiner:{
        overflow:'hidden',
        borderRadius:8
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 8
    },
    mealItem: {
        margin: 16,
        overflow: Platform.OS === 'android'
            ? 'hidden'
            : 'visible',
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowRadius: 5,
        shadowOpacity: 0.35
    },
   
    buttonPressed:{
        opacity:0.5
        
    },

})