import {
  DECREMENT_FOOD,
  DELETE_FOOD,
  INCREMENT_FOOD,
  SET_FOOD,
} from "../actions/chartActions";

let chartLocal = localStorage.getItem("Chart");
let initialState = chartLocal ? JSON.parse(chartLocal) : [];
/* let foodIds = [];
let randomId = () => {
  let newRandom = () => Math.floor(Math.random() * 9999999) - 1;
  let newId = newRandom();
  while (foodIds.includes(newId)) {
    newId = newRandom();
  }
  foodIds = [...foodIds, newId];
  return newId;
}; */

const setStateChart = (state, { name, img, price }) => {
  if (state.length === 0) {
    let newState = [
      ...state,
      {
        name,
        img,
        price,
        num: 1,
      },
    ];
    localStorage.setItem("Chart", JSON.stringify(newState));
    return newState;
  }

  localStorage["Chart"] = state.some((food) => food.name === name)
    ? JSON.stringify(
        state.map((food) =>
          food.name === name
            ? {
                ...food,
                num: food.num + 1,
              }
            : food
        )
      )
    : JSON.stringify([
        ...state,
        {
          name,
          img,
          price,
          num: 1,
        },
      ]);

  return JSON.parse(localStorage.getItem("Chart"));
};

const incrementFood = (state, name) => {
  let newState = JSON.stringify(state.map((food) =>
    food.name === name
      ? {
          ...food,
          num: food.num + 1,
        }
      : food
  ));
  localStorage["Chart"] = newState;
  return JSON.parse(localStorage.getItem("Chart"));
};

const decrementFood = (state, name) => {
  let newState = JSON.stringify(state.map((food) =>
    food.name === name && food.num > 1
      ? {
          ...food,
          num: food.num - 1,
        }
      : food
  ));
  localStorage["Chart"] = newState;
  return JSON.parse(localStorage.getItem("Chart"));
};

const removeFood = (state, name) => {
  let newState = JSON.stringify(state.filter((food) => food.name !== name));
  localStorage["Chart"] = newState;
  return JSON.parse(localStorage.getItem("Chart")); 
};

export const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOOD:
      return setStateChart(state, action.payload);

    case INCREMENT_FOOD:
      return incrementFood(state, action.payload.name);

    case DECREMENT_FOOD:
      return decrementFood(state, action.payload.name);

    case DELETE_FOOD:
      return removeFood(state, action.payload.name);

    default:
      return state;
  }
};
