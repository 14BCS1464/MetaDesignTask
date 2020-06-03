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
    const [addTitle,setTitleTxt]=useState("")
    const [isUpdate,setIsUpdate]= useState(false)
    const [updateIndex,setUpdateIndex]= useState(null)

    useEffect(()=>{

    },[])


    //this function work for add and update task
   const  onAddClick=()=>{
        if(isUpdate){
            props.updateTask(updateIndex,addTodo,addTitle,()=>{
                setIsUpdate(false),
                    setToDo(""),
                    setTitleTxt("")

            })
        }else {
            if(!addTitle){
                alert("Please add Title")
            }else if(!addTodo)
            {
                alert("Please add Task Detail")
            }
            else {
                let tempObject = {
                    title:addTitle.trim(),
                    data: addTodo.trim(),
                    addTime: new Date().getDate()+" / "+new Date().getMonth()+" / "+new Date().getFullYear()

                }
                props.addButonClick(tempObject)
                setTitleTxt("")

                setToDo("")
            }
        }
   }

   //onUpdate Click
    const updateClick=(index:number)=>{
        setToDo(props.data[index].data)
        setTitleTxt(props.data[index].title)
        setIsUpdate(true)
        setUpdateIndex(index)
    }


    //View Task
    const onViewClick=(index:number)=>{

          props.navigation.navigate("ViewTask",{
              task:props.data[index].data,
              title:props.data[index].title,

          })
    }

    //Delete task
    const onDeleteClick=(index:number)=>{
        if(index === updateIndex){
            setIsUpdate(false),
                setToDo("")
            setTitleTxt("")
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
                keyboardDismissMode="on-drag"
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



const  setText=(val:string)=>{
    setToDo(val)
}

const setTitle=(val:string)=>{
    setTitleTxt(val)
}

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.mainContainer}>
                <View style={styles.textInputContainewr}>
                    <View>
                    <CommonTextInput
                        value={addTitle}
                        extraStyle={styles.extraTitleStyle}
                        onChangeText={(val: string) =>setTitle(val)}
                        placeholder={"Add Task Title"}
                    />
                <CommonTextInput
                    value={addTodo}
                    extraStyle={styles.extraStyle}
                    onChangeText={(val: string) => setText(val)}
                    placeholder={"Add Task Detail"}
                />
                </View>
                <TouchableOpacity  onPress={()=>onAddClick()} style={styles.addButtonStyle}>
                    <Text style={styles.txtStyle}>
                        {  isUpdate? "Update Task":"Add Task"}
                        </Text>
                </TouchableOpacity>
                </View>
                <Text style={styles.yourTxtStyle}>
                    {"Your Tasks :"}
                </Text>
                {taskList()}
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,backgroundColor:'gray',



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
        marginTop:normalize(10),
    },txtStyle: {
        fontSize: normalize(15),
        color: 'white'
    },yourTxtStyle:{
         fontSize:(20),
        color:"white",
        marginTop:normalize(20),
        marginLeft: normalize(30)
        },extraTitleStyle:{
        height:normalize(60),
        width:normalize(250),
        marginLeft:normalize(20),
        marginTop:normalize(20)
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