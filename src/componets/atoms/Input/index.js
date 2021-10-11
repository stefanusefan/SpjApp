import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../../../utils/colors';

const Input = ({placeholder, ...res}) => {
    return (
        
        <TextInput 
        style={styles.input} 
        placeholder={placeholder} 
        placeholderTextColor={colors.dark}
        // Fungsinya untuk menggumpulkan semua props yang di kirm medto penginputan
        // dinamis
        {...res}
        />
    )
}

export default Input;

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:colors.text.border,
        borderRadius:25,
        paddingVertical:12,
        paddingHorizontal:18,
        fontSize:14,
        color:colors.dark,

    }
})
