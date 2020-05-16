import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import normalize from 'react-native-normalize';

const CommonTextInput = (props: any) => {
    return (
        <View style={[styles.parentContaineer,props.extraStyle]}>
            <TextInput
                keyboardType={props.keyboardType}
                value={props.value}
                multiline={true}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                style={[styles.textInputStyle,]} />
        </View>
    )
}

const styles = StyleSheet.create({
    parentContaineer: {
        height: normalize(30),
        width: normalize(300),
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor:'white'
    }, textInputStyle: {
        flex: 1,
        fontSize:normalize(20),
        color: 'black',
        paddingHorizontal: normalize(10)
    },


});



export default CommonTextInput