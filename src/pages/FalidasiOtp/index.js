import React, {useState} from 'react'
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native'
import { colors } from '../../utils/colors'
 import { useNavigation } from '@react-navigation/core';

const FalidasiOtp = (props) => {

     const navigation= useNavigation()
    // Mengatur display dari fitur sosmed 
    const [displaySosmed, setDisplaySosmed]= useState('flex');
    // Mengatur untuk text no hp on change text
    const[nohp, setNohp] = useState(props.route.params.nohp);

    const[verifikasiotp, setVerifikasiotp]= useState(props.route.params.kodeOtp)

    const [kodeOtp, setKodeotp] =useState()
    // seting tombol acction agar bisa berfungsi dengan baik
    const[actionButton, setActionButton] =useState('Pilih berdasarkan sosial media anda');

    const [waningerror, setWarningerror] =useState('')
    // 
    const handleGoTo =(kodeOtp) => {
        if(kodeOtp.length > 5){
            // Arahkan halaman ke verifikasiOtp Menggunakan Navigation.navigate
            if(kodeOtp != verifikasiotp){
                setWarningerror('Code tidak sesuai');
            }else{
              
                navigation.navigate('WelcomeAuth')
            }
        }else{
            setWarningerror('')
        }
    };
    
    return (
        <View style={{flex:1, backgroundColor:colors.default}}>
            <StatusBar backgroundColor= {colors.default}/>
            <View style={{marginHorizontal:16, flex:1}}>
            <Text style={{fontSize:50, color:'white', marginTop:20,}}>Verifikasi OTP</Text>
            <Text style={{fontSize:25, color:'white', marginTop:80,}}>Masukin 6-digit kode anda</Text>
            <Text style={{fontSize:20, fontWeight:'bold', color:'white', marginTop:5,}}>{nohp}</Text>
            <View style={{width:300, height:53, backgroundColor:'white',marginTop:10,}}>
                <TextInput style={{fontSize:25, }}placeholder="Enter your code" 
                // Mengatur textnya agar bisa di input sesuai dengan state
                onChangeText={(kodeOtp) =>{
                    setKodeotp(kodeOtp)
                    // jika no hp lebih dari 9 maka tulisan berubah menjadi continue dan jika kurang dr 13
                    // maka tulisan defaultnya muncul dan jika nomor depanya bukan 8 maka tulisan defaultnya
                    // muncul kembali
                    if(nohp.length > 5 ){
                       handleGoTo(kodeOtp)
                    }
                }}
                keyboardType="number-pad" 
                
                 value={kodeOtp}
                 
                 />
                 {/* menghilangkan display tombol sosmade facebook pada saat menggunakan text dengan memberikan
                 onpress menjadi none  dan  tombolnya kembali dengan fiture on bluer flex*/}
            </View>   
            <View>
                <Text>
                {waningerror}
                </Text>
            </View>     
            </View>
        
        </View>
    )
}

export default FalidasiOtp;

const styles = StyleSheet.create({})
