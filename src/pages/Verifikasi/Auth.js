import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Auth = ({navigation}) => {
    useEffect(() => {
        const _validasisession = async() =>{
           const isLogin = await AsyncStorage.getItem('session_id')
           if(isLogin){
                navigation.navigate('Home')
           }
        }
        _validasisession()
       
    }, [])

    return (
        <View style={{flex:1, justifyContent:'center'}}>
          <ActivityIndicator/>
        </View>
    )
}

export default Auth

const styles = StyleSheet.create({})
