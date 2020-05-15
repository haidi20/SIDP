import React, {useReducer} from 'react';

export const AuthContext = React.createContext();

const initialState = {
  login: false,
  user: {},
}

const authReducer = (state, action) => {
  switch(action.type){
    case 'LOGIN': {
      return {login: true, user: action.payload}
    }
    default:
      return state;
  }
}

const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const value = {
    state: state,
    handleLogin: data => dispatch({type: 'LOGIN', payload: data}),
  }

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
} 

export default AuthProvider;
