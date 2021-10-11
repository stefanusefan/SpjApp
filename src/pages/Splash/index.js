import React, { useEffect } from 'react';

import{View,Text, StyleSheet} from 'react-native';
import { Logo, SplasIcon } from '../../assets';
import { colors } from '../../utils/colors';

const Splash =({navigation}) =>{
    useEffect(() =>{
        setTimeout(() =>{
            navigation.replace('WelcomeAuth');
        },3000)
    })
    return(
       
        <View style={styles.container}>
            <Logo width={329} height={475}/>
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
        
    },
})