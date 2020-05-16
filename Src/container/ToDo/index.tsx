import {ActionType} from "../../constants";


const initialState = {
    dataSource:[]

};
const TodoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionType.INTIALSTATE:
            return Object.assign({}, state, { dataSource: action.dataSource });

        default:
            return state;
    }
};
export default TodoReducer;