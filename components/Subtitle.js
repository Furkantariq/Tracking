import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

export default function Subtitle({children}) {
  return (
    <View>
         <Text style={styles.subTitle}>{children}</Text>
     
    </View>
  )
}const styles = StyleSheet.create({
    subTitle:{
        color:'#e2b497',
        fontSize:18,
        fontWeight:'bold',
        
        textAlign:'center',
        padding:6,
        borderBottomWidth:2,
        borderBottomColor:'#e2b497',
        marginHorizontal:19
    },

})