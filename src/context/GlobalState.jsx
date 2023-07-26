import  { createContext, useReducer } from "react";
import AppReducer from './AppReducer';
import PropTypes from 'prop-types';


// Initial state
const initialState = {
    transactions: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
   function AddTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}
GlobalProvider.propTypes = {
    children: PropTypes.node
  };


    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            AddTransaction: AddTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
    
}
