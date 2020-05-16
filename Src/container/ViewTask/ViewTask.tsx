import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import normalize from 'react-native-normalize';
import CommonHeader from "../../ReusableComponents/CommonHeader";


function ViewTask(props: any) {

    useEffect(()=>{

    },[])


    //For go back to back screen
   const  onBackPress=()=>{
          props.navigation.pop()
    }


    return (
        <SafeAreaView style={{flex:1}}>
            <CommonHeader onBackPress={()=>onBackPress()}/>
            <View style={styles.mainContainer}>

                <Text style={styles.txtStyle}>
                    {props.route.params.task}
                </Text>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        padding:normalize(50)

    },txtStyle: {
        fontSize: normalize(20),
        color:"white"
    }
})




export default ViewTask