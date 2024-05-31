import { View, Text ,StyleSheet,Image,KeyboardAvoidingView,Platform,ScrollView} from 'react-native'
import React from 'react'
import TextInputWithIcons from '../../Components/TextInputWithIcons'
import CustomButton from '../../Components/CustomButton'

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <Image  style={styles.image} source={require("../../assets/flogo.jpeg")}/>
      <View>
        <Text style={styles.logintext}>Sign Up</Text>
        <Text style={styles.logintext1}>Create an Account and order foods</Text>
        <Text style={styles.logintext1}>from your Favourite vendors</Text>
      </View>

    <View>
        <TextInputWithIcons placeholder={"Email"} style={styles.input}/>
        <TextInputWithIcons placeholder={"Username"} style={styles.input}/>
        <TextInputWithIcons placeholder={"Password"} style={styles.input} rightIcon/>
    </View>

    <CustomButton style={styles.but}  title={"Register"}/>
    </ScrollView>
    </KeyboardAvoidingView>
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