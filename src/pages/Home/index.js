import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../utils/colors'

const Home = ({navigation}) => {

   
            const handleGoTo = async () =>{
                const logOut = await AsyncStorage.clear()
                navigation.navigate('WelcomeAuth');
               
            }
    

    return (
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
           <TouchableOpacity onPress={() =>handleGoTo()} style={{backgroundColor:colors.default, borderRadius:25,height:50, width:'50%',justifyContent:'center', alignItems:'center'}}>
               <Text style={{color:'white', maxWidth:'50%',marginHorizontal:30, marginVertical:10, fontSize:20}}>Logout</Text>
           </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
