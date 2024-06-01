import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; // Import icons from Expo Icons library
import IconComponent from '../../Components/IconComponent';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
            <IconComponent icon={"menu-outline"} size={40} color={"#50C878"}/>
            <Text style={styles.rest}>Home</Text>
            <IconComponent icon={"search-outline"} size={40} color={"#50C878"}/>
      </View>
      {/* <Image style={styles.image} source={require("../../assets/green.jpeg")}/> */}
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        paddingTop:44
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
    }
})