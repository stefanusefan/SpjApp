import React from 'react';
import {View,Text,TouchableOpacity, StyleSheet} from 'react-native';
import { Button } from '../../componets';
import { colors } from '../../utils/colors';

const ActionButton =({desc,title,onPress}) =>{
   
    return(
            <View style={styles.wrepper.component}>
                <Text style={styles.text.desc}>{desc}</Text>
                <Button title={title} onPress={onPress}/>

            </View>
    )
}

export default ActionButton;

const styles = StyleSheet.create({
    wrepper:{
        component:{
            marginBottom:43,
            maxWidth:225,
        },
    },
    text:{
        desc:{
            fontSize:10, 
            fontWeight:'normal',
            color:colors.text.default,
            textAlign:'center',
            paddingHorizontal:'15%',
            marginBottom:6
        },
    }

})