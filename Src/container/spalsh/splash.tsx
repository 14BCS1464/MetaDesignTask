import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import normalize from 'react-native-normalize';
import {connect} from "react-redux";

function Splash(props: any) {

    useEffect(()=>{
           setTimeout(()=>{
    props.navigation.navigate("ToDoScreen")
},4000)
    },[])

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.mainContainer}>
                <Text style={styles.txtStyle}>
                    {"Meta Design"}
                </Text>
                </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',

    },txtStyle:{
        fontSize:normalize(50),
        fontWeight:"bold",
        color:'white'
    }
})




export default Splash