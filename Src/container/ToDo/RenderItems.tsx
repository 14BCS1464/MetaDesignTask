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
            <Text style={[styles.txtStyle,{fontWeight:"bold"}]}  >{"Title: " }
                <Text style={[styles.txtStyle,{fontWeight:"light"}]}  >{ props.item.title}
                </Text>
            </Text>
            <Text style={[styles.txtStyle,{fontWeight:"bold"}]}  >{"Detail: " }
                <Text style={[styles.txtStyle,{fontWeight:"light"}]}  >{ props.item.data}
                </Text>
            </Text>
            <Text style={styles.timeTextStyle} >{"Added On:  " + props.item.addTime}

            </Text>
            <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                <TouchableOpacity  onPress={()=>props.updateClick(props.index)} style={styles.crossIcon}>
 <Text style={styles.buttonTxtStyle}>
    {"Update"}
</Text>

                </TouchableOpacity>
            <TouchableOpacity  onPress={()=>props.onDeleteClick(props.index)} style={styles.crossIcon}>
                <Text style={styles.buttonTxtStyle}>
                    {"Delete"}

                </Text>


            </TouchableOpacity>
                <TouchableOpacity  onPress={()=>props.onViewClick(props.index)} style={styles.crossIcon}>
                    <Text style={styles.buttonTxtStyle}>
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
        width: normalize(350),
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderRadius: 10,
        marginBottom:normalize(20),
        justifyContent: 'center',
    }, crossIcon: {
      height:normalize(30),width:normalize(50),
        backgroundColor: 'red',
        borderRadius:7,
     margin:normalize(15),
        alignItems:'center',justifyContent: 'center'


    },txtStyle:{
        fontSize:normalize(20),
        lineHeight:normalize(30)

    },timeTextStyle: {
        fontSize: normalize(15
        )
    },buttonTxtStyle:{
        fontSize:normalize(15),
        color:'white'
    }
})
export default RenderItem;