import React, {useState} from 'react'
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native'
import { colors } from '../../utils/colors'
// import { useNavigation } from '@react-navigation/core';

const Verifikasi = ({navigation}) => {

    // const navigation= useNavigation()
    // Mengatur display dari fitur sosmed 
    const [displaySosmed, setDisplaySosmed]= useState('flex');
    // Mengatur untuk text no hp on change text
    const[nohp, setNohp] = useState('');
    // seting tombol acction agar bisa berfungsi dengan baik
    const[actionButton, setActionButton] =useState('Pilih berdasarkan sosial media anda');
    // 
    const handleGoTo =() => {
        if(nohp.length > 9 && nohp.length < 13 && nohp.substr(0,1) == '8' && !isNaN(nohp)){
            // Arahkan halaman ke verifikasiOtp Menggunakan Navigation.navigate
            navigation.navigate('FalidasiOtp', {nohp,kodeOtp:123456})
        }
    };
    
    return (
        <View style={{flex:1, backgroundColor:colors.default}}>
            <StatusBar backgroundColor= {colors.default}/>
            <View style={{marginHorizontal:16, flex:1}}>
            <Text style={{fontSize:50, color:'white', marginTop:20,}}>SPJS</Text>
            <Text style={{fontSize:25, color:'white', marginTop:80,}}>Welcome</Text>
            <Text style={{fontSize:15, color:'white', marginTop:5,}}>Masukan nomor telepon anda</Text>
            <View style={{width:300, height:53, backgroundColor:'white',marginTop:10,}}>
                <TextInput style={{fontSize:25, }}placeholder="81290326699" 
                // Mengatur textnya agar bisa di input sesuai dengan state
                onChangeText={(nohp) =>{
                    setNohp(nohp)
                    // jika no hp lebih dari 9 maka tulisan berubah menjadi continue dan jika kurang dr 13
                    // maka tulisan defaultnya muncul dan jika nomor depanya bukan 8 maka tulisan defaultnya
                    // muncul kembali
                    if(nohp.length > 9 && nohp.length < 13 && nohp.substr(0,1) == '8' && !isNaN(nohp)){
                        setActionButton('Continue')
                    }else{
                        setActionButton('Pilih berdasarkan sosial media anda')
                    }
                }}
                keyboardType="number-pad" 
                 onFocus={() => setDisplaySosmed('none')}
                 onBlur={() => setDisplaySosmed('flex')}
                 value={nohp}
                 
                 />
                 {/* menghilangkan display tombol sosmade facebook pada saat menggunakan text dengan memberikan
                 onpress menjadi none  dan  tombolnya kembali dengan fiture on bluer flex*/}
            </View>        
            </View>
            <TouchableOpacity style={{alignItems:"center", marginBottom:15}} onPressIn={() =>handleGoTo()}>
                <Text style={{color:"white", fontSize:12}}>{actionButton}</Text>
            </TouchableOpacity>
        <View style={{ display:displaySosmed,height:90, backgroundColor:'white', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                    <TouchableOpacity style={{backgroundColor:'#041368',width:110,height:50, elevation:10, justifyContent:'center'}}>
                        <Text style={{color:'white',textAlign:'center'}}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'white',width:110,height:50, elevation:10, justifyContent:'center'}}>
                        <Text style={{color:colors.dark,textAlign:'center'}}>Google</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default Verifikasi;

const styles = StyleSheet.create({})
