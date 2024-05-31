import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import TextInputWithIcons from '../../Components/TextInputWithIcons'
import CustomButton from '../../Components/CustomButton'

export default function ChangePasswordScreen() {
  return (
    <View>
      <Image  style={styles.image} source={require("../../assets/flogo.jpeg")}/>
      <View>
        <Text style={styles.logintext}>Change Password</Text>
        <Text style={styles.logintext1}>Change your password and continue with</Text>
        <Text style={styles.logintext1}>your Favourite Vendors</Text>
      </View>

    <View>
        <TextInputWithIcons placeholder={"New Password"} style={styles.input}/>
        <TextInputWithIcons placeholder={"Confirm Password"} style={styles.input}/>
       
    </View>

    <CustomButton style={styles.but}  title={"Change Password"}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
      },
    image:{
        height:150,
        width:150,
        borderRadius:75,
        alignSelf:"center",
        marginTop:30
    },
    input:{
        height:60,
        marginHorizontal:20
    },
    logintext:{
        fontSize:32,
        fontWeight:"700",
        color:"#E09145",
        alignSelf:"center",
        paddingTop:20
    },
    logintext1:{
        fontSize:18,
        fontWeight:"700",
        color:"#17181D",
        alignSelf:"center",
    },
    but:{
        height:60,
        marginHorizontal:20,
        marginTop:30
    }
})