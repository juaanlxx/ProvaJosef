import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function Button({title, onPress}){

    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight:'bold',
    }
});