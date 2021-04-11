const initialState = {
    isLoggedIn: false
  }
  
  
  const LOGIN = 'LOGIN'
  
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return { ...state, isLoggedIn: !isLoggedIn }
      default:
        return state
    }
  }
  
 
  export default loginReducer;