import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import OrderCard from '../../Components/OrderCard';
import CustomButton from '../../Components/CustomButton';
import { Ionicons } from '@expo/vector-icons';

export default function OrderScreen({ navigation }) {
  
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:"#32612D",height:40}}></View>
      <View style={styles.b1}>
        <Text style={styles.orders}>Orders</Text>
        
        
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  notLoggedInText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    alignSelf: 'center',
    marginTop: 50
  },
  orders: {
    alignSelf: "center",
    fontSize: 32,
    paddingTop: 15,
    color: "#512213",
    marginBottom: 20
  },
  b1: {
    height: "100%",
  },
  but: {
    marginHorizontal: 20,
    height: 50,
  },
  message: {
    marginTop: 64,
    marginHorizontal: 10,
    borderRadius: 10
  },
  notlog:{
    alignContent:"center",
    justifyContent:"center",
    flex:1
  },
  not:{
    fontSize:32,
    color:"grey",
    alignSelf:"center",
    marginBottom:20
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 24,
    marginTop: 20,
    color: 'gray',
  },
  but:{
    marginBottom:10,
    height:50,
    marginHorizontal:20
  }
});
