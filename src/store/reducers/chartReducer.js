import { DELETE_FOOD, SET_FOOD } from "../actions/chartActions";

let initialState = [];
let foodIds = [];
let randomId = () => {
  let newRandom = () => Math.floor(Math.random() * 9999999) - 1;
  let newId = newRandom();
  while (foodIds.includes(newId)) {
    newId = newRandom();
  }
  foodIds = [...foodIds, newId];
  return newId;
};

export const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOOD:
      return [
        ...state,
        {
          name: action.payload.food.name,
          img: action.payload.food.img,
          id: randomId(),
        },
      ];

    case DELETE_FOOD:
      return state.filter((food) => food.id !== action.payload.id);

    default:
      return state;
  }
};
