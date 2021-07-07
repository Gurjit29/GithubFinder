import {
  SEARCH_USERS,SET_ALERT,SET_LOADING,CLEAR_USERS,GET_USER,GET_REPOS
} from '../types';

export default (state,action) => {

  switch(action.type){

    default:
      return state;
    
    case SEARCH_USERS:
      return{
        ...state,
        users: action.payload,
        loading: false
      }
    
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    
  }



}