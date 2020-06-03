import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, SafeAreaView,FlatList } from 'react-native';
import normalize from 'react-native-normalize';
import {connect} from "react-redux";
import CommonTextInput from "../../ReusableComponents/CommonTextInput";
import {TouchableOpacity} from "react-native-gesture-handler";
import RenderItem from "./RenderItems";
import {addButonClick,updateTask,deleteTask} from './action'



function ToDoScreen(props: any) {

    const [addTodo,setToDo]= useState("")
    const [isUpdate,setIsUpdate]= useState(false)
    const [updateIndex,setUpdateIndex]= useState(null)

    useEffect(()=>{

    },[])


    //this function work for add and update task
   const  onAddClick=()=>{
        if(isUpdate){
            props.updateTask(updateIndex,addTodo,()=>{
                setIsUpdate(false),
                    setToDo("")
            })
        }else {
            if(!addTodo){
                alert("please add task")
            }else {
                let tempObject = {
                    data: addTodo,
                    addTime: new Date(),

                }
                props.addButonClick(tempObject)
                setToDo("")
            }
        }
   }

   //onUpdate Click
    const updateClick=(index:number)=>{
        setToDo(props.data[index].data)
        setIsUpdate(true)
        setUpdateIndex(index)
    }


    //View Task
    const onViewClick=(index:number)=>{

          props.navigation.navigate("ViewTask",{
              task:props.data[index].data
          })
    }

    //Delete task
    const onDeleteClick=(index:number)=>{
        if(index === updateIndex){
            setIsUpdate(false),
                setToDo("")
        }
      props.deleteTask(index)
    }


    //Render Todo List
    const taskList = () => {
        return (
            <FlatList
                contentContainerStyle={{alignItems:'center'}}
                style={[styles.flatListStyle]}
                onEndReachedThreshold={0.7}
                data={props.data}
                key
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <RenderItem
                            updateClick={(index:number)=>updateClick(index)}
                            onDeleteClick={(index:number)=>onDeleteClick(index)}
                            onViewClick={(index:number)=>onViewClick(index)}
                            item={item} index={index} />
                    );
                }} />
        )
    }


    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.mainContainer}>
                <View style={styles.textInputContainewr}>
                <CommonTextInput
                    value={addTodo}
                    textAlignVertical: "top"
                    extraStyle={styles.extraStyle}
                    onChangeText={(val: string) => setToDo(val)}
                    placeholder={"Add Task Here"}
                />
                <TouchableOpacity  onPress={()=>onAddClick()} style={styles.addButtonStyle}>
                    <Text>
                        {  isUpdate? "Update Task":"Add Task"}
                        </Text>
                </TouchableOpacity>
                </View>
                {taskList()}
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,backgroundColor:'blue',



    },txtStyle:{
        fontSize:normalize(50),
        fontWeight:"bold"
    },extraStyle:{
height:normalize(100),
        width:normalize(250),
        marginLeft:normalize(20),
        marginTop:normalize(20)
    },textInputContainewr:{
        width:'100%',
        justifyContent:"space-between",
        flexDirection:'row',
        alignItems:'center'
    },
    addButtonStyle:{
        height: normalize(30),
    width:normalize(70),
        backgroundColor: "red",
        marginRight:normalize(20),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10

    },flatListStyle:{
        marginTop:normalize(20),
    }
})


const mapStateToProps = (state: any) => {
    return {
        data:state.TodoReducer.dataSource
    }};

const mapDispatchToProps = {
    addButonClick:addButonClick,
    updateTask:updateTask,deleteTask:deleteTask
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoScreen)