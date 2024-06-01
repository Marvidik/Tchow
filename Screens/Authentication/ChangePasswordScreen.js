import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import TextInputWithIcons from '../../Components/TextInputWithIcons'
import CustomButton from '../../Components/CustomButton'

export default function ChangePasswordScreen() {
  return (
    <View>
      <Image  style={styles.image} source={{uri:"https://img.freepik.com/free-vector/natural-fresh-label-sticker-badge_17005-903.jpg?size=626&ext=jpg&ga=GA1.2.2116053268.1717246517&semt=ais_user"}}/>
      <View>
        <Text style={styles.logintext}>Change Password</Text>
        <Text style={styles.logintext1}>Change your password and continue with</Text>
        <Text style={styles.logintext1}>your Favourite Vendors</Text>
      </View>

    <View>
        <TextInputWithIcons placeholder={"New Password"} style={styles.input} rightIcon/>
        <TextInputWithIcons placeholder={"Confirm Password"} style={styles.input} rightIcon/>
       
    </View>

    <CustomButton style={styles.but}  title={"Change Password"}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        
      },
    image:{
        height:150,
        width:150,
        borderRadius:75,
        alignSelf:"center",
        marginTop:60
    },
    input:{
        height:60,
        marginHorizontal:20
    },
    logintext:{
        fontSize:32,
        fontWeight:"700",
        color:"#50C878",
        alignSelf:"center",
        paddingTop:20
    },
    logintext1:{
        fontSize:18,
        fontWeight:"700",
        color:"#32612D",
        alignSelf:"center",
    },
    but:{
        height:60,
        marginHorizontal:20,
        marginTop:30
    }
})