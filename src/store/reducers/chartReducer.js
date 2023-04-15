import { SET_FOOD } from "../actions/chartActions";

let initialState = [];

export const chartReducer = (state = initialState, action ) => {
  switch(action.type){
    case SET_FOOD: 
     return [...state, action.payload];
    default:
      return state;
  }
}