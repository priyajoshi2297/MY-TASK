import {
    GET_USER,
    CREATE_USER,
    UPDATE_USER,
    GET_USERS,
    DELETE_USER
  } from "./types";
  import axios from "axios";
  
  export const getUsers = () => async (dispatch) => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
      type: GET_USER,
      payload: result.data,
    });
  };
  
  
  export const getUser = (id) => async (dispatch) => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({
      type: GET_USERS,
      payload: result.data,
    });
  };
  
  
  export const createUser = (user) => async (dispatch) => {
    const result = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      user
    );
  
    dispatch({
      type: CREATE_USER,
      payload: result.data,
    });
  };
  
  
  export const updateUser = (user) => async (dispatch) => {
    console.log("datatata")
    const result = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${user.id}`,
      user
    );
    console.log("result", result)
    dispatch({
      type: UPDATE_USER,
      payload: result.data,
    });
  };
  
  
  export const deleteUser = (id) => async (dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  };
  