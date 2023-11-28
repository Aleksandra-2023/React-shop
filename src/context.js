import { createContext, useReducer } from "react";
import {reducer} from './reducer';


const ShopContext = createContext()

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBascketShow: false,
    alertName: ''
}

const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState)
    
    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }
    value.removeFromBascket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASCKET', payload: {id: itemId}})
    }
    value.handleBascketShow = () => {
        dispatch({type: 'HANDLE_BASCKET_SHOW'})
    }
    value.addToBascket = (item) => {
        dispatch({type: 'ADD_TO_BASCKET', payload: item})
    }
    value.incremQuantity = (itemId) => {
        dispatch({type: 'INCREM_QUANTITY', payload: {id: itemId}})
    }
    value.decremQuantity = (itemId) => {
        dispatch({type: 'DECREM_QUANTITY', payload: {id: itemId}})
    }
    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}

export {ShopContext, ContextProvider }