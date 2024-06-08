import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; // Import icons from Expo Icons library
import IconComponent from '../../Components/IconComponent';
import RestaurantCard from '../../Components/RestaurantCard';
import TextInputWithIcons from '../../Components/TextInputWithIcons'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
            <IconComponent icon={"menu-outline"} size={40} color={"#50C878"}/>
            <Text style={styles.rest}>Home</Text>
            <IconComponent icon={"search-outline"} size={40} color={"#50C878"}/>
      </View>
      <Text style={styles.restaurants}>Restaurants</Text>   

      <TextInputWithIcons placeholder={"search"} style={styles.input} leftIcon={"search"}/>

      <RestaurantCard source={require("../../assets/menu (2).jpg")} location={"24b Ogbonna street aba "} logo={require("../../assets/flogo.jpeg")} company={"FoodComp"}/>
      <RestaurantCard source={require("../../assets/menu (3).jpg")} location={"24b Ogbonna street aba "} logo={require("../../assets/flogo.jpeg")} company={"FoodComp"}/>
      <RestaurantCard source={require("../../assets/menu (4).jpg")} location={"24b Ogbonna street aba "} logo={require("../../assets/flogo.jpeg")} company={"FoodComp"}/>
      <RestaurantCard source={require("../../assets/menu (5).jpg")} location={"24b Ogbonna street aba "} logo={require("../../assets/flogo.jpeg")} company={"FoodComp"}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        paddingTop:44,
        flex:1
    },
    box1:{
        marginHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    rest:{
        alignSelf:"center",
        fontSize:24,
        color:"#32612D"
    },
    image:{
        height:220,
        width:350,
        alignSelf:"center",
        marginTop:20
    },
    restaurants:{
      fontSize:28,
      color:"#32612D",
      marginLeft:20,
      marginTop:10
    },
    input:{
      height:60,
      marginHorizontal:20,
      marginTop:10
  },
})