import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 

export default function RestaurantCard({source,logo,company,location}) {
  return (
    <View style={styles.container}>
      <Image style={styles.maindish} source={source}/>
      <View style={styles.rr}>
        <View style={styles.details}>
          <View style={styles.circleimage}>
            <Image style={styles.logo}  source={logo}/>
          </View>  
          <View>
            <Text style={styles.company}>{company}</Text>
            <Text style={styles.location}>{location}</Text>
          </View>
            
        </View>
        <Ionicons name={"bicycle-outline"} size={50} style={styles.icon} color={"#50C878"}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
      marginTop:30,
      height:230,
      width:380,
      borderRadius:30,
      elevation:5,
      alignSelf:"center",
      backgroundColor:"white",
      overflow: 'hidden',
      
    },
    maindish:{
      height:150,
      width:380,
      alignSelf:"center",
      marginHorizontal:5,
      resizeMode: 'cover',
      
    },
    circleimage:{
      width:60,
      height:60,
      borderRadius:25,
      overflow: 'hidden',
    
      backgroundColor:"white",
      elevation:10,
      justifyContent:"center",
      alignItems:"center",
      marginRight:10
    },
    logo:{
      height:50,
      width:50,
      resizeMode: 'cover',
      
    },
    details:{
      flexDirection:"row",
      marginTop:10
    },
    rr:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginHorizontal:20
    },
    company:{
      fontSize:20,
      color:"#32612D"
    },
    location:{
      fontSize:12,
      alignSelf:"center",
      color:"#32612D"
    },
    icon:{
      alignSelf:"center"
    }
})