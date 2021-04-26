import {
    GET_USER,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER,
    GET_USERS
  } from "../actions/types";
  
  const initialState = {
    users: [],
    user: null
  };
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_USER:
        return {
          ...state,
          users: payload,
        };
      case CREATE_USER:
        console.log(payload);
        return {
          ...state,
          users: [payload, ...state.users],
        };  
        case GET_USERS:
          return {
            ...state,
            user: [payload],
          };     
  
        case UPDATE_USER:
          console.log("update user", payload)
        return {
          ...state,
          users: state.users.map((Item) =>
            Item.id == payload.id ? payload : Item
          ),
        };  
      case DELETE_USER:
        return {
          ...state,
          users: state.users.filter((Item) => Item.id != payload),
        };
      default:
        return state;
    }
  };
  