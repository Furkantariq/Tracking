import {View, Text, StyleSheet, FlatList} from 'react-native'
import {CATEGORIES} from '../data/dummy-data'
import React from 'react'
import CategoryGridTitle from '../components/CategoryGridTitle'
export default function CategoriesScreen({navigation}) {
function renderCategoryItem(itemData) {
    function pressHandler(){
        navigation.navigate('MealsOverView', {
            categoryId: itemData.item.id
        })

    }
    return(
        <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
    )
}


    return (
        
    <View style={styles.back}><FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem}
    numColumns={2}/>
    </View>
    
)
}
const styles = StyleSheet.create({
    back:{
       
    }
})