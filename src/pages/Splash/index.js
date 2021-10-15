import React, { useEffect } from 'react';
import { Logo, SplasIcon } from '../../assets';
import { colors } from '../../utils/colors';

import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash =({navigation}) =>{
    useEffect(() => {
        const _validasisession = async() =>{
           const isLogin = await AsyncStorage.getItem('session_id')
           if(isLogin){
            navigation.navigate('Home')
           }else{
               navigation.navigate('WelcomeAuth')
           }
        }
        _validasisession()
       
    }, [])

    // Mengatur berapa detik halaman pindah
    // useEffect(() =>{
    //     setTimeout(() =>{
    //         navigation.replace('WelcomeAuth');
    //     },3000)
    // })
    return(
       
        <View style={styles.container}>  
        <Logo width={329} height={475}/>
        <ActivityIndicator style={styles.indicator}/>
        </View>


    )
}

export default Splash;

const styles= StyleSheet.create({
    container :{
            
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
        width:'100%',
        backgroundColor:colors.default,
        position:'relative',
        
    },
    indicator:{
        position:'absolute',
        flex:1,
        top:'50%',
    }
})