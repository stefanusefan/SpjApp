import React from 'react';
import {View,Text, StyleSheet, Image,} from 'react-native';
import { colors } from '../../utils/colors';
import ActionButton from './ActionButton';
import { welcomeAuthimg } from '../../assets';

const WelcomeAuth =({navigation}) =>{
     // Supaya fungsi tombol buton berjalan dengan baik sesuai fungsinya maka 
    // Perlu dibuatkan sebuah fungsi
    const handleGoTo =(screen) => {
        navigation.navigate(screen);
    };

    return(
        <View style={styles.wrepper.page}>
            <Image source={welcomeAuthimg} style={styles.wrepper.illustration}/>
            {/* <View style={styles.wrepper.illustration}/> */}
            <Text style={styles.text.welcome}>Selamat Datang di SPJ</Text>
            <ActionButton 
            desc="Silahkan  pilih masuk, jika anda sudah memiliki akun" 
            title="Masuk"
            onPress={() =>handleGoTo('Login')}
            />
            <ActionButton 
            desc="atau Silahkan  pilih daftar, jika anda sudah  melakukan pendaftaran" 
            title="Daftar"
            onPress={() =>handleGoTo('Register')}
            />
            <ActionButton 
            desc=" dan Silahkan  pilih aktivasi, jika akun anda belum Aktive " 
            title="Aktive"
            onPress={() =>handleGoTo('Verifikasi')}
            />
        </View>
    );
};

export default WelcomeAuth;

const styles= StyleSheet.create ({
    wrepper:{
        page:{
            alignItems:'center',
            justifyContent:'center',
            flex:1,
            backgroundColor:'white'
        },
        illustration:{
            width:247, 
            height:150,
            marginBottom:10
        }
    },
    text:{
        welcome:{
            fontSize:15, 
            fontWeight:'bold',
            color:colors.default,
            marginBottom:76,
        }
    }
})



