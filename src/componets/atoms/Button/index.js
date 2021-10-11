import React from 'react';
import { TouchableOpacity,Text, StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';
import ButtonIcon from './ButtonIcon';

const Button=({title,onPress,type,name}) =>{
    if(type === 'icon'){
        return <ButtonIcon name={name} onPress={onPress}/>
    }
    // Menirim props dengan nama title dan onpress
    return(
        <TouchableOpacity style={styles.wrapper.button} onPress={onPress}>
            <Text style={styles.text.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles= StyleSheet.create({
    wrapper:{
        button:{
            backgroundColor:colors.default,
            borderRadius:25,
            paddingVertical:13
        },
    },
    text:{
        title:{
            color:'white',
            fontSize:12, 
            fontWeight:'bold',
            textAlign:'center',
            textTransform:'uppercase',
        },
    },

})