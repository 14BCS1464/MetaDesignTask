import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Platform, TouchableOpacity, Dimensions } from 'react-native';
import normalize from 'react-native-normalize';


interface Props {
    onCrossClick:Function,
    index:number,
    item:any
}


const RenderItem = (props: Props) => {
    return (
        <View style={styles.parentView}>
            <Text style={[styles.txtStyle,{fontWeight:"bold"}]}  >{"Task => " }
                <Text style={[styles.txtStyle,{fontWeight:"light"}]}  >{ props.item.data}
                </Text>
            </Text>
            <Text style={styles.timeTextStyle} >{"add TIme " + props.item.addTime}

            </Text>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity  onPress={()=>props.updateClick(props.index)} style={styles.crossIcon}>
 <Text>
    {"Update"}
</Text>

                </TouchableOpacity>
            <TouchableOpacity  onPress={()=>props.onDeleteClick(props.index)} style={styles.crossIcon}>
                <Text>
                    {"Delete"}
                </Text>


            </TouchableOpacity>
                <TouchableOpacity  onPress={()=>props.onViewClick(props.index)} style={styles.crossIcon}>
                    <Text>
                        {"View"}
                    </Text>


                </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentView: {
     paddingHorizontal:normalize(10),
        paddingTop:normalize(10),
        width: normalize(300),
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderRadius: 10,
        marginTop:normalize(20),
        justifyContent: 'center',
        paddingHorizontal: normalize(20)
    }, crossIcon: {
      height:normalize(30),width:normalize(50),
        backgroundColor: 'red',
     margin:normalize(15),
        alignItems:'center',justifyContent: 'center'


    },txtStyle:{
        fontSize:normalize(20)
    },timeTextStyle:{
        fontSize:normalize(15
        )
    }
})
export default RenderItem;