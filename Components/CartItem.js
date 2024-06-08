// CartItem.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

const CartItem = ({ name,price,source,remove }) => {
  

  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>₦{price}</Text>
      </View>
      <CustomButton title={"Add"} icon={"cart"} onPress={remove}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 20,
    paddingHorizontal:10,
    marginTop:20
    
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 20,
    borderRadius: 5,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:"#32612D"
  },
  price: {
    fontSize: 16,
    marginBottom: 5,
    color:"green"
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 5,
    height:40,
    width:40,
    justifyContent:"center",
    alignItems:"center"
  },
  quantityButtonText: {
    fontSize: 24,
    color: '#000',
    
    
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default CartItem;
