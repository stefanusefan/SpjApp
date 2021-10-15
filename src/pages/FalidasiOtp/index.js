import React, {useState} from 'react'
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native'
import { colors } from '../../utils/colors'
 import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        
        if(kodeOtp == verifikasiotp){
    
            try {
                
                // Panggilkan API untuk melakukan verifikasi
                fetch('https://reqres.in/api/login', {
                    method : 'POST',
                    headers: {
                                'Content-Type':'application/json'
                            },
                            body: JSON.stringify({
                        email: 'eve.holt@reqres.in',
                        password: 'cityslicka'
                    })
                })
                .then((response) => response.json())
                .then((responseJeson) => {
                    // console.warn(responseJeson)
                    if(responseJeson.token){

                            // Membuat sesion dgn library asy sehingga user yg sudah melakukan registrasi dan
                            // kode OTP-nya benar maka langsung direct ke halaman home
                            // set session_id dengan value session_id ditambah dengan kode random kedalam setItem
                            AsyncStorage.setItem('session_id', 'session_id' + Math.random())

                        // Arahkan halaman ke verifikasiOtp Menggunakan Navigation.navigate
                        navigation.navigate('Home')
                    }
                })
    
            } catch (error) {
                console.warn(error)
            }        
        }else{
            setWarningerror('Code OTP tidak sesuai');
        }
       
    };
    
    return (
        <View style={{flex:1, backgroundColor:colors.default}}>
            <StatusBar backgroundColor= {colors.dark}/>
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
                    if(nohp.length > 6 ){
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
