import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; // Import icons from Expo Icons library


export default function IconComponent({iconstyle,icon,size,color}) {
  return (
    <View style={styles.container}>
        <Ionicons color={color} name={icon} size={size} style={[styles.icon,iconstyle]}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        height:50,
        width:50,
        borderRadius:50,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        elevation:10
    },

})