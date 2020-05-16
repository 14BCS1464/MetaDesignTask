import {combineReducers} from 'redux';
import TodoReducer from "../container/ToDo";
const RootReducers = combineReducers({
    TodoReducer,
});


export default RootReducers;