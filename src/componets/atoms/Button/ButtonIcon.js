import React from 'react'
import { StyleSheet, TouchableOpacity, } from 'react-native'
import { IconBack } from '../../../assets'

const ButtonIcon = ({...rest}) => {
    return (
        <TouchableOpacity {...rest}>
            {rest.name === 'back' && <IconBack width={25} height={25} />}
            
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({})
