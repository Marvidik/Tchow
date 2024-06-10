import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Carts from '../../Components/Carts';
import CustomButton from '../../Components/CustomButton';




const CartScreen = ({navigation}) => {


//   const handleIncrement = (index) => {
//     const newCartItems = [...cartItems];
//     newCartItems[index].quantity++;
//     // Recalculate total price after incrementing
//     calculateTotalPrice();
//   };

//   const handleDecrement = (index) => {
//     const newCartItems = [...cartItems];
//     if (newCartItems[index].quantity > 1) {
//       newCartItems[index].quantity--;
//       // Recalculate total price after decrementing
//       calculateTotalPrice();
//     }
//   };

  return (
    <View style={styles.container}>
      <View style={{backgroundColor:"#32612D",height:40}}></View>
      <Text style={styles.cart}>Cart</Text>
      
    
      
      <CustomButton title={`Checkout 10000 Naira`} style={styles.checkoutButton}  />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cart: {
    fontSize: 32,
    alignSelf: 'center',
    paddingTop:15,
  },
  scrollView: {
    flex: 1,
    marginTop: 20,
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
  checkoutButton: {
    marginHorizontal: 20,
    height: 50,
    marginBottom: 20,
  },
  message:{
    marginTop:64,
    marginHorizontal:10,
    borderRadius:10
  },
  fee:{
    paddingLeft:20,
    paddingBottom:10,
    fontSize:22,
    color:"grey"
  },
  fee2:{
    paddingLeft:20,
    paddingBottom:10,
    fontSize:20,
    color:"grey",
    fontStyle:"italic"
  },
  cartButton:{
    marginHorizontal: 20,
    height: 50,
    marginBottom: 20,
    backgroundColor:"grey"
  }
});
