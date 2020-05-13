import React, {useReducer} from 'react';

export const AuthContext = React.createContext();

const initialState = {
  login: false,
}

const authReducer = (state, action) => {
  switch(action.type){
    case 'LOGIN': {
      return {login: !state.login}
    }

    default:
      return state;
  }
}

const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const value = {
    state: state,
    handleLogin: () => dispatch({type: 'LOGIN'}),
  }

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
} 

export default AuthProvider;
