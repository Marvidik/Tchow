import { View, Text ,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native'
import React, {useState,useRef} from 'react'

export default function OTPScreen() {
    const [otp, setOTP] = useState(['', '', '', '']);
    const inputRefs = useRef([]);

    const handleInputChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOTP(newOtp);
    
        if (text && index < 3) {
          inputRefs.current[index + 1].focus();
        } else if (!text && index > 0) {
          inputRefs.current[index - 1].focus();
        }
      };
    
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/flogo.jpeg')} />
      <Text style={styles.text1}>OTP Request</Text>
      <View style={styles.box1}>
        <Text style={styles.text2}>4 digit code sent to </Text>
        {/* <Text style={styles.text3}>{responseData}</Text> */}
      </View>

      <View style={styles.otpinputs}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={ref => (inputRefs.current[index] = ref)}
            style={styles.textinput}
            placeholder={""}
            value={value}
            onChangeText={text => handleInputChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button}>
 
          <Text style={styles.buttonText}>Verify</Text>
   
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 64,
        backgroundColor: 'white',
        flex: 1,
      },
      image: {
        height: 150,
        width: 200,
        alignSelf: 'center',
      },
      text1: {
        fontSize: 28,
        color: '#E09145',
        alignSelf: 'center',
        paddingTop: 20,
      },
      text2: {
        fontSize: 18,
        color: 'grey',
        marginBottom: 30,
      },
      box1: {
        flexDirection: 'row',
        alignSelf: 'center',
      },
      text3: {
        fontSize: 18,
        color: '#E09145',
        paddingLeft: 5,
      },
      button: {
        marginTop: 70,
        height: 50,
        width: 370,
        marginHorizontal: 20,
        backgroundColor: '#E09145',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
      },
      customInput: {
        marginHorizontal: 20,
      },
      error: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
      },
      otpinputs:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
       
        
      },
      textinput:{
        height:70,
        width:60,
        paddingHorizontal:20,
        marginHorizontal:20,
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        borderColor:"grey",
        alignSelf:"center",
      },
      message:{
        marginTop:64,
        marginHorizontal:10,
        borderRadius:10
      }
})