import {ActionType} from "../../constants";

//Click on Add Button
export const addButonClick = (data: object) => {

    return function (dispatch: Function, getState: Function) {
        let tempData = getState().TodoReducer.dataSource
        tempData.unshift(data)
        //tempData.splice(index, 1);

        dispatch({
            type:ActionType.INTIALSTATE,
            dataSource: Array.from(tempData)
        })
    }



}


//Update Item
export const updateTask = (index:number,txt:string,title:string,callback:Function)=> {
//alert(title)
    return function (dispatch: Function, getState: Function) {
        let tempData = getState().TodoReducer.dataSource
        tempData[index].data=txt
        tempData[index].title=title

        dispatch({
            type:ActionType.INTIALSTATE,
            dataSource: Array.from(tempData)
        })
        callback()
    }
}

//Delete Tayask
export const deleteTask = (index:number)=> {

    return function (dispatch: Function, getState: Function) {
        let tempData = getState().TodoReducer.dataSource
        tempData.splice(index, 1)
        dispatch({
            type:ActionType.INTIALSTATE,
            dataSource: Array.from(tempData)
        })

    }
}