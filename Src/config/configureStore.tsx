import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import RootReducers from '../rootReducer/rootReducer'

const initialState = {};

export default function configureStore(initialState) {
    return createStore(
        RootReducers,
        initialState,
        applyMiddleware(thunk)
    );
}