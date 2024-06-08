import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import TextInputWithIcons from '../../Components/TextInputWithIcons'
import CartItem from '../../Components/CartItem';

export default function FoodScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/menu (2).jpg")}/>
      <View style={styles.body}>
        <View style={styles.log}>
        <View style={styles.circleimage}>
            <Image style={styles.image2} source={require("../../assets/flogo.jpeg")}/>
        </View>
        <Text style={styles.company}>FoodComp</Text>
        </View>
        
         
        <TextInputWithIcons placeholder={"search"} style={styles.input} leftIcon={"search"}/>

        <CartItem source={require("../../assets/burgs (1).jpg")} price={3500} name={"Burger and coke"}/>
        <CartItem source={require("../../assets/burgs (2).jpg")} price={3500} name={"Burger and chips"}/>
        <CartItem source={require("../../assets/burgs (3).jpg")} price={3500} name={"milky Doughnut"}/>
        
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    image:{
        width:"100%",
        height:200
    },
    body:{
        backgroundColor:"white",
        bottom:40,
        height:900,
        borderTopRightRadius:60
    },
    circleimage:{
        width:100,
        height:100,
        borderRadius:25,
        overflow: 'hidden',
      
        backgroundColor:"white",
        elevation:10,
        justifyContent:"center",
        alignItems:"center",
        marginRight:10,
        marginLeft:10
      },
      log:{
        bottom:40,
      },
      image2:{
        width:90,
        height:90,
        alignSelf:"center"
      },
      company:{
        fontSize:24,
        color:"#32612D",
        marginLeft:15
      },
      input:{
        height:35,
        marginHorizontal:20,
        marginTop:10,
        marginBottom:20
    },
})