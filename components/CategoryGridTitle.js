import { View, Text , StyleSheet, Pressable, Platform} from 'react-native'
import React from 'react'


export default function CategoryGridTitle({title, color, onPress, }) {
  return (
    <View style={styles.gridItem}>
     <Pressable style={({pressed})=> [styles.button ,pressed? styles.buttonPressed: null]}
      android_ripple={{color:'#cccccc'}}
      onPress={onPress}>
        <View style={[styles.innnerConatiner, {backgroundColor: color}]}>
            <Text style={styles.title}>{title}</Text>
        </View>
     </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        backgroundColor:"#24180f",
        shadowColor:'black',
        shadowOffset:{height:2, width:0},
        shadowRadius:5,
        shadowOpacity:0.35,
        overflow: Platform.OS==="android"? "hidden": 'visible',
    },
        
    button:{
        flex:1,
    },
    innnerConatiner:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
    },
    buttonPressed:{
        opacity:0.5
        
    },

   

})