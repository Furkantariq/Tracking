import {SafeAreaView, Text, View, StyleSheet, StatusBar, Button} from "react-native";
import CategoriesScreen from '../screens/CategoriesScreen'
import MealsOverViewScreen from '../screens/MealsOverViewScreen'
import {NavigationContainer, NavigationIndependentTree} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealDetailScreen from '../screens/MealDetailScreen'
import {createDrawerNavigator} from "@react-navigation/drawer"
import FavouriteScreen, {}from '../screens/FavouriteScreen'
import { Ionicons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
function DrawerNavigator(){
  return (<Drawer.Navigator screenOptions={{
    headerStyle:{
     backgroundColor:'#24180f'},
     headerTintColor:'white',
     sceneStyle:{backgroundColor: "#3f2f25"},
     drawerContentStyle:{backgroundColor:'#351401'},
     drawerActiveTintColor:'#351401',
     drawerInactiveTintColor:'white',
     drawerActiveBackgroundColor:'#e4baa1',
 }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{title:'All Categories',
      drawerIcon:({color, size })=><Ionicons name='list' color={color} size={size}/>
    }}
    />
    <Drawer.Screen name="Favourtie" component={FavouriteScreen}
    options={{drawerIcon:({color, size})=> <Ionicons name="star" color={color} size={size}/>}}
    />
  </Drawer.Navigator>
  )
}
export default function Index() {
    return (
       <>
      <View style={styles.container}>
      
    <StatusBar barStyle={"default"}/>
    
    
    <NavigationIndependentTree>
    <NavigationContainer>
        <Stack.Navigator  screenOptions={{
           headerStyle:{
            backgroundColor:'#24180f'},
            headerTintColor:'white',
            contentStyle:{backgroundColor: "#3f2f25"}
        }}>
        

            <Stack.Screen name="DrawerScreen" component={DrawerNavigator} options={{
              headerShown:false
            }} />
            <Stack.Screen name="MealsOverView" component={MealsOverViewScreen}/>
            <Stack.Screen name="MealsDetail" component={MealDetailScreen} options={{title:'About the Meal'}}
            />
        </Stack.Navigator>
        </NavigationContainer>

    </NavigationIndependentTree>
   
   
      </View>
   
   

</>
)
}
const styles = StyleSheet.create({
    color: {
       flex:1,
       backgroundColor:'#24180f'
      
    },
    container:{
      flex:1,
      
    }
})